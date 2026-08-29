import { Link } from 'react-router-dom';

const noticias = [
    {
        id: 1,
        categoria: "Guía Médica",
        titulo: "Psoriasis: Guía para Entender tu Enfermedad",
        resumen: "La psoriasis es una condición crónica de la piel. Conocer sus causas, síntomas y tratamientos te ayudará a manejarla mejor y a vivir con mayor bienestar.",
        imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        enlace: "#"
    },
    {
        id: 2,
        categoria: "Cuidado Facial",
        titulo: "Contaminación en Lima: Limpiezas Profundas",
        resumen: "En una ciudad con altos niveles de contaminación, las limpiezas faciales profundas se convierten en un cuidado esencial para mantener la piel fresca y saludable.",
        imagen: "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        enlace: "#"
    },
    {
        id: 3,
        categoria: "Prevención",
        titulo: "Cáncer de Piel en Perú: Detección Temprana",
        resumen: "El cáncer de piel es una de las enfermedades de mayor crecimiento en el Perú. Conoce el nuevo reglamento nacional y la regla ABCDE para identificar lunares.",
        imagen: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        enlace: "#"
    }
];

const NewsSection = () => {
    return (
        <section className="w-full relative z-10 overflow-hidden flex flex-col -mt-[1px]">
            
            {/* ONDA SUPERIOR: Transición de Testimonios (#FDF6F4) a Noticias (#F2F2F2) con el color rosado de la paleta */}
            <div className="w-full leading-none bg-[#FDF6F4]">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

            {/* CONTENIDO PRINCIPAL EN COLOR HUESO */}
            <div className="w-full bg-miderma-light py-12 md:py-20 px-4 sm:px-6 flex-grow">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark mb-4 font-serif">
                            Noticias
                        </h2>
                        <span className="font-bold tracking-widest uppercase text-xs sm:text-sm text-miderma-purple">
                            Lo que nos gustaría contarte
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {noticias.map((noticia) => (
                            <div 
                                key={noticia.id} 
                                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(41,24,64,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(242,189,199,0.3)] hover:-translate-y-2 hover:border-miderma-pink/40 transition-all duration-500 group flex flex-col"
                            >
                                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-miderma-dark font-extrabold px-4 py-1.5 rounded-full text-[10px] sm:text-xs tracking-wider shadow-sm z-10 uppercase">
                                        {noticia.categoria}
                                    </div>
                                    <img 
                                        src={noticia.imagen} 
                                        alt={noticia.titulo} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-miderma-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="font-extrabold text-xl md:text-2xl text-miderma-dark mb-3 leading-tight group-hover:text-miderma-pink transition-colors duration-300 font-serif line-clamp-2">
                                        {noticia.titulo}
                                    </h3>
                                    <p className="text-miderma-purple text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3 opacity-90">
                                        {noticia.resumen}
                                    </p>
                                    
                                    <Link 
                                        to={noticia.enlace} 
                                        className="inline-flex items-center gap-2 text-miderma-dark font-bold text-sm hover:text-miderma-pink transition-colors mt-auto group/btn"
                                    >
                                        Leer artículo completo
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 sm:mt-16 text-center">
                        <Link 
                            to="/noticias" 
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-miderma-dark text-miderma-dark hover:bg-miderma-dark hover:text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-sm text-sm sm:text-base w-full sm:w-auto"
                        >
                            Ver todas las noticias
                        </Link>
                    </div>

                </div>
            </div>

            {/* ONDA INFERIOR: Transición de Noticias (#F2F2F2) a Promociones (#FFFFFF) */}
            <div className="w-full leading-none bg-miderma-light">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#FFFFFF" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

        </section>
    );
};

export default NewsSection;