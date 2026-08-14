import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormularioPublicacion from './FormularioPublicacion';

const PublicacionesTabla = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [publicacionEditando, setPublicacionEditando] = useState(null);

    const cargarPublicaciones = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/publicaciones');
            setPublicaciones(respuesta.data);
        } catch (error) {
            console.error('Error al cargar publicaciones:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => { cargarPublicaciones(); }, []);

    const manejarEditar = (publicacion) => {
        setPublicacionEditando(publicacion);
        setMostrarFormulario(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    // Nueva función para alternar Oculto/Visible
    const manejarCambioEstado = async (id, estadoActual) => {
        const nuevoEstado = estadoActual === 1 ? 0 : 1;
        try {
            await axios.put(`http://localhost:3001/api/publicaciones/${id}/estado`, { estado: nuevoEstado });
            cargarPublicaciones(); // Recargamos instantáneamente
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'No se pudo cambiar el estado de la publicación.', 'error');
        }
    };

    const manejarEliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Eliminar de la Base de Datos?',
            text: "Se borrará físicamente este artículo/video. Si solo quieres esconderlo, usa el botón de Ocultar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D3748', 
            cancelButtonColor: '#F687B3', 
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacion.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3001/api/publicaciones/${id}`);
                Swal.fire('¡Eliminada!', 'La publicación ha sido borrada.', 'success');
                cargarPublicaciones(); 
            } catch (error) {
                Swal.fire('Error', 'No se pudo eliminar la publicación.', 'error');
            }
        }
    };

    if (cargando) return <p className="text-center text-miderma-purple font-bold">Cargando publicaciones...</p>;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-miderma-dark">Blog y Publicaciones</h2>
                <button 
                    onClick={() => {
                        setPublicacionEditando(null); 
                        setMostrarFormulario(!mostrarFormulario);
                    }}
                    className="bg-miderma-pink text-miderma-dark font-bold px-6 py-3 rounded-lg hover:bg-miderma-purple hover:text-white transition-colors shadow-md"
                >
                    {mostrarFormulario ? '❌ Cancelar' : '➕ Nueva Publicación'}
                </button>
            </div>

            {mostrarFormulario && (
                <div className="mb-10 animate-fade-in-down">
                    <FormularioPublicacion 
                        publicacionAEditar={publicacionEditando}
                        onCancelarEdicion={() => {
                            setPublicacionEditando(null);
                            setMostrarFormulario(false);
                        }}
                        onPublicacionAgregada={() => {
                            cargarPublicaciones();
                            setPublicacionEditando(null);
                            setMostrarFormulario(false);
                        }} 
                    />
                </div>
            )}
            
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg border-t-4 border-miderma-pink">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-miderma-light text-miderma-dark border-b-2 border-miderma-gray whitespace-nowrap">
                            <th className="p-4 font-bold">ID</th>
                            <th className="p-4 font-bold">Media</th>
                            <th className="p-4 font-bold">Título</th>
                            <th className="p-4 font-bold">Formato</th>
                            <th className="p-4 font-bold text-center">Estado</th>
                            <th className="p-4 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicaciones.map(pub => (
                            <tr key={pub.id} className={`border-b transition-colors ${pub.estado === 0 ? 'bg-gray-100 opacity-75' : 'hover:bg-gray-50'}`}>
                                <td className="p-4 text-miderma-purple font-semibold">#{pub.id}</td>
                                
                                <td className="p-4">
                                    {pub.tipo_publicacion === 'video' ? (
                                        <a href={pub.url_media} target="_blank" rel="noreferrer" title="Ver enlace">
                                            <div className="h-12 w-16 bg-red-100 text-red-600 rounded-md flex items-center justify-center text-xl hover:bg-red-200 transition shadow">
                                                ▶️
                                            </div>
                                        </a>
                                    ) : pub.url_media ? (
                                        <img src={pub.url_media} alt={pub.titulo} className="h-12 w-16 object-cover rounded-md border border-miderma-gray shadow-sm" />
                                    ) : (
                                        <div className="h-12 w-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400">Sin media</div>
                                    )}
                                </td>

                                <td className="p-4 font-bold text-miderma-dark min-w-[200px]">{pub.titulo}</td>
                                <td className="p-4">
                                    {pub.tipo_publicacion === 'video' ? (
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold text-xs uppercase tracking-wider">Video</span>
                                    ) : (
                                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold text-xs uppercase tracking-wider">Blog</span>
                                    )}
                                </td>
                                
                                {/* NUEVA COLUMNA ESTADO */}
                                <td className="p-4 text-center">
                                    {pub.estado === 1 ? (
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">🟢 Visible</span>
                                    ) : (
                                        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">🚫 Oculto</span>
                                    )}
                                </td>

                                <td className="p-4 text-center">
                                    <div className="flex gap-2 justify-center flex-wrap">
                                        
                                        {/* Botón rápido de Ocultar/Mostrar */}
                                        <button 
                                            onClick={() => manejarCambioEstado(pub.id, pub.estado)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-semibold text-white transition-colors flex-1 ${pub.estado === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
                                        >
                                            {pub.estado === 1 ? 'Ocultar' : 'Mostrar'}
                                        </button>

                                        <button onClick={() => manejarEditar(pub)} className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex-1">
                                            Editar
                                        </button>
                                        
                                        <button onClick={() => manejarEliminar(pub.id)} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors flex-1">
                                            Borrar
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                        {publicaciones.length === 0 && (
                            <tr>
                                <td colSpan="6" className="p-8 text-center text-miderma-gray">No hay publicaciones registradas.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PublicacionesTabla;