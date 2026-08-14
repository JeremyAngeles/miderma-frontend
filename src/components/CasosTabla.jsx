import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormularioCaso from './FormularioCaso';

const CasosTabla = () => {
    const [casos, setCasos] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [casoEditando, setCasoEditando] = useState(null);

    const cargarCasos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/resultados');
            setCasos(respuesta.data);
        } catch (error) {
            console.error('Error al cargar casos:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => { cargarCasos(); }, []);

    const manejarEditar = (caso) => {
        setCasoEditando(caso);
        setMostrarFormulario(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const manejarCambioEstado = async (id, estadoActual) => {
        const nuevoEstado = estadoActual === 1 ? 0 : 1;
        try {
            await axios.put(`http://localhost:3001/api/resultados/${id}/estado`, { estado: nuevoEstado });
            cargarCasos();
        } catch (error) {
            Swal.fire('Error', 'No se pudo cambiar el estado del caso.', 'error');
        }
    };

    const manejarEliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Eliminar de la Base de Datos?',
            text: "Se borrará físicamente este caso clínico.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D3748', 
            cancelButtonColor: '#F687B3', 
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacion.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3001/api/resultados/${id}`);
                Swal.fire('¡Eliminado!', 'El caso clínico ha sido borrado.', 'success');
                cargarCasos(); 
            } catch (error) {
                Swal.fire('Error', 'No se pudo eliminar el caso.', 'error');
            }
        }
    };

    if (cargando) return <p className="text-center font-bold text-miderma-purple">Cargando casos clínicos...</p>;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-miderma-dark">Resultados y Casos Clínicos</h2>
                <button 
                    onClick={() => {
                        setCasoEditando(null); 
                        setMostrarFormulario(!mostrarFormulario);
                    }}
                    className="bg-miderma-pink text-miderma-dark font-bold px-6 py-3 rounded-lg hover:bg-miderma-purple hover:text-white transition-colors shadow-md"
                >
                    {mostrarFormulario ? '❌ Cancelar' : '➕ Nuevo Caso'}
                </button>
            </div>

            {mostrarFormulario && (
                <div className="mb-10 animate-fade-in-down">
                    <FormularioCaso 
                        casoAEditar={casoEditando}
                        onCancelarEdicion={() => {
                            setCasoEditando(null);
                            setMostrarFormulario(false);
                        }}
                        onCasoAgregado={() => {
                            cargarCasos();
                            setCasoEditando(null);
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
                            <th className="p-4 font-bold">Antes & Después</th>
                            <th className="p-4 font-bold">Tratamiento</th>
                            <th className="p-4 font-bold text-center">Estado</th>
                            <th className="p-4 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {casos.map(caso => (
                            <tr key={caso.id} className={`border-b transition-colors ${caso.estado === 0 ? 'bg-gray-100 opacity-75' : 'hover:bg-gray-50'}`}>
                                <td className="p-4 text-miderma-purple font-semibold">#{caso.id}</td>
                                
                                {/* Mostramos las dos fotos con una flechita en medio */}
                                <td className="p-4 min-w-[150px]">
                                    <div className="flex items-center gap-1">
                                        {caso.url_imagen_antes ? <img src={caso.url_imagen_antes} alt="Antes" className="h-12 w-12 object-cover rounded shadow" /> : <div className="h-12 w-12 bg-gray-300 rounded text-[10px] flex items-center justify-center">Sin foto</div>}
                                        <span className="text-gray-400">▶</span>
                                        {caso.url_imagen_despues ? <img src={caso.url_imagen_despues} alt="Después" className="h-12 w-12 object-cover rounded shadow border-2 border-miderma-pink" /> : <div className="h-12 w-12 bg-gray-300 rounded text-[10px] flex items-center justify-center">Sin foto</div>}
                                    </div>
                                </td>

                                <td className="p-4 font-bold text-miderma-dark min-w-[200px]">{caso.nombre_caso}</td>
                                
                                <td className="p-4 text-center">
                                    {caso.estado === 1 ? (
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">🟢 Visible</span>
                                    ) : (
                                        <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">🚫 Oculto</span>
                                    )}
                                </td>

                                <td className="p-4 text-center">
                                    <div className="flex gap-2 justify-center flex-wrap">
                                        <button 
                                            onClick={() => manejarCambioEstado(caso.id, caso.estado)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-semibold text-white transition-colors flex-1 ${caso.estado === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
                                        >
                                            {caso.estado === 1 ? 'Ocultar' : 'Mostrar'}
                                        </button>
                                        <button onClick={() => manejarEditar(caso)} className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex-1">
                                            Editar
                                        </button>
                                        <button onClick={() => manejarEliminar(caso.id)} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors flex-1">
                                            Borrar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {casos.length === 0 && (
                            <tr>
                                <td colSpan="5" className="p-8 text-center text-miderma-gray">No hay casos clínicos registrados.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CasosTabla;