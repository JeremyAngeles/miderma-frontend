import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormularioProducto from './FormularioProducto';

const ProductosTabla = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [productoEditando, setProductoEditando] = useState(null);

    // Estados para Inventario
    const [modalAbierto, setModalAbierto] = useState(false);
    const [productoActivo, setProductoActivo] = useState(null);
    const [historial, setHistorial] = useState([]);
    const [tipoMovimiento, setTipoMovimiento] = useState('salida'); 
    const [cantidad, setCantidad] = useState('');
    const [motivo, setMotivo] = useState('');
    const [guardandoMovimiento, setGuardandoMovimiento] = useState(false);

    const cargarProductos = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/api/productos');
            setProductos(respuesta.data);
        } catch (error) {
            console.error('Error al cargar productos:', error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => { cargarProductos(); }, []);

    // ==========================================
    // FUNCIONES DE EDICIÓN Y ELIMINACIÓN
    // ==========================================
    const manejarEditar = (producto) => {
        setProductoEditando(producto);
        setMostrarFormulario(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const manejarEliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: '¿Estás seguro?',
            text: "El producto desaparecerá del catálogo.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D3748', // miderma-dark
            cancelButtonColor: '#F687B3', // miderma-pink
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (confirmacion.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3001/api/productos/${id}`);
                
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El producto ha sido borrado correctamente.',
                    icon: 'success',
                    confirmButtonColor: '#2D3748'
                });
                
                cargarProductos(); 
            } catch (error) {
                console.error("Error al eliminar", error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al intentar eliminar el producto.',
                    icon: 'error',
                    confirmButtonColor: '#2D3748'
                });
            }
        }
    };

    // ==========================================
    // FUNCIONES DE INVENTARIO
    // ==========================================
    const abrirModalInventario = async (producto) => {
        setProductoActivo(producto);
        setModalAbierto(true);
        try {
            const respuesta = await axios.get(`http://localhost:3001/api/productos/${producto.id}/historial`);
            setHistorial(respuesta.data);
        } catch (error) {
            console.error('Error al cargar historial:', error);
        }
    };

    const manejarMovimiento = async (e) => {
        e.preventDefault();
        setGuardandoMovimiento(true);
        try {
            await axios.post(`http://localhost:3001/api/productos/${productoActivo.id}/movimientos`, {
                tipo_movimiento: tipoMovimiento, cantidad: Number(cantidad), motivo, usuario: 'admin'
            });
            await cargarProductos();
            const resHistorial = await axios.get(`http://localhost:3001/api/productos/${productoActivo.id}/historial`);
            setHistorial(resHistorial.data);
            setCantidad(''); setMotivo('');
            
            Swal.fire({
                title: '¡Éxito!',
                text: 'Movimiento registrado correctamente.',
                icon: 'success',
                confirmButtonColor: '#2D3748',
                timer: 1500,
                showConfirmButton: false
            });
            
        } catch (error) {
            console.error('Error al registrar movimiento:', error);
            Swal.fire('Error', 'No se pudo registrar el inventario', 'error');
        } finally {
            setGuardandoMovimiento(false);
        }
    };

    if (cargando) return <p className="text-center font-bold text-miderma-purple">Cargando productos...</p>;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-miderma-dark">Catálogo de Productos</h2>
                <button 
                    onClick={() => {
                        setProductoEditando(null);
                        setMostrarFormulario(!mostrarFormulario);
                    }}
                    className="bg-miderma-pink text-miderma-dark font-bold px-6 py-3 rounded-lg hover:bg-miderma-purple hover:text-white transition-colors shadow-md"
                >
                    {mostrarFormulario ? '❌ Cancelar' : '➕ Nuevo Producto'}
                </button>
            </div>

            {mostrarFormulario && (
                <div className="mb-10 animate-fade-in-down">
                    <FormularioProducto 
                        productoAEditar={productoEditando}
                        onCancelarEdicion={() => {
                            setProductoEditando(null);
                            setMostrarFormulario(false);
                        }}
                        onProductoAgregado={() => {
                            cargarProductos();
                            setProductoEditando(null);
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
                            <th className="p-4 font-bold">Precio</th>
                            <th className="p-4 font-bold">Stock</th>
                            <th className="p-4 font-bold text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(prod => (
                            <tr key={prod.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-miderma-purple font-semibold">#{prod.id}</td>
                                <td className="p-4">
                                    {prod.url_imagen_cloudinary ? <img src={prod.url_imagen_cloudinary} className="h-12 w-12 object-cover rounded-md border border-miderma-gray" /> : <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-xs">Sin foto</div>}
                                </td>
                                <td className="p-4 font-bold text-miderma-dark min-w-[150px]">{prod.nombre}</td>
                                <td className="p-4 text-miderma-purple">{prod.categoria}</td>
                                <td className="p-4 text-green-600 font-bold whitespace-nowrap">S/ {prod.precio}</td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${prod.stock > 5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {prod.stock} unids.
                                    </span>
                                </td>
                                <td className="p-4 text-center min-w-[140px]">
                                    <div className="flex flex-col gap-2 items-center">
                                        <button onClick={() => abrirModalInventario(prod)} className="bg-miderma-dark text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-miderma-purple w-full transition-colors">
                                            Inventario
                                        </button>
                                        <div className="flex gap-2 w-full justify-center">
                                            <button onClick={() => manejarEditar(prod)} className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-600 flex-1 transition-colors">
                                                Editar
                                            </button>
                                            <button onClick={() => manejarEliminar(prod.id)} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-600 flex-1 transition-colors">
                                                Borrar
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {productos.length === 0 && (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-miderma-gray">No hay productos registrados.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* MODAL INVENTARIO */}
            {modalAbierto && productoActivo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="bg-miderma-dark p-6 flex justify-between items-center text-white">
                            <div>
                                <h3 className="text-xl font-bold">Gestión de Inventario</h3>
                                <p className="text-miderma-pink">{productoActivo.nombre} - Stock actual: {productoActivo.stock}</p>
                            </div>
                            <button onClick={() => setModalAbierto(false)} className="text-white hover:text-miderma-pink font-bold text-xl">X</button>
                        </div>
                        <div className="p-6 flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-miderma-light p-6 rounded-xl border border-miderma-gray">
                                <h4 className="font-bold text-miderma-dark mb-4 border-b pb-2">Registrar Movimiento</h4>
                                <form onSubmit={manejarMovimiento} className="space-y-4">
                                    <select value={tipoMovimiento} onChange={(e) => setTipoMovimiento(e.target.value)} className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-miderma-pink">
                                        <option value="salida">Venta (-)</option>
                                        <option value="entrada">Ingreso (+)</option>
                                    </select>
                                    <input type="number" required min="1" value={cantidad} onChange={(e) => setCantidad(e.target.value)} className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-miderma-pink" placeholder="Cantidad (Ej. 2)" />
                                    <input type="text" required value={motivo} onChange={(e) => setMotivo(e.target.value)} className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-miderma-pink" placeholder="Motivo (Ej. Venta)" />
                                    <button type="submit" disabled={guardandoMovimiento} className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${tipoMovimiento === 'salida' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                                        {guardandoMovimiento ? 'Procesando...' : `Registrar ${tipoMovimiento === 'salida' ? 'Venta' : 'Ingreso'}`}
                                    </button>
                                </form>
                            </div>
                            <div>
                                <h4 className="font-bold text-miderma-dark mb-4 border-b pb-2">Historial</h4>
                                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                                    {historial.map(mov => (
                                        <div key={mov.id} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm">
                                            <div className="flex justify-between mb-1">
                                                <span className={`font-bold ${mov.tipo_movimiento === 'salida' ? 'text-red-500' : 'text-green-500'}`}>
                                                    {mov.tipo_movimiento === 'salida' ? 'SALIDA' : 'ENTRADA'}: {mov.cantidad} unids.
                                                </span>
                                                <span className="text-gray-400 text-xs">{new Date(mov.fecha_movimiento).toLocaleString()}</span>
                                            </div>
                                            <p className="text-miderma-dark">{mov.motivo}</p>
                                        </div>
                                    ))}
                                    {historial.length === 0 && <p className="text-gray-500 text-sm">Sin movimientos registrados.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductosTabla;