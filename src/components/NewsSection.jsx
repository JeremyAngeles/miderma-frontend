import { Link } from 'react-router-dom';

// Base de datos de noticias actualizada (solo con contenido, no "resumen")
const noticias = [
    {
        id: 1,
        titulo: "Psoriasis: Guía para Entender tu Enfermedad",
        categoria: "Guía Médica",
        imagen: "/psioriasis.jpg",
        contenido: "La psoriasis es mucho más que un problema estético; es una enfermedad inflamatoria crónica de origen autoinmune que afecta a millones de personas a nivel mundial. Quienes la padecen saben que los brotes pueden tener un fuerte impacto no solo físico, sino también emocional.\n\n¿Por qué se produce?\nEn un cuerpo sano, las células de la piel tardan casi un mes en renovarse. En una persona con psoriasis, este proceso ocurre en pocos días, formando placas gruesas, rojas y con escamas plateadas.\n\nTratamiento Dermatológico\nHoy vivimos en la era de los tratamientos biológicos y terapias sistémicas. Como dermatólogos, ahora podemos ofrecer opciones personalizadas para controlar la inflamación y recuperar tu calidad de vida."
    },
    {
        id: 2,
        titulo: "Contaminación en Lima: Limpiezas Profundas",
        categoria: "Cuidado Facial",
        imagen: "/tres-fotos.png",
        contenido: "Lima es una metrópolis que se caracteriza por tener una altísima humedad y altos niveles de material particulado (smog). Esta combinación es el caldo de cultivo perfecto para problemas dermatológicos.\n\nEl impacto invisible del Smog\nLas partículas tóxicas penetran en los poros generando estrés oxidativo. ¿El resultado? Envejecimiento prematuro, tono apagado, manchas y un aumento severo en la aparición de acné.\n\n¿Por qué la rutina en casa no es suficiente?\nLavarse la cara es vital, pero no alcanza para extraer las impurezas incrustadas. Una Limpieza Facial Profunda Dermatológica desobstruye los poros y prepara la piel para que tus sueros y cremas diarias realmente funcionen."
    },
    {
        id: 3,
        titulo: "Cáncer de Piel en Perú: Detección Temprana",
        categoria: "Prevención",
        imagen: "/una-foto1.png",
        contenido: "El Perú ocupa los primeros lugares a nivel mundial con los índices de radiación ultravioleta (UV) más extremos. Esto ha provocado un incremento alarmante en los casos de cáncer de piel.\n\nLa regla del ABCDE\nTodos debemos revisar nuestros lunares usando esta regla:\n• A (Asimetría)\n• B (Bordes irregulares)\n• C (Color no uniforme)\n• D (Diámetro mayor a 6mm)\n• E (Evolución o cambios)\n\nEl daño solar es acumulativo. Por ello, es imperativo el uso estricto de fotoprotector SPF 50+ y agendar un chequeo dermatoscópico (mapeo de lunares) con un especialista al menos una vez al año."
    }
];

const NewsSection = () => {
    return (
        <section className="w-full relative z-10 overflow-hidden flex flex-col -mt-[1px]">
            
            {/* ONDA SUPERIOR */}
            <div className="w-full leading-none bg-[#FDF6F4]">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

            {/* CONTENIDO PRINCIPAL EN COLOR HUESO */}
            <div className="w-full bg-[#F2F2F2] py-12 md:py-20 px-4 sm:px-6 flex-grow">
                <div className="max-w-7xl mx-auto">
                    
                    {/* ENCABEZADO DE LA SECCIÓN */}
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-[#8E6F96] font-Montserrat">
                            Lo que nos gustaría contarte
                        </span>
                        <h2 className="text-2xl md:text-4xl font-normal text-[#291840] mb-4 font-GFSDidot uppercase">
                            Noticias
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {noticias.map((noticia) => (
                            <div 
                                key={noticia.id} 
                                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(41,24,64,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(242,189,199,0.3)] hover:-translate-y-2 hover:border-[#F2BDC7]/40 transition-all duration-500 group flex flex-col"
                            >
                                <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#291840] font-bold px-4 py-1.5 rounded-full text-[10px] sm:text-xs tracking-wider shadow-sm z-10 uppercase font-Montserrat">
                                        {noticia.categoria}
                                    </div>
                                    <img 
                                        src={noticia.imagen} 
                                        alt={noticia.titulo} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                    />
                                    <div className="absolute inset-0 bg-[#291840]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 bg-white">
                                    
                                    {/* AHORA EL TÍTULO TAMBIÉN ES UN LINK */}
                                    <Link to={`/publicacion/${noticia.id}`}>
                                        <h3 className="font-normal text-xl md:text-2xl text-[#291840] mb-4 leading-tight group-hover:text-[#F2BDC7] transition-colors duration-300 font-GFSDidot uppercase line-clamp-3 cursor-pointer">
                                            {noticia.titulo}
                                        </h3>
                                    </Link>
                                    
                                    {/* Muestra el contenido cortado a 3 líneas */}
                                    <p className="text-[#8E6F96] text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3 opacity-90 font-Montserrat whitespace-pre-line">
                                        {noticia.contenido}
                                    </p>
                                    
                                    {/* ENLACE ACTUALIZADO A LA NUEVA RUTA DINÁMICA */}
                                    <Link 
                                        to={`/publicacion/${noticia.id}`} 
                                        className="inline-flex items-center gap-2 text-[#291840] font-normal text-sm hover:text-[#F2BDC7] transition-colors mt-auto group/btn font-GFSDidot uppercase tracking-wider"
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
                </div>
            </div>

            {/* ONDA INFERIOR */}
            <div className="w-full leading-none bg-[#F2F2F2]">
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