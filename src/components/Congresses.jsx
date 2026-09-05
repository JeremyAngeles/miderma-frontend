import { useState, useEffect, useRef } from 'react';

const congresos = [
    {
        id: 1,
        titulo: "Curso Especializado Láser y Cicatrices",
        fecha: "Octubre 2025",
        organizador: "Asoc. Médica Peruana de Láser y Energías Lumínicas",
        descripcion: "Curso en el que se impartió conocimientos de Sistemas Lumínicos para lesiones vasculares, pigmentarias y para estimular colágeno. Manejo de cicatrices (láser, fillers, subsición). Manejo de complicaciones y Tratamientos combinados.",
        ponentes: "Didac Barco (España) y Ricardo Galván (México)",
        imagen: "/congreso-laser.jpg"
    },
    {
        id: 2,
        titulo: "III TeraCILAD República Dominicana",
        fecha: "2024",
        organizador: "CILAD - Colegio Iberoamericano de Dermatología",
        descripcion: "Un espacio clave para actualizarnos en los avances más recientes de la terapéutica dermatológica médica, quirúrgica y estética.",
        imagen: "/congreso-teracilad.jpg"
    },
    {
        id: 3,
        titulo: "XXIV CILAD Cartagena de Indias",
        fecha: "Noviembre 2024",
        organizador: "Colegio Iberoamericano de Dermatología (CILAD)",
        descripcion: "Es el congreso con excelencia académica considerado el mayor dentro de la especialidad. Reúne a miles de residentes y dermatólogos de toda la región Ibero Latinoamericana.",
        imagen: "/congreso-cilad.jpg"
    },
    {
        id: 4,
        titulo: "RADLA Perú",
        fecha: "Mayo 2024",
        organizador: "Org. Científica Profesional de Dermatólogos Latinoamericanos",
        descripcion: "Reunión Anual de Dermatólogos Latinoamericanos. En esta reunión destaco mi participación con una beca otorgada por la presentación de un caso clínico, en la cual fui ponente.",
        imagen: "/congreso-radla.jpg"
    },
    {
        id: 5,
        titulo: "Facial Harmonization Hands-on Masterclass",
        fecha: "Noviembre 2025",
        organizador: "Empire Medical Training Harmony Aesthetic Institute",
        descripcion: "3 Días Intensivos en Dermatología Estética, taller teórico y práctico acerca de Botox Avanzado, Aplicación de Ácido Hialurónico, Bioestimuladores, Hilos PDO, Tecnología con Láser CO2, Hifu, Radiofrecuencia, Manejo de complicaciones, entre otros.",
        imagen: "/congreso-armonizacion.jpg"
    },
    {
        id: 6,
        titulo: "Peruderm Latinoamericano",
        fecha: "Octubre 2025",
        organizador: "Comité Peruderm",
        descripcion: "Uno de los eventos más relevantes en el ámbito dermatológico. Tres días de intensas conferencias y talleres. Reunió a expertos internacionales para actualizar conocimientos en diagnóstico, tratamiento y nuevas tecnologías incluyendo inyectables y láser.",
        imagen: "/congreso-peruderm.jpeg"
    }
];

const Congresses = () => {
    const scrollRef = useRef(null);
    const [selectedCongreso, setSelectedCongreso] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const wasDragged = useRef(false); 

    const handleMouseDown = (e) => {
        isDragging.current = true;
        wasDragged.current = false;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.scrollBehavior = 'auto'; 
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        setIsHovered(false);
        if(scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        scrollRef.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; 
        if (Math.abs(walk) > 10) wasDragged.current = true; 
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleCardClick = (congreso) => {
        if (!wasDragged.current) {
            setSelectedCongreso(congreso);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current && !selectedCongreso && !isHovered && !isDragging.current) {
                scrollRef.current.style.scrollBehavior = 'smooth';
                const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                
                if (scrollRef.current.scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0 }); 
                } else {
                    scrollRef.current.scrollBy({ left: 340 }); 
                }
            }
        }, 3500); 
        
        return () => clearInterval(interval);
    }, [selectedCongreso, isHovered]);

    useEffect(() => {
        if (selectedCongreso) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCongreso]);

    return (
        <section className="py-20 md:py-32 bg-[#FDF6F4]/40 overflow-hidden relative">
            
            {/* Decoración de fondo */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F2BDC7]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#291840]/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                <div className="text-center mb-14">
                    <span className="font-extrabold tracking-widest uppercase mb-3 block text-xs md:text-sm text-[#F2BDC7]">
                        Actualización Constante
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#291840] font-serif mb-6">
                        Últimos Congresos
                    </h2>
                    <p className="text-[#615573] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Comprometidos con la excelencia. Mantenemos nuestros conocimientos a la vanguardia participando en los eventos dermatológicos más prestigiosos del mundo.
                    </p>
                </div>

                <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
                >
                    {congresos.map((congreso) => (
                        <div 
                            key={congreso.id} 
                            onClick={() => handleCardClick(congreso)}
                            className="relative flex-shrink-0 w-[280px] md:w-[340px] h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(41,24,64,0.08)] snap-center group border-2 border-white hover:border-[#F2BDC7]/60 transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(242,189,199,0.3)] transition-all duration-500 bg-white"
                        >
                            <img 
                                src={congreso.imagen} 
                                alt={congreso.titulo} 
                                draggable="false" 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }}
                            />
                            
                            {/* Gradiente más suave y elegante */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#291840] via-[#291840]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
                            
                            {/* Icono de Ver Flotante */}
                            <div className="absolute top-5 right-5 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none shadow-lg">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="bg-[#F2BDC7] text-[#291840] text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-md">
                                    {congreso.fecha}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold leading-snug mb-2 font-serif group-hover:text-[#F2BDC7] transition-colors duration-300">
                                    {congreso.titulo}
                                </h3>
                                <div className="w-10 h-1 bg-white/30 rounded-full mt-4 group-hover:w-16 group-hover:bg-[#F2BDC7] transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL REDISEÑADO Y ELEGANTE */}
            {selectedCongreso && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#291840]/80 backdrop-blur-md transition-opacity"
                    onClick={() => setSelectedCongreso(null)} 
                >
                    <div 
                        className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative transform transition-transform animate-fade-in-up border-4 border-white"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button 
                            onClick={() => setSelectedCongreso(null)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm shadow-md text-[#291840] hover:text-white hover:bg-[#F2BDC7] rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>

                        <div className="w-full md:w-5/12 h-[250px] md:h-auto relative bg-[#FDF6F4] flex-shrink-0">
                            <img 
                                src={selectedCongreso.imagen} 
                                alt={selectedCongreso.titulo} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Sombra interna para el texto en móviles */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#291840]/90 to-transparent md:hidden"></div>
                            <div className="absolute bottom-4 left-4 right-4 md:hidden">
                                <span className="bg-[#F2BDC7] text-[#291840] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {selectedCongreso.fecha}
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 p-6 sm:p-10 flex flex-col overflow-y-auto bg-white relative">
                            <div className="hidden md:block mb-4">
                                <span className="bg-[#F2BDC7]/20 text-[#291840] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#F2BDC7]/30">
                                    {selectedCongreso.fecha}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-4xl font-extrabold text-[#291840] mb-6 leading-tight font-serif">
                                {selectedCongreso.titulo}
                            </h3>
                            
                            {selectedCongreso.organizador && (
                                <div className="mb-8 flex items-start gap-4 bg-[#FDF6F4]/50 p-5 rounded-2xl border border-[#F2BDC7]/20">
                                    <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                                        <svg className="w-5 h-5 text-[#F2BDC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A92A6] uppercase font-bold tracking-wider mb-1">Organizado por:</p>
                                        <p className="text-sm font-bold text-[#291840] leading-snug">{selectedCongreso.organizador}</p>
                                    </div>
                                </div>
                            )}
                            
                            <div className="mb-8">
                                <h4 className="font-bold text-sm text-[#291840] mb-3 uppercase tracking-wider">Detalles del Evento</h4>
                                <p className="text-sm md:text-base text-[#615573] leading-relaxed">
                                    {selectedCongreso.descripcion}
                                </p>
                            </div>

                            {selectedCongreso.ponentes && (
                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-start gap-4">
                                    <div className="bg-[#291840]/5 p-2 rounded-full shrink-0">
                                        <svg className="w-5 h-5 text-[#291840]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9A92A6] uppercase font-bold tracking-wider mb-1">Ponentes Destacados:</p>
                                        <p className="text-sm font-bold text-[#291840]">{selectedCongreso.ponentes}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default Congresses;