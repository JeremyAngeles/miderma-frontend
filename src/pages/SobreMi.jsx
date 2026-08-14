import Navbar from '../components/Navbar';
import Congresses from '../components/Congresses';
import AboutContent from '../components/AboutContent';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';

const SobreMi = () => {
    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Navbar />
            
            {/* HERO SIMPLE PARA LA PÁGINA (Espacio para el Navbar) */}
            <div className="relative w-full pt-32 pb-16 bg-[#FDF6F4] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#291840] mb-4 font-serif">Acerca de Nosotros</h1>
                <div className="w-16 h-1.5 bg-[#F2BDC7] rounded-full"></div>
            </div>

            {/* 1. SECCIÓN DE CONGRESOS (El carrusel horizontal) */}
            <Congresses />

            {/* 2. MISIÓN, VISIÓN, FILOSOFÍA Y DIFERENCIADORES */}
            <AboutContent />

            {/* 3. PREGUNTAS FRECUENTES */}
            <FaqSection />

        </div>
    );
};

export default SobreMi;