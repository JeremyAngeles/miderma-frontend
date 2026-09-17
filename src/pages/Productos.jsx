import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BrandsMarquee from '../components/BrandsMarquee';

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
    stock: i === 5 ? 0 : 10 + (i % 5), // El producto 5 estará agotado para prueba
    imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
}));

// ==========================================
// COMPONENTE TARJETA DE PRODUCTO (TAMAÑOS DEL CLIENTE, COLORES MIDERMA)
// ==========================================
const ProductoCard = ({ producto, index }) => {
    const [cantidad, setCantidad] = useState(1);
    
    // Cálculos de descuento
    const esDescuento30 = producto.id % 4 === 0; 
    const esDescuento20 = producto.id % 3 === 0 && !esDescuento30;
    const tieneDescuento = esDescuento30 || esDescuento20 || producto.precio_oferta;
    const porcentajeDescuento = esDescuento30 ? 30 : esDescuento20 ? 20 : 0;
    const precioOriginal = tieneDescuento && !producto.precio_oferta ? (parseFloat(producto.precio) / (1 - porcentajeDescuento / 100)).toFixed(2) : producto.precio;
    const precioFinal = producto.precio_oferta || producto.precio;

    const sumar = () => {
        if (cantidad < producto.stock) setCantidad(cantidad + 1);
    };

    const restar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const manejarAgregar = (e) => {
        e.preventDefault(); 
        if (producto.stock <= 0) return;
        alert(`Añadiste ${cantidad} de ${producto.nombre} al carrito`);
        setCantidad(1);
    };

    return (
        <article className="bg-white rounded-2xl border border-[#F2F2F2] shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(242,189,199,0.35)] hover:border-[#F2BDC7]/50 transition-all duration-500 overflow-hidden flex flex-col h-full w-full relative group">
            
            {/* ETIQUETAS FLOTANTES */}
            <div className="absolute top-2 left-2 right-2 z-10 flex justify-between items-center pointer-events-none">
                {tieneDescuento && producto.stock > 0 && (
                    <div className="bg-[#E63946] text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-full shadow-md uppercase font-Montserrat tracking-wider">
                        {producto.etiqueta_descuento || `-${porcentajeDescuento}%`}
                    </div>
                )}
                {producto.stock <= 0 && (
                    <div className="bg-[#9A92A6] text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase ml-auto font-Montserrat tracking-wider">
                        Agotado
                    </div>
                )}
            </div>

            {/* IMAGEN DEL PRODUCTO */}
            <Link to={`/producto/${producto.id}`} className="block flex-grow group/link">
                <div className="aspect-square overflow-hidden bg-white flex justify-center items-center p-3 md:p-6 relative">
                    <img 
                        src={producto.imagen} 
                        alt={producto.nombre} 
                        className={`max-w-full max-h-full object-contain mix-blend-multiply group-hover/link:scale-105 transition-transform duration-700 ${producto.stock <= 0 ? 'grayscale opacity-50' : ''}`}
                    />
                </div>
                
                <div className="px-3 pb-1 text-center font-Montserrat">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-[#9A92A6] font-bold mb-1 block group-hover/link:text-[#F2BDC7] transition-colors">
                        {producto.marca || 'Miderma'}
                    </span>
                    <h3 className="text-[11px] md:text-sm text-[#291840] mb-1 leading-tight line-clamp-2 font-medium h-7 md:h-10">
                        {producto.nombre}
                    </h3>
                </div>
            </Link>

            {/* ZONA DE PRECIOS Y ACCIONES */}
            <div className="p-3 pt-0 mt-auto text-center font-Montserrat">
                <div className="mb-2 flex flex-col items-center justify-center min-h-[32px]">
                    {tieneDescuento ? (
                        <div className="flex flex-col md:flex-row items-center gap-0.5 md:gap-2">
                            <span className="text-[#9A92A6] line-through text-[9px] md:text-xs">S/ {precioOriginal}</span>
                            <span className="text-sm md:text-lg font-bold text-[#E63946]">S/ {precioFinal.toFixed(2)}</span>
                        </div>
                    ) : (
                        <span className="text-sm md:text-lg font-bold text-[#291840]">S/ {precioFinal.toFixed(2)}</span>
                    )}
                </div>
                
                {producto.stock > 0 ? (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5">
                            {/* Contador compacto solo en tablet/PC para no saturar móvil */}
                            <div className="hidden md:flex items-center bg-[#FDF6F4]/50 border border-[#F2BDC7]/30 rounded-full px-1 py-1 w-20 justify-between">
                                <button onClick={restar} className="p-1 text-[#9A92A6] hover:text-[#F2BDC7] transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
                                </button>
                                <span className="font-bold text-xs text-[#291840]">{cantidad}</span>
                                <button onClick={sumar} className="p-1 text-[#9A92A6] hover:text-[#F2BDC7] transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                                </button>
                            </div>
                            
                            <button 
                                onClick={manejarAgregar}
                                className="flex-1 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-[#291840] text-white hover:bg-[#F2BDC7] hover:text-[#291840] shadow-sm active:scale-95"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden xs:block"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                {cantidad > 1 ? `(${cantidad}) OK` : 'Añadir'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to={`/producto/${producto.id}`} className="w-full py-2.5 rounded-full bg-[#F2F2F2] text-[#9A92A6] border border-transparent flex items-center justify-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-[#FDF6F4] transition-colors">
                        Ver más
                    </Link>
                )}
            </div>
        </article>
    );
};

// ==========================================
// COMPONENTE PRINCIPAL (Catálogo)
// ==========================================
const Productos = () => {
    // ESTADOS DE FILTROS CATÁLOGO
    const [searchTerm, setSearchTerm] = useState('');
    const [categoriaSel, setCategoriaSel] = useState('Todas');
    const [marcaSel, setMarcaSel] = useState('Todas');
    const [precioRango, setPrecioRango] = useState(500); 

    // PAGINACIÓN Y MÓVIL
    const [currentPage, setCurrentPage] = useState(1);
    const [bottomSheet, setBottomSheet] = useState(null);
    
    // AHORA SON 12 PRODUCTOS POR PÁGINA (3 filas de 4 productos en PC)
    const itemsPerPage = 12; 

    const categorias = ['Todas', ...new Set(productosMock.map(p => p.categoria))];
    const marcas = ['Todas', ...new Set(productosMock.map(p => p.marca))];

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

            {/* HERO DEL CATÁLOGO */}
            <div className="relative w-full pt-28 md:pt-40 pb-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-[#F2F2F2] bg-[#FDF6F4]">
                <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
                    <span className="text-[11px] md:text-xs font-bold text-[#F2BDC7] uppercase tracking-widest mb-3 block font-Montserrat">
                        Cuidado Dermatológico
                    </span>

                    <h1 className="text-2xl md:text-5xl font-normal text-[#291840] mb-4 font-GFSDidot uppercase">
                        Catálogo de Productos
                    </h1>                    
                    <p className="max-w-2xl text-[#615573] text-sm md:text-base leading-relaxed font-Montserrat mb-8">
                        Aquí encontrarás un catálogo integral de productos dermatológicos que combina marcas reconocidas, tratamientos especializados y preparaciones magistrales elaboradas bajo indicación médica.
                    </p>

                    <div className="relative w-full max-w-2xl mx-auto">
                        <input 
                            type="text" 
                            placeholder="Buscar productos o marcas..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-6 pr-12 py-4 rounded-full border-2 border-[#F2F2F2] bg-white focus:border-[#F2BDC7] focus:outline-none shadow-sm text-[#291840] font-medium transition-colors font-Montserrat"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A92A6] hover:text-[#F2BDC7] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
                        <BrandsMarquee />

            {/* ==========================================
                SECCIÓN PRINCIPAL (Filtros + Grilla)
            ========================================== */}
            <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-8 md:py-12 w-full flex flex-col lg:flex-row gap-8">
                
                {/* SIDEBAR DE FILTROS (Solo PC) */}
                <div className="hidden lg:flex w-1/5 flex-col gap-8 flex-shrink-0">
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#F2F2F2] sticky top-32">
                        
                        <h3 className="text-lg font-normal text-[#291840] mb-4 border-b border-[#F2F2F2] pb-3 font-GFSDidot uppercase">
                            Categorías
                        </h3>
                        <div className="flex flex-col gap-2 font-Montserrat">
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

                        <h3 className="text-lg font-normal text-[#291840] mt-8 mb-4 border-b border-[#F2F2F2] pb-3 font-GFSDidot uppercase">
                            Marcas
                        </h3>
                        <div className="flex flex-col gap-2 font-Montserrat max-h-48 overflow-y-auto custom-scrollbar pr-2">
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

                        <h3 className="text-lg font-normal text-[#291840] mt-8 mb-4 border-b border-[#F2F2F2] pb-3 font-GFSDidot uppercase">
                            Precio (Hasta S/{precioRango})
                        </h3>
                        <div className="flex flex-col gap-4 font-Montserrat">
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
                    
                    <div className="mb-6 flex justify-between items-center px-2 font-Montserrat">
                        <span className="text-sm text-[#615573] font-medium">Mostrando {productosFiltrados.length} productos</span>
                        {(searchTerm || categoriaSel !== 'Todas' || marcaSel !== 'Todas' || precioRango < 500) && (
                            <button 
                                onClick={() => { setSearchTerm(''); setCategoriaSel('Todas'); setMarcaSel('Todas'); setPrecioRango(500); }} 
                                className="text-sm text-[#F2BDC7] hover:text-[#291840] font-bold underline underline-offset-4 transition-colors"
                            >
                                Limpiar Filtros
                            </button>
                        )}
                    </div>

                    {productosMostrados.length > 0 ? (
                        <>
                            {/* DISEÑO DEL CLIENTE: 2 columnas en celular, 3 en tablet, 4 en PC */}
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                                {productosMostrados.map((producto, index) => (
                                    <ProductoCard key={producto.id} producto={producto} index={index} />
                                ))}
                            </div>

                            {/* PAGINACIÓN */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-12 font-Montserrat">
                                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#F2F2F2] text-[#291840] hover:bg-[#FDF6F4] disabled:opacity-50 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                                    </button>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${currentPage === i + 1 ? 'bg-[#F2BDC7] text-white shadow-md' : 'bg-white border border-[#F2F2F2] text-[#9A92A6] hover:text-[#F2BDC7] hover:border-[#F2BDC7]/50'}`}>
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#F2F2F2] text-[#291840] hover:bg-[#FDF6F4] disabled:opacity-50 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-24 bg-white rounded-[2rem] border border-[#F2F2F2] shadow-sm font-Montserrat">
                            <h3 className="text-xl text-[#291840] font-normal font-GFSDidot uppercase mb-2">No se encontraron productos</h3>
                            <p className="text-[#615573]">Intenta ajustar los filtros de precio, categoría o marca.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ==========================================
                BARRA INFERIOR FILTROS MÓVIL Y BOTTOM SHEETS
            ========================================== */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.08)] z-40 flex justify-between items-center px-4 py-2 border-t border-[#F2F2F2] safe-area-pb font-Montserrat">
                <button onClick={() => setBottomSheet('categorias')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'categorias' || categoriaSel !== 'Todas' ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Categoría</span>
                </button>
                <button onClick={() => setBottomSheet('marcas')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'marcas' || marcaSel !== 'Todas' ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Marcas</span>
                </button>
                <button onClick={() => setBottomSheet('precios')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'precios' || precioRango < 500 ? 'text-[#F2BDC7]' : 'text-[#9A92A6] hover:text-[#291840]'}`}>
                    <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Precios</span>
                </button>
            </div>

            {bottomSheet && (
                <>
                    <div className="lg:hidden fixed inset-0 bg-[#291840]/60 z-40 backdrop-blur-sm transition-opacity" onClick={cerrarBottomSheet}></div>
                    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white z-50 rounded-t-[2rem] shadow-2xl transform transition-transform animate-slide-up font-Montserrat">
                        <div className="p-6 pb-10 max-h-[75vh] overflow-y-auto">
                            <div className="w-12 h-1.5 bg-[#F2F2F2] rounded-full mx-auto mb-6"></div>

                            <h3 className="text-xl font-normal text-[#291840] mb-4 text-center font-GFSDidot uppercase">
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
                                            className={`py-3.5 px-4 rounded-xl text-sm transition-colors duration-300 flex justify-between items-center ${isSelected ? 'font-bold bg-[#F2BDC7] text-white' : 'font-medium bg-gray-50 text-[#615573] hover:bg-gray-100 hover:text-[#291840]'}`}
                                        >
                                            {opcion}
                                            {isSelected && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>}
                                        </button>
                                    )
                                })}

                                {bottomSheet === 'precios' && (
                                    <div className="py-6 px-4">
                                        <p className="text-center font-normal text-[#291840] mb-8 text-2xl font-GFSDidot">Hasta S/ {precioRango}</p>
                                        <input 
                                            type="range" 
                                            min="0" 
                                            max="500" 
                                            step="10"
                                            value={precioRango}
                                            onChange={(e) => setPrecioRango(Number(e.target.value))}
                                            className="w-full h-2 bg-[#F2F2F2] rounded-lg appearance-none cursor-pointer accent-[#F2BDC7]"
                                        />
                                        <div className="flex justify-between text-xs font-bold text-[#9A92A6] mt-4 uppercase tracking-widest">
                                            <span>S/ 0</span>
                                            <span>S/ 500+</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button onClick={cerrarBottomSheet} className="w-full mt-6 py-3.5 rounded-xl border-2 border-[#F2F2F2] text-[#9A92A6] font-bold hover:bg-gray-50 transition-colors uppercase tracking-wider">Cerrar</button>
                        </div>
                    </div>
                </>
            )}

            <style>{`
                @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
                .animate-slide-up { animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #F2BDC7; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.15); border: 2px solid white; }
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #F2BDC7; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default Productos;