import { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioPaquete = ({ onPaqueteAgregado, paqueteAEditar, onCancelarEdicion }) => {
    const [nombrePaquete, setNombrePaquete] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidadSesiones, setCantidadSesiones] = useState('');
    const [precioTotal, setPrecioTotal] = useState('');
    const [categoria, setCategoria] = useState('');
    const [masElegido, setMasElegido] = useState(false);
    const [imagen, setImagen] = useState(null);
    
    // Estado extra para guardar la URL de la foto que ya tenía el paquete
    const [urlImagenActual, setUrlImagenActual] = useState(''); 
    const [cargando, setCargando] = useState(false);

    // EL TRUCO: Si recibimos un paquete para editar, rellenamos el formulario
    useEffect(() => {
        if (paqueteAEditar) {
            setNombrePaquete(paqueteAEditar.nombre_paquete);
            setDescripcion(paqueteAEditar.descripcion);
            setCantidadSesiones(paqueteAEditar.cantidad_sesiones);
            setPrecioTotal(paqueteAEditar.precio_total);
            setCategoria(paqueteAEditar.categoria);
            // En MySQL los booleanos suelen venir como 1 o 0
            setMasElegido(paqueteAEditar.mas_elegido === 1 || paqueteAEditar.mas_elegido === true);
            setUrlImagenActual(paqueteAEditar.url_imagen || '');
        } else {
            limpiarFormulario();
        }
    }, [paqueteAEditar]);

    const limpiarFormulario = () => {
        setNombrePaquete(''); setDescripcion(''); setCantidadSesiones('');
        setPrecioTotal(''); setCategoria(''); setMasElegido(false); 
        setImagen(null); setUrlImagenActual('');
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);

        try {
            // Por defecto, usamos la imagen que ya estaba guardada
            let url_imagen = urlImagenActual;

            // Si el usuario seleccionó una foto NUEVA, la subimos a Cloudinary
            if (imagen) {
                const formData = new FormData();
                formData.append('file', imagen);
                formData.append('upload_preset', 'p2jcw6yt'); 
                const respuesta = await axios.post(
                    'https://api.cloudinary.com/v1_1/zd0oqmdc/image/upload',
                    formData
                );
                url_imagen = respuesta.data.secure_url;
            }

            const datosPaquete = {
                nombre_paquete: nombrePaquete,
                descripcion,
                cantidad_sesiones: Number(cantidadSesiones),
                precio_total: Number(precioTotal),
                url_imagen,
                categoria,
                mas_elegido: masElegido
            };

            // Si estamos en MODO EDICIÓN (PUT)
            if (paqueteAEditar) {
                await axios.put(`http://localhost:3001/api/paquetes/${paqueteAEditar.id}`, datosPaquete);
                alert('¡Paquete actualizado con éxito!');
            } 
            // Si estamos en MODO CREACIÓN (POST)
            else {
                await axios.post('http://localhost:3001/api/paquetes', datosPaquete);
                alert('¡Paquete creado con éxito!');
            }
            
            limpiarFormulario();
            if (onPaqueteAgregado) onPaqueteAgregado();

        } catch (error) {
            console.error('Error al guardar paquete:', error);
            alert('Hubo un error al guardar el paquete.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-miderma-dark">
                    {paqueteAEditar ? '✏️ Editar Paquete' : 'Registrar Nuevo Paquete'}
                </h2>
                {paqueteAEditar && (
                    <button type="button" onClick={onCancelarEdicion} className="text-red-500 font-bold hover:underline">
                        Cancelar Edición
                    </button>
                )}
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Nombre del Paquete</label>
                        <input type="text" required value={nombrePaquete} onChange={(e) => setNombrePaquete(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Categoría</label>
                        <input type="text" required value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Cantidad de Sesiones</label>
                        <input type="number" required min="1" value={cantidadSesiones} onChange={(e) => setCantidadSesiones(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Precio Total (S/)</label>
                        <input type="number" step="0.01" required value={precioTotal} onChange={(e) => setPrecioTotal(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div className="flex items-center pt-8">
                        <label className="flex items-center cursor-pointer space-x-3">
                            <input type="checkbox" checked={masElegido} onChange={(e) => setMasElegido(e.target.checked)} className="w-5 h-5 text-miderma-pink rounded border-gray-300 focus:ring-miderma-pink" />
                            <span className="text-miderma-dark font-bold">Marcar como "Más Elegido" (Destacado)</span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-miderma-purple font-semibold mb-2">Descripción</label>
                    <textarea required rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:ring-1 focus:ring-miderma-pink"></textarea>
                </div>

                <div className="bg-miderma-light p-4 rounded-lg border border-dashed border-miderma-gray">
                    <label className="block text-miderma-dark font-bold mb-2">
                        Fotografía {paqueteAEditar && '(Sube una nueva solo si quieres cambiarla)'}
                    </label>
                    {urlImagenActual && !imagen && (
                        <div className="mb-3">
                            <p className="text-sm text-gray-500 mb-1">Imagen actual:</p>
                            <img src={urlImagenActual} alt="Actual" className="h-20 rounded-md border" />
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files[0])} className="w-full text-miderma-purple file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-miderma-pink file:text-miderma-dark hover:file:bg-miderma-purple hover:file:text-white transition-colors cursor-pointer" />
                </div>

                <button type="submit" disabled={cargando} className={`w-full py-4 px-4 rounded-lg font-bold text-white text-lg transition-all shadow-md ${cargando ? 'bg-miderma-gray cursor-not-allowed' : 'bg-miderma-dark hover:bg-miderma-purple'}`}>
                    {cargando ? 'Guardando...' : (paqueteAEditar ? 'Guardar Cambios' : 'Crear Paquete')}
                </button>
            </form>
        </div>
    );
};

export default FormularioPaquete;