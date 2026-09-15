import { useState } from 'react';
import { Link } from 'react-router-dom';

// Le agregamos el título y descripción a los casos
const casos = [
    {
        id: 1,
        titulo: "Tratamiento de Acné Severo",
        descripcion: "Resultados reales después de 4 meses de tratamiento clínico integral, combinando medicamentos orales y rutinas de skincare especializadas para restaurar la salud de la piel.",
        imagenAntes: "/antes-1.jpg",
        imagenDespues: "/despues-1.jpg"
    }
    // Puedes agregar más casos copiando el bloque de arriba
];

const BeforeAfterSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50); // Controla la línea del medio (50%)

    const casoActual = casos[currentIndex];

    const prevCase = () => {
        setCurrentIndex((prev) => (prev === 0 ? casos.length - 1 : prev - 1));
        setSliderPosition(50); // Resetea el slider al cambiar
    };

    const nextCase = () => {
        setCurrentIndex((prev) => (prev === casos.length - 1 ? 0 : prev + 1));
        setSliderPosition(50); // Resetea el slider al cambiar
    };

    return (
        <section id="resultados" className="w-full relative z-10 overflow-hidden flex flex-col -mt-[1px]">
            
            {/* ONDA SUPERIOR */}
            <div className="w-full leading-none bg-white">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="bg-[#F2F2F2] pt-8 pb-16 px-4 sm:px-6 flex-grow">
                <div className="max-w-[85rem] mx-auto w-full flex flex-col items-center">
                    
                    {/* TEXTO SUPERIOR GENERAL */}
                    <div className="w-full text-center mb-12 lg:mb-16">
                        <span className="font-extrabold tracking-widest uppercase mb-3 block text-sm text-[#F2BDC7] font-Montserrat">
                            Resultados Reales
                        </span>
                        {/* APLICADO: font-GFSDidot y font-normal en el título principal */}
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-normal text-[#291840] font-GFSDidot">
                            GALERIA DE CASOS
                        </h2>
                    </div>

                    {/* ========================================================================= */}
                    {/* CONTENEDOR FLEX: FOTO A LA IZQUIERDA Y TEXTO A LA DERECHA */}
                    {/* ========================================================================= */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        
                        {/* 1. SECCIÓN DE LA FOTO (SLIDER) */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-4">
                            
                            <div className="relative w-full max-w-xl xl:max-w-[600px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white select-none">
                                
                                {/* IMAGEN DESPUÉS (Fondo) */}
                                <img 
                                    src={casoActual.imagenDespues} 
                                    alt="Después del tratamiento" 
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                />

                                {/* IMAGEN ANTES (Frente, recortada) */}
                                <div 
                                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                                >
                                    <img 
                                        src={casoActual.imagenAntes} 
                                        alt="Antes del tratamiento" 
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                    />
                                </div>

                                {/* LÍNEA Y BOTÓN CENTRAL */}
                                <div 
                                    className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                    style={{ left: `calc(${sliderPosition}% - 2px)` }}
                                >
                                    <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#F2BDC7]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* ETIQUETAS ANTES / DESPUÉS (APLICADO: font-GFSDidot y font-normal) */}
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#291840] font-normal px-5 py-2 rounded-full text-sm tracking-widest shadow-sm font-GFSDidot pointer-events-none">
                                    ANTES
                                </div>
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#F2BDC7] font-normal px-5 py-2 rounded-full text-sm tracking-widest shadow-sm font-GFSDidot pointer-events-none">
                                    DESPUÉS
                                </div>

                                {/* INPUT RANGE INVISIBLE */}
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={sliderPosition} 
                                    onChange={(e) => setSliderPosition(e.target.value)}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                                    aria-label="Control deslizante de comparación"
                                />
                            </div>
                        </div>

                        {/* 2. SECCIÓN DEL TEXTO Y CONTROLES */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-4">
                            
                            {/* Etiqueta del Número de Caso */}
                            <span className="bg-white text-[#291840] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm border border-[#F2BDC7]/30 font-Montserrat mb-4">
                                Caso {currentIndex + 1} de {casos.length}
                            </span>
                            
                            {/* APLICADO: font-GFSDidot y font-normal en el título del caso */}
                            <h3 className="text-3xl sm:text-4xl font-normal text-[#291840] mb-4 font-GFSDidot">
                                {casoActual.titulo}
                            </h3>
                            
                            {/* APLICADO: font-Montserrat en la descripción */}
                            <p className="text-base sm:text-lg text-[#615573] font-Montserrat mb-8 max-w-lg leading-relaxed">
                                {casoActual.descripcion}
                            </p>

                            {/* FLECHAS DE NAVEGACIÓN */}
                            {casos.length > 1 && (
                                <div className="flex items-center gap-6 mb-8">
                                    <button 
                                        onClick={prevCase}
                                        className="w-12 h-12 bg-white rounded-full shadow-md text-[#291840] hover:bg-[#F2BDC7] hover:text-white transition-colors flex items-center justify-center focus:outline-none"
                                        aria-label="Caso anterior"
                                    >
                                        <svg className="w-5 h-5 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    
                                    <button 
                                        onClick={nextCase}
                                        className="w-12 h-12 bg-white rounded-full shadow-md text-[#291840] hover:bg-[#F2BDC7] hover:text-white transition-colors flex items-center justify-center focus:outline-none"
                                        aria-label="Siguiente caso"
                                    >
                                        <svg className="w-5 h-5 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}

                            {/* APLICADO: font-GFSDidot y font-normal en el botón importante */}
                            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] px-8 py-3.5 rounded-full font-normal transition-all duration-300 shadow-xl text-lg font-GFSDidot uppercase tracking-wider">
                                Agenda tu evaluación
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* ONDA INFERIOR */}
            <div className="w-full leading-none bg-[#F2F2F2]">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#FDF6F4" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default BeforeAfterSection;