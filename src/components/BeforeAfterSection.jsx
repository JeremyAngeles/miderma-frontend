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
    const [zoomedImage, setZoomedImage] = useState(null); 

    const casoActual = casos[currentIndex];

    const prevCase = () => {
        setCurrentIndex((prev) => (prev === 0 ? casos.length - 1 : prev - 1));
    };

    const nextCase = () => {
        setCurrentIndex((prev) => (prev === casos.length - 1 ? 0 : prev + 1));
    };

    const closeZoom = () => setZoomedImage(null);

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
            <div className="bg-[#F2F2F2] pt-12 pb-16 px-4 sm:px-6 flex-grow">
                <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center">
                    
                    {/* TEXTO SUPERIOR CENTRADO */}
                    <div className="w-full text-center mb-8">
                        <span className="font-extrabold tracking-widest uppercase mb-3 block text-sm text-[#F2BDC7]">
                            Resultados Reales
                        </span>
                        
                        {/* === AQUÍ SE APLICÓ LA FUENTE NUNITO === */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#291840] mb-6 font-nunito">
                            Transformamos vidas y pieles
                        </h2>

                        <p className="text-lg leading-relaxed text-[#615573] max-w-3xl mx-auto">
                            Diseñamos protocolos personalizados que garantizan resultados naturales y seguros. Haz clic en las imágenes para ampliarlas y ver los detalles de la evolución de nuestros pacientes.
                        </p>
                    </div>

                    {/* TÍTULO Y DESCRIPCIÓN DEL CASO */}
                    <div className="text-center mb-10 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white shadow-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#291840] mb-2 font-serif transition-all duration-300">
                            {casoActual.titulo}
                        </h3>
                        <p className="text-[#615573] text-sm md:text-base transition-all duration-300">
                            {casoActual.descripcion}
                        </p>
                    </div>

                    {/* CONTENEDOR DE FLECHAS E IMÁGENES */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
                        
                        {/* FLECHA IZQUIERDA (Solo visible en PC/Tablet) */}
                        <button 
                            onClick={prevCase}
                            className="hidden md:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg text-[#291840] hover:bg-[#F2BDC7] hover:text-[#291840] transition-all duration-300 transform hover:-translate-x-1 focus:outline-none flex-shrink-0 z-10"
                            aria-label="Caso anterior"
                        >
                            <svg className="w-6 h-6 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        {/* CONTENEDOR FOTOS */}
                        <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 lg:gap-8 items-center justify-center">
                            
                            {/* FOTO ANTES */}
                            <div 
                                className="w-full sm:w-1/2 relative group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center"
                                onClick={() => setZoomedImage(casoActual.imagenAntes)}
                            >
                                <img 
                                    src={casoActual.imagenAntes} 
                                    alt="Antes del tratamiento" 
                                    className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#291840] font-extrabold px-5 py-2 rounded-full text-xs sm:text-sm tracking-wider shadow-sm">
                                    ANTES
                                </div>
                                <div className="absolute inset-0 bg-[#291840]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white text-[#291840] p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* FOTO DESPUÉS */}
                            <div 
                                className="w-full sm:w-1/2 relative group cursor-pointer rounded-[1.5rem] overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center"
                                onClick={() => setZoomedImage(casoActual.imagenDespues)}
                            >
                                <img 
                                    src={casoActual.imagenDespues} 
                                    alt="Después del tratamiento" 
                                    className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                />
                                <div className="absolute top-6 right-6 bg-[#F2BDC7] text-white font-extrabold px-5 py-2 rounded-full text-xs sm:text-sm tracking-wider shadow-sm">
                                    DESPUÉS
                                </div>
                                <div className="absolute inset-0 bg-[#F2BDC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white text-[#F2BDC7] p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* FLECHA DERECHA (Solo visible en PC/Tablet) */}
                        <button 
                            onClick={nextCase}
                            className="hidden md:flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg text-[#291840] hover:bg-[#F2BDC7] hover:text-[#291840] transition-all duration-300 transform hover:translate-x-1 focus:outline-none flex-shrink-0 z-10"
                            aria-label="Siguiente caso"
                        >
                            <svg className="w-6 h-6 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>

                    </div>

                    {/* FLECHAS DE NAVEGACIÓN MÓVIL */}
                    <div className="flex md:hidden items-center justify-center gap-6 mt-8 z-10">
                        <button 
                            onClick={prevCase} 
                            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-[#291840] hover:bg-[#F2BDC7] hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        
                        <span className="text-sm font-bold text-[#615573]">
                            Caso {currentIndex + 1} / {casos.length}
                        </span>

                        <button 
                            onClick={nextCase} 
                            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-[#291840] hover:bg-[#F2BDC7] hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* BOTÓN AGENDA */}
                    <div className="w-full text-center mt-12 z-10">
                        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-lg">
                            Agenda tu evaluación
                        </Link>
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
            
            {/* MODAL ZOOM */}
            {zoomedImage && (
                <div 
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
                    onClick={closeZoom}
                >
                    <button 
                        onClick={closeZoom}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#F2BDC7] text-white rounded-full flex items-center justify-center transition-colors z-50"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img 
                        src={zoomedImage} 
                        alt="Zoom Resultado" 
                        className="w-full max-w-5xl max-h-[90vh] object-contain select-none rounded-2xl"
                        onClick={(e) => e.stopPropagation()} 
                    />
                    <p className="absolute bottom-10 text-white/50 text-sm font-medium animate-pulse pointer-events-none">
                        Toca fuera de la imagen para cerrar
                    </p>
                </div>
            )}
        </section>
    );
};

export default BeforeAfterSection;