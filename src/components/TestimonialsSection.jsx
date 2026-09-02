import { useState, useEffect } from 'react';

// Hemos agregado fotos de perfil de un banco de imágenes gratuito para que se vea real
const testimonios = [
    { 
        id: 1, 
        nombre: "Lucía Fernández", 
        tratamiento: "Tratamiento de Acné", 
        texto: "El tratamiento fue increíble, cambió mi confianza totalmente. Mi piel nunca ha lucido tan sana y limpia.", 
        imagen: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    { 
        id: 2, 
        nombre: "Camila Rodríguez", 
        tratamiento: "Rejuvenecimiento", 
        texto: "Resultados muy naturales y un equipo médico de primera. Te explican cada paso con mucha paciencia.", 
        imagen: "https://randomuser.me/api/portraits/women/68.jpg" 
    },
    { 
        id: 3, 
        nombre: "María Paz Gómez", 
        tratamiento: "Depilación Láser", 
        texto: "La mejor decisión que pude tomar para el cuidado de mi piel. Desde la primera sesión noté la diferencia.", 
        imagen: "https://randomuser.me/api/portraits/women/90.jpg" 
    },
    { 
        id: 4, 
        nombre: "Elena Salas", 
        tratamiento: "Dermocosmética", 
        texto: "Súper profesional, me explicaron todo detalladamente. Ahora tengo una rutina en casa que realmente funciona.", 
        imagen: "https://randomuser.me/api/portraits/women/32.jpg" 
    },
    { 
        id: 5, 
        nombre: "Sofía Torres", 
        tratamiento: "Limpieza Facial", 
        texto: "La tecnología es de otro nivel, quedé fascinada con los cambios. El ambiente es súper relajante y exclusivo.", 
        imagen: "https://randomuser.me/api/portraits/women/12.jpg" 
    },
    { 
        id: 6, 
        nombre: "Carlos Ruiz", 
        tratamiento: "Dermatología Clínica", 
        texto: "La atención y el seguimiento son excelentes, muy recomendado. Solucionaron un problema que arrastraba por años.", 
        imagen: "https://randomuser.me/api/portraits/men/32.jpg" 
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambia el testimonio automáticamente cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonios.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-[#FDF6F4] text-miderma-dark overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* VIDEO / FOTO (Izquierda en PC, Arriba en Celular) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start xl:justify-center">
                    
                    {/* AQUÍ SE AGRANDÓ EL TAMAÑO (de max-w-500px pasó a 650px y 700px) */}
                    <div className="w-full max-w-[600px] lg:max-w-[650px] xl:max-w-[700px] aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 sm:border-8 border-white bg-miderma-dark relative group">
                        
                        {/* Puedes poner un póster o dejar el video directo */}
                        <video 
                            controls 
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" // Imagen de portada mientras no se reproduce
                        >
                            <source src="/video-presentacion.mp4" type="video/mp4" />
                            Tu navegador no soporta videos.
                        </video>
                    </div>
                </div>

                {/* TESTIMONIOS (Derecha en PC, Abajo en Celular) */}
                <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left lg:pl-6">
                    
                    {/* Encabezado */}
                    <div className="mb-8">
                        <span className="font-extrabold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-pink">
                            Testimonios
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark font-serif">
                            Lo que dicen nuestros pacientes
                        </h2>
                    </div>
                    
                    {/* Contenedor dinámico con GRID */}
                    <div className="grid max-w-xl mx-auto lg:mx-0 w-full mb-6">
                        {testimonios.map((t, idx) => (
                            <div 
                                key={t.id}
                                className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out flex flex-col ${
                                    currentIndex === idx 
                                    ? 'opacity-100 z-10 translate-y-0' 
                                    : 'opacity-0 z-0 translate-y-4 pointer-events-none'
                                }`}
                            >
                                {/* Texto del testimonio */}
                                <p className="text-lg md:text-2xl italic text-[#7A6B63] mb-6 font-serif leading-relaxed">
                                    "{t.texto}"
                                </p>
                                
                                {/* Info del Paciente */}
                                <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                                    <img 
                                        src={t.imagen} 
                                        alt={t.nombre} 
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm ring-2 ring-miderma-pink/30" 
                                    />
                                    <div className="text-left">
                                        <h4 className="font-bold text-[#5A4A42] text-sm md:text-lg leading-tight mb-1">
                                            {t.nombre}
                                        </h4>
                                        <span className="text-[10px] md:text-xs text-miderma-pink font-extrabold uppercase tracking-wider">
                                            {t.tratamiento}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;