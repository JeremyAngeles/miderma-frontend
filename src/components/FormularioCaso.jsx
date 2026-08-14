import { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioCaso = ({ onCasoAgregado, casoAEditar, onCancelarEdicion }) => {
    const [nombreCaso, setNombreCaso] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [visible, setVisible] = useState(true);

    // Estados para las dos imágenes a subir
    const [imagenAntes, setImagenAntes] = useState(null);
    const [imagenDespues, setImagenDespues] = useState(null);

    // Estados para las imágenes que ya están en base de datos (modo edición)
    const [urlAntesActual, setUrlAntesActual] = useState('');
    const [urlDespuesActual, setUrlDespuesActual] = useState('');
    
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (casoAEditar) {
            setNombreCaso(casoAEditar.nombre_caso);
            setDescripcion(casoAEditar.descripcion);
            setVisible(casoAEditar.estado === 1);
            setUrlAntesActual(casoAEditar.url_imagen_antes || '');
            setUrlDespuesActual(casoAEditar.url_imagen_despues || '');
        } else {
            limpiarFormulario();
        }
    }, [casoAEditar]);

    const limpiarFormulario = () => {
        setNombreCaso(''); setDescripcion(''); setVisible(true);
        setImagenAntes(null); setImagenDespues(null);
        setUrlAntesActual(''); setUrlDespuesActual('');
    };

    // Función auxiliar para subir una imagen a Cloudinary
    const subirACloudinary = async (archivo) => {
        const formData = new FormData();
        formData.append('file', archivo);
        formData.append('upload_preset', 'p2jcw6yt'); 
        const respuesta = await axios.post(
            'https://api.cloudinary.com/v1_1/zd0oqmdc/image/upload',
            formData
        );
        return respuesta.data.secure_url;
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);

        try {
            let url_final_antes = urlAntesActual;
            let url_final_despues = urlDespuesActual;

            // Subir "Antes" si se seleccionó nueva foto
            if (imagenAntes) {
                url_final_antes = await subirACloudinary(imagenAntes);
            }
            
            // Subir "Después" si se seleccionó nueva foto
            if (imagenDespues) {
                url_final_despues = await subirACloudinary(imagenDespues);
            }

            const datosCaso = {
                nombre_caso: nombreCaso,
                descripcion,
                url_imagen_antes: url_final_antes,
                url_imagen_despues: url_final_despues,
                estado: visible ? 1 : 0
            };

            if (casoAEditar) {
                await axios.put(`http://localhost:3001/api/resultados/${casoAEditar.id}`, datosCaso);
                alert('¡Caso Clínico actualizado con éxito!');
            } else {
                await axios.post('http://localhost:3001/api/resultados', datosCaso);
                alert('¡Caso Clínico creado con éxito!');
            }
            
            limpiarFormulario();
            if (onCasoAgregado) onCasoAgregado();

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al guardar el caso clínico.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b border-miderma-light pb-4">
                <h2 className="text-2xl font-bold text-miderma-dark">
                    {casoAEditar ? '✏️ Editar Caso Clínico' : 'Registrar Nuevo Caso'}
                </h2>
                {casoAEditar && (
                    <button type="button" onClick={onCancelarEdicion} className="text-red-500 font-bold hover:underline">
                        Cancelar Edición
                    </button>
                )}
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                    <label className="flex items-center cursor-pointer space-x-3">
                        <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} className="w-5 h-5 text-miderma-pink rounded border-gray-300 focus:ring-miderma-pink" />
                        <span className="text-miderma-dark font-bold">Visible al Público</span>
                    </label>
                </div>

                <div>
                    <label className="block text-miderma-purple font-semibold mb-2">Título / Nombre del Tratamiento</label>
                    <input type="text" required value={nombreCaso} onChange={(e) => setNombreCaso(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder="Ej. Tratamiento Acné Severo - Paciente A" />
                </div>

                <div>
                    <label className="block text-miderma-purple font-semibold mb-2">Descripción de los Resultados</label>
                    <textarea required rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder="Ej. Resultados tras 4 meses de tratamiento con peelings y rutina domiciliaria..."></textarea>
                </div>

                {/* ZONA DE IMÁGENES: ANTES Y DESPUÉS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ANTES */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                        <label className="block text-gray-700 font-bold mb-2">📷 Foto ANTES</label>
                        {urlAntesActual && !imagenAntes && (
                            <div className="mb-3">
                                <img src={urlAntesActual} alt="Antes" className="h-32 w-full object-cover rounded-md border shadow-sm" />
                            </div>
                        )}
                        <input type="file" accept="image/*" onChange={(e) => setImagenAntes(e.target.files[0])} required={!urlAntesActual} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 cursor-pointer" />
                    </div>

                    {/* DESPUÉS */}
                    <div className="bg-miderma-light p-4 rounded-lg border border-dashed border-miderma-pink">
                        <label className="block text-miderma-dark font-bold mb-2">✨ Foto DESPUÉS</label>
                        {urlDespuesActual && !imagenDespues && (
                            <div className="mb-3">
                                <img src={urlDespuesActual} alt="Después" className="h-32 w-full object-cover rounded-md border shadow-sm" />
                            </div>
                        )}
                        <input type="file" accept="image/*" onChange={(e) => setImagenDespues(e.target.files[0])} required={!urlDespuesActual} className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-miderma-pink file:text-miderma-dark hover:file:bg-miderma-purple hover:file:text-white cursor-pointer" />
                    </div>
                </div>

                <button type="submit" disabled={cargando} className={`w-full py-4 px-4 rounded-lg font-bold text-white text-lg transition-all shadow-md ${cargando ? 'bg-miderma-gray cursor-not-allowed' : 'bg-miderma-dark hover:bg-miderma-purple'}`}>
                    {cargando ? 'Guardando Imágenes...' : (casoAEditar ? 'Guardar Cambios' : 'Registrar Caso Clínico')}
                </button>
            </form>
        </div>
    );
};

export default FormularioCaso;