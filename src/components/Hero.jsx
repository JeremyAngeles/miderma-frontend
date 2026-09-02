import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    return (
        <section className="w-full flex flex-col overflow-hidden bg-white">
            
            <div className="relative w-full pt-32 pb-32 sm:pt-40 sm:pb-40 md:pt-48 md:pb-52 flex flex-col justify-center">
                
                <div className="absolute inset-0 w-full h-full z-0 bg-miderma-dark"> {/* Le puse fondo oscuro por si quedan bordes al alejar */}
    <img 
        src="/fondoxd.jpeg" 
        alt="Centro Dermatológico Miderma" 
        className="w-full h-full object-contain object-center" /* <-- CAMBIAMOS object-cover POR object-contain */
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-miderma-dark/95 via-miderma-dark/60 to-transparent sm:bg-gradient-to-r sm:from-miderma-dark/90 sm:via-miderma-dark/40 sm:to-transparent"></div>
</div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-6 md:mt-10">
                    <div className="max-w-3xl text-center lg:text-left">
                        
                        <span className="text-miderma-pink font-extrabold tracking-widest uppercase mb-2 sm:mb-3 block text-xs sm:text-sm md:text-base drop-shadow-md">
                            ¡Bienvenidos a Miderma Centro de la Piel!
                        </span>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg">
                            Tu piel, cabello y uñas en <span className="text-miderma-pink">manos expertas.</span>
                        </h1>
                        
                        <div className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-10 font-light leading-relaxed drop-shadow-md mx-auto lg:mx-0 space-y-3 sm:space-y-4">
                            <p>
                                En Miderma Centro de la Piel sabemos que las afecciones de la piel van más allá de lo visible: afectan tu bienestar, tu imagen y tu seguridad.
                            </p>
                            <p>
                                Por eso, cada diagnóstico lo abordamos con rigor médico, sin dejar de lado el cuidado humano y estético que mereces.
                            </p>
                            <p className="hidden sm:block">
                                Combinamos tratamientos dermatológicos avanzados con soluciones estéticas modernas y seguras, diseñadas para ayudarte a sanar, proteger y resaltar la mejor versión de ti.
                            </p>
                            <p className="font-semibold text-white text-base sm:text-xl pt-1 sm:pt-2">
                                Regálale a tu piel el cuidado integral que necesita. <span className="font-bold">Estamos listos para atenderte.</span>
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <Link to="/contacto" className="bg-miderma-pink hover:bg-white text-miderma-dark hover:text-miderma-dark px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-lg">
                                Reserva tu Cita
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] md:h-[120px]">
                        <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" className="fill-white"></path>
                    </svg>
                </div>
            </div>

            <div className="relative w-full bg-white pt-8 md:pt-12 px-4 sm:px-6"> 
    
    <div className="max-w-6xl mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* TARJETA 1: + 10 años de Trayectoria */}
            <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.2)] p-6 md:p-8 flex items-center gap-5 border-2 border-[#F2BDC7] hover:border-[#291840] hover:-translate-y-1 transition-all duration-500 group">
                <div className="flex-shrink-0 bg-[#F2BDC7]/20 p-4 rounded-xl group-hover:bg-[#F2BDC7] transition-colors duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#291840]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <div className="text-left">
                    <h4 className="font-extrabold text-[#291840] text-2xl md:text-3xl mb-0 group-hover:text-[#F2BDC7] transition-colors duration-300">
                        +<AnimatedCounter end={10} duration={2000} />
                    </h4>
                    <p className="text-[11px] font-bold text-[#615573] uppercase tracking-wider">Años de Trayectoria</p>
                </div>
            </div>

            {/* TARJETA 2: + 3000 Pacientes Atendidos */}
            <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.2)] p-6 md:p-8 flex items-center gap-5 border-2 border-[#F2BDC7] hover:border-[#291840] hover:-translate-y-1 transition-all duration-500 group">
                <div className="flex-shrink-0 bg-[#F2BDC7]/20 p-4 rounded-xl group-hover:bg-[#F2BDC7] transition-colors duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#291840]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                </div>
                <div className="text-left">
                    <h4 className="font-extrabold text-[#291840] text-2xl md:text-3xl mb-0 group-hover:text-[#F2BDC7] transition-colors duration-300">
                        +<AnimatedCounter end={3000} duration={2000} />
                    </h4>
                    <p className="text-[11px] font-bold text-[#615573] uppercase tracking-wider">Pacientes Atendidos</p>
                </div>
            </div>

            {/* TARJETA 3: 9 de cada 10 pacientes recomiendan */}
            <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(242,189,199,0.2)] p-6 md:p-8 flex items-center gap-5 border-2 border-[#F2BDC7] hover:border-[#291840] hover:-translate-y-1 transition-all duration-500 group">
                <div className="flex-shrink-0 bg-[#F2BDC7]/20 p-4 rounded-xl group-hover:bg-[#F2BDC7] transition-colors duration-500">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#291840]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                </div>
                <div className="text-left">
                    <h4 className="font-extrabold text-[#291840] text-2xl md:text-3xl mb-0 group-hover:text-[#F2BDC7] transition-colors duration-300">
                        <AnimatedCounter end={9} duration={2000} /> de 10
                    </h4>
                    <p className="text-[11px] font-bold text-[#615573] uppercase tracking-wider leading-tight mt-1">Pacientes recomiendan nuestros tratamientos</p>
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