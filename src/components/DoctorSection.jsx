import { useState } from 'react';

const DoctorSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 px-4 sm:px-6 relative z-10 bg-[#FDF6F4] text-miderma-dark overflow-hidden"> 
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* FOTO DE LA DOCTORA */}
                <div className="w-full lg:w-1/2 flex justify-center relative px-4 lg:px-0">
                    <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-miderma-pink/20 rounded-full blur-3xl -z-10"></div>
                    <img 
                        src="/doctora.png" 
                        alt="Dra. Rudid Huamaní" 
                        className="w-full max-w-[280px] sm:max-w-md h-auto object-contain rounded-[40px] border-[6px] sm:border-[8px] border-white shadow-2xl ring-4 ring-miderma-pink/30"
                    />
                </div>

                {/* INFORMACIÓN CURRICULAR */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <span className="font-extrabold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-purple opacity-80">
                        Dirección Médica y Fundadora
                    </span>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-serif text-[#291840]">
                        Dra. Rudid Huamaní
                    </h2>
                    
                    {/* RESUMEN CORTO EN LA PÁGINA PRINCIPAL */}
                    <p className="text-base sm:text-lg leading-relaxed mb-8 opacity-90 text-gray-700">
                        Médico especialista en Dermatología Clínica, Estética y Láser. 
                        Profesional enfocada en brindar una atención con <strong>alta empatía y calidez humana</strong> hacia el paciente.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-10">
                        <span className="bg-white text-miderma-dark px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm border border-miderma-pink/50 tracking-wide">
                            CMP: 68795
                        </span>
                        <span className="bg-white text-miderma-dark px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm border border-miderma-pink/50 tracking-wide">
                            RNE: 050681
                        </span>
                    </div>

                    {/* ==============================================
                        GRID DE FORMACIÓN
                    ============================================== */}
                    <h4 className="font-bold border-b-2 border-miderma-dark/10 pb-2 mb-6 text-base sm:text-lg text-[#291840]">Formación Académica e Internacional</h4>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-10 text-left">
                        
                        {/* 1. Univ San Luis */}
                        <div className="flex flex-row items-center gap-3 bg-white/80 p-3 sm:p-4 rounded-xl shadow-sm border border-white hover:border-miderma-pink/50 transition-colors">
                            <img src="/logo-unica.png" alt="UNICA" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight line-clamp-2">Univ. San Luis G.</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Pregrado</p>
                            </div>
                        </div>

                        {/* 2. Hosp. Dos de Mayo */}
                        <div className="flex flex-row items-center gap-3 bg-white/80 p-3 sm:p-4 rounded-xl shadow-sm border border-white hover:border-miderma-pink/50 transition-colors">
                            <img src="/logo-unmsm.png" alt="UNMSM" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight line-clamp-2">Hosp. Dos de Mayo</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Posgrado UNMSM</p>
                            </div>
                        </div>

                        {/* 3. Hospital Italiano */}
                        <div className="flex flex-row items-center gap-3 bg-white/80 p-3 sm:p-4 rounded-xl shadow-sm border border-white hover:border-miderma-pink/50 transition-colors">
                            <img src="/logo-italiano.png" alt="Hospital Italiano" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight">Hosp. Italiano</p>
                                    <img src="/bandera-argentina.png" alt="Argentina" className="w-3 h-2 sm:w-4 sm:h-3 object-cover rounded-sm shrink-0" />
                                </div>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Pasantía Dermatología</p>
                            </div>
                        </div>

                        {/* 4. CILAD */}
                        <div className="flex flex-row items-center gap-3 bg-white/80 p-3 sm:p-4 rounded-xl shadow-sm border border-white hover:border-miderma-pink/50 transition-colors">
                            <img src="/logo-cilad.png" alt="CILAD" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight">CILAD 2024</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Diplomado Estética</p>
                            </div>
                        </div>

                        {/* 5. ADEV (Ocupa las 2 columnas) */}
                        <div className="flex flex-row items-center justify-center sm:justify-start gap-3 bg-white/80 p-3 sm:p-4 rounded-xl shadow-sm border border-white hover:border-miderma-pink/50 transition-colors col-span-2">
                            <img src="/logo-adev.png" alt="ADEV" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col text-left">
                                <div className="flex items-center gap-2">
                                    <p className="font-bold text-[11px] sm:text-sm text-miderma-dark leading-tight">ADEV 2025</p>
                                    <img src="/bandera-espana.png" alt="España" className="w-3.5 h-2.5 sm:w-4 sm:h-3 object-cover rounded-sm shrink-0" />
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">Diplomado en Ecografía Cutánea</p>
                            </div>
                        </div>

                    </div>

                    {/* BOTÓN PARA ABRIR EL MODAL */}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 bg-miderma-dark hover:bg-miderma-pink text-white hover:text-miderma-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-sm sm:text-base uppercase tracking-wider w-full sm:w-auto group"
                    >
                        Más sobre mí
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ==============================================
                MODAL (VENTANA EMERGENTE) CON LA INFO COMPLETA
            ============================================== */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
                    {/* Fondo oscuro difuminado */}
                    <div 
                        className="absolute inset-0 bg-[#291840]/60 backdrop-blur-sm transition-opacity" 
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    
                    {/* Contenedor del Modal */}
                    <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl p-6 sm:p-10 animate-slide-up custom-scrollbar">
                        
                        {/* Botón Cerrar */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 w-10 h-10 bg-[#F2F2F2] hover:bg-[#F2BDC7] text-[#291840] rounded-full flex items-center justify-center transition-colors shadow-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="pr-8">
                            <span className="text-[11px] font-bold text-[#F2BDC7] uppercase tracking-widest mb-2 block">
                                Perfil Profesional
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#291840] font-serif mb-6">
                                Dra. Rudid Huamaní
                            </h3>
                            
                            <div className="space-y-4 text-sm sm:text-base text-[#615573] leading-relaxed text-justify">
                                <p>
                                    La Dra. Rudid Huamaní, fundadora y directora médica de Miderma Centro de la Piel, es miembro del Círculo Dermatológico del Perú, del Colegio Ibero-Latinoamericano de Dermatología (CILAD) y de la Asociación Médica Peruana de Láser y Energías Lumínicas.
                                </p>
                                <p>
                                    Su constante actualización la ha llevado a obtener el Diplomado en Ecografía Cutánea ADEV – España 2025 y el Diplomado en Estética CILAD 2024, herramientas que le permiten ofrecer diagnósticos precisos y tratamientos modernos. Complementó su preparación con pasantías en Dermatología en el Hospital Italiano de Buenos Aires, Argentina, y realizó su posgrado en Dermatología en el Hospital Dos de Mayo de la Universidad Nacional Mayor de San Marcos.
                                </p>
                                <p>
                                    Su formación académica se inició en la Facultad de Medicina de la Universidad San Luis Gonzaga de Ica, donde obtuvo el título de médico cirujano. Con registro profesional CMP 68795 y RNE 050681, y más de diez años de experiencia en la práctica privada con más de mil casos atendidos en Lima, la Dra. Huamaní se ha consolidado como una especialista en dermatología clínica y estética.
                                </p>
                                <p>
                                    Combina el rigor médico con una visión estética contemporánea, brindando a cada paciente un cuidado integral para la piel, el cabello y las uñas. Su compromiso es ayudar a sanar, proteger y resaltar la mejor versión de cada persona, siempre con un enfoque humano, seguro y personalizado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slide-up { 
                    from { opacity: 0; transform: translateY(20px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #F2BDC7; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #291840; }
            `}</style>
        </section>
    );
};

export default DoctorSection;