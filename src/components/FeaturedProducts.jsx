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
                
                {/* CABECERA DE LA SECCIÓN (TEXTO ACTUALIZADO AQUÍ) */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-extrabold tracking-[0.2em] uppercase mb-3 block text-xs text-[#F2BDC7]">
                            Cuidado en Casa
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#291840] mb-4 font-nunito">
                            Tienda Dermocosmética
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-[#615573] max-w-2xl leading-relaxed">
                            MiDerma ofrece un portafolio integral de productos dermatológicos y dermocosméticos para garantizar calidad y eficacia en tu piel.
                        </p>
                    </div>

                    <Link to="/productos" className="hidden md:inline-flex items-center justify-center gap-2 bg-white border-2 border-[#291840] text-[#291840] hover:bg-[#291840] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-sm whitespace-nowrap">
                        Ver tienda completa
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* GRID DE PRODUCTOS: 2 columnas en celular, 4 en PC */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mx-auto w-full lg:max-w-6xl">
                    
                    {productosDestacados.map((producto) => {
                        const cantActual = cantidades[producto.id] || 1;

                        return (
                            /* TARJETA MÁS VERTICAL: Sin proporciones forzadas, solo dejándola fluir con una imagen más alta */
                            <div key={producto.id} className="bg-white rounded-[1.25rem] sm:rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(242,189,199,0.35)] transition-all duration-500 border border-[#F2F2F2] flex flex-col relative p-3 sm:p-5 group h-full w-full mx-auto max-w-[280px] lg:max-w-none">
                                
                                {/* Efecto de destello rosado suave en el fondo */}
                                <div className="absolute inset-0 bg-[#F2BDC7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 rounded-[1.25rem] sm:rounded-3xl"></div>

                                {/* ETIQUETAS FLOTANDO */}
                                {producto.etiqueta_descuento ? (
                                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 z-30 bg-[#E63946] text-white text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md tracking-wider">
                                        {producto.etiqueta_descuento}
                                    </div>
                                ) : producto.etiqueta ? (
                                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 z-30 bg-[#291840] text-white text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md tracking-wider">
                                        {producto.etiqueta}
                                    </div>
                                ) : null}

                                {/* IMAGEN MÁS GRANDE Y VERTICAL (h-40 en celular, h-52 en PC) */}
                                <div className="w-full h-40 sm:h-52 relative flex items-center justify-center mt-2 mb-3 sm:mb-5 bg-white z-20 shrink-0">
                                    <img 
                                        src={producto.imagen} 
                                        alt={producto.nombre} 
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>

                                {/* CONTENIDO INFERIOR */}
                                <div className="flex flex-col flex-grow text-center relative z-20 bg-transparent justify-end">
                                    
                                    {/* Marca */}
                                    <span className="text-[9px] sm:text-[11px] font-medium text-[#9A92A6] group-hover:text-[#F2BDC7] transition-colors uppercase tracking-widest mb-1">
                                        {producto.marca}
                                    </span>
                                    
                                    {/* Título en Mayúsculas */}
                                    <h3 className="text-[11px] sm:text-sm font-bold text-[#291840] group-hover:text-[#F2BDC7] transition-colors uppercase leading-snug mb-2 sm:mb-4 line-clamp-2 min-h-[30px] sm:min-h-[40px] px-1 flex items-center justify-center">
                                        {producto.nombre}
                                    </h3>
                                    
                                    {/* PRECIOS */}
                                    <div className="mt-auto mb-3 sm:mb-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                                        {producto.precio_oferta ? (
                                            <>
                                                <span className="text-[10px] sm:text-sm text-[#9A92A6] line-through font-medium mt-0.5 sm:mt-1">S/ {producto.precio.toFixed(2)}</span>
                                                <span className="text-base sm:text-2xl font-bold text-[#E63946]">S/ {producto.precio_oferta.toFixed(2)}</span>
                                            </>
                                        ) : (
                                            <span className="text-base sm:text-2xl font-bold text-[#291840]">S/ {producto.precio.toFixed(2)}</span>
                                        )}
                                    </div>

                                    {/* CONTROLES EXACTAMENTE COMO LOS TENÍAS */}
                                    <div className="flex flex-col xl:flex-row items-center justify-between gap-2 w-full mt-auto">
                                        
                                        {/* Selector de cantidad */}
                                        <div className="flex items-center justify-between border border-[#F2F2F2] rounded-full px-2 sm:px-3 py-1.5 sm:py-2.5 w-full xl:w-[45%] bg-white">
                                            <button 
                                                onClick={() => decrementarCantidad(producto.id)}
                                                className="text-[#9A92A6] hover:text-[#F2BDC7] text-sm sm:text-base font-bold transition-colors px-1 w-6 flex justify-center"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-[#291840] text-[10px] sm:text-sm">{cantActual}</span>
                                            <button 
                                                onClick={() => incrementarCantidad(producto.id, producto.stock)}
                                                className="text-[#9A92A6] hover:text-[#F2BDC7] text-sm sm:text-base font-bold transition-colors px-1 w-6 flex justify-center"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Botón Añadir */}
                                        <button className="w-full xl:flex-grow flex items-center justify-center bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] text-[9px] sm:text-xs font-bold py-2 sm:py-3 rounded-full transition-colors duration-300 uppercase tracking-widest text-center shadow-sm">
                                            Añadir
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Botón en Móvil */}
                <div className="mt-10 text-center md:hidden">
                    <Link to="/productos" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#291840] text-[#291840] hover:bg-[#291840] hover:text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 w-full shadow-sm text-sm">
                        Ver tienda completa
                    </Link>
                </div>

            </div>

            {/* ONDA INFERIOR */}
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