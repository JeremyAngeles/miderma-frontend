import Navbar from '../components/Navbar';
import DoctorSection from '../components/DoctorSection';
import Congresses from '../components/Congresses';
import AboutContent from '../components/AboutContent';
import MedicalStaff from '../components/MedicalStaff';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';

const SobreMi = () => {
    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Navbar />
            
            {/* HERO SIMPLE PARA LA PÁGINA (Ajustado para estar más abajo y cerca de la Doctora) */}
            <div className="relative w-full pt-28 md:pt-40 pb-0 bg-[#FDF6F4] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* TEXTITO ROSADITO ARRIBA (Antetítulo) */}
                    <span className="text-[11px] md:text-xs font-bold text-[#F2BDC7] uppercase tracking-widest mb-3 block font-Montserrat">
                        Miderma Centro de la Piel
                    </span>

                    {/* APLICADO: font-GFSDidot, font-normal, text-miderma-dark y uppercase */}
                    <h1 className="text-2xl md:text-5xl font-normal text-miderma-dark mb-4 font-GFSDidot uppercase">
                        Acerca de Nosotros
                    </h1>
                    
                    {/* LÍNEA DECORATIVA ROSADA */}
                    <div className="w-16 h-1.5 bg-[#F2BDC7] rounded-full mb-6"></div>
                    
                    {/* NUEVA DESCRIPCIÓN */}
                    <p className="text-sm md:text-base text-[#615573] max-w-2xl font-Montserrat leading-relaxed">
                        Soy una especialista apasionada por el cuidado integral de tu piel, cabello y uñas, combinando ciencia médica, tecnología avanzada y un trato cálido y humano.
                    </p>
                </div>
                
            </div>

            {/* SECCIÓN DE LA DOCTORA (Director Médico) */}
            <DoctorSection />

            {/* 1. SECCIÓN DE CONGRESOS (El carrusel horizontal) */}
            <Congresses />

            {/* 2. MISIÓN, VISIÓN, FILOSOFÍA Y DIFERENCIADORES */}
            <AboutContent />

            {/* 3. NUESTRO STAFF MÉDICO <MedicalStaff /> (Añadido aquí, arriba de FAQ) */}
            
        </div>
    );
};

export default SobreMi; 