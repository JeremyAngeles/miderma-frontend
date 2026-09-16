import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Asegúrate de que esta ruta coincida con la ubicación de tu Navbar

// === BASE DE DATOS SIMULADA ===
const productosDB = [
    {
        id: 1,
        nombre: "Gradox Crema x 40ml",
        marca: "Gradox",
        categoria: "Cuidado Facial",
        especialidad: "Acné y Rosácea",
        precio: 70.00,
        precio_oferta: null, 
        etiqueta_descuento: null,
        stock: 15,
        descripcion: "Crema dermatológica especializada para pieles con tendencia acneica. Su fórmula avanzada ayuda a desobstruir los poros, reducir la inflamación y prevenir la aparición de nuevas imperfecciones sin resecar la piel.",
        beneficios: "✓ Controla el exceso de sebo.\n✓ Disminuye rojeces e inflamación.\n✓ Textura ligera no comedogénica.\n✓ Hidrata mientras trata el acné.",
        imagen: "/Gradox-40ml-pdf.webp"
    },
    {
        id: 2,
        nombre: "Gel Limpiador SkinScience Sebiox AKN 250 ml",
        marca: "SkinScience",
        categoria: "Cuidado Facial",
        especialidad: "Limpieza Profunda",
        precio: 156.00,
        precio_oferta: 109.00, 
        etiqueta_descuento: "-30% OFF",
        stock: 8,
        descripcion: "Gel limpiador purificante diseñado específicamente para pieles grasas y sensibles. Limpia suavemente las impurezas y el exceso de sebo, dejando la piel limpia y fresca.",
        beneficios: "✓ Limpieza profunda sin irritar.\n✓ Acción seborreguladora prolongada.\n✓ Libre de jabón y parabenos.\n✓ Prepara la piel para tratamientos.",
        imagen: "/Sebiox-AKN.webp"
    },
    {
        id: 3,
        nombre: "PROPIEL ÁCIDO HIALURÓNICO 2.5% SERUM",
        marca: "Propiel",
        categoria: "Antiedad",
        especialidad: "Rejuvenecimiento",
        precio: 150.00,
        precio_oferta: 120.00, 
        etiqueta_descuento: "-20% OFF",
        stock: 5,
        descripcion: "Sérum concentrado con ácido hialurónico puro al 2.5%. Penetra en las capas más profundas de la epidermis para rellenar arrugas y restaurar el volumen del rostro de forma natural.",
        beneficios: "✓ Hidratación intensa 24 horas.\n✓ Efecto relleno de líneas de expresión.\n✓ Piel más firme y luminosa.\n✓ Apto para todo tipo de piel.",
        imagen: "/Propiel.jpg"
    },
    {
        id: 4,
        nombre: "Fotoprotector Eucerin Sun Hydro Fluid FPS 50+",
        marca: "Eucerin",
        categoria: "Protección Solar",
        especialidad: "Dermatología Estética",
        precio: 100.00,
        precio_oferta: null, 
        etiqueta_descuento: null,
        stock: 20,
        descripcion: "Protector solar facial de textura ultra ligera y absorción inmediata. Ofrece una protección muy alta contra los rayos UVA/UVB y defiende contra la luz visible de alta energía (HEVIS).",
        beneficios: "✓ Protección SPF 50+ de amplio espectro.\n✓ Acabado invisible, no deja residuos blancos.\n✓ Hidratación con Ácido Hialurónico.\n✓ Excelente base de maquillaje.",
        imagen: "/Hydro-fluid.webp"
    }
];

const ProductDetail = () => {
    // CAPTURA EL ID DE LA URL AUTOMÁTICAMENTE
    const { id } = useParams(); 

    const [cantidad, setCantidad] = useState(1);
    const [producto, setProducto] = useState(null);
    const [recomendados, setRecomendados] = useState([]);

    // Buscar el producto y sus recomendados al cargar la página
    useEffect(() => {
        // Busca el producto por ID (si no encuentra el ID de la URL, carga el primero por seguridad)
        const prodEncontrado = productosDB.find(p => p.id === Number(id)) || productosDB[0];
        setProducto(prodEncontrado);
        setCantidad(1);

        if (prodEncontrado) {
            // Filtrar productos de la misma categoría (excluyendo el actual) para recomendar
            const similares = productosDB.filter(
                p => p.categoria === prodEncontrado.categoria && p.id !== prodEncontrado.id
            );
            
            // Si no hay suficientes de la misma categoría, agarramos otros al azar para rellenar
            if (similares.length < 4) {
                const otros = productosDB.filter(p => p.id !== prodEncontrado.id && !similares.includes(p));
                similares.push(...otros.slice(0, 4 - similares.length));
            }
            setRecomendados(similares.slice(0, 4));
        }
        
        // Hacer scroll hacia arriba automáticamente al entrar
        window.scrollTo(0, 0);
    }, [id]);

    if (!producto) return <div className="min-h-screen flex items-center justify-center font-Montserrat">Cargando producto...</div>;

    const incrementar = () => setCantidad(prev => Math.min(prev + 1, producto.stock));
    const decrementar = () => setCantidad(prev => Math.max(prev - 1, 1));

    return (
        <>
            {/* 1. EL NAVBAR EN LA PARTE SUPERIOR */}
            <Navbar />

            {/* 2. SECCIÓN DEL PRODUCTO (BLANCO PURO) */}
            <section className="w-full bg-white text-[#291840] pt-28 md:pt-36 pb-12 overflow-hidden">
                
                {/* Miga de pan (Breadcrumb) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
                    <nav className="text-xs sm:text-sm font-Montserrat text-[#9A92A6] font-medium flex items-center gap-2">
                        <Link to="/" className="hover:text-[#F2BDC7] transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link to="/productos" className="hover:text-[#F2BDC7] transition-colors">Tienda</Link>
                        <span>/</span>
                        <span className="text-[#F2BDC7]">{producto.categoria}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-10 lg:gap-16">
                    
                    {/* SECCIÓN DE IMAGEN (Izquierda) */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="relative w-full aspect-square bg-[#FDF6F4]/30 rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex items-center justify-center overflow-hidden group">
                            
                            {producto.etiqueta_descuento && (
                                <div className="absolute top-6 left-6 z-30 bg-[#E63946] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md tracking-wider font-Montserrat uppercase">
                                    {producto.etiqueta_descuento}
                                </div>
                            )}

                            <img 
                                src={producto.imagen} 
                                alt={producto.nombre} 
                                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
                            />
                        </div>
                    </div>

                    {/* SECCIÓN DE DETALLES (Derecha) */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs sm:text-sm font-bold text-[#9A92A6] uppercase tracking-widest font-Montserrat">
                                {producto.marca}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F2BDC7]"></span>
                            <span className="text-[10px] sm:text-xs font-bold text-[#291840] bg-[#F2BDC7]/20 px-3 py-1 rounded-full uppercase tracking-wider font-Montserrat">
                                {producto.especialidad}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#291840] mb-6 font-GFSDidot uppercase leading-tight">
                            {producto.nombre}
                        </h1>

                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#291840]/10">
                            {producto.precio_oferta ? (
                                <>
                                    <span className="text-3xl sm:text-4xl font-normal text-[#E63946] font-GFSDidot">
                                        S/ {producto.precio_oferta.toFixed(2)}
                                    </span>
                                    <span className="text-lg sm:text-xl text-[#9A92A6] line-through font-normal font-GFSDidot">
                                        S/ {producto.precio.toFixed(2)}
                                    </span>
                                </>
                            ) : (
                                <span className="text-3xl sm:text-4xl font-normal text-[#291840] font-GFSDidot">
                                    S/ {producto.precio.toFixed(2)}
                                </span>
                            )}
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-[#291840] uppercase tracking-widest mb-3 font-Montserrat">Descripción</h4>
                            <p className="text-base text-[#615573] leading-relaxed font-Montserrat">
                                {producto.descripcion}
                            </p>
                        </div>

                        <div className="mb-10 bg-[#FDF6F4]/50 p-6 rounded-2xl shadow-sm border border-[#F2BDC7]/20">
                            <h4 className="text-sm font-bold text-[#291840] uppercase tracking-widest mb-4 font-Montserrat">¿Para qué sirve? (Beneficios)</h4>
                            <ul className="text-sm sm:text-base text-[#615573] leading-relaxed font-Montserrat space-y-2 whitespace-pre-line">
                                {producto.beneficios}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                            <div className="flex items-center justify-between border-2 border-[#F2F2F2] bg-white rounded-full px-4 py-3.5 w-full sm:w-1/3 font-Montserrat">
                                <button onClick={decrementar} className="text-[#9A92A6] hover:text-[#F2BDC7] text-xl font-bold transition-colors w-8 flex justify-center">-</button>
                                <span className="font-bold text-[#291840] text-base">{cantidad}</span>
                                <button onClick={incrementar} className="text-[#9A92A6] hover:text-[#F2BDC7] text-xl font-bold transition-colors w-8 flex justify-center">+</button>
                            </div>

                            <button className="w-full sm:w-2/3 flex items-center justify-center gap-3 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] text-sm sm:text-base font-normal py-4 rounded-full transition-all duration-300 uppercase tracking-widest text-center shadow-xl font-GFSDidot">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Añadir al carrito
                            </button>
                        </div>

                        <p className="text-xs text-[#9A92A6] mt-4 font-Montserrat text-center sm:text-left">
                            Stock disponible: <span className="font-bold text-[#291840]">{producto.stock} unidades</span>
                        </p>

                    </div>
                </div>
            </section>
            {/* 3. SECCIÓN: PRODUCTOS RECOMENDADOS (COLOR CREMA) */}
            <section className="w-full bg-[#FDF6F4] py-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="text-center mb-12">
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-[#F2BDC7] font-Montserrat">
                            Complementa tu rutina
                        </span>
                        <h2 className="text-3xl md:text-4xl font-normal text-[#291840] font-GFSDidot uppercase">
                            Productos Recomendados
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mx-auto w-full">
                        {recomendados.map((rec) => (
                            <div key={rec.id} className="bg-white rounded-[1.25rem] sm:rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(242,189,199,0.35)] transition-all duration-500 border border-[#F2F2F2] flex flex-col relative p-3 sm:p-5 group h-full w-full mx-auto max-w-[280px] lg:max-w-none">
                                
                                <Link to={`/producto/${rec.id}`} className="absolute inset-0 z-20"></Link>

                                {rec.etiqueta_descuento && (
                                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 z-30 bg-[#E63946] text-white text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md tracking-wider font-Montserrat">
                                        {rec.etiqueta_descuento}
                                    </div>
                                )}

                                <div className="w-full h-40 sm:h-52 relative flex items-center justify-center mt-2 mb-3 sm:mb-5 bg-white z-10 shrink-0">
                                    <img 
                                        src={rec.imagen} 
                                        alt={rec.nombre} 
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>

                                <div className="flex flex-col flex-grow text-center relative z-10 justify-end">
                                    <span className="text-[9px] sm:text-[11px] font-bold text-[#9A92A6] group-hover:text-[#F2BDC7] transition-colors uppercase tracking-widest mb-1 font-Montserrat">
                                        {rec.marca}
                                    </span>
                                    
                                    <h3 className="text-xs sm:text-base font-normal text-[#291840] group-hover:text-[#F2BDC7] transition-colors uppercase leading-snug mb-2 sm:mb-4 line-clamp-2 min-h-[30px] sm:min-h-[44px] px-1 flex items-center justify-center font-GFSDidot">
                                        {rec.nombre}
                                    </h3>
                                    
                                    <div className="mt-auto mb-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                                        {rec.precio_oferta ? (
                                            <>
                                                <span className="text-[10px] sm:text-sm text-[#9A92A6] line-through font-normal mt-0.5 sm:mt-1 font-GFSDidot">S/ {rec.precio.toFixed(2)}</span>
                                                <span className="text-lg sm:text-2xl font-normal text-[#E63946] font-GFSDidot">S/ {rec.precio_oferta.toFixed(2)}</span>
                                            </>
                                        ) : (
                                            <span className="text-lg sm:text-2xl font-normal text-[#291840] font-GFSDidot">S/ {rec.precio.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductDetail;