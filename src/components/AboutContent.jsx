const AboutContent = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FDF6F4] text-miderma-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* TEXTO INTRODUCTORIO */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#5A4A42] mb-6">Más allá de la belleza</h2>
                    <p className="text-base md:text-lg text-[#7A6B63] mb-4">
                        Bienvenidos a Miderma centro de la piel, ubicado en el mismo corazón de San Borja. Somos un centro dermatológico integral clínico y estético, que nació con el objetivo de acompañar a los pacientes en el cuidado de su piel, cabello y uñas.
                    </p>
                    <p className="text-base md:text-lg text-[#7A6B63]">
                        No sólo nos enfocamos en la salud sino también en la belleza, nos preocupamos en cómo usted se siente y cómo se muestra al mundo. Creemos firmemente que cuidar nuestra piel es cuidar nuestra identidad.
                    </p>
                </div>

                {/* MISIÓN, VISIÓN Y PROPÓSITO (Tarjetas) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-miderma-pink/10 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-miderma-pink/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-miderma-dark">Nuestro Propósito</h3>
                        <p className="text-sm text-gray-600">Brindar un cuidado dermatológico integral clínico y estético, que impacte positivamente en la salud, la autoestima y la calidad de vida de nuestros pacientes.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-miderma-pink/10 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-miderma-pink/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-miderma-dark">Nuestra Misión</h3>
                        <p className="text-sm text-gray-600">Nos comprometemos a brindar una atención dermatológica segura, con ética profesional y actualizada, a través de diagnósticos precisos y tecnología avanzada.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-miderma-pink/10 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-miderma-pink/10 rounded-2xl flex items-center justify-center mb-6">
                            <span className="text-2xl">👁️</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-miderma-dark">Nuestra Visión</h3>
                        <p className="text-sm text-gray-600">Convertirnos en el referente principal para el cuidado de la piel, destacando por nuestra eficiencia médica, calidez humana y compromiso con el bienestar.</p>
                    </div>
                </div>

                {/* DIFERENCIADORES */}
                <div className="text-center mb-12">
                    <span className="font-extrabold tracking-widest uppercase mb-2 block text-xs text-miderma-pink">Miderma</span>
                    <h2 className="text-3xl font-extrabold text-[#5A4A42]">¿Qué nos hace diferentes?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-miderma-pink/20">
                    <div className="py-6 md:py-0 md:px-6">
                        <h4 className="text-lg font-bold text-miderma-purple mb-3">Resultados Efectivos</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Experimenta resultados transformadores con tratamientos comprobados, diseñados para brindar mejoras notables y resaltar tu belleza natural.</p>
                    </div>
                    <div className="py-6 md:py-0 md:px-6">
                        <h4 className="text-lg font-bold text-miderma-purple mb-3">Experiencia Comprobada</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Profesional con especialidad en dermatología, altamente capacitada y calificada, brindando atención experta y segura.</p>
                    </div>
                    <div className="py-6 md:py-0 md:px-6">
                        <h4 className="text-lg font-bold text-miderma-purple mb-3">Moderno Equipamiento</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Tecnología de última generación que garantiza tratamientos de alta calidad para resultados óptimos y bienestar incomparable.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutContent;