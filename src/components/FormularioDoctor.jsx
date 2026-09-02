import { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioDoctor = ({ onDoctorAgregado, doctorAEditar, onCancelarEdicion }) => {
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('F'); // F o M
    const [especialidad, setEspecialidad] = useState('');
    const [cmp, setCmp] = useState('');
    const [rne, setRne] = useState('');
    const [tituloProfesional, setTituloProfesional] = useState('');
    const [postGrados, setPostGrados] = useState(['']); // Arreglo para múltiples post-grados
    const [imagen, setImagen] = useState(null);
    
    // Para guardar la foto actual si estamos editando
    const [urlImagenActual, setUrlImagenActual] = useState('');
    const [cargando, setCargando] = useState(false);

    // Rellenar datos si estamos en modo edición
    useEffect(() => {
        if (doctorAEditar) {
            setNombre(doctorAEditar.nombre || '');
            setGenero(doctorAEditar.genero || 'F');
            setEspecialidad(doctorAEditar.especialidad || '');
            setCmp(doctorAEditar.cmp || '');
            setRne(doctorAEditar.rne || '');
            setTituloProfesional(doctorAEditar.titulo_profesional || '');
            
            // Asegurarnos de que post_grados sea un arreglo
            if (Array.isArray(doctorAEditar.post_grados) && doctorAEditar.post_grados.length > 0) {
                setPostGrados(doctorAEditar.post_grados);
            } else if (typeof doctorAEditar.post_grados === 'string') {
                try {
                    const parsed = JSON.parse(doctorAEditar.post_grados);
                    setPostGrados(Array.isArray(parsed) && parsed.length > 0 ? parsed : ['']);
                } catch (e) {
                    setPostGrados(['']);
                }
            } else {
                setPostGrados(['']);
            }
            
            setUrlImagenActual(doctorAEditar.url_foto || '');
        } else {
            limpiarFormulario();
        }
    }, [doctorAEditar]);

    const limpiarFormulario = () => {
        setNombre(''); setGenero('F'); setEspecialidad(''); setCmp(''); setRne(''); 
        setTituloProfesional(''); setPostGrados(['']); setImagen(null); setUrlImagenActual('');
    };

    // Manejar cambios en un input específico de post-grado
    const handlePostGradoChange = (index, value) => {
        const nuevosPostGrados = [...postGrados];
        nuevosPostGrados[index] = value;
        setPostGrados(nuevosPostGrados);
    };

    // Agregar un nuevo input vacío para otro post-grado
    const agregarPostGrado = () => {
        setPostGrados([...postGrados, '']);
    };

    // Eliminar un input de post-grado
    const eliminarPostGrado = (index) => {
        const nuevosPostGrados = postGrados.filter((_, i) => i !== index);
        setPostGrados(nuevosPostGrados.length > 0 ? nuevosPostGrados : ['']);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);

        try {
            let url_foto = urlImagenActual;

            if (imagen) {
                const formData = new FormData();
                formData.append('file', imagen);
                formData.append('upload_preset', 'p2jcw6yt'); 
                const respuestaCloudinary = await axios.post(
                    'https://api.cloudinary.com/v1_1/zd0oqmdc/image/upload',
                    formData
                );
                url_foto = respuestaCloudinary.data.secure_url;
            }

            // Filtrar post-grados vacíos antes de enviar
            const postGradosValidos = postGrados.filter(pg => pg.trim() !== '');

            const datosDoctor = {
                nombre,
                genero,
                especialidad,
                cmp,
                rne,
                titulo_profesional: tituloProfesional,
                post_grados: postGradosValidos,
                url_foto
            };

            if (doctorAEditar) {
                await axios.put(`http://localhost:3001/api/doctores/${doctorAEditar.id}`, datosDoctor);
                alert('¡Doctor/a actualizado(a) con éxito!');
            } else {
                await axios.post('http://localhost:3001/api/doctores', datosDoctor);
                alert('¡Doctor/a registrado(a) con éxito!');
            }
            
            limpiarFormulario();
            if (onDoctorAgregado) onDoctorAgregado();

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al guardar el doctor/a.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink w-full max-w-4xl mx-auto mb-10">
            <div className="flex justify-between items-center mb-6 border-b border-miderma-light pb-4">
                <h2 className="text-2xl font-bold text-miderma-dark">
                    {doctorAEditar ? '✏️ Editar Doctor/a' : 'Registrar Nuevo(a) Doctor/a'}
                </h2>
                {doctorAEditar && (
                    <button type="button" onClick={onCancelarEdicion} className="text-red-500 font-bold hover:underline">
                        Cancelar Edición
                    </button>
                )}
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">
                
                {/* GENERO Y NOMBRE */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                        <label className="block text-miderma-purple font-semibold mb-2">Trato (Género)</label>
                        <select required value={genero} onChange={(e) => setGenero(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink">
                            <option value="F">Dra. (Mujer)</option>
                            <option value="M">Dr. (Hombre)</option>
                        </select>
                    </div>
                    <div className="md:col-span-3">
                        <label className="block text-miderma-purple font-semibold mb-2">Nombre Completo</label>
                        <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Patricia Cardoza Castillo" className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                </div>

                {/* ESPECIALIDAD Y CREDENCIALES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Especialidad Principal</label>
                        <input type="text" required value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} placeholder="Ej: Dermatología Clínica y Estética" className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">CMP (Colegiatura)</label>
                        <input type="text" required value={cmp} onChange={(e) => setCmp(e.target.value)} placeholder="Ej: CMP 45210" className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">RNE (Registro Especialista)</label>
                        <input type="text" required value={rne} onChange={(e) => setRne(e.target.value)} placeholder="Ej: RNE 18450" className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                </div>

                {/* TITULO PROFESIONAL */}
                <div>
                    <label className="block text-miderma-purple font-semibold mb-2">Título Profesional (Descripción de su formación)</label>
                    <textarea required rows="3" value={tituloProfesional} onChange={(e) => setTituloProfesional(e.target.value)} placeholder="Ej: Médico-cirujano especialista en Dermatología con formación integral en tecnologías láser..." className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink"></textarea>
                </div>

                {/* MULTIPLES POST-GRADOS (JSON) */}
                <div className="bg-[#FDF6F4] p-4 rounded-xl border border-miderma-pink/30">
                    <label className="block text-miderma-dark font-bold mb-3">Post-Grados y Especializaciones</label>
                    
                    {postGrados.map((postGrado, index) => (
                        <div key={index} className="flex items-start gap-3 mb-3">
                            <textarea 
                                rows="2" 
                                value={postGrado} 
                                onChange={(e) => handlePostGradoChange(index, e.target.value)} 
                                placeholder="Ej: Máster en Dermatología Estética Avanzada..." 
                                className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink text-sm"
                            ></textarea>
                            
                            <button type="button" onClick={() => eliminarPostGrado(index)} className="bg-red-100 text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-lg transition-colors mt-1" title="Eliminar Post-Grado">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                        </div>
                    ))}
                    
                    <button type="button" onClick={agregarPostGrado} className="text-miderma-pink font-bold flex items-center gap-1 hover:text-miderma-purple transition-colors mt-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                        Añadir otro Post-Grado
                    </button>
                </div>

                {/* IMAGEN / FOTO DEL DOCTOR */}
                <div className="bg-miderma-light p-4 rounded-lg border border-dashed border-miderma-gray">
                    <label className="block text-miderma-dark font-bold mb-2">
                        Fotografía Profesional {doctorAEditar && '(Sube una nueva solo si quieres cambiarla)'}
                    </label>
                    {urlImagenActual && !imagen && (
                        <div className="mb-3">
                            <p className="text-sm text-gray-500 mb-1">Imagen actual:</p>
                            <img src={urlImagenActual} alt="Actual" className="h-24 w-24 object-cover rounded-md border" />
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files[0])} className="w-full text-miderma-purple file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-miderma-pink file:text-miderma-dark hover:file:bg-miderma-purple hover:file:text-white transition-colors cursor-pointer" />
                </div>

                <button type="submit" disabled={cargando} className={`w-full py-4 px-4 rounded-lg font-bold text-white text-lg transition-all shadow-md ${cargando ? 'bg-miderma-gray cursor-not-allowed' : 'bg-miderma-dark hover:bg-miderma-purple'}`}>
                    {cargando ? 'Guardando...' : (doctorAEditar ? 'Guardar Cambios' : 'Registrar Doctor/a')}
                </button>
            </form>
        </div>
    );
};

export default FormularioDoctor;