const AboutContent = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FDF6F4] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* TEXTO INTRODUCTORIO */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#291840] mb-8 font-serif">Más allá de la belleza</h2>
                    <p className="text-base md:text-lg text-[#615573] mb-5 leading-relaxed">
                        Bienvenidos a Miderma centro de la piel, ubicado en el mismo corazón de San Borja. Somos un centro dermatológico integral clínico y estético, que nació con el objetivo de acompañar a los pacientes en el cuidado de su piel, cabello y uñas.
                    </p>
                    <p className="text-base md:text-lg text-[#615573] leading-relaxed">
                        No sólo nos enfocamos en la salud sino también en la belleza, nos preocupamos en cómo usted se siente y cómo se muestra al mundo. Creemos firmemente que cuidar nuestra piel es cuidar nuestra identidad.
                    </p>
                </div>

                {/* MISIÓN, VISIÓN Y PROPÓSITO (Tarjetas Minimalistas Blancas) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
                    
                    {/* Tarjeta Propósito */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-[#F2BDC7]/40 transition-all duration-300 hover:border-[#F2BDC7] flex flex-col items-center text-center shadow-sm">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Nuestro Propósito</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Brindar un cuidado dermatológico integral clínico y estético, que impacte positivamente en la salud, la autoestima y la calidad de vida de nuestros pacientes.
                        </p>
                    </div>
                    
                    {/* Tarjeta Misión */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-[#F2BDC7]/40 transition-all duration-300 hover:border-[#F2BDC7] flex flex-col items-center text-center shadow-sm">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v19" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Nuestra Misión</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Nos comprometemos a brindar una atención dermatológica segura, con ética profesional y actualizada, a través de diagnósticos precisos y tecnología avanzada.
                        </p>
                    </div>

                    {/* Tarjeta Visión */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-[#F2BDC7]/40 transition-all duration-300 hover:border-[#F2BDC7] flex flex-col items-center text-center shadow-sm">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Nuestra Visión</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Convertirnos en el referente principal para el cuidado de la piel, destacando por nuestra eficiencia médica, calidez humana y compromiso con el bienestar.
                        </p>
                    </div>
                </div>

                {/* =======================================================
                    DIFERENCIADORES (Ahora con Cards color Pastel Rosado)
                ======================================================= */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-extrabold tracking-[0.2em] uppercase mb-3 block text-[11px] text-[#F2BDC7]">Miderma</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#291840] font-serif">¿Qué nos hace diferentes?</h2>
                    </div>

                    {/* Cambiamos las líneas divisorias por tarjetas con fondo rosado pastel (#F2BDC7 con 20% de opacidad) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                        
                        <div className="bg-[#F2BDC7]/20 border border-[#F2BDC7]/40 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center hover:bg-[#F2BDC7]/30 transition-colors duration-300 shadow-sm">
                            <h4 className="text-lg font-bold text-[#291840] mb-4">Resultados Efectivos</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Experimenta resultados transformadores con tratamientos comprobados, diseñados para brindar mejoras notables y resaltar tu belleza natural.
                            </p>
                        </div>

                        <div className="bg-[#F2BDC7]/20 border border-[#F2BDC7]/40 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center hover:bg-[#F2BDC7]/30 transition-colors duration-300 shadow-sm">
                            <h4 className="text-lg font-bold text-[#291840] mb-4">Experiencia Comprobada</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Profesional con especialidad en dermatología, altamente capacitada y calificada, brindando atención experta y segura.
                            </p>
                        </div>

                        <div className="bg-[#F2BDC7]/20 border border-[#F2BDC7]/40 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center hover:bg-[#F2BDC7]/30 transition-colors duration-300 shadow-sm">
                            <h4 className="text-lg font-bold text-[#291840] mb-4">Moderno Equipamiento</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Tecnología de última generación que garantiza tratamientos de alta calidad para resultados óptimos y bienestar incomparable.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutContent;