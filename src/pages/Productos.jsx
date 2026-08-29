import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// === DATOS FALSOS DE PRODUCTOS ===
export const productosMock = Array.from({ length: 36 }).map((_, i) => ({
    id: i + 1,
    nombre: i % 2 === 0 ? `Hidratante Facial Hyalix Emulgel ${i + 1}` : `Glicolic Crema Antimanchas ${i + 1}`,
    marca: i % 2 === 0 ? "La Roche-Posay" : i % 3 === 0 ? "Medihealth" : "Tizo",
    categoria: i % 4 === 0 ? "Limpiadores" : i % 5 === 0 ? "Tratamientos" : "Protectores Solares",
    especialidad: "Antiedad",
    precio: 85.57 + (i * 10),
    precio_oferta: i % 3 === 0 ? 59.90 : null,
    etiqueta_descuento: i % 3 === 0 ? "-30%" : null,
    stock: 10 + (i % 5),
    imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
}));

const Productos = () => {
    // ESTADOS DE FILTROS CATÁLOGO
    const [searchTerm, setSearchTerm] = useState('');
    const [categoriaSel, setCategoriaSel] = useState('Todas');
    const [marcaSel, setMarcaSel] = useState('Todas');
    const [precioRango, setPrecioRango] = useState(500); 
    const [cantidades, setCantidades] = useState({});

    // PAGINACIÓN Y MÓVIL
    const [currentPage, setCurrentPage] = useState(1);
    const [bottomSheet, setBottomSheet] = useState(null);
    
    // AHORA SON 12 PRODUCTOS POR PÁGINA (3 filas de 4 productos en PC)
    const itemsPerPage = 12; 

    const categorias = ['Todas', ...new Set(productosMock.map(p => p.categoria))];
    const marcas = ['Todas', ...new Set(productosMock.map(p => p.marca))];

    const incrementarCantidad = (id, stockMax) => {
        setCantidades(prev => ({ ...prev, [id]: Math.min((prev[id] || 1) + 1, stockMax) }));
    };

    const decrementarCantidad = (id) => {
        setCantidades(prev => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
    };

    const productosFiltrados = productosMock.filter(pub => {
        const coincideTexto = pub.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || pub.marca.toLowerCase().includes(searchTerm.toLowerCase());
        const coincideCat = categoriaSel === 'Todas' || pub.categoria === categoriaSel;
        const coincideMarca = marcaSel === 'Todas' || pub.marca === marcaSel;
        const coincidePrecio = (pub.precio_oferta || pub.precio) <= precioRango;
        return coincideTexto && coincideCat && coincideMarca && coincidePrecio;
    });

    useEffect(() => setCurrentPage(1), [searchTerm, categoriaSel, marcaSel, precioRango]);

    const totalPages = Math.ceil(productosFiltrados.length / itemsPerPage);
    const productosMostrados = productosFiltrados.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const cerrarBottomSheet = () => setBottomSheet(null);

    return (
        <div className="w-full bg-white min-h-screen flex flex-col pb-20 lg:pb-0">
            <Navbar />

            {/* ==========================================
                CATÁLOGO DE PRODUCTOS
            ========================================== */}
            <section className="w-full bg-[#FDF6F4] py-16 md:py-24">
                
                <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#291840] font-serif mb-6">
                            Catálogo de Productos
                        </h2>
                        <p className="text-base md:text-lg text-[#615573] leading-relaxed">
                            Aquí encontrarás un catálogo integral de productos dermatológicos que combina marcas reconocidas, tratamientos especializados y preparaciones magistrales elaboradas bajo indicación médica.
                        </p>
                    </div>
                </div>

                {/* BUSCADOR */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Buscar productos, marcas o tratamientos..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-6 pr-12 py-3.5 md:py-4 rounded-full border border-[#F2F2F2] bg-white focus:border-[#F2BDC7] focus:outline-none shadow-sm text-[#615573] font-medium transition-colors"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A92A6] hover:text-[#F2BDC7] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row gap-8">
                    
                    {/* SIDEBAR DE FILTROS (Solo PC) */}
                    <div className="hidden lg:flex w-1/5 flex-col gap-8">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#F2F2F2]">
                            
                            <h3 className="text-lg font-bold text-[#291840] mb-4 border-b border-[#F2F2F2] pb-3">Categorías</h3>
                            <div className="flex flex-col gap-2">
                                {categorias.map(cat => (
                                    <button 
                                        key={cat} 
                                        onClick={() => setCategoriaSel(cat)} 
                                        className={`text-left text-sm py-1.5 transition-colors duration-300 ${categoriaSel === cat ? 'font-bold text-[#F2BDC7]' : 'font-medium text-[#9A92A6] hover:text-[#F2BDC7]'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-lg font-bold text-[#291840] mt-8 mb-4 border-b border-[#F2F2F2] pb-3">Marcas</h3>
                            <div className="flex flex-col gap-2">
                                {marcas.map(marca => (
                                    <button 
                                        key={marca} 
                                        onClick={() => setMarcaSel(marca)} 
                                        className={`text-left text-sm py-1.5 transition-colors duration-300 ${marcaSel === marca ? 'font-bold text-[#F2BDC7]' : 'font-medium text-[#9A92A6] hover:text-[#F2BDC7]'}`}
                                    >
                                        {marca}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-lg font-bold text-[#291840] mt-8 mb-4 border-b border-[#F2F2F2] pb-3">Precio (Hasta S/{precioRango})</h3>
                            <div className="flex flex-col gap-4">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="500" 
                                    step="10"
                                    value={precioRango}
                                    onChange={(e) => setPrecioRango(Number(e.target.value))}
                                    className="w-full h-1.5 bg-[#F2F2F2] rounded-lg appearance-none cursor-pointer accent-[#F2BDC7]"
                                />
                                <div className="flex justify-between text-xs font-medium text-[#9A92A6]">
                                    <span>S/ 0</span>
                                    <span>S/ 500+</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* GRID DE PRODUCTOS */}
                    <div className="w-full lg:w-4/5 flex flex-col">
                        {productosMostrados.length > 0 ? (
                            <>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {productosMostrados.map(producto => {
                                        const cantActual = cantidades[producto.id] || 1;

                                        return (
                                            <div key={producto.id} className="bg-white rounded-2xl shadow-sm hover:shadow-[0_15px_35px_rgba(242,189,199,0.3)] transition-all duration-500 border border-gray-200 flex flex-col relative p-4 group">
                                                
                                                {/* Efecto de destello rosado suave en el fondo */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#F2BDC7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-2xl"></div>

                                                {/* ETIQUETA DESCUENTO (CORREGIDA: top-2 left-2 y z-30 para no quedar detrás de la imagen) */}
                                                {producto.etiqueta_descuento && (
                                                    <div className="absolute top-2 left-2 z-30 bg-[#E63946] text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-md tracking-wider">
                                                        {producto.etiqueta_descuento}
                                                    </div>
                                                )}

                                                {/* IMAGEN CON LÍNEA DIVISORIA */}
                                                <div className="w-full aspect-[4/5] sm:aspect-square relative flex items-center justify-center border-b border-gray-100 pb-4 mb-4 bg-white z-20">
                                                    <img 
                                                        src={producto.imagen} 
                                                        alt={producto.nombre} 
                                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                                                    />
                                                </div>

                                                {/* CONTENIDO CENTRADO Y FUENTE ORIGINAL */}
                                                <div className="flex flex-col flex-grow text-center relative z-20 bg-white">
                                                    
                                                    {/* Marca */}
                                                    <span className="text-[9px] sm:text-[10px] font-bold text-[#9A92A6] group-hover:text-[#F2BDC7] transition-colors uppercase tracking-widest mb-1.5">
                                                        {producto.marca}
                                                    </span>
                                                    
                                                    {/* Título original con fuente gruesa */}
                                                    <h3 className="text-xs sm:text-sm font-bold text-[#291840] group-hover:text-[#F2BDC7] transition-colors leading-snug mb-3 line-clamp-2 min-h-[32px] sm:min-h-[40px]">
                                                        {producto.nombre}
                                                    </h3>
                                                    
                                                    {/* PRECIOS CENTRADOS */}
<div className="mb-5 flex items-center justify-center gap-2">
    {producto.precio_oferta ? (
        <>
            <span className="text-[11px] sm:text-xs text-[#9A92A6] line-through font-medium">S/ {producto.precio.toFixed(2)}</span>
            <span className="text-base sm:text-lg font-bold text-[#E63946]">S/ {producto.precio_oferta.toFixed(2)}</span>
        </>
    ) : (
        <span className="text-base sm:text-lg font-bold text-[#291840]">S/ {producto.precio.toFixed(2)}</span>
    )}
</div>

                                                    {/* CONTROLES ALINEADOS EN HORIZONTAL (Misma fila) */}
                                                    <div className="mt-auto flex flex-col gap-2 w-full">
                                                        
                                                        {/* Stock */}
                                                        <div className="text-[9px] sm:text-[10px] font-medium text-[#9A92A6] text-left px-1">
                                                            Stock: <span className="font-bold text-[#615573]">{producto.stock} un.</span>
                                                        </div>

                                                        {/* Selector y Botón Añadir */}
                                                        <div className="flex flex-row items-center justify-between gap-1.5 sm:gap-2 w-full">
                                                            {/* Selector de cantidad (Izquierda) */}
                                                            <div className="flex items-center justify-between border border-[#F2F2F2] rounded-full px-1.5 sm:px-2 py-1 w-[40%] bg-white">
                                                                <button 
                                                                    onClick={() => decrementarCantidad(producto.id)}
                                                                    className="text-[#9A92A6] hover:text-[#F2BDC7] text-xs sm:text-sm font-bold transition-colors px-1"
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="font-bold text-[#291840] text-[10px] sm:text-xs">{cantActual}</span>
                                                                <button 
                                                                    onClick={() => incrementarCantidad(producto.id, producto.stock)}
                                                                    className="text-[#9A92A6] hover:text-[#F2BDC7] text-xs sm:text-sm font-bold transition-colors px-1"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>

                                                            {/* Botón Añadir (Derecha) */}
                                                            <button className="flex-grow flex items-center justify-center gap-1 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] text-[9px] sm:text-[10px] font-bold py-2 sm:py-2.5 rounded-full transition-colors duration-300 uppercase tracking-widest text-center shadow-sm">
                                                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                                                Añadir
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* PAGINACIÓN */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center items-center gap-2 mt-12">
                                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#F2F2F2] text-[#615573] hover:text-[#F2BDC7] disabled:opacity-50 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                                        </button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-full font-medium text-sm transition-all duration-300 ${currentPage === i + 1 ? 'bg-[#F2BDC7] text-white shadow-md' : 'bg-white border border-[#F2F2F2] text-[#9A92A6] hover:text-[#F2BDC7]'}`}>
                                                {i + 1}
                                            </button>
                                        ))}
                                        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#F2F2F2] text-[#615573] hover:text-[#F2BDC7] disabled:opacity-50 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-[#F2F2F2]">
                                <h3 className="text-xl text-[#291840] font-bold">No se encontraron productos.</h3>
                                <p className="text-[#9A92A6] mt-2">Intenta ajustar los filtros de precio o marca.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ==========================================
                BARRA INFERIOR FILTROS MÓVIL Y BOTTOM SHEETS
            ========================================== */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-40 flex justify-between items-center px-2 py-2 border-t border-[#F2F2F2] safe-area-pb">
                <button onClick={() => setBottomSheet('categorias')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'categorias' || categoriaSel !== 'Todas' ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <span className="text-[9px] font-medium uppercase tracking-wider">Categoría</span>
                </button>
                <button onClick={() => setBottomSheet('marcas')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'marcas' || marcaSel !== 'Todas' ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                    <span className="text-[9px] font-medium uppercase tracking-wider">Marcas</span>
                </button>
                <button onClick={() => setBottomSheet('precios')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'precios' || precioRango < 500 ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[9px] font-medium uppercase tracking-wider">Precios</span>
                </button>
            </div>

            {bottomSheet && (
                <>
                    <div className="lg:hidden fixed inset-0 bg-[#291840]/60 z-40 backdrop-blur-sm transition-opacity" onClick={cerrarBottomSheet}></div>
                    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white z-50 rounded-t-[2rem] shadow-2xl transform transition-transform animate-slide-up">
                        <div className="p-6 pb-10 max-h-[70vh] overflow-y-auto">
                            <div className="w-12 h-1 bg-[#F2F2F2] rounded-full mx-auto mb-6"></div>

                            <h3 className="text-xl font-bold text-[#291840] mb-4 text-center font-serif">
                                {bottomSheet === 'categorias' ? 'Categoría' : bottomSheet === 'marcas' ? 'Marca' : 'Ajustar Precio'}
                            </h3>
                            
                            <div className="flex flex-col gap-2">
                                {(bottomSheet === 'categorias' ? categorias : bottomSheet === 'marcas' ? marcas : []).map(opcion => {
                                    const isSelected = (bottomSheet === 'categorias' && categoriaSel === opcion) || (bottomSheet === 'marcas' && marcaSel === opcion);
                                    return (
                                        <button 
                                            key={opcion} 
                                            onClick={() => {
                                                if(bottomSheet === 'categorias') setCategoriaSel(opcion);
                                                if(bottomSheet === 'marcas') setMarcaSel(opcion);
                                                cerrarBottomSheet();
                                            }} 
                                            className={`py-3 px-4 rounded-xl text-sm transition-colors duration-300 ${isSelected ? 'font-bold bg-[#F2BDC7] text-white' : 'font-medium bg-[#F2F2F2] text-[#615573] hover:text-[#F2BDC7]'}`}
                                        >
                                            {opcion}
                                        </button>
                                    )
                                })}

                                {bottomSheet === 'precios' && (
                                    <div className="py-6 px-4">
                                        <p className="text-center font-bold text-[#291840] mb-6 text-xl">Hasta S/ {precioRango}</p>
                                        <input 
                                            type="range" 
                                            min="0" 
                                            max="500" 
                                            step="10"
                                            value={precioRango}
                                            onChange={(e) => setPrecioRango(Number(e.target.value))}
                                            className="w-full h-1.5 bg-[#F2F2F2] rounded-lg appearance-none cursor-pointer accent-[#F2BDC7]"
                                        />
                                        <div className="flex justify-between text-xs font-medium text-[#9A92A6] mt-3">
                                            <span>S/ 0</span>
                                            <span>S/ 500+</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button onClick={cerrarBottomSheet} className="w-full mt-6 py-3.5 rounded-xl border border-[#F2F2F2] text-[#9A92A6] font-bold hover:bg-[#F2F2F2] transition-colors">Cerrar</button>
                        </div>
                    </div>
                </>
            )}

            <style>{`
                @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
                .animate-slide-up { animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #F2BDC7; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            `}</style>
        </div>
    );
};

export default Productos;