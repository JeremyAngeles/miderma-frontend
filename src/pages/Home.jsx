import Hero from '../components/Hero';
import DoctorSection from '../components/DoctorSection';
import BrandsMarquee from '../components/BrandsMarquee';
import FeaturedProducts from '../components/FeaturedProducts';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import PromotionsSection from '../components/PromotionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaBanner from '../components/CtaBanner';
import Navbar from '../components/Navbar';
const Home = () => {
    return (
        <div className="w-full bg-white flex flex-col">
            <Navbar />
            {/* 1. Hero, Bienvenida e Indicadores */}
            <Hero />
            
            {/* 2. Sobre la Doctora */}
            <DoctorSection />
            
            {/* 3. Carrusel infinito de Marcas */}
            <BrandsMarquee />
            
            {/* 4. Productos de Cuidado en Casa */}
            <FeaturedProducts />
            
            {/* 5. Especialidades Destacadas */}
            <ServicesSection />

            {/* 6. Resultados Interactivos (Antes y Después) */}
            <BeforeAfterSection />

            {/* 7. Paquetes y Promociones */}
            <PromotionsSection />

            {/* 8. NUEVO: Testimonios de Pacientes */}
            <TestimonialsSection />

            {/* 9. NUEVO: Banner Final de Cita con Triangulito */}
            <CtaBanner />

        </div>
    );
};

export default Home;