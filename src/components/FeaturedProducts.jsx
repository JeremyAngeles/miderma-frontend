import { Link } from 'react-router-dom';

const productosDestacados = [
    {
        id: 1,
        nombre: "Sérum Hidratante Ácido Hialurónico",
        marca: "Miderma Care",
        precio: "S/ 120.00",
        etiqueta: "MÁS VENDIDO",
        imagen: "/producto-serum.jpg"
    },
    {
        id: 2,
        nombre: "Protector Solar Fotoprotector 50+",
        marca: "Isdin",
        precio: "S/ 95.00",
        etiqueta: "ESENCIAL",
        imagen: "/producto-solar.jpg"
    },
    {
        id: 3,
        nombre: "Crema Despigmentante Noche",
        marca: "Eucerin",
        precio: "S/ 145.00",
        etiqueta: "NUEVO",
        imagen: "/producto-crema.jpg"
    },
    {
        id: 4,
        nombre: "Gel Limpiador Purificante",
        marca: "La Roche-Posay",
        precio: "S/ 85.00",
        etiqueta: "",
        imagen: "/producto-limpiador.jpg"
    }
];

const FeaturedProducts = () => {
    return (
        <section className="py-24 px-4 sm:px-6 relative z-10 bg-white text-miderma-dark overflow-hidden">
            
            {/* =========================================
                DECORACIÓN DE FONDO SUTIL
            ========================================= */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-miderma-pink/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-miderma-purple/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                
                {/* =========================================
                    CABECERA DE LA SECCIÓN
                ========================================= */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 relative z-10">
                    <div className="text-center md:text-left">
                        <span className="font-extrabold tracking-widest uppercase mb-3 block text-sm text-miderma-pink">
                            Cuidado en Casa
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark mb-4">
                            Productos Destacados
                        </h2>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Extiende los resultados de la clínica a tu hogar con nuestra selección premium de productos dermatológicos.
                        </p>
                    </div>

                    {/* Botón en PC (a la derecha) */}
                    <Link to="/productos" className="hidden md:inline-flex items-center justify-center gap-2 border-2 border-miderma-dark text-miderma-dark hover:bg-miderma-dark hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 group whitespace-nowrap">
                        Ver tienda completa
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* =========================================
                    GRID DE PRODUCTOS (2 en móvil, 4 en PC)
                ========================================= */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
                    
                    {productosDestacados.map((producto) => (
                        <div key={producto.id} className="bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(242,189,199,0.2)] hover:-translate-y-2 hover:border-miderma-pink/30 transition-all duration-500 group flex flex-col">
                            
                            {/* CAJA DE LA IMAGEN */}
                            <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-[#FDF6F4] p-6 flex items-center justify-center">
                                
                                {/* Etiqueta de Nuevo/Vendido */}
                                {producto.etiqueta && (
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-miderma-dark text-white text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full z-10 tracking-wider">
                                        {producto.etiqueta}
                                    </div>
                                )}
                                
                                {/* Foto del producto */}
                                <img 
                                    src={producto.imagen} 
                                    alt={producto.nombre}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-md mix-blend-multiply"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }}
                                />

                                {/* Efecto Hover en PC: Botón de "Carrito" */}
                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-miderma-pink hover:bg-miderma-dark text-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden lg:flex">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* INFORMACIÓN DEL PRODUCTO */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow text-left bg-white">
                                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 sm:mb-2 block">
                                    {producto.marca}
                                </span>
                                <h3 className="font-bold text-sm sm:text-lg text-miderma-dark mb-3 flex-grow line-clamp-2 leading-tight group-hover:text-miderma-pink transition-colors">
                                    {producto.nombre}
                                </h3>
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto gap-3 sm:gap-0">
                                    <span className="font-extrabold text-base sm:text-xl text-miderma-purple">
                                        {producto.precio}
                                    </span>
                                    
                                    {/* Botón de añadir (Visible en Móvil/Tablet) */}
                                    <button className="w-full sm:w-auto bg-miderma-light text-miderma-dark hover:bg-miderma-pink hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-colors lg:hidden flex items-center justify-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Añadir
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTÓN MÓVIL (Ir a tienda, aparece al final) */}
                <div className="mt-12 text-center md:hidden relative z-10">
                    <Link to="/productos" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-miderma-dark text-miderma-dark hover:bg-miderma-dark hover:text-white px-8 py-4 rounded-full font-bold transition-all w-full text-base">
                        Ver tienda completa
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;