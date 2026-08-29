const AboutContent = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FDF6F4] relative overflow-hidden">
            
            {/* Luces sutiles de fondo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F2BDC7]/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#291840]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                {/* =======================================================
                    SECCIÓN 1: INTRODUCCIÓN Y FILOSOFÍA
                ======================================================= */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-[11px] md:text-xs font-bold text-[#F2BDC7] uppercase tracking-widest mb-3 block">
                        Conoce a Miderma Centro de la Piel
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#291840] mb-8 font-serif">Más allá de la belleza</h2>
                    
                    <div className="prose prose-lg mx-auto text-[#615573] leading-relaxed space-y-6">
                        <p>
                            Bienvenidos a Miderma Centro de la Piel, ubicado en el mismo corazón de San Borja. Somos un centro dermatológico integral clínico y estético, que nació con el objetivo de acompañar a los pacientes en el cuidado de su piel, cabello y uñas.
                        </p>
                        <p>
                            No sólo nos enfocamos en la salud sino también en la belleza, nos preocupamos en cómo usted se siente y cómo se muestra al mundo. 
                        </p>
                        <div className="bg-white/60 p-6 md:p-8 rounded-[2rem] border-l-4 border-[#F2BDC7] shadow-sm italic my-8">
                            <h4 className="text-lg font-bold text-[#291840] font-serif not-italic mb-3">Nuestra Filosofía</h4>
                            "En Miderma creemos que la salud de la piel, el cabello y las uñas es mucho más que estética: es parte esencial de nuestra identidad y de lo que mostramos a quienes nos rodean. Cuidarlos refleja bienestar, confianza y autoestima."
                        </div>
                    </div>
                </div>

                {/* =======================================================
                    SECCIÓN 2: PROPÓSITO, MISIÓN Y VISIÓN
                ======================================================= */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
                    
                    {/* Tarjeta Propósito */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#F2F2F2] transition-all duration-300 hover:border-[#F2BDC7] hover:shadow-[0_15px_35px_rgba(242,189,199,0.2)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Propósito</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Cuidar y transformar la salud de tu piel para mejorar tu bienestar, confianza y calidad de vida.
                        </p>
                    </div>
                    
                    {/* Tarjeta Misión */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#F2F2F2] transition-all duration-300 hover:border-[#F2BDC7] hover:shadow-[0_15px_35px_rgba(242,189,199,0.2)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Misión</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Brindar diagnósticos certeros y tratamientos dermatológicos personalizados de la más alta calidad, basados estrictamente en la evidencia científica.
                        </p>
                    </div>

                    {/* Tarjeta Visión */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-[#F2F2F2] transition-all duration-300 hover:border-[#F2BDC7] hover:shadow-[0_15px_35px_rgba(242,189,199,0.2)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#FDF6F4] rounded-full flex items-center justify-center mb-6 text-[#291840]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-[#291840] font-serif tracking-wide">Visión</h3>
                        <p className="text-sm text-[#615573] leading-relaxed">
                            Ser la clínica dermatológica líder, referente en innovación y excelencia médica, reconocida por nuestra atención integral y humanizada.
                        </p>
                    </div>
                </div>

                {/* =======================================================
                    SECCIÓN 3: PILARES Y DIFERENCIADORES
                ======================================================= */}
                <div className="max-w-6xl mx-auto mb-24">
                    <div className="text-center mb-12">
                        <span className="font-extrabold tracking-[0.2em] uppercase mb-3 block text-[11px] text-[#F2BDC7]">Cuidado Integral</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#291840] font-serif">Los Pilares de una Piel Sana</h2>
                        <p className="text-[#615573] max-w-2xl mx-auto mt-4">
                            Sabemos que una piel sana se construye con hábitos diarios. Por eso, acompañamos a nuestros pacientes con tratamientos respaldados por tecnología avanzada, promoviendo un estilo de vida saludable que potencia los resultados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        
                        <div className="bg-[#F2BDC7]/10 border border-[#F2BDC7]/30 p-8 rounded-[2rem] flex flex-col items-center hover:bg-[#F2BDC7]/20 transition-colors duration-300">
                            <div className="bg-white p-3 rounded-xl shadow-sm mb-4 text-[#291840]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"/></svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#291840] mb-3">Alimentación Equilibrada</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Nutre desde adentro para fortalecer la salud cutánea y prevenir el envejecimiento prematuro.
                            </p>
                        </div>

                        <div className="bg-[#F2BDC7]/10 border border-[#F2BDC7]/30 p-8 rounded-[2rem] flex flex-col items-center hover:bg-[#F2BDC7]/20 transition-colors duration-300">
                            <div className="bg-white p-3 rounded-xl shadow-sm mb-4 text-[#291840]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#291840] mb-3">Actividad Física</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Mejora la circulación, elimina toxinas y aporta vitalidad y luminosidad a todo el organismo.
                            </p>
                        </div>

                        <div className="bg-[#F2BDC7]/10 border border-[#F2BDC7]/30 p-8 rounded-[2rem] flex flex-col items-center hover:bg-[#F2BDC7]/20 transition-colors duration-300">
                            <div className="bg-white p-3 rounded-xl shadow-sm mb-4 text-[#291840]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#291840] mb-3">Bienestar Emocional</h4>
                            <p className="text-sm text-[#615573] leading-relaxed">
                                Sentirnos bien impacta directamente en cómo nos vemos. Una mente sana se refleja en tu piel.
                            </p>
                        </div>

                    </div>
                </div>

                {/* =======================================================
                    SECCIÓN 4: NUESTROS VALORES
                ======================================================= */}
                <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(41,24,64,0.05)] border border-[#F2F2F2]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#291840] font-serif">Nuestros Valores</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                        
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#F2BDC7]"></span>
                                <h4 className="text-lg font-bold text-[#291840]">Ética Médica</h4>
                            </div>
                            <p className="text-[#615573] text-sm pl-5 border-l border-[#F2F2F2]">
                                Actuamos con honestidad, responsabilidad y rigor científico en cada diagnóstico y tratamiento.
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#F2BDC7]"></span>
                                <h4 className="text-lg font-bold text-[#291840]">Empatía</h4>
                            </div>
                            <p className="text-[#615573] text-sm pl-5 border-l border-[#F2F2F2]">
                                Escuchamos activamente y comprendemos las necesidades individuales de cada paciente.
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#F2BDC7]"></span>
                                <h4 className="text-lg font-bold text-[#291840]">Excelencia</h4>
                            </div>
                            <p className="text-[#615573] text-sm pl-5 border-l border-[#F2F2F2]">
                                Buscamos la mejora continua a través de la actualización médica y de la más alta tecnología.
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#F2BDC7]"></span>
                                <h4 className="text-lg font-bold text-[#291840]">Transparencia</h4>
                            </div>
                            <p className="text-[#615573] text-sm pl-5 border-l border-[#F2F2F2]">
                                Ofrecemos información clara y honesta sobre los procesos y expectativas de cada tratamiento.
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#F2BDC7]"></span>
                                <h4 className="text-lg font-bold text-[#291840]">Pasión</h4>
                            </div>
                            <p className="text-[#615573] text-sm pl-5 border-l border-[#F2F2F2]">
                                Nos entusiasma el cuidado de la piel y el bienestar integral de quienes confían en nosotros.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutContent;