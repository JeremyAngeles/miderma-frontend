import { useState } from 'react';

const faqs = [
    {
        pregunta: "¿Cómo puedo agendar una cita en Miderma?",
        respuesta: "Puedes agendar tu cita fácilmente haciendo clic en el botón de WhatsApp que encuentras en nuestra web, o llamando directamente a nuestros números de contacto. Te responderemos a la brevedad para coordinar el horario que mejor te acomode."
    },
    {
        pregunta: "¿Atienden a niños y adolescentes?",
        respuesta: "Sí, la dermatología clínica abarca todas las edades. Atendemos problemas comunes en niños y adolescentes como acné severo, dermatitis atópica, alergias y verrugas."
    },
    {
        pregunta: "¿Los tratamientos estéticos son dolorosos?",
        respuesta: "La mayoría de nuestros procedimientos son mínimamente invasivos. Además, utilizamos cremas anestésicas de alta calidad y tecnología moderna para asegurar que tu experiencia sea lo más cómoda e indolora posible."
    },
    {
        pregunta: "¿Cuáles son los métodos de pago aceptados?",
        respuesta: "Aceptamos transferencias bancarias, Yape, Plin y todas las tarjetas de crédito y débito."
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-white text-miderma-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#5A4A42] mb-4">Preguntas Frecuentes</h2>
                    <p className="text-gray-500">Resolvemos tus dudas antes de tu consulta.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button 
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-gray-50 hover:bg-[#FDF6F4] transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-sm md:text-base pr-4">{faq.pregunta}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-miderma-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                                    {faq.respuesta}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FaqSection;