import { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioProducto = ({ onProductoAgregado, productoAEditar, onCancelarEdicion }) => {
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [beneficios, setBeneficios] = useState('');
    const [etiquetaDescuento, setEtiquetaDescuento] = useState('');
    const [imagen, setImagen] = useState(null);
    
    // Para guardar la foto actual si estamos editando
    const [urlImagenActual, setUrlImagenActual] = useState('');
    const [cargando, setCargando] = useState(false);

    // Rellenar datos si estamos en modo edición
    useEffect(() => {
        if (productoAEditar) {
            setNombre(productoAEditar.nombre || '');
            setMarca(productoAEditar.marca || '');
            setDescripcion(productoAEditar.descripcion || '');
            setPrecio(productoAEditar.precio || '');
            setStock(productoAEditar.stock || '');
            setCategoria(productoAEditar.categoria || '');
            setEspecialidad(productoAEditar.especialidad || '');
            setBeneficios(productoAEditar.beneficios || '');
            setEtiquetaDescuento(productoAEditar.etiqueta_descuento || '');
            setUrlImagenActual(productoAEditar.url_imagen_cloudinary || '');
        } else {
            limpiarFormulario();
        }
    }, [productoAEditar]);

    const limpiarFormulario = () => {
        setNombre(''); setMarca(''); setDescripcion(''); setPrecio(''); setStock(''); 
        setCategoria(''); setEspecialidad(''); setBeneficios(''); 
        setEtiquetaDescuento(''); setImagen(null); setUrlImagenActual('');
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);

        try {
            let url_imagen_cloudinary = urlImagenActual;

            if (imagen) {
                const formData = new FormData();
                formData.append('file', imagen);
                formData.append('upload_preset', 'p2jcw6yt'); 
                const respuestaCloudinary = await axios.post(
                    'https://api.cloudinary.com/v1_1/zd0oqmdc/image/upload',
                    formData
                );
                url_imagen_cloudinary = respuestaCloudinary.data.secure_url;
            }

            const datosProducto = {
                nombre,
                marca,
                descripcion,
                precio: Number(precio),
                stock: Number(stock),
                categoria,
                especialidad,
                beneficios,
                etiqueta_descuento: etiquetaDescuento,
                url_imagen_cloudinary
            };

            if (productoAEditar) {
                await axios.put(`http://localhost:3001/api/productos/${productoAEditar.id}`, datosProducto);
                alert('¡Producto actualizado con éxito!');
            } else {
                await axios.post('http://localhost:3001/api/productos', datosProducto);
                alert('¡Producto creado con éxito en Miderma!');
            }
            
            limpiarFormulario();
            if (onProductoAgregado) onProductoAgregado();

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al guardar el producto.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b border-miderma-light pb-4">
                <h2 className="text-2xl font-bold text-miderma-dark">
                    {productoAEditar ? '✏️ Editar Producto' : 'Registrar Nuevo Producto'}
                </h2>
                {productoAEditar && (
                    <button type="button" onClick={onCancelarEdicion} className="text-red-500 font-bold hover:underline">
                        Cancelar Edición
                    </button>
                )}
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Nombre</label>
                        <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Marca</label>
                        <input type="text" required value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Ej: La Roche-Posay, Isdin..." className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Categoría</label>
                        <input type="text" required value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Especialidad</label>
                        <input type="text" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Precio (S/)</label>
                        <input type="number" step="0.01" required value={precio} onChange={(e) => setPrecio(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Stock</label>
                        <input type="number" required value={stock} onChange={(e) => setStock(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Etiqueta Descuento</label>
                        <input type="text" value={etiquetaDescuento} onChange={(e) => setEtiquetaDescuento(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Descripción</label>
                        <textarea required rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink"></textarea>
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Beneficios</label>
                        <textarea rows="3" value={beneficios} onChange={(e) => setBeneficios(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink"></textarea>
                    </div>
                </div>

                <div className="bg-miderma-light p-4 rounded-lg border border-dashed border-miderma-gray">
                    <label className="block text-miderma-dark font-bold mb-2">
                        Fotografía {productoAEditar && '(Sube una nueva solo si quieres cambiarla)'}
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
                    {cargando ? 'Guardando...' : (productoAEditar ? 'Guardar Cambios' : 'Guardar Producto')}
                </button>
            </form>
        </div>
    );
};

export default FormularioProducto;