import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// ==========================================
// COMPONENTE ACORDEÓN PARA LOS TRATAMIENTOS
// ==========================================
const AccordionItem = ({ title, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#F2F2F2] last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-3.5 text-left focus:outline-none group"
            >
                <span className={`font-bold text-sm md:text-base transition-colors ${isOpen ? 'text-miderma-pink' : 'text-[#291840] group-hover:text-miderma-pink'}`}>
                    {title}
                </span>
                <span className={`transform transition-transform duration-300 text-miderma-pink font-bold text-xl ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                <div className="text-sm text-[#615573] leading-relaxed space-y-2 bg-[#FDF6F4]/50 p-4 rounded-xl border-l-2 border-miderma-pink">
                    {details.map((detail, index) => (
                        <p key={index}>
                            {detail.label && <strong className="text-[#291840]">{detail.label} </strong>}
                            {detail.text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ==========================================
// DATA DE LOS SERVICIOS
// ==========================================
const serviciosLista = [
    {
        id: "clinica",
        titulo: "Dermatología Clínica y Pediátrica",
        descripcion: "Diagnósticos certeros y tratamientos efectivos para las afecciones más comunes de la piel, en todas las edades, con un enfoque integral que combina ciencia y tecnología avanzada. Nuestro objetivo es devolverle la salud a tu piel.",
        imagen: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Acné",
                detalles: [
                    { label: "¿Qué es?:", text: "Inflamación de la piel con granitos, puntos negros o quistes." },
                    { label: "¿Por qué ocurre?:", text: "Exceso de grasa, obstrucción de poros, bacterias y cambios hormonales." },
                    { label: "Síntomas:", text: "Espinillas, puntos negros, quistes dolorosos, cicatrices." },
                    { label: "Edad frecuente:", text: "Adolescentes y adultos jóvenes (12–25 años)." }
                ]
            },
            {
                titulo: "Psoriasis",
                detalles: [
                    { label: "¿Qué es?:", text: "Enfermedad crónica autoinmune que acelera la renovación de la piel." },
                    { label: "¿Por qué ocurre?:", text: "El sistema inmunológico provoca una producción excesiva de células cutáneas." },
                    { label: "Síntomas:", text: "Placas rojas con escamas plateadas, picazón, dolor." }
                ]
            },
            {
                titulo: "Rosácea y Melasma",
                detalles: [
                    { label: "Rosácea:", text: "Trastorno crónico del rostro con enrojecimiento persistente y vasos visibles." },
                    { label: "Melasma:", text: "Manchas marrones o grisáceas por sobreproducción de melanina, detonadas por hormonas o sol." }
                ]
            },
            {
                titulo: "Dermatitis (Atópica, Seborreica, Contacto)",
                detalles: [
                    { label: "¿Qué es?:", text: "Inflamación de la piel por genética, alergias o irritantes externos." },
                    { label: "Síntomas:", text: "Enrojecimiento, picazón intensa, descamación." }
                ]
            },
            {
                titulo: "Caída del Cabello (Alopecia)",
                detalles: [
                    { label: "¿Qué es?:", text: "Pérdida de cabello localizada o difusa." },
                    { label: "¿Por qué ocurre?:", text: "Genética, cambios hormonales, estrés, o autoinmune (Alopecia Areata)." }
                ]
            },
            {
                titulo: "Infecciones (Micóticas y Bacterianas)",
                detalles: [
                    { label: "Hongos (Micóticas):", text: "Manchas rojas, descamación, uñas engrosadas por humedad o baja inmunidad." },
                    { label: "Bacterias:", text: "Enrojecimiento, dolor o pus causado por estafilococos o estreptococos en heridas." }
                ]
            },
            {
                titulo: "Dermatología Pediátrica",
                detalles: [
                    { label: "Miliaria Rubra:", text: "Obstrucción del sudor por calor (sarpullido)." },
                    { label: "Impétigo:", text: "Infección bacteriana con costras amarillentas en niños." },
                    { label: "Molusco Contagioso:", text: "Infección viral benigna con pápulas perladas." },
                    { label: "Otras:", text: "Dermatitis de pañal, verrugas, dermatitis atópica infantil." }
                ]
            }
        ]
    },
    {
        id: "quirurgica",
        titulo: "Dermatología Quirúrgica",
        descripcion: "Tratamos los problemas de la piel mediante operaciones usando técnicas avanzadas para quitar lesiones benignas y malignas. Procedimientos seguros y modernos cuidando la salud y estética de tu piel bajo estrictos protocolos.",
        imagen: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Quiste Epidérmico de Inclusión",
                detalles: [
                    { label: "¿Qué es?:", text: "Tumor benigno formado por acumulación de queratina bajo la piel." },
                    { label: "Síntomas:", text: "Bulto redondeado, firme, a veces doloroso o con secreción." }
                ]
            },
            {
                titulo: "Pilomatrixoma e Hidrocistoma Ecrino",
                detalles: [
                    { label: "Pilomatrixoma:", text: "Tumor benigno (nódulo duro, calcificado) del folículo piloso, común en niños." },
                    { label: "Hidrocistoma:", text: "Quiste benigno de las glándulas sudoríparas (lesiones brillantes en párpados o cara)." }
                ]
            },
            {
                titulo: "Uñas Encarnadas",
                detalles: [
                    { label: "¿Qué es?:", text: "Crecimiento de la uña hacia el tejido blando circundante." },
                    { label: "Causa y Síntomas:", text: "Por corte inadecuado o calzado ajustado. Produce dolor, inflamación e infección." }
                ]
            },
            {
                titulo: "Procedimientos Quirúrgicos",
                detalles: [
                    { text: "• Extirpación de lunares y biopsias de piel." },
                    { text: "• Exéresis de quistes, pilomatrixoma e hidrocistomas." },
                    { text: "• Cirugía de carcinoma basocelular y espinocelular insitu." },
                    { text: "• Cirugía correctiva de uñas encarnadas." }
                ]
            }
        ]
    },
    {
        id: "estetica",
        titulo: "Dermatología Estética y Láser",
        descripcion: "La belleza y la salud se complementan. Tratamientos estéticos médicos avanzados que realzan tu imagen sin perder naturalidad, mejorando la textura, luminosidad y firmeza de tu piel con resultados visibles y armoniosos.",
        imagen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Toxina Botulínica (Botox) y Ácido Hialurónico",
                detalles: [
                    { label: "Botox:", text: "Relaja los músculos faciales para suavizar arrugas de expresión. Resultados de 4 a 6 meses." },
                    { label: "Ácido Hialurónico:", text: "Relleno que hidrata y devuelve volumen a labios, pómulos y surcos. Resultados inmediatos y naturales." }
                ]
            },
            {
                titulo: "Bioestimuladores de Colágeno",
                detalles: [
                    { text: "Estimulan la producción natural de colágeno, mejorando firmeza y elasticidad de la piel. Resultados progresivos que duran hasta 2 años." }
                ]
            },
            {
                titulo: "Láser CO2 y Luz Pulsada (IPL)",
                detalles: [
                    { label: "Láser CO2:", text: "Renueva la piel mejorando arrugas profundas, cicatrices y manchas." },
                    { label: "IPL:", text: "Trata manchas solares, enrojecimiento y vasos dilatados aportando luminosidad." }
                ]
            },
            {
                titulo: "Mesoterapia Facial y Capilar",
                detalles: [
                    { label: "Facial:", text: "Microinyecciones de vitaminas e hidratación para revitalizar la piel." },
                    { label: "Capilar:", text: "Microinyecciones en el cuero cabelludo que fortalecen el cabello y reducen la caída." }
                ]
            },
            {
                titulo: "Enzimas y Depilación Láser",
                detalles: [
                    { label: "Enzimas:", text: "Disuelven grasa localizada para mejorar el contorno corporal y reducir papada o celulitis." },
                    { label: "Depilación:", text: "Elimina el vello no deseado de forma segura y duradera." }
                ]
            }
        ]
    },
    {
        id: "dermocosmetica",
        titulo: "Dermocosmética",
        descripcion: "El cuidado diario es clave para mantener tu piel saludable. Te asesoramos en productos especializados y rutinas personalizadas que hidratan, protegen y prolongan los resultados de tus tratamientos médicos.",
        imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Limpieza Facial para Manchas",
                detalles: [
                    { text: "Procedimiento que elimina impurezas y células muertas, favoreciendo la renovación de la piel y aportando luminosidad para un tono más uniforme." }
                ]
            },
            {
                titulo: "Limpieza Facial para Acné",
                detalles: [
                    { text: "Higiene profunda que desobstruye poros, controla el exceso de grasa y reduce la formación de comedones en pieles con tendencia acneica." }
                ]
            },
            {
                titulo: "Limpieza Facial para Rosácea",
                detalles: [
                    { text: "Protocolos muy suaves y calmantes. Se evitan técnicas agresivas para retirar impurezas sin irritar, reduciendo la inflamación y aportando confort." }
                ]
            },
            {
                titulo: "Tratamientos Complementarios",
                detalles: [
                    { text: "• Tecnología Hydrafacial para limpieza e hidratación profunda." },
                    { text: "• Peelings químicos controlados." }
                ]
            }
        ]
    },
    {
        id: "oncologica",
        titulo: "Dermatología Oncológica",
        descripcion: "La prevención salva vidas. Realizamos controles periódicos y diagnósticos tempranos para detectar y tratar lesiones precancerosas y cáncer de piel. Te acompañamos con un enfoque médico riguroso y humano.",
        imagen: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Carcinomas (Basocelular y Espinocelular)",
                detalles: [
                    { label: "Basocelular:", text: "Cáncer más común de crecimiento lento. Aparece como lesión perlada en zonas expuestas al sol." },
                    { label: "Espinocelular:", text: "Puede ser agresivo, presentándose como lesión endurecida, ulcerada o con costras." }
                ]
            },
            {
                titulo: "Melanoma",
                detalles: [
                    { text: "El cáncer de piel más grave. Se caracteriza por manchas o lunares que cambian de forma, color o tamaño. Detección temprana es vital." }
                ]
            },
            {
                titulo: "Evaluación de Lunares (Regla ABCDE)",
                detalles: [
                    { text: "Revisión sistemática para identificar riesgos: Asimetría, Bordes irregulares, Color variado, Diámetro mayor a 6mm, Evolución (cambios)." }
                ]
            },
            {
                titulo: "Diagnóstico Especializado",
                detalles: [
                    { text: "• Dermatoscopía: Para observar estructuras internas del lunar al detalle." },
                    { text: "• Ecografía Cutánea: Muestra profundidad y extensión para un diagnóstico temprano." },
                    { text: "• Queratosis Actínicas: Tratamiento de lesiones precancerosas por sol." }
                ]
            }
        ]
    }
];

// ==========================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// ==========================================
const Servicios = () => {
    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Navbar />
            
            {/* HERO DE LA PÁGINA */}
            <div className="relative w-full pt-32 pb-16 bg-[#FDF6F4] flex flex-col items-center justify-center text-center px-4">
                <span className="text-[#F2BDC7] font-extrabold tracking-widest uppercase mb-2 block text-xs md:text-sm">Especialidades</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#291840] mb-4 font-serif">Nuestros Servicios</h1>
                <div className="w-20 h-1.5 bg-[#F2BDC7] rounded-full mb-6"></div>
                <p className="max-w-2xl text-[#615573] text-sm md:text-base leading-relaxed">
                    Atención médica integral con tecnología de vanguardia para la salud y belleza de tu piel, cabello y uñas.
                </p>
            </div>

            {/* SECCIÓN ZIG-ZAG */}
            <div className="w-full">
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #F2BDC7; border-radius: 10px; }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #291840; }
                `}</style>

                {serviciosLista.map((servicio, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={servicio.id} className={`w-full py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-[#FDF6F4]'}`}>
                            <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 lg:gap-16 items-start ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                
                                <div className="w-full lg:w-1/2 flex justify-center relative lg:sticky lg:top-32">
                                    <div className="absolute w-full h-full bg-[#F2BDC7]/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
                                    <img
                                        src={servicio.imagen}
                                        alt={servicio.titulo}
                                        className="w-full max-w-lg aspect-[4/3] object-cover rounded-[2rem] shadow-xl border-4 border-white"
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#291840] mb-4 font-serif">
                                        {servicio.titulo}
                                    </h2>
                                    <p className="text-base md:text-lg text-[#615573] mb-8 leading-relaxed">
                                        {servicio.descripcion}
                                    </p>

                                    <div className="mb-10 pr-2 max-h-[380px] overflow-y-auto custom-scrollbar border-y border-[#F2F2F2] py-2">
                                        {servicio.tratamientos.map((tratamiento, i) => (
                                            <AccordionItem
                                                key={i}
                                                title={tratamiento.titulo}
                                                details={tratamiento.detalles}
                                            />
                                        ))}
                                    </div>

                                    {/* BOTONES ACTUALIZADOS */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                        <Link
                                            to="/contacto"
                                            className="inline-flex items-center justify-center gap-2 bg-[#291840] text-white hover:bg-[#F2BDC7] hover:text-[#291840] px-6 py-3.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg text-sm uppercase tracking-wider text-center"
                                        >
                                            Agenda tu cita ahora
                                        </Link>
                                        <Link
                                            to="/contacto"
                                            className="inline-flex items-center justify-center gap-2 bg-[#F2BDC7] text-white hover:bg-[#291840] px-6 py-3.5 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg text-sm uppercase tracking-wider text-center"
                                        >
                                            Consulta Online
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Servicios;