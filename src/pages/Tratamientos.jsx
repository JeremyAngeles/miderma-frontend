import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// === BASE DE DATOS DE TRATAMIENTOS COMPLETA ===
const categoriasTratamientos = [
    {
        id: "clinicos",
        nombre: "Clínicos",
        tratamientos: [
            {
                nombre: "Electrocauterización",
                que_es: "Se aplica una corriente eléctrica a través de un electrodo fino sobre la lesión cutánea (verrugas, fibromas, queratosis seborreicas, angiomas), provocando destrucción controlada del tejido.",
                duracion: "10 a 30 minutos según el número y tamaño de las lesiones.",
                efectos: "Definitivos para la lesión tratada, aunque pueden aparecer nuevas lesiones con el tiempo.",
                contraindicaciones: "Marcapasos o dispositivos electrónicos implantados, Embarazo, Lesiones de naturaleza desconocida sin diagnóstico previo, Trastornos de coagulación no controlados.",
                sesiones: "Generalmente 1 sesión. Lesiones múltiples pueden requerir programación en varias visitas.",
                observaciones: "Puede quedar una pequeña costra que cae en 7-14 días. Se recomienda crema reaparadora y protección solar posterior para evitar hiperpigmentación.",
                layout_galeria: "1-foto",
                imagenes: ["/clinico-electro-1.jpg"]
            },
            {
                nombre: "Crioterapia",
                que_es: "Se aplica nitrógeno líquido mediante spray o sonda criogénica directamente sobre la lesión (verrugas, queratosis actínicas, moluscos contagiosos, lentigos). Aplica temperaturas extremadamente bajas (-196°C) que destruye células mediante congelación.",
                duracion: "5 a 15 minutos por sesión. La aplicación del frío dura solo segundos (10-30 segundos por lesión).",
                efectos: "La lesión se elimina progresivamente en 2-4 semanas. En queratosis actínicas puede ser definitivo; en verrugas víricas pueden requerirse varias sesiones.",
                contraindicaciones: "Crioglobulinemia, Urticaria por frío, Fenómeno de Raynaud grave, Zonas con compromiso vascular.",
                sesiones: "1 a 4 sesiones, espaciadas cada 2-4 semanas.",
                observaciones: "Puede aparecer ampolla, enrojecimiento o dolor local. La hipopigmentación temporal es frecuente y suele recuperarse en meses.",
                layout_galeria: "2-mix",
                imagenes: ["/clinico-crio-1.jpg", "/clinico-crio-2.webp"]
            },
            {
                nombre: "Biopsia Cutánea",
                que_es: "Extracción de una muestra de piel (punch, afeitado o incisional) bajo anestesia local para estudio microscópico e histopatológico, estableciendo un diagnóstico definitivo.",
                duracion: "15 a 30 minutos incluyendo preparación, anestesia y sutura si procede.",
                efectos: "Diagnóstico disponible en 7-15 días. La cicatrización completa ocurre en 2-4 semanas.",
                contraindicaciones: "Alergia a anestésicos locales (poco frecuente), Trastornos de coagulación sin control médico, Infección activa en la zona a biopsiar.",
                sesiones: "1 sesión. Si los márgenes son positivos en tumores, puede requerirse ampliación.",
                observaciones: "Puede quedar cicatriz mínima. En biopsias con sutura, los puntos se retiran a los 7-14 días según localización.",
                layout_galeria: "2-horiz",
                imagenes: ["/clinico-biopsia-1.jpg", "/clinico-biopsia-2.jpg"]
            },
            {
                nombre: "Infiltración de Corticoides",
                que_es: "Inyección de corticoide (generalmente acetónido de triamcinolona) directamente en la lesión (alopecia areata, queloide, granuloma anular, acné nodular, liquen plano). Tiene potente acción antiinflamatoria, inmunosupresora y antiproliferativa local.",
                duracion: "5 a 15 minutos por sesión.",
                efectos: "Efecto visible en 2-4 semanas. La duración del beneficio varía según patología: 1-6 meses.",
                contraindicaciones: "Infección activa en la zona, Hipersensibilidad a corticoides, Embarazo (valorar riesgo/beneficio), Diabetes descompensada.",
                sesiones: "3 a 6 sesiones, espaciadas cada 3-4 semanas. No se recomienda en exceso por riesgo de atrofia.",
                observaciones: "Puede causar atrofia cutánea transitoria, hipopigmentación o telangiectasias en la zona infiltrada. Evitar en zonas de piel fina si no es estrictamente necesario.",
                layout_galeria: "3-fotos",
                imagenes: ["/clinico-corticoide-1.jpg", "/clinico-corticoide-2.jpg", "/clinico-corticoide-3.avif"]
            },
            {
                nombre: "Inyección de Metotrexato",
                que_es: "Inyección intralesional o intramuscular de metotrexato para casos seleccionados de psoriasis, queratoacantoma o micosis fungoide localizada. Es un antimetabolito que inhibe la proliferación celular y modula la respuesta inmune.",
                duracion: "10 a 20 minutos por sesión.",
                efectos: "Respuesta visible en 4-8 semanas. Los efectos pueden mantenerse meses según la patología.",
                contraindicaciones: "Embarazo y lactancia (teratogénico), Insuficiencia hepática o renal, Alteraciones hematológicas, Infecciones activas, Consumo excesivo de alcohol, Inmunodeficiencia.",
                sesiones: "Variable según respuesta: 1-4 sesiones, espaciadas cada 4-8 semanas.",
                observaciones: "Puede requerir control analítico (hemograma, función hepática y renal) antes y durante el tratamiento. Uso exclusivo bajo supervisión médica estricta.",
                layout_galeria: "1-foto",
                imagenes: ["/clinico-metotrexato-1.avif"]
            },
            {
                nombre: "Curetaje",
                que_es: "Eliminación mecánica de lesiones cutáneas. Se raspa la lesión (queratosis seborreicas, moluscos contagiosos, verrugas, queratosis actínicas) con una cureta, bajo anestesia local si es necesario.",
                duracion: "15 a 30 minutos.",
                efectos: "Eliminación inmediata de la lesión. Cicatrización en 2-4 semanas. Puede quedar mácula hipo o hiperpigmentada.",
                contraindicaciones: "Lesiones sospechosas de melanoma, Trastornos de coagulación no controlados, Tendencia a cicatrización queloide.",
                sesiones: "Generalmente 1 sesión. En moluscos contagiosos pueden aparecer nuevas lesiones que requieran tratamiento adicional.",
                observaciones: "Deja cicatriz plana o ligeramente deprimida. Técnica útil por su rapidez y bajo coste.",
                layout_galeria: "2-mix",
                imagenes: ["/clinico-curetaje-1.avif", "/clinico-curetaje-2.avif"]
            },
            {
                nombre: "Drenaje de Abscesos y Quistes",
                que_es: "Incisión, drenaje y lavado de la cavidad para eliminar acumulación de material purulento o quístico. En quistes, idealmente se realiza exéresis de la pared completa para evitar recidiva.",
                duracion: "15 a 45 minutos.",
                efectos: "Alivio inmediato del dolor. Cicatrización en 1-3 semanas. La resolución definitiva depende de la eliminación completa de la causa.",
                contraindicaciones: "Abscesos profundos que afecten planos fasciales, Celulitis extensa sin colección (no drenar), Trastornos graves de coagulación.",
                sesiones: "1 sesión. Quistes recidivantes requieren exéresis programada.",
                observaciones: "Puede requerir antibiótico complementario. Si el quiste no se extirpa completamente, existe alta probabilidad de recidiva.",
                layout_galeria: "2-horiz",
                imagenes: ["/clinico-drenaje-1.jpg", "/clinico-drenaje-2.avif"]
            }
        ]
    },
    {
        id: "quirurgicos",
        nombre: "Quirúrgicos",
        tratamientos: [
            {
                nombre: "Exéresis de Tumores Benignos y Malignos",
                que_es: "Extirpación quirúrgica completa bajo anestesia local de tumores benignos (nevus, lipomas, quistes, fibromas) o malignos (carcinoma basocelular, espinocelular, melanoma), con sutura directa o colgajos, permitiendo estudio histológico posterior.",
                duracion: "30 a 90 minutos según tamaño, localización y complejidad.",
                efectos: "Definitivo si la extirpación es completa. Resultado histológico en 7-15 días. Cicatriz mejora progresivamente durante 6-12 meses.",
                contraindicaciones: "Trastornos de coagulación no controlados, Infección activa en la zona, Alergia a anestésicos locales. En tumores malignos con metástasis, requiere evaluación oncológica previa.",
                sesiones: "1 sesión. Puede requerirse ampliación de márgenes si el estudio histológico lo indica.",
                observaciones: "La cicatriz dependerá del tamaño, localización y técnica de cierre. Se recomienda protección solar estricta durante el primer año.",
                layout_galeria: "3-fotos",
                imagenes: ["/quirurgico-exeresis-1.jpg", "/quirurgico-exeresis-2.jpg", "/quirurgico-exeresis-3.webp"]
            }
        ]
    },
    {
        id: "esteticos",
        nombre: "Estéticos",
        tratamientos: [
            {
                nombre: "Dermapen (Microneedling)",
                que_es: "Dispositivo con microagujas estériles que penetran verticalmente a profundidad controlada (0.25-2.5 mm) creando microperforaciones que activan la producción de colágeno, elastina y factores de crecimiento.",
                duracion: "30 a 45 minutos según zona.",
                efectos: "Mejoría progresiva durante 3-6 meses. Los efectos son acumulativos y mantenidos si se realizan sesiones de refuerzo anuales.",
                contraindicaciones: "Acné activo severo o infección cutánea, Herpes activo, Isotretinoína oral en los últimos 6 meses, Tendencia a cicatrices queloides, Embarazo y lactancia, Enfermedades autoinmunes activas.",
                sesiones: "3 a 6 sesiones, espaciadas cada 3-4 semanas.",
                observaciones: "Enrojecimiento y leve edema las primeras 24-72 horas. Evitar maquillaje las primeras 24 horas. Protección solar estricta durante 2 semanas.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-dermapen-1.jpg"]
            },
            {
                nombre: "Láser CO2 Fraccionado y Ablativo",
                que_es: "Se aplica láser CO2 (10,600 nm) sobre la piel creando microcolumnas térmicas (fraccionado) o ablación completa (ablativo), estimulando regeneración y producción de colágeno. Requiere anestesia tópica o local.",
                duracion: "30 a 90 minutos según área.",
                efectos: "Fraccionado: 1-2 años con mantenimiento. Ablativo: 3-5 años.",
                contraindicaciones: "Fototipos altos (relativo), Infección activa (herpes, bacteriana), Isotretinoína oral reciente (<6 meses), Embarazo y lactancia, Tendencia queloide (ablativo), Exposición solar reciente.",
                sesiones: "Fraccionado: 3-5 sesiones cada 4-6 semanas. Ablativo: 1-2 sesiones.",
                observaciones: "Enrojecimiento y descamación 5-10 días (fraccionado) o 2-3 semanas (ablativo). Fotoprotección estricta obligatoria.",
                layout_galeria: "2-mix",
                imagenes: ["/estetico-laserco2-1.jpg", "/estetico-laserco2-2.jpg"]
            },
            {
                nombre: "IPL (Luz Pulsada Intensa)",
                que_es: "Aplicación de pulsos de luz de amplio espectro (500-1200 nm) que destruyen selectivamente manchas y vasos sanguíneos. Trata manchas, rojeces, rosácea, fotoenvejecimiento y textura irregular.",
                duracion: "20 a 40 minutos.",
                efectos: "Manchas y rojeces mejoran en 2-4 semanas. Resultado mantenido durante 6-12 meses con protección solar adecuada.",
                contraindicaciones: "Fototipos V-VI, Bronceado reciente o uso de autobronceadores, Embarazo, Isotretinoína en los últimos 6 meses, Enfermedades fotosensibles, Epilepsia fotosensible.",
                sesiones: "3 a 6 sesiones, espaciadas cada 3-4 semanas. Sesiones de mantenimiento anuales.",
                observaciones: "Las manchas se oscurecen temporalmente ('efecto café molido') antes de desprenderse. Evitar sol 2 semanas antes y después.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-ipl-1.jpg", "/stetico-ipl-2.jpg"]
            },
            {
                nombre: "Depilación con IPL",
                que_es: "Aplicación de pulsos de luz sobre la zona a depilar previamente rasurada. La luz es absorbida por la melanina del folículo piloso, generando calor que destruye la matriz germinativa del vello.",
                duracion: "15 a 60 minutos según área.",
                efectos: "Reducción permanente del 70-90% del vello. Sesiones de mantenimiento anuales.",
                contraindicaciones: "Fototipos altos (relativo), Vello claro, blanco o pelirrojo (ineficaz), Bronceado reciente, Fotosensibilidad, Embarazo, Tatuajes en la zona.",
                sesiones: "6 a 10 sesiones espaciadas 4-6 semanas.",
                observaciones: "Eritema folicular transitorio. Evitar sol 2 semanas antes y después. El vello cae en 1-3 semanas.",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-depilacion-1.png", "/estetico-depilacion-2.jpg", "/estetico-depilacion-3.jpg"]
            },
            {
                nombre: "Mesoterapia Facial y Capilar",
                que_es: "Múltiples microinyecciones intradérmicas superficiales de cócteles de vitaminas, minerales, aminoácidos, ácido hialurónico y factores de crecimiento que nutren la piel y estimulan el folículo piloso.",
                duracion: "30 a 45 minutos.",
                efectos: "Efecto luminoso visible a los 7-15 días. Resultados duran 4-6 meses tras completar el ciclo. En capilar, mejoría visible a los 3-4 meses.",
                contraindicaciones: "Embarazo y lactancia, Alergia a componentes del cóctel, Infección activa en la zona, Enfermedades autoinmunes, Trastornos de coagulación.",
                sesiones: "Facial: 4-8 sesiones, cada 15 días. Capilar: 6-10 sesiones, cada 2-4 semanas, luego mantenimiento.",
                observaciones: "Pueden aparecer pequeños hematomas y leve inflamación 24-48 horas. Evitar maquillaje 12 horas. No realizar si hay brote de acné activo.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-mesoterapia-1.jpg"]
            },
            {
                nombre: "Peelings Químicos (Retinoico, Salicílico, Super Nova)",
                que_es: "Aplicación de solución química sobre la piel limpia durante tiempo controlado, seguida de neutralización. Elimina capas superficiales o medias de la piel estimulando renovación celular y colágeno.",
                duracion: "30 a 45 minutos.",
                efectos: "Resultado visible tras la descamación (7-10 días). Mejora progresiva durante 1-3 meses. Efectos mantenidos 6-12 meses.",
                contraindicaciones: "Embarazo y lactancia (especialmente retinoico), Infección activa (herpes, acné severo), Isotretinoína oral en los últimos 6 meses, Heridas, Alergias, Exposición solar reciente.",
                sesiones: "4 a 8 sesiones, espaciadas cada 2-4 semanas según intensidad del peeling.",
                observaciones: "Descamación visible 3-7 días. Evitar sol y maquillaje durante 5-7 días. El peeling Super Nova (combinado) produce mayor descamación y requiere 7-10 días de recuperación.",
                layout_galeria: "2-mix",
                imagenes: ["/estetico-peeling-1.webp", "/estetico-peeling-2.jpg"]
            },
            {
                nombre: "Plasma Rico en Plaquetas (PRP)",
                que_es: "Extracción de sangre del paciente, centrifugación para concentrar plaquetas ricas en factores de crecimiento y reinyección del plasma en la zona a tratar (facial o capilar).",
                duracion: "45 a 60 minutos (incluye extracción, centrifugado e infiltración).",
                efectos: "Mejoría progresiva visible a las 3-6 semanas. Resultado mantenido 6-12 meses. En capilar, la mejoría persiste 12-18 meses.",
                contraindicaciones: "Trastornos hematológicos o plaquetarios, Infección activa o fiebre, Cáncer activo, Tratamiento anticoagulante, Embarazo y lactancia, Enfermedades autoinmunes activas.",
                sesiones: "3 a 6 sesiones, espaciadas cada 3-4 semanas. Mantenimiento cada 4-6 meses.",
                observaciones: "Al ser autólogo, no hay riesgo de alergia. Puede aparecer leve inflamación y hematomas 24-48 horas. No tomar antiinflamatorios 5 días antes.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-prp-1.jpg", "/estetico-prp-2.jpg"]
            },
            {
                nombre: "Toxina Botulínica",
                que_es: "Microinyecciones de toxina botulínica tipo A en músculos específicos (entrecejo, patas de gallo, frente, masetero) para bloquear temporalmente la contracción muscular en la zona inyectada.",
                duracion: "15 a 30 minutos.",
                efectos: "Efecto visible a los 3-7 días, máximo a las 2 semanas. Duración de 4 a 6 meses. En masetero puede durar 6-12 meses. Efecto reversible.",
                contraindicaciones: "Embarazo y lactancia, Miastenia gravis u otros trastornos neuromusculares, Alergia a albúmina, Infección activa, Consumo de aminoglucósidos.",
                sesiones: "1 sesión cada 4-6 meses para mantener el efecto. En masetero, 1-3 sesiones iniciales y mantenimiento anual.",
                observaciones: "No masajear la zona tratada ni hacer ejercicio intenso durante 24 horas. No acostarse en las primeras 4 horas.",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-botox-1.jpg", "/estetico-botox-2.jpg", "/estetico-botox-3.jpg"]
            },
            {
                nombre: "Ácido Hialurónico (Rellenos)",
                que_es: "Inyección de ácido hialurónico reticulado de diferentes densidades (ojeras, pómulos, mentón, labios) que aporta volumen, hidratación y soporte estructural, estimulando la producción de colágeno.",
                duracion: "30 a 60 minutos según zonas tratadas.",
                efectos: "Efecto inmediato. Duración de 9 a 18 meses según densidad del producto y zona (en labios suele durar menos: 6-12 meses).",
                contraindicaciones: "Embarazo y lactancia, Alergia a ácido hialurónico, Infección activa, Enfermedades autoinmunes activas, Tratamiento anticoagulante.",
                sesiones: "1 sesión inicial. Retoques a las 2-4 semanas si es necesario. Mantenimiento cada 12-18 meses.",
                observaciones: "Puede aparecer inflamación, enrojecimiento y hematomas 3-7 días. Evitar calor intenso, alcohol y ejercicio vigoroso 24-48 horas. Es reversible con hialuronidasa.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-hialuronico-1.jpg"]
            },
            {
                nombre: "Bioestimuladores: Profhilo y Opera",
                que_es: "Inyección de puntos estratégicos en cara, cuello o escote con ácido hialurónico no reticulado (Profhilo) o híbrido (Opera). No aporta volumen sino calidad de piel: hidratación profunda, firmeza y luminosidad.",
                duracion: "15 a 30 minutos.",
                efectos: "Resultado progresivo visible a las 3-4 semanas. Duración de 6 a 9 meses. Efecto acumulativo con ciclos repetidos.",
                contraindicaciones: "Embarazo y lactancia, Alergia a ácido hialurónico, Infección activa, Enfermedades autoinmunes, Tratamiento anticoagulante.",
                sesiones: "Protocolo inicial: 2 sesiones separadas 4 semanas. Mantenimiento cada 6-9 meses (1-2 sesiones).",
                observaciones: "Mínimo riesgo de hematomas. Pueden aparecer pequeñas pápulas transitorias que se resuelven en horas. Evitar antiinflamatorios 5 días antes.",
                layout_galeria: "2-mix",
                imagenes: ["/estetico-bioestimulador-1.webp", "/estetico-bioestimulador-2.jpg"]
            },
            {
                nombre: "Exosomas",
                que_es: "Aplicación tópica o infiltración de vesículas extracelulares que contienen factores de crecimiento, proteínas y lípidos (generalmente combinados con microneedling o láser) para potenciar la regeneración.",
                duracion: "30 a 60 minutos.",
                efectos: "Mejoría visible a las 3-6 semanas. Duración estimada de 6-12 meses. Efectos acumulativos.",
                contraindicaciones: "Embarazo y lactancia, Cáncer activo, Infección activa en la zona, Enfermedades autoinmunes activas, Alergia a componentes.",
                sesiones: "3 a 6 sesiones, espaciadas cada 3-4 semanas.",
                observaciones: "Combinar con procedimientos que abran canales (microneedling) para optimizar penetración.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-exosomas-1.webp", "/estetico-exosomas-2.webp"]
            },
            {
                nombre: "Limpieza Facial Especializada",
                que_es: "Protocolo personalizado para acné, rosácea, manchas o envejecimiento que incluye: higiene profunda, exfoliación, extracción de comedones, aplicación de principios activos específicos y fotoprotección.",
                duracion: "60 a 90 minutos.",
                efectos: "Efecto inmediato de limpieza y luminosidad. Resultado mantenido 3-4 semanas. En acné, mejoría progresiva con sesiones regulares.",
                contraindicaciones: "Brote activo severo de acné (evitar extracciones en lesiones inflamatorias), Infección cutánea activa, Rosácea en fase de brote intenso, Dermatitis activa.",
                sesiones: "Mensual. En acné: cada 2-4 semanas. En rosácea: cada 4-6 semanas.",
                observaciones: "Evitar maquillaje 24 horas. No aplicar productos irritantes 48 horas. Las extracciones solo se realizan en lesiones no inflamatorias.",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-limpieza-1.jpg", "/estetico-limpieza-2.webp", "/estetico-limpieza-3.jpg"]
            },
            {
                nombre: "Hydrafacial",
                que_es: "Tecnología de hidradermabrasión en 3-4 fases: limpieza y exfoliación suave, peeling químico suave, extracción por vórtice e infusión de sueros personalizados (antioxidantes, ácido hialurónico, péptidos).",
                duracion: "30 a 45 minutos.",
                efectos: "Efecto inmediato de luminosidad, hidratación y tersura (efecto 'glow'). Duración de 3-4 semanas.",
                contraindicaciones: "Infección activa en la zona, Rosácea en brote severo, Dermatitis activa, Acné inflamatorio severo, Embarazo (valorar), Alergia a sueros.",
                sesiones: "Mensual. Puede realizarse cada 2-4 semanas según necesidad.",
                observaciones: "Procedimiento no invasivo, sin tiempo de recuperación. Puede maquillarse inmediatamente después. Ideal antes de eventos.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-hydrafacial-1.jpg"]
            }
        ]
    },
    {
        id: "cosmeticos",
        nombre: "Cosméticos (Dermocosmética)",
        tratamientos: [
            {
                nombre: "Consulta Cosmética Personalizada",
                que_es: "Evaluación del tipo de piel, necesidades y prescripción de rutina dermocosmética personalizada (higiene, hidratación, fotoprotección, activos).",
                duracion: "20 a 30 minutos.",
                observaciones: "Incluye educación sobre uso correcto de productos y orden de aplicación.",
                layout_galeria: "2-mix",
                imagenes: ["/cosmetico-consulta-1.png", "/cosmetico-consulta-2.jpg"]
            },
            {
                nombre: "Fotoprotección Personalizada",
                que_es: "Selección de protector solar según fototipo, patología cutánea (manchas, acné, rosácea) y estilo de vida.",
                observaciones: "Se te educará sobre la cantidad necesaria, los tiempos de reaplicación y fotoprotección oral.",
                layout_galeria: "2-horiz",
                imagenes: ["/cosmetico-solar-1.webp", "/cosmetico-solar-2.jpg"]
            },
            {
                nombre: "Rutinas Antiedad / Despigmentantes / Antiacné",
                que_es: "Prescripción de rutinas específicas con activos según objetivo clínico (retinoides, vitamina C, ácidos, niacinamida, etc.).",
                observaciones: "Requiere seguimiento periódico para ajuste según la tolerancia de tu piel y la respuesta al tratamiento.",
                layout_galeria: "3-fotos",
                imagenes: ["/cosmetico-rutina-1.jpg", "/cosmetico-rutina-2.webp", "/cosmetico-rutina-3.jpg"]
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-miderma-dark mb-4 font-serif">Nuestros Tratamientos</h1>
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
                <div id="detalle-tratamiento" className="w-full lg:w-2/3 xl:w-3/4 flex flex-col">
                    
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        
                        {/* ÁREA GRIS REDUCIDA CON FOTOS GRANDES (p-2 a p-3) */}
                        <div className="w-full bg-[#F2F2F2] p-2 sm:p-3 relative rounded-t-[2rem]">
                            
                            <div className="absolute top-5 left-5 z-20 bg-miderma-dark text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md pointer-events-none">
                                {catActiva.nombre}
                            </div>

                            {/* 1. LAYOUT: 1-FOTO HORIZONTAL PANORÁMICA */}
                            {tratActivo.layout_galeria === "1-foto" && (
                                <div className="w-full h-[250px] md:h-[380px] rounded-[1.5rem] overflow-hidden relative">
                                    <img 
                                        src={tratActivo.imagenes[0]} 
                                        alt={tratActivo.nombre} 
                                        className="w-full h-full object-cover object-center" 
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80" }}
                                    />
                                </div>
                            )}

                            {/* 2. LAYOUT: 2-MIX (1 HORIZONTAL GRANDE IZQ + 1 VERTICAL DER) */}
                            {tratActivo.layout_galeria === "2-mix" && (
                                <div className="flex flex-col md:flex-row gap-2 sm:gap-3 h-auto md:h-[350px]">
                                    <div className="w-full md:w-2/3 h-[250px] md:h-full rounded-[1.5rem] overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                            src={tratActivo.imagenes[0]} 
                                            alt={`${tratActivo.nombre} 1`} 
                                            className="w-full h-full object-cover object-center" 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80" }}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 h-[250px] md:h-full rounded-[1.5rem] overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                            src={tratActivo.imagenes[1]} 
                                            alt={`${tratActivo.nombre} 2`} 
                                            className="w-full h-full object-cover object-center" 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 3. LAYOUT: 2-HORIZ (2 FOTOS HORIZONTALES APILADAS O EN FILA) */}
                            {tratActivo.layout_galeria === "2-horiz" && (
                                <div className="flex flex-col md:flex-row gap-2 sm:gap-3 h-auto md:h-[280px]">
                                    <div className="flex-1 h-[200px] md:h-full rounded-[1.5rem] overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                            src={tratActivo.imagenes[0]} 
                                            alt={`${tratActivo.nombre} 1`} 
                                            className="w-full h-full object-cover object-center" 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80" }}
                                        />
                                    </div>
                                    <div className="flex-1 h-[200px] md:h-full rounded-[1.5rem] overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                            src={tratActivo.imagenes[1]} 
                                            alt={`${tratActivo.nombre} 2`} 
                                            className="w-full h-full object-cover object-center" 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 4. LAYOUT: 3-FOTOS (1 HORIZONTAL GRANDE + 2 CUADRADAS APILADAS) */}
                            {tratActivo.layout_galeria === "3-fotos" && (
                                <div className="flex flex-col md:flex-row gap-2 sm:gap-3 h-auto md:h-[350px]">
                                    <div className="w-full md:w-2/3 h-[250px] md:h-full rounded-[1.5rem] overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                            src={tratActivo.imagenes[0]} 
                                            alt={`${tratActivo.nombre} 1`} 
                                            className="w-full h-full object-cover object-center" 
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1615397323147-3806a6ccad92?auto=format&fit=crop&w=800&q=80" }}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2 sm:gap-3 h-[120px] md:h-full">
                                        <div className="flex-1 rounded-[1.5rem] overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img 
                                                src={tratActivo.imagenes[1]} 
                                                alt={`${tratActivo.nombre} 2`} 
                                                className="w-full h-full object-cover object-center" 
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80" }}
                                            />
                                        </div>
                                        <div className="flex-1 rounded-[1.5rem] overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img 
                                                src={tratActivo.imagenes[2]} 
                                                alt={`${tratActivo.nombre} 3`} 
                                                className="w-full h-full object-cover object-center" 
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ÁREA BLANCA CON TEXTO Y DETALLES */}
                        <div className="p-6 sm:p-10 lg:p-12 bg-white flex-1">
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

                                {/* Bloque Condicional para Duración y Sesiones */}
                                {(tratActivo.duracion || tratActivo.sesiones) && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FDF6F4]/50 p-6 rounded-2xl border border-miderma-pink/20">
                                        {tratActivo.duracion && (
                                            <div>
                                                <h4 className="font-bold text-miderma-dark text-sm mb-2 flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    Duración del tratamiento
                                                </h4>
                                                <p className="text-sm text-miderma-purple">{tratActivo.duracion}</p>
                                            </div>
                                        )}
                                        {tratActivo.sesiones && (
                                            <div>
                                                <h4 className="font-bold text-miderma-dark text-sm mb-2 flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    Frecuencia / Sesiones
                                                </h4>
                                                <p className="text-sm text-miderma-purple">{tratActivo.sesiones}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Efectos y Contraindicaciones Condicionales */}
                                {(tratActivo.efectos || tratActivo.contraindicaciones) && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {tratActivo.efectos && (
                                            <div>
                                                <h4 className="font-bold text-miderma-pink uppercase tracking-widest text-xs mb-3 border-b border-gray-100 pb-2">
                                                    Duración de Efectos
                                                </h4>
                                                <p className="text-sm text-miderma-purple leading-relaxed">
                                                    {tratActivo.efectos}
                                                </p>
                                            </div>
                                        )}
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
                                )}

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

                        {/* BOTONES DE ACCIÓN */}
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