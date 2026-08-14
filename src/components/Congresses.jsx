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
        imagen: "/congreso-peruderm.jpg"
    }
];

const Congresses = () => {
    const scrollRef = useRef(null);
    const [selectedCongreso, setSelectedCongreso] = useState(null);
    const [isHovered, setIsHovered] = useState(false); // Para pausar el slider si pones el mouse encima

    // Variables para controlar el arrastre con el mouse
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const wasDragged = useRef(false); // Sirve para saber si arrastraste (y no abrir el modal)

    // ========================================================
    // LÓGICA PARA ARRASTRAR CON EL MOUSE EN PC
    // ========================================================
    const handleMouseDown = (e) => {
        isDragging.current = true;
        wasDragged.current = false;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        // Quitamos el scroll suave temporalmente para que siga al mouse perfecto
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
        const walk = (x - startX.current) * 1.5; // La velocidad de arrastre
        if (Math.abs(walk) > 10) wasDragged.current = true; // Si moviste el mouse más de 10px, cuenta como arrastre
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // Solo abre el modal si NO estabas arrastrando la tarjeta
    const handleCardClick = (congreso) => {
        if (!wasDragged.current) {
            setSelectedCongreso(congreso);
        }
    };

    // ========================================================
    // AUTO-SCROLL (Se mueve solo, pero se pausa si tocas)
    // ========================================================
    useEffect(() => {
        const interval = setInterval(() => {
            // Solo avanza si no hay modal abierto, no estás arrastrando y no tienes el mouse encima
            if (scrollRef.current && !selectedCongreso && !isHovered && !isDragging.current) {
                scrollRef.current.style.scrollBehavior = 'smooth';
                const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                
                if (scrollRef.current.scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0 }); // Regresa al inicio
                } else {
                    scrollRef.current.scrollBy({ left: 320 }); // Avanza una tarjeta
                }
            }
        }, 3000); 
        
        return () => clearInterval(interval);
    }, [selectedCongreso, isHovered]);

    // Bloquea el scroll de la página trasera al abrir un modal
    useEffect(() => {
        if (selectedCongreso) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCongreso]);

    return (
        <section className="py-16 md:py-24 bg-white text-miderma-dark overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                <div className="text-center md:text-left mb-10">
                    <span className="font-extrabold tracking-widest uppercase mb-2 block text-xs text-miderma-pink">Actualización Constante</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#5A4A42]">Últimos Congresos Asistidos</h2>
                    <div className="w-16 h-1.5 bg-miderma-pink mt-4 mx-auto md:mx-0 rounded-full"></div>
                    <p className="text-gray-500 mt-4 text-sm md:text-base">Puedes deslizar las tarjetas o tocarlas para ver la información detallada.</p>
                </div>

                {/* CONTENEDOR DEL SLIDER */}
                <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
                >
                    {congresos.map((congreso) => (
                        <div 
                            key={congreso.id} 
                            onClick={() => handleCardClick(congreso)}
                            className="relative flex-shrink-0 w-[260px] md:w-[320px] h-[360px] rounded-3xl overflow-hidden shadow-lg snap-center group border border-gray-100 transform hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* IMAGEN PEQUEÑA (CARTA) */}
                            <img 
                                src={congreso.imagen} 
                                alt={congreso.titulo} 
                                draggable="false" // Evita que la foto en sí se arrastre como un archivo
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }}
                            />
                            {/* Gradiente oscuro abajo */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A4A42] via-[#5A4A42]/50 to-transparent opacity-90 pointer-events-none"></div>
                            
                            {/* Icono de Click */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                            </div>

                            {/* TÍTULO DE LA CARTA */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white pointer-events-none">
                                <span className="bg-miderma-pink text-white text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                                    {congreso.fecha}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold leading-tight mb-1">{congreso.titulo}</h3>
                                <p className="text-xs text-white/80 mt-2 flex items-center gap-1 font-semibold group-hover:text-miderma-pink transition-colors">
                                    Ver Información <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========================================================
                MODAL (VENTANA EMERGENTE AL HACER CLIC)
            ======================================================== */}
            {selectedCongreso && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedCongreso(null)} 
                >
                    <div 
                        className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative transform transition-transform animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Botón Cerrar */}
                        <button 
                            onClick={() => setSelectedCongreso(null)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white shadow-md text-gray-800 hover:text-miderma-pink hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>

                        {/* Mitad Imagen */}
                        <div className="w-full md:w-5/12 h-[250px] md:h-auto relative bg-[#FDF6F4] flex-shrink-0">
                            <img 
                                src={selectedCongreso.imagen} 
                                alt={selectedCongreso.titulo} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Mitad Texto (Habilitado con Scroll) */}
                        <div className="w-full md:w-7/12 p-6 sm:p-10 flex flex-col overflow-y-auto bg-white">
                            <span className="text-xs font-bold text-miderma-pink uppercase tracking-widest mb-2">
                                {selectedCongreso.fecha}
                            </span>
                            
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#5A4A42] mb-6 leading-tight">
                                {selectedCongreso.titulo}
                            </h3>
                            
                            {selectedCongreso.organizador && (
                                <div className="mb-6 bg-[#FDF6F4] p-4 rounded-xl border border-miderma-pink/10">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Organizado por:</p>
                                    <p className="text-sm font-semibold text-miderma-dark">{selectedCongreso.organizador}</p>
                                </div>
                            )}
                            
                            <div className="mb-6">
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {selectedCongreso.descripcion}
                                </p>
                            </div>

                            {selectedCongreso.ponentes && (
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Ponentes Destacados:</p>
                                    <p className="text-sm font-semibold text-miderma-dark">{selectedCongreso.ponentes}</p>
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
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
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