import { Link } from 'react-router-dom';

const DoctorSection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 relative z-10 bg-[#FDF6F4] text-miderma-dark"> 
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* FOTO DE LA DOCTORA */}
                <div className="w-full lg:w-1/2 flex justify-center relative px-4 lg:px-0">
                    <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-miderma-pink/20 rounded-full blur-3xl -z-10"></div>
                    <img 
                        src="/doctora.png" 
                        alt="Doctora Dermatóloga" 
                        className="w-full max-w-[280px] sm:max-w-md h-auto object-contain rounded-[40px] border-[6px] sm:border-[8px] border-white shadow-2xl ring-4 ring-miderma-pink/30"
                    />
                </div>

                {/* INFORMACIÓN CURRICULAR */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <span className="font-extrabold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-purple opacity-80">
                        Dirección Médica
                    </span>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                        Pasión, ciencia y empatía <br className="hidden lg:block"/> 
                        en cada consulta.
                    </h2>
                    
                    <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 opacity-90 text-gray-700">
                        Médico especialista en Dermatología Clínica, Estética y Láser. 
                        Profesional enfocada en brindar una atención con <strong>alta empatía y calidez humana</strong> hacia el paciente.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
                        <span className="bg-white text-miderma-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm border border-miderma-pink/30 tracking-wide">
                            CMP: 68795
                        </span>
                        <span className="bg-white text-miderma-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm border border-miderma-pink/30 tracking-wide">
                            RNE: 050681
                        </span>
                    </div>

                    {/* ==============================================
                        GRID DE FORMACIÓN CORREGIDO (Siempre Horizontal)
                    ============================================== */}
                    <h4 className="font-bold border-b-2 border-miderma-dark/10 pb-2 mb-4 sm:mb-6 text-base sm:text-lg">Formación Académica e Internacional</h4>
                    
                    {/* grid-cols-2 mantiene 2 columnas. gap-2 lo hace compacto en celular */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-8 sm:mb-10 text-left">
                        
                        {/* 1. Univ San Luis */}
                        <div className="flex flex-row items-center gap-2 sm:gap-4 bg-white/60 p-2.5 sm:p-4 rounded-xl shadow-sm border border-white">
                            <img src="/logo-unica.png" alt="UNICA" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight line-clamp-2">Univ. San Luis G.</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Pregrado</p>
                            </div>
                        </div>

                        {/* 2. Hosp. Dos de Mayo */}
                        <div className="flex flex-row items-center gap-2 sm:gap-4 bg-white/60 p-2.5 sm:p-4 rounded-xl shadow-sm border border-white">
                            <img src="/logo-unmsm.png" alt="UNMSM" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight line-clamp-2">Hosp. Dos de Mayo</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Posgrado</p>
                            </div>
                        </div>

                        {/* 3. Hospital Italiano */}
                        <div className="flex flex-row items-center gap-2 sm:gap-4 bg-white/60 p-2.5 sm:p-4 rounded-xl shadow-sm border border-white">
                            <img src="/logo-italiano.png" alt="Hospital Italiano" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight">Hosp. Italiano</p>
                                    <img src="/bandera-argentina.png" alt="Argentina" className="w-3 h-2 sm:w-4 sm:h-3 object-cover rounded-sm shrink-0" />
                                </div>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Pasantía B.A.</p>
                            </div>
                        </div>

                        {/* 4. CILAD */}
                        <div className="flex flex-row items-center gap-2 sm:gap-4 bg-white/60 p-2.5 sm:p-4 rounded-xl shadow-sm border border-white">
                            <img src="/logo-cilad.png" alt="CILAD" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col">
                                <p className="font-bold text-[10px] sm:text-sm text-miderma-dark leading-tight">CILAD 2024</p>
                                <p className="text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">Diplomado Estética</p>
                            </div>
                        </div>

                        {/* 5. ADEV (Ocupa las 2 columnas con 'col-span-2') */}
                        <div className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 bg-white/60 p-2.5 sm:p-4 rounded-xl shadow-sm border border-white col-span-2">
                            <img src="/logo-adev.png" alt="ADEV" className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0" />
                            <div className="flex flex-col text-left">
                                <div className="flex items-center gap-1.5">
                                    <p className="font-bold text-[11px] sm:text-sm text-miderma-dark leading-tight">ADEV 2025</p>
                                    <img src="/bandera-espana.png" alt="España" className="w-3.5 h-2.5 sm:w-4 sm:h-3 object-cover rounded-sm shrink-0" />
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">Ecografía Cutánea</p>
                            </div>
                        </div>

                    </div>

                    <Link to="/sobre-mi" className="inline-flex items-center justify-center gap-2 bg-miderma-dark hover:bg-miderma-purple text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-xl text-base sm:text-lg w-full sm:w-auto group">
                        Más sobre mí
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DoctorSection;