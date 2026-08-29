import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// === BASE DE DATOS DE TRATAMIENTOS ===
const categoriasTratamientos = [
    {
        id: "clinicos",
        nombre: "Clínicos",
        tratamientos: [
            {
                nombre: "Electrocauterización",
                que_es: "Se aplica una corriente eléctrica a través de un electrodo fino sobre la lesión cutánea (verrugas, fibromas, queratosis seborreicas, angiomas), provocando destrucción controlada del tejido.",
                duracion: "10 a 30 minutos según el número y tamaño de las lesiones.",
                efectos: "Definitivos para la lesión tratada, aunque pueden aparecer nuevas con el tiempo.",
                contraindicaciones: "Marcapasos, embarazo, lesiones sin diagnóstico, trastornos de coagulación.",
                sesiones: "Generalmente 1 sesión.",
                observaciones: "Puede quedar una pequeña costra que cae en 7-14 días. Requiere protección solar posterior.",
                imagenes: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80"]
            },
            {
                nombre: "Crioterapia",
                que_es: "Aplica nitrógeno líquido a temperaturas extremadamente bajas (-196°C) que destruye células mediante congelación (verrugas, queratosis actínicas, lentigos).",
                duracion: "5 a 15 minutos por sesión (10-30 seg. por lesión).",
                efectos: "La lesión se elimina progresivamente en 2-4 semanas.",
                contraindicaciones: "Crioglobulinemia, urticaria por frío, Fenómeno de Raynaud, compromiso vascular.",
                sesiones: "1 a 4 sesiones, espaciadas cada 2-4 semanas.",
                observaciones: "Puede aparecer ampolla o enrojecimiento. La hipopigmentación temporal es frecuente.",
                imagenes: ["https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"]
            },
            {
                nombre: "Biopsia Cutánea",
                que_es: "Obtención de una muestra de tejido (punch, afeitado o incisional) bajo anestesia local para análisis histopatológico y diagnóstico definitivo.",
                duracion: "15 a 30 minutos.",
                efectos: "Diagnóstico en 7-15 días. Cicatrización en 2-4 semanas.",
                contraindicaciones: "Alergia a anestésicos, trastornos de coagulación, infección activa.",
                sesiones: "1 sesión.",
                observaciones: "Puede quedar cicatriz mínima. Puntos se retiran a los 7-14 días.",
                imagenes: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"]
            },
            {
                nombre: "Infiltración de Corticoides",
                que_es: "Inyección intralesional con potente acción antiinflamatoria e inmunosupresora (alopecia areata, queloides, acné nodular).",
                duracion: "5 a 15 minutos.",
                efectos: "Visible en 2-4 semanas. Duración varía de 1 a 6 meses.",
                contraindicaciones: "Infección activa, embarazo (valorar), diabetes descompensada.",
                sesiones: "3 a 6 sesiones, cada 3-4 semanas.",
                observaciones: "Puede causar atrofia cutánea transitoria o hipopigmentación.",
                imagenes: ["https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"]
            },
            {
                nombre: "Curetaje y Drenaje",
                que_es: "Eliminación mecánica de lesiones por raspado (Curetaje) o liberación de material purulento/quístico (Drenaje) para aliviar presión y prevenir complicaciones.",
                duracion: "15 a 45 minutos.",
                efectos: "Eliminación o alivio inmediato. Cicatrización en 2-4 semanas.",
                contraindicaciones: "Lesiones sospechosas de melanoma (Curetaje), abscesos profundos (Drenaje).",
                sesiones: "1 sesión. Quistes pueden requerir exéresis posterior.",
                observaciones: "El curetaje deja cicatriz plana. El drenaje puede requerir antibiótico complementario.",
                imagenes: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"]
            }
        ]
    },
    {
        id: "quirurgicos",
        nombre: "Quirúrgicos",
        tratamientos: [
            {
                nombre: "Exéresis de Tumores",
                que_es: "Eliminación quirúrgica completa de tumores benignos (nevus, quistes) o malignos (carcinomas, melanoma) bajo anestesia local con márgenes de seguridad.",
                duracion: "30 a 90 minutos según tamaño y complejidad.",
                efectos: "Definitivo si la extirpación es completa. Cicatriz mejora en 6-12 meses.",
                contraindicaciones: "Trastornos de coagulación, infección activa, metástasis severa (requiere oncología).",
                sesiones: "1 sesión. Puede requerirse ampliación tras biopsia.",
                observaciones: "La cicatriz depende de la técnica. Requiere protección solar estricta por un año.",
                imagenes: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"]
            }
        ]
    },
    {
        id: "esteticos",
        nombre: "Estéticos",
        tratamientos: [
            {
                nombre: "Dermapen (Microneedling)",
                que_es: "Microlesiones controladas (0.25-2.5 mm) que activan producción de colágeno, elastina y crean canales para activos.",
                duracion: "30 a 45 minutos.",
                efectos: "Mejoría progresiva durante 3-6 meses. Efectos acumulativos.",
                contraindicaciones: "Acné/herpes activo, isotretinoína reciente, embarazo.",
                sesiones: "3 a 6 sesiones, cada 3-4 semanas.",
                observaciones: "Enrojecimiento 24-72h. Evitar maquillaje y exposición solar.",
                imagenes: ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80"]
            },
            {
                nombre: "Láser CO2 y Luz Pulsada (IPL)",
                que_es: "Láser CO2 vaporiza el tejido fraccionadamente para cicatrices y arrugas. IPL emite luz intensa para destruir manchas, rojeces y fotoenvejecimiento.",
                duracion: "20 a 90 minutos según área.",
                efectos: "CO2: 1-5 años. IPL: 6-12 meses tras 2-4 semanas de mejora.",
                contraindicaciones: "Fototipos altos, bronceado reciente, enfermedades fotosensibles.",
                sesiones: "CO2: 1-5 sesiones. IPL: 3-6 sesiones.",
                observaciones: "Requieren fotoprotección estricta. Manchas en IPL se oscurecen antes de caer.",
                imagenes: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"]
            },
            {
                nombre: "Plasma Rico en Plaquetas (PRP)",
                que_es: "Concentrado autólogo que estimula regeneración celular y colágeno mediante la extracción, centrifugación y reinyección de la propia sangre del paciente.",
                duracion: "45 a 60 minutos.",
                efectos: "Visible a las 3-6 semanas. Mantenido 6-12 meses.",
                contraindicaciones: "Trastornos hematológicos, infección, cáncer activo.",
                sesiones: "3 a 6 sesiones, cada 3-4 semanas.",
                observaciones: "Sin riesgo de alergia. Evitar antiinflamatorios 5 días antes.",
                imagenes: ["https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80"]
            },
            {
                nombre: "Toxina Botulínica y Ácido Hialurónico",
                que_es: "Botox bloquea contracción muscular para arrugas dinámicas. Ácido Hialurónico rellena, aporta volumen e hidrata surcos y labios.",
                duracion: "15 a 60 minutos.",
                efectos: "Botox: 4-6 meses. Hialurónico: 9-18 meses inmediatos.",
                contraindicaciones: "Embarazo, lactancia, alergias raras o infección local.",
                sesiones: "Mantenimientos semestrales o anuales.",
                observaciones: "No masajear ni hacer ejercicio el mismo día.",
                imagenes: ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"]
            },
            {
                nombre: "Limpieza Facial e Hydrafacial",
                que_es: "Eliminación de impurezas y células muertas. Hydrafacial usa hidradermabrasión por succión e infusión de sueros nutritivos.",
                duracion: "30 a 90 minutos.",
                efectos: "Luminosidad y tersura inmediata (3-4 semanas).",
                contraindicaciones: "Acné inflamatorio severo, rosácea en brote.",
                sesiones: "Mensuales o según diagnóstico.",
                observaciones: "Evitar maquillaje pesado o exfoliantes posteriores.",
                imagenes: ["https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80"]
            }
        ]
    },
    {
        id: "cosmeticos",
        nombre: "Cosméticos",
        tratamientos: [
            {
                nombre: "Rutinas Skin Care Personalizadas",
                que_es: "Evaluación de tipo de piel y prescripción de rutina dermocosmética específica (higiene, hidratación, fotoprotección y activos antiedad o antiacné).",
                duracion: "Consulta de 20-30 minutos.",
                efectos: "Mantenimiento prolongado de la salud y estética facial.",
                contraindicaciones: "Ninguna. Se adapta a alergias y tipo de piel del paciente.",
                sesiones: "Seguimiento periódico para ajustar la rutina.",
                observaciones: "Incluye educación sobre cantidad y orden de aplicación.",
                imagenes: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"]
            }
        ]
    }
];

const Tratamientos = () => {
    const [catActiva, setCatActiva] = useState(categoriasTratamientos[0]);
    const [tratActivo, setTratActivo] = useState(categoriasTratamientos[0].tratamientos[0]);

    const handleCategoriaClick = (categoria) => {
        setCatActiva(categoria);
        setTratActivo(categoria.tratamientos[0]);
    };

    useEffect(() => {
        if (window.innerWidth < 1024) {
            const el = document.getElementById('detalle-tratamiento');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [tratActivo]);

    return (
        <div className="w-full bg-[#FDF6F4] min-h-screen flex flex-col">
            <Navbar />

            {/* HERO */}
            <div className="relative w-full pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
                <span className="text-miderma-pink font-extrabold tracking-widest uppercase mb-2 block text-xs md:text-sm">Catálogo de Especialidades</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-miderma-dark mb-4 font-serif">Tratamientos Médicos</h1>
                <div className="w-20 h-1.5 bg-miderma-pink rounded-full mb-6"></div>
                <p className="max-w-2xl text-miderma-purple text-sm md:text-base leading-relaxed">
                    Soluciones avanzadas y tecnología de última generación adaptadas a las necesidades clínicas, quirúrgicas y estéticas de tu piel.
                </p>
            </div>

            {/* CONTENEDOR PRINCIPAL MASTER-DETAIL */}
            <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
                
                {/* MENÚ LATERAL (IZQUIERDA) */}
                <div className="w-full lg:w-1/3 xl:w-1/4 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 lg:sticky lg:top-32 flex-shrink-0">
                    <h3 className="font-serif font-bold text-xl text-miderma-dark mb-6 border-b border-gray-100 pb-4">
                        Categorías
                    </h3>

                    {/* SELECTOR MÓVIL DE CATEGORÍAS */}
                    <div className="lg:hidden mb-6">
                        <select 
                            className="w-full p-4 rounded-xl border border-gray-200 bg-[#F2F2F2] text-miderma-dark font-bold focus:outline-none focus:border-miderma-pink"
                            value={catActiva.id}
                            onChange={(e) => {
                                const cat = categoriasTratamientos.find(c => c.id === e.target.value);
                                handleCategoriaClick(cat);
                            }}
                        >
                            {categoriasTratamientos.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* LISTA DE CATEGORÍAS PC */}
                    <div className="hidden lg:flex flex-col gap-2 mb-8">
                        {categoriasTratamientos.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoriaClick(cat)}
                                className={`text-left px-5 py-3 rounded-xl font-bold transition-all duration-300 ${
                                    catActiva.id === cat.id 
                                    ? 'bg-miderma-pink text-white shadow-md' 
                                    : 'bg-transparent text-miderma-purple hover:bg-[#FDF6F4] hover:text-miderma-dark'
                                }`}
                            >
                                {cat.nombre}
                            </button>
                        ))}
                    </div>

                    {/* TRATAMIENTOS DE LA CATEGORÍA SELECCIONADA */}
                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-4 px-2">
                        Opciones en {catActiva.nombre}
                    </h4>
                    <div className="flex flex-col gap-1.5 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {catActiva.tratamientos.map((trat) => (
                            <button
                                key={trat.nombre}
                                onClick={() => setTratActivo(trat)}
                                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border-l-4 ${
                                    tratActivo.nombre === trat.nombre 
                                    ? 'border-miderma-pink bg-[#FDF6F4] text-miderma-dark font-bold' 
                                    : 'border-transparent text-miderma-purple hover:bg-gray-50 hover:text-miderma-dark'
                                }`}
                            >
                                {trat.nombre}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENIDO DEL TRATAMIENTO (DERECHA) */}
                <div id="detalle-tratamiento" className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-8 scroll-mt-32">
                    
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                        
                        {/* FOTOS DEL TRATAMIENTO */}
                        <div className="w-full flex flex-col md:flex-row gap-2 bg-[#F2F2F2] p-2">
                            {/* Imagen Principal */}
                            <div className="w-full md:w-2/3 h-64 sm:h-80 md:h-[400px] rounded-[1.5rem] overflow-hidden relative">
                                <div className="absolute top-4 left-4 z-10 bg-miderma-dark text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                    {catActiva.nombre}
                                </div>
                                <img src={tratActivo.imagenes[0]} alt={tratActivo.nombre} className="w-full h-full object-cover" />
                            </div>
                            
                            {/* "Más fotos trabajadas" (Galería pequeña lateral) */}
                            {tratActivo.imagenes.length > 1 && (
                                <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2">
                                    {tratActivo.imagenes.slice(1, 3).map((img, idx) => (
                                        <div key={idx} className="flex-1 h-32 md:h-[196px] rounded-[1.5rem] overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img src={img} alt={`${tratActivo.nombre} detalle ${idx}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* TEXTO Y DETALLES */}
                        <div className="p-6 sm:p-10 lg:p-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-miderma-dark font-serif mb-6">
                                {tratActivo.nombre}
                            </h2>

                            <div className="space-y-8">
                                {/* Qué es */}
                                <div>
                                    <h4 className="font-bold text-miderma-pink uppercase tracking-widest text-xs mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-miderma-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        ¿En qué consiste?
                                    </h4>
                                    <p className="text-miderma-purple leading-relaxed">
                                        {tratActivo.que_es}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FDF6F4]/50 p-6 rounded-2xl border border-miderma-pink/20">
                                    {/* Duración */}
                                    <div>
                                        <h4 className="font-bold text-miderma-dark text-sm mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Duración del tratamiento
                                        </h4>
                                        <p className="text-sm text-miderma-purple">{tratActivo.duracion}</p>
                                    </div>
                                    {/* Sesiones */}
                                    <div>
                                        <h4 className="font-bold text-miderma-dark text-sm mb-2 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            Frecuencia / Sesiones
                                        </h4>
                                        <p className="text-sm text-miderma-purple">{tratActivo.sesiones}</p>
                                    </div>
                                </div>

                                {/* Efectos y Contraindicaciones */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-miderma-pink uppercase tracking-widest text-xs mb-3 border-b border-gray-100 pb-2">
                                            Duración de Efectos
                                        </h4>
                                        <p className="text-sm text-miderma-purple leading-relaxed">
                                            {tratActivo.efectos}
                                        </p>
                                    </div>
                                    {tratActivo.contraindicaciones && (
                                        <div>
                                            <h4 className="font-bold text-miderma-pink uppercase tracking-widest text-xs mb-3 border-b border-gray-100 pb-2 text-red-500/80">
                                                Contraindicaciones Principales
                                            </h4>
                                            <p className="text-sm text-miderma-purple leading-relaxed">
                                                {tratActivo.contraindicaciones}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Observaciones */}
                                {tratActivo.observaciones && (
                                    <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-miderma-dark">
                                        <h4 className="font-bold text-miderma-dark text-xs uppercase tracking-wider mb-2">
                                            Observaciones Médicas
                                        </h4>
                                        <p className="text-sm text-gray-600 italic">
                                            "{tratActivo.observaciones}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* BOTONES DE ACCIÓN ARREGLADOS */}
                        <div className="bg-white border-t border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-end gap-4 rounded-b-[2rem]">
                            <Link 
                                to="/contacto" 
                                className="w-full sm:w-auto bg-miderma-dark hover:bg-miderma-purple text-white px-8 py-3.5 rounded-full font-bold shadow-md transition-all text-sm text-center tracking-wider"
                            >
                                Reservar Cita
                            </Link>
                            <Link 
                                to="/contacto" 
                                className="w-full sm:w-auto bg-miderma-pink hover:opacity-80 text-miderma-dark px-8 py-3.5 rounded-full font-bold shadow-md transition-all text-sm text-center flex items-center justify-center gap-2 tracking-wider"
                            >
                                Reservar una consulta virtual
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #F2BDC7; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #291840; }
            `}</style>
        </div>
    );
};

export default Tratamientos;