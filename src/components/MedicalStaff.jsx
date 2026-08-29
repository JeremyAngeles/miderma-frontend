import { useState } from 'react';

const staffMedicos = [
    {
        id: 1,
        nombre: "DR. HÉCTOR CÁCERES RÍOS (DIRECTOR)",
        rol: "Director Médico",
        cmp: "CMP 17740 | RNE 9220",
        titulo: "Médico-cirujano en Universidad Nacional Mayor de San Marcos. Titulado tanto en dermatología clínica y quirúrgica, dermatología pediátrica y especializado en dermatología estética.",
        postgrado: "Tiene estudios de especialización en Estados Unidos, México, Venezuela y Argentina; asiste constantemente a congresos de la especialidad en calidad de invitado como conferencista internacional; ha realizado múltiples publicaciones en revistas nacionales e internacionales.",
        imagen: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nombre: "DRA. PATRICIA CARDOZA CASTILLO",
        rol: "Dermatóloga Clínica y Estética",
        cmp: "CMP 45210 | RNE 18450",
        titulo: "Médico-cirujano especialista en Dermatología con formación integral en tecnologías láser, cuidado estético y afecciones severas de la piel.",
        postgrado: "Máster en Dermatología Estética Avanzada. Múltiples rotaciones y pasantías en reconocidas clínicas dermatológicas de Europa y Latinoamérica.",
        imagen: "https://images.unsplash.com/photo-1594824436998-df404c000bd5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nombre: "DR. MISAEL PADILLA DIAZ",
        rol: "Cirujano Dermatólogo",
        cmp: "CMP 55120 | RNE 22100",
        titulo: "Especialista en Dermatología Quirúrgica y Oncología Cutánea. Dedicado a procedimientos de alta precisión y mínima invasión.",
        postgrado: "Especialización avanzada en cirugía dermatológica y reconstrucción facial. Asistente y ponente activo en congresos nacionales e internacionales.",
        imagen: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        nombre: "DR. JOEL LEONIDAS CHALCO HUAMAN",
        rol: "Dermatólogo Especialista",
        cmp: "CMP 61023 | RNE 27800",
        titulo: "Médico Especialista enfocado en patologías complejas de la piel, tricología (caída del cabello) y cuidado de uñas.",
        postgrado: "Diplomado en fototerapia y tratamientos con luz pulsada. Miembro activo del CILAD.",
        imagen: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
    }
];

const MedicalStaff = () => {
    const [openId, setOpenId] = useState(1); // Abre el primer doctor por defecto

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-miderma-light text-miderma-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                
                {/* Cabecera de la Sección */}
                <div className="text-center mb-12">
                    <span className="font-extrabold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-pink">
                        A medida que crecemos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark mb-4 font-serif">
                        Nuestro Staff Médico
                    </h2>
                    <p className="text-miderma-purple max-w-2xl mx-auto text-sm sm:text-base">
                        Un equipo de profesionales altamente calificados, en constante capacitación para brindarte la mejor atención dermatológica y estética.
                    </p>
                </div>

                {/* Foto Grupal (Opcional, representativa) */}
                <div className="w-full mb-12 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(41,24,64,0.1)] border-[6px] border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80" 
                        alt="Staff Médico Miderma" 
                        className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
                    />
                </div>

                {/* Acordeón de Doctores */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col divide-y divide-gray-100">
                    {staffMedicos.map((doctor) => (
                        <div key={doctor.id} className="flex flex-col">
                            
                            {/* Header del Acordeón */}
                            <button 
                                onClick={() => toggleAccordion(doctor.id)}
                                className="flex justify-between items-center w-full px-6 py-5 sm:px-8 sm:py-6 text-left hover:bg-miderma-pink/5 transition-colors duration-300 focus:outline-none group"
                            >
                                <span className={`font-bold text-sm sm:text-base transition-colors duration-300 ${openId === doctor.id ? 'text-miderma-pink' : 'text-gray-500 group-hover:text-miderma-dark'}`}>
                                    {doctor.nombre}
                                </span>
                                <div className="flex-shrink-0 ml-4">
                                    {openId === doctor.id ? (
                                        <svg className="w-5 h-5 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-miderma-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                        </svg>
                                    )}
                                </div>
                            </button>

                            {/* Contenido Expandible (Truco de Grid para animación fluida) */}
                            <div className={`grid transition-all duration-500 ease-in-out ${openId === doctor.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                        
                                        {/* Foto del Doctor */}
                                        <div className="w-full md:w-1/3 flex-shrink-0">
                                            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-gray-50">
                                                <img 
                                                    src={doctor.imagen} 
                                                    alt={doctor.nombre} 
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            </div>
                                        </div>

                                        {/* Información del Doctor */}
                                        <div className="w-full md:w-2/3 flex flex-col">
                                            <h3 className="text-2xl sm:text-3xl font-extrabold text-miderma-dark mb-2 font-serif capitalize">
                                                {doctor.nombre.toLowerCase()}
                                            </h3>
                                            
                                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                                <span className="bg-miderma-pink text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {doctor.rol}
                                                </span>
                                                <span className="text-xs sm:text-sm font-semibold text-miderma-purple">
                                                    Médico colegiado ({doctor.cmp})
                                                </span>
                                            </div>

                                            <div className="space-y-5">
                                                <div>
                                                    <h4 className="font-bold text-miderma-dark text-sm uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">
                                                        Título Profesional
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        {doctor.titulo}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="font-bold text-miderma-dark text-sm uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">
                                                        Post - Grado
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                        {doctor.postgrado}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MedicalStaff;