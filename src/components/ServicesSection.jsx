import { Link } from 'react-router-dom';

const ServicesSection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 relative z-10 bg-white text-miderma-dark overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-miderma-pink/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-miderma-purple/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                
                {/* Título de la Sección */}
                <div className="text-center mb-16 relative z-10">
                    {/* AQUÍ ESTÁ LA FUENTE NUNITO APLICADA SOLO A ESTE TÍTULO */}
                    <h2 className="text-3xl md:text-5xl font-bold text-miderma-dark mb-4 font-nunito">
                        Nuestros Servicios
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Soluciones médicas e innovadoras para recuperar, cuidar y potenciar la salud y belleza de tu piel.
                    </p>
                </div>

                {/* Contenedor Flex para alinear 3 arriba y 2 centrados abajo */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16 relative z-10">
                    
                    {/* 1. Dermatología Clínica */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(242,189,199,0.2)] transition-all duration-500 group border border-miderma-pink/10 hover:-translate-y-2 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
                        <div className="h-64 lg:h-72 overflow-hidden relative">
                            <img src="/especialidad-clinica.jpg" alt="Dermatología Clínica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-miderma-dark/90 via-miderma-dark/20 to-transparent opacity-80"></div>
                            <h3 className="absolute bottom-6 left-6 text-xl xl:text-2xl font-bold text-white leading-tight">Dermatología<br/>Clínica</h3>
                        </div>
                        <div className="p-6 xl:p-8 flex flex-col flex-grow">
                            <p className="text-gray-600 mb-6 flex-grow text-xs xl:text-sm leading-relaxed">
                                Diagnósticos precisos y terapias efectivas. Tratamos enfermedades de la piel, cabellos y uñas con la mayor rigurosidad médica.
                            </p>
                            <ul className="space-y-3 mb-2 mt-auto">
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Acné, rosácea y melasma.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Dermatopatías infantiles y autoinmunes.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Caída de cabello y hongos en uñas.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Dermatología Quirúrgica y Oncológica */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(242,189,199,0.2)] transition-all duration-500 group border border-miderma-pink/10 hover:-translate-y-2 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
                        <div className="h-64 lg:h-72 overflow-hidden relative">
                            <img src="/especialidad-quirurgica.jpg" alt="Dermatología Quirúrgica y Oncológica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-miderma-dark/90 via-miderma-dark/20 to-transparent opacity-80"></div>
                            <h3 className="absolute bottom-6 left-6 text-xl xl:text-2xl font-bold text-white leading-tight">Quirúrgica y<br/>Oncológica</h3>
                        </div>
                        <div className="p-6 xl:p-8 flex flex-col flex-grow">
                            <p className="text-gray-600 mb-6 flex-grow text-xs xl:text-sm leading-relaxed">
                                Abordaje médico especializado para el diagnóstico, extirpación segura y reconstrucción de lesiones cutáneas, priorizando tu salud.
                            </p>
                            <ul className="space-y-3 mb-2 mt-auto">
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Cáncer de piel (Melanoma y No Melanoma).</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Extirpación de lunares y quistes.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Biopsias cutáneas precisas.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Dermatología Estética */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(242,189,199,0.2)] transition-all duration-500 group border border-miderma-pink/10 hover:-translate-y-2 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
                        <div className="h-64 lg:h-72 overflow-hidden relative">
                            <img src="/especialidad-estetica.jpeg" alt="Dermatología Estética" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-miderma-dark/90 via-miderma-dark/20 to-transparent opacity-80"></div>
                            <h3 className="absolute bottom-6 left-6 text-xl xl:text-2xl font-bold text-white leading-tight">Dermatología<br/>Estética</h3>
                        </div>
                        <div className="p-6 xl:p-8 flex flex-col flex-grow">
                            <p className="text-gray-600 mb-6 flex-grow text-xs xl:text-sm leading-relaxed">
                                Mejoramos tu apariencia y prevenimos el envejecimiento con procedimientos seguros, resaltando tu belleza natural.
                            </p>
                            <ul className="space-y-3 mb-2 mt-auto">
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Botox y Ácido Hialurónico.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Bioestimuladores y Mesoterapia.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Rejuvenecimiento láser e IPL.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Dermatología Pediátrica */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(242,189,199,0.2)] transition-all duration-500 group border border-miderma-pink/10 hover:-translate-y-2 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
                        <div className="h-64 lg:h-72 overflow-hidden relative">
                            <img src="/especialidad-pediatrica.webp" alt="Dermatología Pediátrica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-miderma-dark/90 via-miderma-dark/20 to-transparent opacity-80"></div>
                            <h3 className="absolute bottom-6 left-6 text-xl xl:text-2xl font-bold text-white leading-tight">Dermatología<br/>Pediátrica</h3>
                        </div>
                        <div className="p-6 xl:p-8 flex flex-col flex-grow">
                            <p className="text-gray-600 mb-6 flex-grow text-xs xl:text-sm leading-relaxed">
                                Atención especializada para la piel delicada de los niños. Diagnosticamos y tratamos afecciones infantiles, acompañando a la familia.
                            </p>
                            <ul className="space-y-3 mb-2 mt-auto">
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Dermatitis atópica y del pañal.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Sarpullido por calor e Infecciones.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Verrugas y Molusco Contagioso.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Dermocosmética */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(242,189,199,0.2)] transition-all duration-500 group border border-miderma-pink/10 hover:-translate-y-2 flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
                        <div className="h-64 lg:h-72 overflow-hidden relative">
                            <img src="/especialidad-dermocosmetica.jpg" alt="Dermocosmética" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-miderma-dark/90 via-miderma-dark/20 to-transparent opacity-80"></div>
                            <h3 className="absolute bottom-6 left-6 text-xl xl:text-2xl font-bold text-white leading-tight">Dermatología<br/>Cosmética</h3>
                        </div>
                        <div className="p-6 xl:p-8 flex flex-col flex-grow">
                            <p className="text-gray-600 mb-6 flex-grow text-xs xl:text-sm leading-relaxed">
                                Tratamientos especializados para limpiar, nutrir y potenciar el brillo natural, textura y salud de tu piel.
                            </p>
                            <ul className="space-y-3 mb-2 mt-auto">
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Rutinas Skin Care y Peelings.</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Limpieza profunda (Hydrofacial).</li>
                                <li className="flex items-start gap-2 text-xs xl:text-sm text-gray-700"><span className="text-miderma-pink font-bold mt-0.5">✓</span> Dermapen y terapias Luz LED.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Botón Central */}
                <div className="text-center relative z-10">
                    <Link to="/servicios" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-miderma-dark text-miderma-dark hover:bg-miderma-dark hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-xl text-lg w-full sm:w-auto group">
                        Conoce todas nuestras especialidades
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;