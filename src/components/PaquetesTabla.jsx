import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormularioPaquete from './FormularioPaquete';

const PaquetesTabla = () => {
    const [paquetes, setPaquetes] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [paqueteEditando, setPaqueteEditando] = useState(null);

    const cargarPaquetes = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/paquetes');
            setPaquetes(respuesta.data);
        } catch (error) {
            console.error('Error al cargar paquetes:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarPaquetes();
    }, []);

    const manejarEditar = (paquete) => {
        setPaqueteEditando(paquete);
        setMostrarFormulario(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const manejarEliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Eliminar Paquete?',
            text: "Se borrará este paquete promocional de tu sistema.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D3748', 
            cancelButtonColor: '#F687B3', 
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacion.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3001/api/paquetes/${id}`);
                
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El paquete ha sido borrado.',
                    icon: 'success',
                    confirmButtonColor: '#2D3748'
                });
                
                cargarPaquetes(); 
            } catch (error) {
                console.error("Error al eliminar", error);
                Swal.fire('Error', 'No se pudo eliminar el paquete.', 'error');
            }
        }
    };

    if (cargando) return <p className="text-center text-miderma-purple font-bold">Cargando paquetes...</p>;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-miderma-dark">Gestión de Paquetes</h2>
                <button 
                    onClick={() => {
                        setPaqueteEditando(null); 
                        setMostrarFormulario(!mostrarFormulario);
                    }}
                    className="bg-miderma-pink text-miderma-dark font-bold px-6 py-3 rounded-lg hover:bg-miderma-purple hover:text-white transition-colors shadow-md"
                >
                    {mostrarFormulario ? '❌ Cancelar' : '➕ Nuevo Paquete'}
                </button>
            </div>

            {mostrarFormulario && (
                <div className="mb-10 animate-fade-in-down">
                    <FormularioPaquete 
                        paqueteAEditar={paqueteEditando}
                        onCancelarEdicion={() => {
                            setPaqueteEditando(null);
                            setMostrarFormulario(false);
                        }}
                        onPaqueteAgregado={() => {
                            cargarPaquetes();
                            setPaqueteEditando(null);
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
                            <th className="p-4 font-bold">Foto</th>
                            <th className="p-4 font-bold">Nombre</th>
                            <th className="p-4 font-bold">Categoría</th>
                            <th className="p-4 font-bold">Sesiones</th>
                            <th className="p-4 font-bold">Precio Total</th>
                            <th className="p-4 font-bold text-center">Destacado</th>
                            <th className="p-4 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paquetes.map(paq => (
                            <tr key={paq.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-miderma-purple font-semibold">#{paq.id}</td>
                                <td className="p-4">
                                    {paq.url_imagen ? (
                                        <img src={paq.url_imagen} alt={paq.nombre_paquete} className="h-12 w-12 object-cover rounded-md border border-miderma-gray" />
                                    ) : (
                                        <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400">Sin foto</div>
                                    )}
                                </td>
                                <td className="p-4 font-bold text-miderma-dark min-w-[150px]">{paq.nombre_paquete}</td>
                                <td className="p-4 text-miderma-purple">{paq.categoria}</td>
                                <td className="p-4 font-semibold whitespace-nowrap">{paq.cantidad_sesiones} sesiones</td>
                                <td className="p-4 text-green-600 font-bold whitespace-nowrap">S/ {paq.precio_total}</td>
                                <td className="p-4 text-center">
                                    {paq.mas_elegido ? (
                                        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold">Sí ⭐</span>
                                    ) : (
                                        <span className="text-gray-400 text-xs">No</span>
                                    )}
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex gap-2 justify-center">
                                        <button 
                                            onClick={() => manejarEditar(paq)}
                                            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            onClick={() => manejarEliminar(paq.id)}
                                            className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {paquetes.length === 0 && (
                            <tr>
                                <td colSpan="8" className="p-8 text-center text-miderma-gray">No hay paquetes registrados.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaquetesTabla;