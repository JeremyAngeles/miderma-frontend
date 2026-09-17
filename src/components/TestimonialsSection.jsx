import { useState, useEffect } from 'react';

// Reseñas reales extraídas de las redes sociales
const testimonios = [
    { 
        id: 1, 
        nombre: "Marcelicata", 
        tratamiento: "Dermatología Clínica", 
        texto: "Excelente Dra. Tiene mucha paciencia y muy acertada en su diagnóstico y tratamiento. Totalmente recomendada.", 
        imagen: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
    { 
        id: 2, 
        nombre: "Maykool Melgar", 
        tratamiento: "Tratamiento de Psoriasis", 
        texto: "Agradecerle por el tratamiento y la forma de atención brindada en la consulta. Los medicamentos están dando buenos resultados, ya me siento mejor. Muy agradecidos con usted.", 
        imagen: "https://randomuser.me/api/portraits/men/32.jpg" 
    },
    { 
        id: 3, 
        nombre: "Natalia Ccusi", 
        tratamiento: "Tratamiento de Acné", 
        texto: "Gracias Dra. Rudid por el tratamiento tan acertado, me curó mi acné cuando había intentado ya con varios dermatólogos sin éxito. Una excelente profesional y muy linda persona.", 
        imagen: "https://randomuser.me/api/portraits/women/68.jpg" 
    },
    { 
        id: 4, 
        nombre: "Cintya Geisel", 
        tratamiento: "Consulta Dermatológica", 
        texto: "Gracias Dra. Rudid por acompañarme en mi tratamiento, por su paciencia, su empatía y por entender mi caso de manera integral. Sentirme escuchada y guiada hace toda la diferencia ✨", 
        imagen: "https://randomuser.me/api/portraits/women/90.jpg" 
    },
    { 
        id: 5, 
        nombre: "Melisa Ozambela", 
        tratamiento: "Dermatología Pediátrica", 
        texto: "Quiero agradecer de todo corazón a la Dra. Rudid Huamaní por haber ayudado a mi hija con un problema en la piel. Es una gran dermatóloga y una persona increíble. La recomiendo con total confianza.", 
        imagen: "https://randomuser.me/api/portraits/women/32.jpg" 
    },
    { 
        id: 6, 
        nombre: "Aaron Yilmar", 
        tratamiento: "Tratamiento de Cicatrices", 
        texto: "Muchas gracias Dra. Rudid, el tratamiento me quedó súper. Mis cicatrices están casi perfectas, súper recomendada.", 
        imagen: "https://randomuser.me/api/portraits/men/46.jpg" 
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambia el testimonio automáticamente cada 6 segundos (le di un segundo más para que de tiempo a leer)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonios.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 relative z-10 bg-[#FDF6F4] text-miderma-dark overflow-hidden">
            {/* Contenedor central ajustado para que todo se agrupe al medio */}
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                
                {/* TESTIMONIOS (Centrados en todas las pantallas) */}
                <div className="w-full flex flex-col text-center">
                    
                    {/* Encabezado */}
                    <div className="mb-8 md:mb-12">
                        {/* APLICADO: font-Montserrat para el antetítulo */}
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-miderma-pink font-Montserrat">
                            Testimonios
                        </span>
                        {/* APLICADO: font-GFSDidot y font-normal para el título principal */}
                        <h2 className="text-2xl md:text-5xl font-normal text-miderma-dark font-GFSDidot uppercase">
                            LO QUE DICEN NUESTROS PACIENTES
                        </h2>
                    </div>
                    
                    {/* Contenedor dinámico con GRID - Altura mínima fijada para que no brinque la página */}
                    <div className="grid max-w-3xl mx-auto w-full min-h-[220px] md:min-h-[180px]">
                        {testimonios.map((t, idx) => (
                            <div 
                                key={t.id}
                                className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${
                                    currentIndex === idx 
                                    ? 'opacity-100 z-10 translate-y-0' 
                                    : 'opacity-0 z-0 translate-y-4 pointer-events-none'
                                }`}
                            >
                                {/* APLICADO: font-Montserrat para el texto de la reseña (tamaño ajustado para textos largos) */}
                                <p className="text-base sm:text-lg md:text-xl italic text-[#7A6B63] mb-6 md:mb-8 font-Montserrat leading-relaxed px-4">
                                    "{t.texto}"
                                </p>
                                
                                {/* Info del Paciente - Forzado al centro en celular y escritorio */}
                                <div className="flex items-center justify-center gap-4 mt-auto">
                                    <img 
                                        src={t.imagen} 
                                        alt={t.nombre} 
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-sm ring-2 ring-miderma-pink/30" 
                                    />
                                    {/* El texto del paciente se queda alineado a la izquierda respecto a la foto para que se vea ordenado */}
                                    <div className="text-left">
                                        {/* APLICADO: font-GFSDidot y font-normal para el nombre del paciente */}
                                        <h4 className="font-normal text-miderma-dark text-base md:text-xl uppercase leading-tight mb-1 font-GFSDidot">
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