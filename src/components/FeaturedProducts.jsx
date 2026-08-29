import { useState } from 'react';
import { Link } from 'react-router-dom';

const productosDestacados = [
    {
        id: 1,
        nombre: "Sérum Hidratante Ácido Hialurónico",
        marca: "Miderma Care",
        precio: 120.00,
        precio_oferta: 96.00, // Con descuento
        etiqueta_descuento: "-20% OFF",
        etiqueta: null,
        stock: 15,
        imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        nombre: "Protector Solar Fotoprotector 50+",
        marca: "Isdin",
        precio: 95.00,
        precio_oferta: null, // Sin descuento
        etiqueta_descuento: null,
        etiqueta: "MÁS VENDIDO",
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        nombre: "Crema Despigmentante Noche",
        marca: "Eucerin",
        precio: 145.00,
        precio_oferta: 116.00, // Con descuento
        etiqueta_descuento: "-20% OFF",
        etiqueta: null,
        stock: 5,
        imagen: "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        nombre: "Gel Limpiador Purificante",
        marca: "La Roche-Posay",
        precio: 85.00,
        precio_oferta: null, // Sin descuento
        etiqueta_descuento: null,
        etiqueta: "NUEVO",
        stock: 20,
        imagen: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=500&q=80"
    }
];

const FeaturedProducts = () => {
    // Estado para manejar las cantidades de los productos
    const [cantidades, setCantidades] = useState({});

    const incrementarCantidad = (id, stockMax) => {
        setCantidades(prev => ({ ...prev, [id]: Math.min((prev[id] || 1) + 1, stockMax) }));
    };

    const decrementarCantidad = (id) => {
        setCantidades(prev => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
    };

    return (
        <section className="w-full relative z-10 flex flex-col bg-gradient-to-b from-[#F2F2F2] to-[#FDF6F4] text-[#291840] overflow-hidden -mt-[1px]">
            
            {/* =========================================
                DECORACIÓN DE FONDO
            ========================================= */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#291840]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#F2BDC7]/30 rounded-full blur-[90px] -z-10 pointer-events-none"></div>

            {/* CONTENEDOR PRINCIPAL */}
            <div className="pt-20 md:pt-28 pb-12 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full flex-grow">
                
                {/* CABECERA DE LA SECCIÓN */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-extrabold tracking-[0.2em] uppercase mb-3 block text-xs text-[#F2BDC7]">
                            Cuidado en Casa
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#291840] mb-4 font-serif">
                            Productos Destacados
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-[#615573] max-w-xl leading-relaxed">
                            Extiende los resultados de la clínica a tu hogar con nuestra selección premium de productos dermatológicos.
                        </p>
                    </div>

                    <Link to="/productos" className="hidden md:inline-flex items-center justify-center gap-2 bg-white border-2 border-[#291840] text-[#291840] hover:bg-[#291840] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-sm whitespace-nowrap">
                        Ver tienda completa
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* GRID DE PRODUCTOS (2x2 en celular) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                    
                    {productosDestacados.map((producto) => {
                        const cantActual = cantidades[producto.id] || 1;

                        return (
                            <div key={producto.id} className="bg-white rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F2F2F2] flex flex-col group relative">
                                
                                {/* ETIQUETAS SUPERIORES */}
                                {producto.etiqueta_descuento ? (
                                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-[#E63946] text-white text-[9px] sm:text-xs font-bold px-2 py-1 rounded shadow-md tracking-wider">
                                        {producto.etiqueta_descuento}
                                    </div>
                                ) : producto.etiqueta ? (
                                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-[#291840] text-white text-[9px] sm:text-xs font-bold px-2 py-1 rounded shadow-md tracking-wider">
                                        {producto.etiqueta}
                                    </div>
                                ) : null}

                                {/* IMAGEN */}
                                <div className="w-full aspect-[4/5] overflow-hidden bg-white relative p-2 sm:p-4 flex items-center justify-center">
                                    <img 
                                        src={producto.imagen} 
                                        alt={producto.nombre} 
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                                    />
                                </div>

                                {/* CONTENIDO DE LA TARJETA */}
                                <div className="p-3 sm:p-5 flex flex-col flex-grow border-t border-[#F2F2F2]">
                                    <span className="text-[8px] sm:text-[10px] font-bold text-[#9A92A6] uppercase tracking-widest mb-1">
                                        {producto.marca}
                                    </span>
                                    <h3 className="text-[11px] sm:text-sm font-bold text-[#291840] leading-snug mb-2 sm:mb-3 line-clamp-2 font-serif">
                                        {producto.nombre}
                                    </h3>

                                    {/* PRECIOS */}
                                    <div className="mb-2 sm:mb-4">
                                        {producto.precio_oferta ? (
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <span className="text-sm sm:text-lg font-bold text-[#E63946]">S/ {producto.precio_oferta.toFixed(2)}</span>
                                                <span className="text-[9px] sm:text-xs text-[#9A92A6] line-through">S/ {producto.precio.toFixed(2)}</span>
                                            </div>
                                        ) : (
                                            <div className="text-sm sm:text-lg font-bold text-[#291840]">
                                                S/ {producto.precio.toFixed(2)}
                                            </div>
                                        )}
                                    </div>

                                    {/* CONTROLES INFERIORES */}
                                    <div className="mt-auto flex flex-col gap-2 sm:gap-3">
                                        <div className="text-[9px] sm:text-[11px] text-[#9A92A6]">
                                            Stock: <span className="font-bold text-[#615573]">{producto.stock} un.</span>
                                        </div>

                                        {/* Selector de cantidad */}
                                        <div className="flex items-center justify-between border border-[#F2F2F2] rounded-lg p-1 bg-[#F2F2F2]/50">
                                            <button 
                                                onClick={() => decrementarCantidad(producto.id)} 
                                                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-white flex items-center justify-center text-[#615573] font-medium shadow-sm hover:text-[#F2BDC7] transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-[#291840] text-xs sm:text-sm">{cantActual}</span>
                                            <button 
                                                onClick={() => incrementarCantidad(producto.id, producto.stock)} 
                                                className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-white flex items-center justify-center text-[#615573] font-medium shadow-sm hover:text-[#F2BDC7] transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Botón Añadir */}
                                        <button className="w-full bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] text-[9px] sm:text-xs font-bold py-2.5 sm:py-3 rounded-lg transition-colors duration-300 flex justify-center items-center gap-1.5 shadow-md">
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                            </svg>
                                            Añadir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Botón en Móvil (a la parte inferior) */}
                <div className="mt-10 text-center md:hidden">
                    <Link to="/productos" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#291840] text-[#291840] hover:bg-[#291840] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 w-full shadow-sm text-sm">
                        Ver tienda completa
                    </Link>
                </div>

            </div>

            {/* =========================================
                ONDA INFERIOR (Transición al blanco)
            ========================================= */}
            <div className="w-full leading-none bg-[#FDF6F4]">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#FFFFFF" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

        </section>
    );
};

export default FeaturedProducts;