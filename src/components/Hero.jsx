import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// === CONFIGURACIÓN DE TAMAÑOS Y ESPACIOS DEL HERO ===
// APLICADO: Títulos con el mismo tamaño gigante de las otras secciones
const ESTILOS_HERO = {
    titulo: "text-2xl md:text-5xl lg:text-4xl mb-4 sm:mb-6", 
    subtitulo: "text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 font-medium", 
    boton: "text-sm sm:text-base tracking-wider"
};

// === DATOS DE LAS DIAPOSITIVAS DEL BANNER ===
const slides = [
    {
        id: 1,
        image: "/imagen-chica-banner.png",
        title: <>TU PIEL, NUESTRA ESENCIA Y <br /><span className="text-miderma-pink">PASIÓN.</span></>,
        subtitle: "Dermatología y belleza de la piel", // Solo primera letra mayúscula
        buttonText: "RESERVA TU CITA",
        link: "/contacto"
    },
    {
        id: 2,
        image: "/imagen-chica-banner-b.png",
        title: <>EXPERTOS EN DERMATOLOGÍA <br /><span className="text-miderma-pink">CLÍNICA, ESTÉTICA Y LÁSER.</span></>,
        subtitle: "Innovación y confianza en cada tratamiento", // Solo primera letra mayúscula
        buttonText: "CONOCE MÁS",
        link: "/servicios"
    },
    {
        id: 3,
        image: "/imagen-chica-banner-c.png", 
        title: <>DERMATOLOGÍA CON TECNOLOGÍA <br /><span className="text-miderma-pink"> DE VANGUARDIA.</span></>,        
        subtitle: "Tratamientos personalizados", // Corregido: Solo primera letra mayúscula
        buttonText: "VER TRATAMIENTOS",
        link: "/tratamientos"
    },
    {
        id: 4,
        image: "/imagen-chica-banner-dD.png", 
        title: <>NOSOTROS SOLUCIONAMOS TUS PROBLEMAS <br /><span className="text-miderma-pink">DERMATOLÓGICOS.</span></>,        
        subtitle: "Tecnología y experiencia al servicio de tu piel", // Solo primera letra mayúscula
        buttonText: "CONTÁCTANOS",
        link: "/contacto"
    }
];

const AnimatedCounter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - percentage, 3);
            
            setCount(Math.floor(end * easeOut));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        
        return () => clearInterval(timer);
    }, [currentSlide]); 

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="w-full flex flex-col overflow-hidden bg-white">
            
            {/* ======================================================================================
                NUEVO AJUSTE: MÁS EXTENSO Y TEXTO MÁS ABAJO
            ====================================================================================== */}
            <div className="relative w-full min-h-[85vh] md:min-h-[95vh] lg:min-h-screen pb-20 md:pb-28 lg:pb-36 xl:pb-44 pt-40 flex flex-col justify-end bg-miderma-dark">
                
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <img 
                            src={slide.image} 
                            alt={`Banner Miderma ${index + 1}`} 
                            className="w-full h-full object-cover object-center" 
                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" }}
                        />
                    </div>
                ))}
                
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-miderma-dark/95 via-miderma-dark/50 to-transparent sm:hidden"></div>
                <div className="absolute inset-0 z-10 hidden sm:block bg-gradient-to-r from-miderma-dark/95 via-miderma-dark/60 to-transparent sm:bg-gradient-to-r sm:from-miderma-dark/90 sm:via-miderma-dark/40 sm:to-transparent"></div>

                <button 
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-miderma-pink backdrop-blur-sm rounded-full items-center justify-center text-white hover:text-miderma-dark transition-all duration-300"
                    aria-label="Anterior"
                >
                    <svg className="w-6 h-6 ml-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button 
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-miderma-pink backdrop-blur-sm rounded-full items-center justify-center text-white hover:text-miderma-dark transition-all duration-300"
                    aria-label="Siguiente"
                >
                    <svg className="w-6 h-6 mr-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="relative max-w-4xl text-left -ml-2 lg:-ml-6">
                        
                        {/* CONTENEDOR INVISIBLE (Ocupa espacio para alinear) */}
                        <div className="invisible opacity-0">
                            <h1 className={`${ESTILOS_HERO.titulo} font-GFSDidot font-normal uppercase tracking-tight`}>
                                NOSOTROS SOLUCIONAMOS TUS PROBLEMAS <br />DERMATOLÓGICOS.
                            </h1>
                            <span className={`${ESTILOS_HERO.subtitulo} font-Montserrat block`}>
                                Tecnología y experiencia al servicio de tu piel
                            </span>
                            <div className={`px-8 py-3.5 ${ESTILOS_HERO.boton} font-Montserrat font-bold w-max uppercase`}>
                                Reserva tu Cita
                            </div>
                        </div>

                        {/* DIAPOSITIVAS VISIBLES */}
                        {slides.map((slide, index) => (
                            <div 
                                key={slide.id}
                                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-start transition-all duration-1000 ease-in-out ${
                                    index === currentSlide ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                                }`}
                            >
                                {/* TÍTULO: font-GFSDidot, font-normal, uppercase */}
                                <h1 className={`${ESTILOS_HERO.titulo} font-GFSDidot font-normal text-white leading-[1.15] drop-shadow-lg uppercase tracking-tight`}>
                                    {slide.title}
                                </h1>
                                
                                {/* SUBTÍTULO: font-Montserrat, Solo primera mayúscula (sin clase uppercase) */}
                                <span className={`${ESTILOS_HERO.subtitulo} text-miderma-pink font-Montserrat block drop-shadow-md`}>
                                    {slide.subtitle}
                                </span>
                                
                                {/* BOTÓN: font-Montserrat, font-bold, uppercase */}
                                {/* BOTÓN AJUSTADO: Más chico en celular (px-6 py-2.5 text-xs) y a la izquierda */}
                                {/* BOTÓN MÁS CHICO Y AJUSTADO */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start w-fit">
                                <Link to={slide.link} className={`bg-miderma-pink hover:bg-white text-miderma-dark hover:text-miderma-dark px-4 py-2 sm:px-6 sm:py-3 rounded-full font-Montserrat font-bold transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs md:text-sm tracking-wide uppercase w-fit`}>
                                    {slide.buttonText}
                                </Link>
                            </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* CURVA BLANCA */}
                
            </div>

            <div className="relative w-full bg-white pt-8 md:pt-12 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

                        {/* Carta 1 - Años de Trayectoria */}
                        <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.15)] p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 group">
                            <div className="flex-shrink-0 bg-[#F2BDC7]/10 p-4 rounded-xl transition-colors duration-500">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#F2BDC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                {/* APLICADO: font-GFSDidot, font-normal en el número */}
                                <h4 className="font-normal font-GFSDidot text-[#291840] text-4xl md:text-5xl mb-2">
                                    +10
                                </h4>
                                {/* APLICADO: font-Montserrat, Solo primera mayúscula */}
                                <p className="text-[13px] md:text-sm font-bold text-[#615573] font-Montserrat leading-tight">
                                    Años de trayectoria
                                </p>
                            </div>
                        </div>

                        {/* Carta 2 - Pacientes Atendidos */}
                        <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.15)] p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 group">
                            <div className="flex-shrink-0 bg-[#F2BDC7]/10 p-4 rounded-xl transition-colors duration-500">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#F2BDC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <div>
                                {/* APLICADO: font-GFSDidot, font-normal en el número */}
                                <h4 className="font-normal font-GFSDidot text-[#291840] text-4xl md:text-5xl mb-2">
                                    +3000
                                </h4>
                                {/* APLICADO: font-Montserrat, Solo primera mayúscula */}
                                <p className="text-[13px] md:text-sm font-bold text-[#615573] font-Montserrat leading-tight">
                                    Pacientes atendidos
                                </p>
                            </div>
                        </div>

                        {/* Carta 3 - Pacientes Recomiendan */}
                        <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.15)] p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 group">
                            <div className="flex-shrink-0 bg-[#F2BDC7]/10 p-4 rounded-xl transition-colors duration-500">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-[#F2BDC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39 0.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <div>
                                {/* APLICADO: font-GFSDidot, font-normal en el número */}
                                <h4 className="font-normal font-GFSDidot text-[#291840] text-4xl md:text-5xl mb-2">
                                    9 de 10
                                </h4>
                                {/* APLICADO: font-Montserrat, Solo primera mayúscula */}
                                <p className="text-[13px] md:text-sm font-bold text-[#615573] font-Montserrat leading-tight">
                                    Pacientes recomiendan nuestros tratamientos
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="w-full leading-none bg-white">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>
            
        </section>
    );
};

export default Hero;