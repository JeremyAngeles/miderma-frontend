import { useState } from 'react';
import { Link } from 'react-router-dom';

const casos = [
    {
        id: 1,
        titulo: "Tratamiento de Acné Severo",
        descripcion: "Resultados reales después de 4 meses de tratamiento clínico integral.",
        imagenAntes: "/acne-antes.jpg",
        imagenDespues: "/acne-despues.jpg"
    },
    {
        id: 2,
        titulo: "Rejuvenecimiento Facial",
        descripcion: "Aplicación de toxina botulínica y ácido hialurónico para suavizar líneas de expresión.",
        imagenAntes: "/rejuvenecimiento-antes.jpg",
        imagenDespues: "/rejuvenecimiento-despues.jpg"
    },
    {
        id: 3,
        titulo: "Reducción de Melasma",
        descripcion: "Tratamiento combinado con tecnología láser y peelings despigmentantes.",
        imagenAntes: "/manchas-antes.jpg",
        imagenDespues: "/manchas-despues.jpg"
    }
];

const BeforeAfterSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // El slider empieza exactamente en el medio (50%)
    const [sliderPos, setSliderPos] = useState(50);

    const cambiarCaso = (idx) => {
        setCurrentIndex(idx);
        setSliderPos(50); // Al cambiar de foto, regresamos la línea al medio
    };

    const casoActual = casos[currentIndex];

    return (
        <section className="py-24 px-4 sm:px-6 relative z-10 bg-[#FDF6F4] text-miderma-dark overflow-hidden flex flex-col">
            
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 flex-grow">
                
                {/* =========================================
                    TEXTO Y BOTÓN (Izquierda)
                ========================================= */}
                <div className="w-full lg:w-1/3 text-center lg:text-left z-10 flex flex-col justify-center">
                    <span className="font-extrabold tracking-widest uppercase mb-3 block text-sm text-miderma-pink">
                        Resultados Reales
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Transformamos <br className="hidden lg:block"/> 
                        vidas y pieles.
                    </h2>
                    <p className="text-lg leading-relaxed mb-8 opacity-90 text-gray-700">
                        Desliza la barra para ver la evolución de nuestros pacientes. Diseñamos protocolos personalizados que garantizan resultados naturales y seguros.
                    </p>

                    {/* BOTÓN (Solo visible en PC, a la izquierda) */}
                    <div className="hidden lg:block">
                        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-miderma-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-lg">
                            Agenda tu evaluación
                        </Link>
                    </div>
                </div>

                {/* =========================================
                    SLIDER INTERACTIVO (Derecha)
                ========================================= */}
                <div className="w-full lg:w-2/3 flex flex-col items-center">
                    
                    {/* Contenedor del Slider */}
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] border-white group select-none touch-pan-y bg-gray-100">
                        
                        {/* 1. IMAGEN DE FONDO (DESPUÉS) */}
                        <img 
                            src={casoActual.imagenDespues} 
                            alt="Después" 
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                        />
                        
                        {/* 2. IMAGEN SUPERPUESTA (ANTES) - Recortada según el slider */}
                        <img 
                            src={casoActual.imagenAntes} 
                            alt="Antes" 
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                        />

                        {/* ETIQUETAS FLOTANTES ("ANTES" y "DESPUÉS") */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-miderma-dark font-extrabold px-4 py-1.5 rounded-full text-xs tracking-wider shadow-sm z-10 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPos > 20 ? 1 : 0 }}>
                            ANTES
                        </div>
                        <div className="absolute top-6 right-6 bg-miderma-pink/90 backdrop-blur-sm text-white font-extrabold px-4 py-1.5 rounded-full text-xs tracking-wider shadow-sm z-10 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPos < 80 ? 1 : 0 }}>
                            DESPUÉS
                        </div>

                        {/* CAJA DE TEXTO INFERIOR */}
                        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-gradient-to-t from-miderma-dark/95 via-miderma-dark/70 to-transparent pointer-events-none z-10">
                            <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{casoActual.titulo}</h3>
                            <p className="text-gray-200 text-sm sm:text-base opacity-90">{casoActual.descripcion}</p>
                        </div>

                        {/* LÍNEA DIVISORIA Y MANIJA DEL SLIDER */}
                        <div 
                            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                            style={{ left: `calc(${sliderPos}% - 2px)` }}
                        >
                            {/* Círculo agarrador con flechas */}
                            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-miderma-dark">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                                </svg>
                            </div>
                        </div>

                        {/* INPUT RANGE INVISIBLE (Permite arrastrar en PC y Celular) */}
                        <input 
                            type="range" 
                            min="0" max="100" 
                            value={sliderPos}
                            onChange={(e) => setSliderPos(e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
                        />
                    </div>

                    {/* =========================================
                        INDICADORES DE BOLITAS (Debajo del Slider)
                    ========================================= */}
                    <div className="flex justify-center gap-3 mt-8 z-10">
                        {casos.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => cambiarCaso(idx)}
                                className={`h-3 rounded-full transition-all duration-500 ease-out ${
                                    currentIndex === idx ? 'w-12 bg-miderma-pink shadow-md' : 'w-3 bg-miderma-pink/30 hover:bg-miderma-pink/60'
                                }`}
                                aria-label={`Ver caso ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* BOTÓN (Solo visible en Celular, hasta abajo) */}
                    <div className="w-full text-center lg:hidden mt-8 z-10">
                        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-miderma-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-lg w-full">
                            Agenda tu evaluación
                        </Link>
                    </div>

                </div>
            </div>
            
            {/* ONDA INFERIOR HACIA LA SIGUIENTE SECCIÓN */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
                    <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default BeforeAfterSection;