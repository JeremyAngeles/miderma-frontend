import Navbar from '../components/Navbar';
import CtaBanner from '../components/CtaBanner';
import { Link } from 'react-router-dom';

const serviciosLista = [
    {
        id: "clinica",
        titulo: "Dermatología Clínica",
        descripcion: "Tratamos enfermedades de la piel, cabellos y uñas con diagnósticos precisos y terapias efectivas. Nuestro enfoque médico busca devolverle la salud, el equilibrio y el bienestar a tu cuerpo desde la primera consulta.",
        incluye: [
            "Acné y rosácea", "Melasma", "Dermatopatías infantiles (dermatitis atópica)", 
            "Enfermedades autoinmunes (psoriasis, vitíligo, pénfigo)", "Infecciones cutáneas", 
            "Caída de cabello y alopecia areata", "Onicomicosis y problemas de uña", 
            "Dermatitis (contacto, seborreica)", "Hiperhidrosis (sudoración excesiva)", 
            "Dishidrosis y urticaria", "Cicatrices queloides", "Verrugas y molusco contagioso"
        ],
        imagen: "/serv-clinica.jpg"
    },
    {
        id: "estetica",
        titulo: "Dermatología Estética",
        descripcion: "Mejoramos la apariencia y prevenimos el envejecimiento con procedimientos médicos seguros y mínimamente invasivos para resaltar tu belleza natural.",
        incluye: [
            "Rejuvenecimiento láser CO2 y Luz pulsada (IPL)", "Botox (tercio superior, medio, bruxismo)", 
            "Ácido hialurónico (maxilar, surco nasogeniano, mentón, labios, ojeras)", 
            "Bioestimuladores (Profhilo, Long Lasting, Radiesse, Karisma)", "Peelings contra acné y manchas", 
            "Depilación con IPL", "Mesoterapia capilar y facial"
        ],
        imagen: "/serv-estetica.jpg"
    },
    {
        id: "dermocosmetica",
        titulo: "Dermocosmética",
        descripcion: "Tratamientos dermatocosméticos especializados para mejorar la apariencia, textura y luminosidad de tu piel, potenciando tu confianza personal.",
        incluye: [
            "Rutinas Skin care personalizadas", "Limpieza facial simple", 
            "Limpieza profunda con Hydrofacial", "Tratamiento Dermapen", 
            "Luz LED para rejuvenecimiento", "Manejo de manchas y peelings"
        ],
        imagen: "/serv-dermocosmetica.jpg"
    },
    {
        id: "quirurgica",
        titulo: "Dermatología Quirúrgica",
        descripcion: "Procedimientos médicos ambulatorios para el manejo y extirpación de lesiones cutáneas, realizados bajo los más altos estándares de bioseguridad.",
        incluye: [
            "Extirpación de lunares", "Quiste epidérmico de inclusión", 
            "Hidrocistoma ecrino", "Nevus sebáceo", 
            "Cirugía de tumores cutáneos (pilomatrixoma)", 
            "Matricectomía parcial ungueal (uñas encarnadas)", "Biopsia de piel y uñas"
        ],
        imagen: "/serv-quirurgica.jpg"
    },
    {
        id: "oncologica",
        titulo: "Dermatología Oncológica",
        descripcion: "Especializados en la prevención, diagnóstico temprano y tratamiento oportuno del cáncer de piel, cuidando lo más valioso que tienes: tu vida.",
        incluye: [
            "Chequeos periódicos de lunares con dermatoscopía", 
            "Detección temprana de lesiones sospechosas", 
            "Biopsias de piel", 
            "Seguimiento oncológico preventivo"
        ],
        imagen: "/serv-oncologica.jpg"
    }
];

const Servicios = () => {
    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Navbar />
            
            {/* HERO DE LA PÁGINA */}
            <div className="relative w-full pt-32 pb-16 bg-[#FDF6F4] flex flex-col items-center justify-center text-center px-4">
                <span className="text-[#F2BDC7] font-extrabold tracking-widest uppercase mb-2 block text-xs md:text-sm">Especialidades</span>
                {/* Título cambiado al azul noche oscuro */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#291840] mb-4 font-serif">Nuestros Servicios</h1>
                <div className="w-20 h-1.5 bg-[#F2BDC7] rounded-full mb-6"></div>
                {/* Texto cambiado a plomo oscuro */}
                <p className="max-w-2xl text-[#615573] text-sm md:text-base">
                    Atención médica integral con tecnología de vanguardia para la salud y belleza de tu piel, cabello y uñas.
                </p>
            </div>

            {/* SECCIÓN ZIG-ZAG */}
            <div className="w-full py-10">
                {serviciosLista.map((servicio, index) => {
                    // Condición para alternar izquierda/derecha (Zig-Zag) en PC
                    const isEven = index % 2 === 0;

                    return (
                        <div 
                            key={servicio.id} 
                            // Alternamos el fondo entre blanco y el gris muy clarito de tu paleta
                            className={`w-full py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-[#FDF6F4]'}`}
                        >
                            <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                
                                {/* IMAGEN */}
                                <div className="w-full lg:w-1/2 flex justify-center relative">
                                    <div className="absolute w-full h-full bg-[#F2BDC7]/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
                                    <img 
                                        src={servicio.imagen} 
                                        alt={servicio.titulo} 
                                        className="w-full max-w-lg aspect-[4/3] object-cover rounded-[2rem] shadow-xl border-4 border-white"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                                    />
                                </div>

                                {/* CONTENIDO (TEXTO) */}
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#291840] mb-4 font-serif">
                                        {servicio.titulo}
                                    </h2>
                                    <p className="text-base md:text-lg text-[#615573] mb-8 leading-relaxed">
                                        {servicio.descripcion}
                                    </p>

                                    {/* LISTA DE "INCLUYE" (Píldoras/Etiquetas) */}
                                    <div className="mb-10">
                                        <p className="text-xs font-bold uppercase text-[#F2BDC7] tracking-wider mb-4 border-b border-[#F2F2F2] pb-2">
                                            Incluye:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {servicio.incluye.map((item, i) => (
                                                <span 
                                                    key={i} 
                                                    className="bg-white border border-[#F2F2F2] shadow-sm text-[#615573] text-[11px] md:text-xs font-semibold px-4 py-2 rounded-full"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BOTÓN WHATSAPP/CONTACTO */}
                                    <div>
                                        <Link 
                                            to="/contacto" 
                                            className="inline-flex items-center gap-2 bg-[#291840] text-white hover:bg-[#F2BDC7] px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg text-sm md:text-base uppercase tracking-wider"
                                        >
                                            Consulte su tratamiento
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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