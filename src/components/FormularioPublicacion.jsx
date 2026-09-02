import { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioPublicacion = ({ onPublicacionAgregada, publicacionAEditar, onCancelarEdicion }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState(''); // NUEVO: Estado para categoría
    const [contenidoTexto, setContenidoTexto] = useState('');
    const [tipoPublicacion, setTipoPublicacion] = useState('blog'); 
    
    // Estado de visibilidad
    const [visible, setVisible] = useState(true);

    const [imagen, setImagen] = useState(null);
    const [linkVideo, setLinkVideo] = useState('');
    const [urlImagenActual, setUrlImagenActual] = useState('');
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (publicacionAEditar) {
            setTitulo(publicacionAEditar.titulo || '');
            setCategoria(publicacionAEditar.categoria || ''); // Cargar categoría si existe
            setContenidoTexto(publicacionAEditar.contenido_texto || '');
            setTipoPublicacion(publicacionAEditar.tipo_publicacion || 'blog');
            
            // Asignar el estado (1 es true, 0 es false)
            setVisible(publicacionAEditar.estado === 1);
            
            if (publicacionAEditar.tipo_publicacion === 'video') {
                setLinkVideo(publicacionAEditar.url_media || '');
                setUrlImagenActual('');
            } else {
                setUrlImagenActual(publicacionAEditar.url_media || '');
                setLinkVideo('');
            }
        } else {
            limpiarFormulario();
        }
    }, [publicacionAEditar]);

    const limpiarFormulario = () => {
        setTitulo(''); 
        setCategoria(''); // Limpiar categoría
        setContenidoTexto(''); 
        setTipoPublicacion('blog'); 
        setVisible(true); 
        setImagen(null); 
        setUrlImagenActual(''); 
        setLinkVideo('');
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);

        try {
            let url_media_final = '';

            if (tipoPublicacion === 'blog') {
                url_media_final = urlImagenActual;
                if (imagen) {
                    const formData = new FormData();
                    formData.append('file', imagen);
                    formData.append('upload_preset', 'p2jcw6yt'); 
                    const respuesta = await axios.post(
                        'https://api.cloudinary.com/v1_1/zd0oqmdc/image/upload',
                        formData
                    );
                    url_media_final = respuesta.data.secure_url;
                }
            } else if (tipoPublicacion === 'video') {
                url_media_final = linkVideo;
            }

            const datosPublicacion = {
                titulo,
                categoria, // Enviar categoría a la base de datos
                contenido_texto: contenidoTexto,
                tipo_publicacion: tipoPublicacion,
                url_media: url_media_final,
                estado: visible ? 1 : 0 // Convertimos boolean a número para MySQL
            };

            if (publicacionAEditar) {
                await axios.put(`http://localhost:3001/api/publicaciones/${publicacionAEditar.id}`, datosPublicacion);
                alert('¡Publicación actualizada con éxito!');
            } else {
                await axios.post('http://localhost:3001/api/publicaciones', datosPublicacion);
                alert('¡Publicación creada con éxito!');
            }
            
            limpiarFormulario();
            if (onPublicacionAgregada) onPublicacionAgregada();

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al guardar la publicación.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6 border-b border-miderma-light pb-4">
                <h2 className="text-2xl font-bold text-miderma-dark">
                    {publicacionAEditar ? '✏️ Editar Publicación' : 'Redactar Nueva Publicación'}
                </h2>
                {publicacionAEditar && (
                    <button type="button" onClick={onCancelarEdicion} className="text-red-500 font-bold hover:underline">
                        Cancelar Edición
                    </button>
                )}
            </div>

            <form onSubmit={manejarEnvio} className="space-y-6">
                
                {/* CHECKBOX DE VISIBILIDAD */}
                <div className="flex items-center p-4 bg-gray-50 rounded-lg border">
                    <label className="flex items-center cursor-pointer space-x-3">
                        <input 
                            type="checkbox" 
                            checked={visible} 
                            onChange={(e) => setVisible(e.target.checked)} 
                            className="w-5 h-5 text-miderma-pink rounded border-gray-300 focus:ring-miderma-pink" 
                        />
                        <span className="text-miderma-dark font-bold">Publicación Visible al Público</span>
                    </label>
                    <span className="ml-auto text-xs text-gray-500 italic">Desmarca para guardarlo como borrador oculto.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Título</label>
                        <input type="text" required value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder="Ej. Cuidados de la piel en verano" />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Categoría</label>
                        <input type="text" required value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder="Ej. Skincare, Acne..." />
                    </div>
                    <div>
                        <label className="block text-miderma-purple font-semibold mb-2">Formato de Publicación</label>
                        <select required value={tipoPublicacion} onChange={(e) => setTipoPublicacion(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink bg-miderma-light font-bold">
                            <option value="blog">📝 Blog (Fotos y texto)</option>
                            <option value="video">🎬 Video (YouTube / TikTok)</option>
                        </select>
                    </div>
                </div>

                <div className="bg-miderma-light p-4 rounded-lg border border-dashed border-miderma-gray transition-all">
                    {tipoPublicacion === 'blog' ? (
                        <div>
                            <label className="block text-miderma-dark font-bold mb-2">Imagen del Blog</label>
                            {urlImagenActual && !imagen && (
                                <div className="mb-3">
                                    <img src={urlImagenActual} alt="Actual" className="h-24 object-cover rounded-md border" />
                                </div>
                            )}
                            <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files[0])} className="w-full text-miderma-purple file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-miderma-pink file:text-miderma-dark hover:file:bg-miderma-purple hover:file:text-white cursor-pointer" />
                        </div>
                    ) : (
                        <div>
                            <label className="block text-miderma-dark font-bold mb-2">Enlace del Video (YouTube o TikTok)</label>
                            <input type="url" required value={linkVideo} onChange={(e) => setLinkVideo(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder="https://www.tiktok.com/@usuario/video/..." />
                            <p className="text-xs text-miderma-purple mt-2 font-semibold">🔗 Pega el enlace directo.</p>
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-miderma-purple font-semibold mb-2">Contenido / Descripción</label>
                    <textarea required rows="6" value={contenidoTexto} onChange={(e) => setContenidoTexto(e.target.value)} className="w-full px-4 py-2 border border-miderma-gray rounded-lg focus:outline-none focus:ring-1 focus:ring-miderma-pink" placeholder={tipoPublicacion === 'video' ? "Descripción para acompañar tu video..." : "Escribe aquí el artículo completo..."}></textarea>
                </div>

                <button type="submit" disabled={cargando} className={`w-full py-4 px-4 rounded-lg font-bold text-white text-lg transition-all shadow-md ${cargando ? 'bg-miderma-gray cursor-not-allowed' : 'bg-miderma-dark hover:bg-miderma-purple'}`}>
                    {cargando ? 'Guardando...' : (publicacionAEditar ? 'Guardar Cambios' : 'Publicar Contenido')}
                </button>
            </form>
        </div>
    );
};

export default FormularioPublicacion;