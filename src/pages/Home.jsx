import Hero from '../components/Hero';
import DoctorSection from '../components/DoctorSection';
import BrandsMarquee from '../components/BrandsMarquee';
import FeaturedProducts from '../components/FeaturedProducts';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import PromotionsSection from '../components/PromotionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsSection from '../components/NewsSection';
import CtaBanner from '../components/CtaBanner';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="w-full bg-white flex flex-col">
            <Navbar />
            
            {/* 1. Hero, Bienvenida e Indicadores */}
            <Hero />
            
            {/* 2. Servicios Destacadas */}
            <ServicesSection />
            
            {/* 3. Resultados Interactivos (Antes y Después) */}
            <BeforeAfterSection />
            
            {/* 4. Testimonios de Pacientes */}
            <TestimonialsSection />
            
            {/* 5. Noticias (Nuevo Componente) */}
            <NewsSection />
            
            {/* 6. Paquetes y Promociones */}
            <PromotionsSection />
            
            {/* 7. Productos de Cuidado en Casa */}
            <FeaturedProducts />
            
            {/* 8. Carrusel infinito de Marcas */}
            <BrandsMarquee />

        </div>
    );
};

export default Home;