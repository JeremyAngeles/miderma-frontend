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
            {/* Contenedor central ajustado para que todo se agrupe al medio */}
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                
                {/* TESTIMONIOS (Centrados en todas las pantallas) */}
                <div className="w-full flex flex-col text-center">
                    
                    {/* Encabezado */}
                    <div className="mb-10">
                        {/* APLICADO: font-Montserrat para el antetítulo */}
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-pink font-Montserrat">
                            Testimonios
                        </span>
                        {/* APLICADO: font-GFSDidot y font-normal para el título principal */}
                        <h2 className="text-3xl md:text-5xl font-normal text-miderma-dark font-GFSDidot">
                        LO QUE DICEN NUESTROS PACIENTES
                        </h2>
                    </div>
                    
                    {/* Contenedor dinámico con GRID */}
                    <div className="grid max-w-2xl mx-auto w-full mb-6">
                        {testimonios.map((t, idx) => (
                            <div 
                                key={t.id}
                                className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out flex flex-col items-center ${
                                    currentIndex === idx 
                                    ? 'opacity-100 z-10 translate-y-0' 
                                    : 'opacity-0 z-0 translate-y-4 pointer-events-none'
                                }`}
                            >
                                {/* APLICADO: font-Montserrat para el texto de la reseña */}
                                <p className="text-lg md:text-2xl italic text-[#7A6B63] mb-8 font-Montserrat leading-relaxed">
                                    "{t.texto}"
                                </p>
                                
                                {/* Info del Paciente - Forzado al centro en celular y escritorio */}
                                <div className="flex items-center justify-center gap-4 mt-2">
                                    <img 
                                        src={t.imagen} 
                                        alt={t.nombre} 
                                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm ring-2 ring-miderma-pink/30" 
                                    />
                                    {/* El texto del paciente se queda alineado a la izquierda respecto a la foto para que se vea ordenado */}
                                    <div className="text-left">
                                        {/* APLICADO: font-GFSDidot y font-normal para el nombre del paciente */}
                                        <h4 className="font-normal text-miderma-dark text-lg md:text-xl leading-tight mb-1 font-GFSDidot">
                                            {t.nombre}
                                        </h4>
                                        {/* APLICADO: font-Montserrat para el tratamiento */}
                                        <span className="text-[10px] md:text-xs text-miderma-pink font-bold uppercase tracking-wider block font-Montserrat">
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