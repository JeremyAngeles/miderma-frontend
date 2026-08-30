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
    const [zoomedImage, setZoomedImage] = useState(null); // Estado para controlar la foto en pantalla completa

    const casoActual = casos[currentIndex];

    // Función para cerrar la imagen en pantalla completa
    const closeZoom = () => setZoomedImage(null);

    return (
        // AQUÍ AGREGAMOS EL id="resultados" PARA QUE EL NAVBAR PUEDA LLEGAR AQUÍ
        <section id="resultados" className="w-full relative z-10 overflow-hidden flex flex-col -mt-[1px]">
            
            {/* ONDA SUPERIOR: Transición de la sección anterior a Resultados */}
            <div className="w-full leading-none bg-white">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>

            {/* CONTENIDO PRINCIPAL (Diseño más amplio y horizontal) */}
            <div className="bg-[#F2F2F2] pt-12 pb-16 px-4 sm:px-6 flex-grow">
                <div className="max-w-[85rem] mx-auto w-full flex flex-col items-center">
                    
                    {/* TEXTO SUPERIOR CENTRADO */}
                    <div className="w-full text-center mb-12">
                        <span className="font-extrabold tracking-widest uppercase mb-3 block text-sm text-[#F2BDC7]">
                            Resultados Reales
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#291840] mb-6 font-serif">
                            Transformamos vidas y pieles
                        </h2>
                        <p className="text-lg leading-relaxed text-[#615573] max-w-3xl mx-auto">
                            Diseñamos protocolos personalizados que garantizan resultados naturales y seguros. Haz clic en las imágenes para ampliarlas y ver los detalles de la evolución de nuestros pacientes.
                        </p>
                    </div>

                    {/* CONTENEDOR DE IMÁGENES (Lado a lado en PC, apiladas en móvil) */}
                    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center">
                        
                        {/* FOTO ANTES */}
                        <div 
                            className="w-full lg:w-1/2 relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center"
                            onClick={() => setZoomedImage(casoActual.imagenAntes)}
                        >
                            <img 
                                src={casoActual.imagenAntes} 
                                alt="Antes del tratamiento" 
                                className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                            />
                            {/* Etiqueta */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-[#291840] font-extrabold px-6 py-2 rounded-full text-sm tracking-wider shadow-md">
                                ANTES
                            </div>
                            {/* Icono de Lupa flotante al pasar el mouse (Solo PC) */}
                            <div className="absolute inset-0 bg-[#291840]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white text-[#291840] p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* FOTO DESPUÉS */}
                        <div 
                            className="w-full lg:w-1/2 relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center"
                            onClick={() => setZoomedImage(casoActual.imagenDespues)}
                        >
                            <img 
                                src={casoActual.imagenDespues} 
                                alt="Después del tratamiento" 
                                className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                            />
                            {/* Etiqueta */}
                            <div className="absolute top-6 right-6 bg-[#F2BDC7] text-white font-extrabold px-6 py-2 rounded-full text-sm tracking-wider shadow-md">
                                DESPUÉS
                            </div>
                            {/* Icono de Lupa flotante al pasar el mouse (Solo PC) */}
                            <div className="absolute inset-0 bg-[#F2BDC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white text-[#F2BDC7] p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TITULO Y DESCRIPCIÓN DEL CASO DEBAJO DE LAS FOTOS */}
                    <div className="text-center mt-10 max-w-2xl bg-white p-6 rounded-[2rem] shadow-sm border border-[#F2F2F2] w-full">
                        <h3 className="text-2xl font-bold text-[#291840] mb-2 font-serif">{casoActual.titulo}</h3>
                        <p className="text-[#615573] text-sm md:text-base">{casoActual.descripcion}</p>
                    </div>

                    {/* CONTROLES PARA CAMBIAR DE CASO */}
                    <div className="flex justify-center gap-3 mt-8 z-10">
                        {casos.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-3 rounded-full transition-all duration-500 ease-out ${
                                    currentIndex === idx ? 'w-12 bg-[#F2BDC7] shadow-md' : 'w-3 bg-gray-300 hover:bg-[#F2BDC7]/60'
                                }`}
                                aria-label={`Ver caso ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* BOTÓN AGENDA (Centrado abajo) */}
                    <div className="w-full text-center mt-12 z-10">
                        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-lg">
                            Agenda tu evaluación
                        </Link>
                    </div>

                </div>
            </div>

            {/* ONDA INFERIOR: Transición de Resultados a la siguiente sección */}
            <div className="w-full leading-none bg-[#F2F2F2]">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#FDF6F4" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>
            
            {/* ==============================================
                MODAL (LUPA) PARA ZOOM DE IMAGEN EN CELULAR Y PC
            ============================================== */}
            {zoomedImage && (
                <div 
                    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
                    onClick={closeZoom} // Cierra al tocar el fondo
                >
                    {/* Botón de cerrar superior */}
                    <button 
                        onClick={closeZoom}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#F2BDC7] text-white rounded-full flex items-center justify-center transition-colors z-50"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Imagen ampliada (Soporta zoom con los dedos nativo del celular) */}
                    <img 
                        src={zoomedImage} 
                        alt="Zoom Resultado" 
                        className="w-full max-w-5xl max-h-[90vh] object-contain select-none"
                        onClick={(e) => e.stopPropagation()} // Evita que se cierre al tocar la imagen misma
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