import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // <-- IMPORTAMOS EL NAVBAR CORRECTO

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
                <span className={`font-bold text-sm md:text-base transition-colors pr-4 ${isOpen ? 'text-miderma-pink' : 'text-[#291840] group-hover:text-miderma-pink'}`}>
                    {title}
                </span>
                <span className={`transform transition-transform duration-300 text-miderma-pink font-bold text-xl flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
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
// DATA DE LOS SERVICIOS ACTUALIZADA
// ==========================================
const serviciosLista = [
    {
        id: "clinica",
        titulo: "Dermatología Clínica",
        descripcion: "Tu piel habla de ti. Nosotros te ayudamos a entenderla y cuidarla. La piel es nuestro órgano más grande y el primero que ve el mundo. No solo nos protege, también refleja nuestro estado de salud, nuestras emociones y nuestros hábitos. Por eso, en nuestra consulta no tratamos 'enfermedades de la piel', tratamos personas que buscan sentirse bien con lo que ven en el espejo. En Miderma ofrecemos diagnósticos certeros y tratamientos efectivos porque somos dermatólogos capacitados para las afecciones más comunes de la piel, de todas las edades, con un enfoque integral que combina ciencia y tecnología avanzada. Nuestro objetivo es devolverle la salud a tu piel.",
        imagen: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Acné",
                detalles: [
                    { label: "¿Qué es?:", text: "Inflamación de la piel por la obstrución de los folículos pilosos." },
                    { label: "¿Por qué ocurre?:", text: "Acumulación de sebo, detritos celulares, bacterias y cambios hormonales." },
                    { label: "Síntomas:", text: "Espinillas, puntos negros, quistes dolorosos, cicatrices." },
                    { label: "Tratamiento:", text: "Ofrecemos un enfoque personalizado que puede incluir tratamientos tópicos, medicación oral, terapia láser y procedimientos para minimizar las cicatrices." }
                ]
            },
            {
                titulo: "Psoriasis",
                detalles: [
                    { label: "¿Qué es?:", text: "Enfermedad crónica autoinmune que acelera la renovación de la células de la piel." },
                    { label: "¿Por qué ocurre?:", text: "El sistema inmunológico provoca una producción excesiva de células cutáneas." },
                    { label: "Síntomas:", text: "Placas rojas con escamas plateadas, picazón, y uñas engrosadas o con hoyuelos y posible afectación articular." },
                    { label: "Tratamiento:", text: "Ofrecemos desde tratamientos tópicos y medicamentos sistémicos para mejorar tu calidad de vida." }
                ]
            },
            {
                titulo: "Rosácea",
                detalles: [
                    { label: "¿Qué es?:", text: "Una enfermedad inflamatoria crónica que causa enrojecimiento y visibilidad de los vasos sanguíneos en el rostro." },
                    { label: "¿Por qué ocurre?:", text: "Factores vasculares, inmunológicos y ambientales." },
                    { label: "Síntomas:", text: "Enrojecimiento facial, vasos visibles, pápulas y pústulas similares al acné. Algunos casos engrosamiento de la piel en la nariz." },
                    { label: "Tratamiento:", text: "Tratamientos tópicos, orales y terapias con luz pulsada intensa para controlar los brotes y reducir el enrojecimiento." }
                ]
            },
            {
                titulo: "Melasma",
                detalles: [
                    { label: "¿Qué es?:", text: "Es una alteración de la pigmentación de la piel que se manifiesta como manchas marrones o grisáceas, generalmente en el rostro (mejillas, frente, nariz y labio superior)." },
                    { label: "¿Por qué ocurre?:", text: "Se produce por una sobreproducción de melanina, el pigmento natural de la piel. Los principales factores que lo desencadenan son: cambios hormonales, exposición solar sin protección, predisposición genética y uso de ciertos medicamentos o cosméticos irritantes." },
                    { label: "Síntomas:", text: "Manchas oscuras simétricas en el rostro. No causa dolor ni picazón, pero afecta la estética y la autoestima." },
                    { label: "Tratamiento:", text: "Diseñamos un plan que combina despigmentantes tópicos y procedimientos como peelings químicos o IPL (Luz pulsada de alta intensidad) para aclarar las manchas de forma segura." }
                ]
            },
            {
                titulo: "Dermatitis (Atópica, Seborreica, de Contacto)",
                detalles: [
                    { label: "¿Qué es?:", text: "Inflamación de la piel que puede ser atópica, seborreica o de contacto." },
                    { label: "¿Por qué ocurre?:", text: "Predisposición genética, exceso de grasa, alergias o irritantes externos." },
                    { label: "Síntomas:", text: "Enrojecimiento, picazón, descamación." },
                    { label: "Edad más frecuente:", text: "Atópica: niños pequeños y adolescentes. Seborreica: lactantes (costra láctea) y adultos jóvenes/mediana edad. De contacto: cualquier edad según exposición." }
                ]
            },
            {
                titulo: "Vitíligo",
                detalles: [
                    { label: "¿Qué es?:", text: "Pérdida de pigmento que genera manchas blancas en la piel." },
                    { label: "¿Por qué ocurre?:", text: "El sistema inmunológico destruye las células que producen el color de la piel (melanocitos)." },
                    { label: "Síntomas:", text: "Manchas blancas bien delimitadas, generalmente simétricas." },
                    { label: "Tratamiento:", text: "Te ofrecemos opciones como medicamentos tópicos, infiltración y opciones quirúrgicas para repigmentar la piel." }
                ]
            },
            {
                titulo: "Urticaria",
                detalles: [
                    { label: "¿Qué es?:", text: "Reacción de la piel que provoca ronchas rojas o rosadas que producen picazón." },
                    { label: "¿Por qué ocurre?:", text: "Respuesta alérgica a alimentos, medicamentos, picaduras, infecciones o estrés." },
                    { label: "Síntomas:", text: "Ronchas que aparecen y desaparecen, picazón intensa, a veces hinchazón." },
                    { label: "Tratamiento:", text: "Realizamos estudios laboratoriales y utilizamos antihistamínicos y otros tratamientos para aliviar síntomas y prevenir brotes." }
                ]
            },
            {
                titulo: "Caída del Cabello (Alopecia)",
                detalles: [
                    { label: "¿Qué es?:", text: "La pérdida de cabello localizada o difusa puede ser temporal o permanente." },
                    { label: "¿Por qué ocurre?:", text: "Genética, cambios hormonales, enfermedades autoinmunes, estrés o medicamentos." },
                    { label: "Síntomas:", text: "Disminución de densidad capilar, áreas despobladas, caída difusa o localizada." },
                    { label: "Tratamiento:", text: "Nuestro enfoque comienza con un diagnóstico preciso (incluyendo análisis de sangre y tricoscopia) para ofrecerte tratamientos personalizados, terapias tópicas, oral y mesoterapia." }
                ]
            },
            {
                titulo: "Infecciones Micóticas y Bacterianas de la Piel",
                detalles: [
                    { label: "¿Qué es?:", text: "Infecciones comunes causadas por hongos (tiña o pie de atleta) o bacterias (como el impétigo) que afectan la piel, uñas o cabello." },
                    { label: "¿Por qué ocurren?:", text: "Humedad, calor, contacto con superficies contaminadas, baja inmunidad." },
                    { label: "Síntomas:", text: "Manchas rojas, descamación, picazón, uñas engrosadas o quebradizas." },
                    { label: "Tratamiento:", text: "Diagnosticamos el agente causal y te recetamos el tratamiento antimicótico o antibiótico más efectivo, ya sea tópico o sistémico." }
                ]
            },
            {
                titulo: "Enfermedades de las Uñas",
                detalles: [
                    { label: "¿Qué es?:", text: "Alteraciones en la forma, color o textura de las uñas." },
                    { label: "¿Por qué ocurren?:", text: "Infecciones por hongos o bacterias, traumatismos, enfermedades internas." },
                    { label: "Síntomas:", text: "Uñas quebradizas, engrosadas, encarnadas, cambios de color o deformaciones." },
                    { label: "Edad más frecuente:", text: "Todas las edades; la onicomicosis es más común en adultos mayores." }
                ]
            }
        ]
    },
    {
        id: "pediatrica",
        titulo: "Dermatología Pediátrica",
        descripcion: "La piel de los niños es más delicada y sensible. En Miderma tenemos como objetivo no solo tratar la enfermedad, sino educar y acompañar a la familia para que la salud de la piel de los más pequeños esté en las mejores manos. Contamos con capacitaciones en dermatología pediátrica porque entendemos las necesidades específicas de la piel infantil, brindándole un diagnóstico y tratamiento para las afecciones cutáneas en este grupo etáreo.",
        imagen: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Dermatitis Atópica",
                detalles: [
                    { label: "¿Qué es?:", text: "Es la forma más común de eczema en la infancia. Inflamación crónica de la piel con resequedad y picazón." },
                    { label: "¿Por qué ocurre?:", text: "Predisposición genética, alergias, clima." },
                    { label: "Síntomas:", text: "Picazón intensa (prurito) síntoma principal con piel seca, placas rojas, descamación y en ocasiones engrosamientos por el rascado. La localización varía con la edad: bebés afecta mejillas, cuero cabelludo y pliegues; en niños mayores pliegues de codos y rodillas." },
                    { label: "Tratamiento:", text: "La base es la hidratación intensiva con emolientes. En los brotes se usa corticoides o inhibidores de la calcineurina tópicos. En casos graves, pueden necesitarse tratamientos sistémicos." }
                ]
            },
            {
                titulo: "Miliaria Rubra (sarpullido por calor)",
                detalles: [
                    { label: "¿Qué es?:", text: "Una erupción muy común en bebés y niños que ocurre cuando el sudor queda atrapado en los conductos de las glándulas sudoríparas, que en los más pequeños aún son inmaduros." },
                    { label: "¿Por qué ocurre?:", text: "Calor, humedad, exceso de abrigo." },
                    { label: "Síntomas:", text: "Micropápulas rojas con picazón en cuello, tronco o pliegues." },
                    { label: "Edad:", text: "Común en lactantes y niños pequeños." },
                    { label: "Tratamiento:", text: "El pilar es enfriar la piel y eliminar el sudor. Se recomienda ropa ligera de algodón, ambientes frescos y baños con agua tibia. Suele resolverse al refrescar la piel." }
                ]
            },
            {
                titulo: "Impétigo",
                detalles: [
                    { label: "¿Qué es?:", text: "Infección bacteriana superficial de la piel." },
                    { label: "¿Por qué ocurre?:", text: "Bacterias (estreptococos, estafilococos) en heridas o rasguños." },
                    { label: "Síntomas:", text: "Ampollas o costras amarillentas alrededor de boca y nariz." },
                    { label: "Edad:", text: "Frecuente en niños en edad escolar." },
                    { label: "Tratamiento:", text: "Requiere antibióticos. Para casos leves y localizados, es suficiente con una pomada antibiótica tópica. Si es extenso, se usan antibióticos orales." }
                ]
            },
            {
                titulo: "Infecciones Micóticas (Hongos)",
                detalles: [
                    { label: "¿Qué es?:", text: "Infecciones muy frecuentes en la infancia. Incluyen la candidiasis y las dermatofitosis o 'tiñas'. En niños, la tiña más común es la del cuero cabelludo (tiña capitis)." },
                    { label: "¿Por qué ocurre?:", text: "Humedad, contacto con superficies contaminadas." },
                    { label: "Síntomas:", text: "Varían según el tipo. La tiña capitis causa áreas de caída de cabello con descamación. En la piel, las tiñas suelen presentarse como placas redondas y escamosas con un borde activo." },
                    { label: "Edad:", text: "Más común en niños y adolescentes." },
                    { label: "Tratamiento:", text: "La mayoría responde bien a antifúngicos tópicos (cremas). Las tiñas del cuero cabelludo y las infecciones extensas de uñas requieren tratamiento antifúngico oral." }
                ]
            },
            {
                titulo: "Dermatitis de Pañal",
                detalles: [
                    { label: "¿Qué es?:", text: "Irritación en la zona cubierta por el pañal." },
                    { label: "¿Por qué ocurre?:", text: "Humedad, fricción, contacto prolongado con orina o heces." },
                    { label: "Síntomas:", text: "Piel enrojecida, dolorida, escamosa y sensible en la zona de contacto del pañal, se puede agregar una infección por cándida." },
                    { label: "Edad:", text: "Típica en lactantes." },
                    { label: "Tratamiento:", text: "Requiere cambios frecuentes de pañal, limpieza suave y secado completo. El uso de cremas de barrera con óxido de zinc protege la piel. Si hay infección por hongos, se añade una crema antifúngica." }
                ]
            },
            {
                titulo: "Verrugas (Virus del Papiloma Humano)",
                detalles: [
                    { label: "¿Qué es?:", text: "Lesiones cutáneas causadas por el virus del papiloma humano (VPH)." },
                    { label: "¿Por qué ocurre?:", text: "Contagio por contacto directo o superficies contaminadas." },
                    { label: "Síntomas:", text: "Protuberancias duras que pueden aparecer en cualquier parte de la piel." },
                    { label: "Edad:", text: "Común en niños y adolescentes." },
                    { label: "Tratamiento:", text: "Existen múltiples opciones para destruir la lesión. El tratamiento de elección es la crioterapia con nitrógeno líquido, también contamos con electrocauterización, láser CO2 y tópicos como ácido salicílico. En niños, buscamos siempre minimizar el dolor y las cicatrices." }
                ]
            },
            {
                titulo: "Molusco Contagioso",
                detalles: [
                    { label: "¿Qué es?:", text: "Infección viral benigna de la piel muy contagiosa." },
                    { label: "¿Por qué ocurre?:", text: "Virus poxvirus, transmitido por contacto directo o con objetos contaminados o de agua (piscinas)." },
                    { label: "Síntomas:", text: "Pequeñas pápulas perladas con centro hundido." },
                    { label: "Edad:", text: "Frecuente en niños entre 2 y 10 años." },
                    { label: "Tratamiento:", text: "En muchos niños, las lesiones desaparecen solas al cabo de meses. Si se decide tratar por razones estéticas o para evitar el contagio, existen opciones como la crioterapia o el curetaje." }
                ]
            }
        ]
    },
    {
        id: "quirurgica-oncologica",
        titulo: "Dermatología Quirúrgica y Oncológica",
        descripcion: "En Miderma contamos con Dermatología Quirúrgica y Oncológica, el área de nuestra especialidad dedicada al diagnóstico, tratamiento quirúrgico con técnicas de cirugía reconstructiva para minimizar el impacto estético y funcional, y el seguimiento de tumores cutáneos benignos y malignos. Somos conscientes de que un diagnóstico de cáncer de piel genera incertidumbre; nuestro enfoque combina la máxima precisión oncológica con la mejor técnica reconstructiva. Ofrecemos: Diagnóstico preciso (dermatoscopia digital y biopsia), Cirugía oncológica, Cirugía reconstructiva y Tratamiento de lesiones benignas.",
        imagen: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Quiste Epidérmico de Inclusión (Ateroma)",
                detalles: [
                    { label: "¿Qué es?:", text: "Tumor benigno formado por acumulación de queratina y sebo bajo la piel." },
                    { label: "¿Por qué ocurre?:", text: "La obstrucción del conducto de una glándula sebácea o un folículo piloso." },
                    { label: "Síntomas:", text: "Bulto redondeado, firme, a veces doloroso o con orificio de secreción." },
                    { label: "Tratamiento:", text: "La extirpación quirúrgica completa de la cápsula es el tratamiento definitivo para evitar que vuelva a aparecer." }
                ]
            },
            {
                titulo: "Pilomatrixoma",
                detalles: [
                    { label: "¿Qué es?:", text: "Tumor benigno derivado de células de la matriz del folículo piloso." },
                    { label: "¿Por qué ocurre?:", text: "Alteración en el desarrollo de la matriz folículo piloso." },
                    { label: "Síntomas:", text: "Nódulo duro, calcificado, generalmente en cara, cuello o brazos." },
                    { label: "Edad más frecuente:", text: "Niños y adolescentes." },
                    { label: "Tratamiento:", text: "La extirpación quirúrgica completa es curativa y la tasa de recidiva es inferior al 1%." }
                ]
            },
            {
                titulo: "Hidrocistoma Ecrino",
                detalles: [
                    { label: "¿Qué es?:", text: "Quiste benigno de las glándulas sudoríparas ecrinas." },
                    { label: "¿Por qué ocurre?:", text: "Obstrucción de conductos sudoríparos." },
                    { label: "Síntomas:", text: "Pequeñas lesiones translúcidas, brillantes, en párpados o cara." },
                    { label: "Edad más frecuente:", text: "Adultos, más común en mujeres." },
                    { label: "Tratamiento:", text: "La extirpación quirúrgica simple es el tratamiento de elección." }
                ]
            },
            {
                titulo: "Uñas Encarnadas",
                detalles: [
                    { label: "¿Qué es?:", text: "Crecimiento de la uña hacia el tejido blando circundante." },
                    { label: "¿Por qué ocurre?:", text: "Corte inadecuado de uñas, calzado ajustado, traumatismos." },
                    { label: "Síntomas:", text: "Dolor, inflamación, enrojecimiento, posible infección." },
                    { label: "Edad más frecuente:", text: "Adolescentes y adultos jóvenes, aunque puede afectar a cualquier edad." },
                    { label: "Tratamiento:", text: "Ofrecemos desde tratamientos conservadores hasta procedimientos quirúrgicos menores, como la resección del borde ungueal o la matricectomía." }
                ]
            },
            {
                titulo: "Carcinoma Basocelular (CBC)",
                detalles: [
                    { label: "¿Qué es?:", text: "El cáncer de piel más frecuente. Se origina en las células basales de la epidermis y suele aparecer en áreas expuestas al sol. Es de crecimiento lento." },
                    { label: "Síntomas:", text: "Puede presentarse como una herida que no cicatriza, una pequeña protuberancia brillante o perlada, o una mancha roja y descamativa." },
                    { label: "Tratamiento:", text: "Múltiples opciones según el tipo y localización, como extirpación quirúrgica convencional, cirugía de Mohs, curetaje y electrodesecación, criocirugía o tratamientos tópicos." }
                ]
            },
            {
                titulo: "Carcinoma Epidermoide (CE)",
                detalles: [
                    { label: "¿Qué es?:", text: "Segundo tipo más común de cáncer de piel. Originado en células escamosas. Es más agresivo que el basocelular y suele aparecer en áreas de exposición solar crónica." },
                    { label: "Síntomas:", text: "Puede comenzar como una pápula o placa roja, escamosa o costrosa, que puede volverse nodular y ulcerarse." },
                    { label: "Tratamiento:", text: "Extirpación quirúrgica con márgenes adecuados. Otras opciones incluyen curetaje, criocirugía o radioterapia." }
                ]
            },
            {
                titulo: "Melanoma",
                detalles: [
                    { label: "¿Qué es?:", text: "El tipo de cáncer de piel más grave y agresivo. Puede aparecer como un lunar nuevo o un cambio en un lunar existente (regla ABCDE)." },
                    { label: "Tratamiento:", text: "La detección precoz es clave. El tratamiento se basa en la extirpación quirúrgica con márgenes oncológicos. Puede ser necesario el estudio del ganglio centinela." }
                ]
            },
            {
                titulo: "Queratoacantoma",
                detalles: [
                    { label: "¿Qué es?:", text: "Un tumor cutáneo que crece rápidamente y puede asemejarse al carcinoma epidermoide." },
                    { label: "Síntomas:", text: "Rápido crecimiento inicial, seguido de un periodo de estabilidad. Difícil de diferenciar de un cáncer más agresivo." },
                    { label: "Tratamiento:", text: "La extirpación quirúrgica es el manejo más seguro y definitivo." }
                ]
            },
            {
                titulo: "Queratosis Actínica (QA)",
                detalles: [
                    { label: "¿Qué es?:", text: "Una lesión cutánea precancerosa causada por el daño solar acumulado." },
                    { label: "Síntomas:", text: "Manchas ásperas, escamosas y de color rosado o rojizo, en zonas muy expuestas al sol." },
                    { label: "Tratamiento:", text: "Múltiples opciones: crioterapia, curetaje, tratamientos tópicos (5-fluorouracilo, imiquimod)." }
                ]
            },
            {
                titulo: "Cuerno Cutáneo",
                detalles: [
                    { label: "¿Qué es?:", text: "Una proyección cónica de queratina que crece desde la piel. Lo importante es la lesión que tiene en su base." },
                    { label: "Síntomas:", text: "Protuberancia rígida, amarillenta o marrón. Frecuente en zonas fotoexpuestas." },
                    { label: "Tratamiento:", text: "Obligatorio realizar biopsia de la base para descartar lesión maligna. El tratamiento es la extirpación quirúrgica completa." }
                ]
            },
            {
                titulo: "Lunar (Nevus)",
                detalles: [
                    { label: "¿Qué es?:", text: "Crecimientos benignos muy comunes formados por células pigmentadas (melanocitos)." },
                    { label: "Síntomas:", text: "Pequeños, de forma redonda u ovalada, de color uniforme y bordes definidos." },
                    { label: "Tratamiento:", text: "Extirpación quirúrgica si presenta cambios sospechosos (ABCDE), si causa molestias, o por razones estéticas." }
                ]
            }
        ]
    },
    {
        id: "estetica-laser",
        titulo: "Dermatología Estética y Láser",
        descripcion: "La belleza y la salud se complementan. En Miderma Centro de la Piel sabemos que la Dermatología Estética es una parte fundamental de nuestra especialidad que busca promover la salud cutánea óptima, entendiendo que una piel sana es, por definición, una piel estética. Nuestro enfoque se basa en un profundo conocimiento de la anatomía, utilizando tecnología médica de vanguardia para ofrecer tratamientos seguros que realzan tu imagen sin perder naturalidad, mejorando la textura, luminosidad y firmeza de tu piel.",
        imagen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Toxina Botulínica",
                detalles: [
                    { label: "¿Qué es?:", text: "Un tratamiento que utiliza una neurotoxina purificada para relajar temporalmente los músculos faciales responsables de las arrugas de expresión (patas de gallo, frente y entrecejo)." },
                    { label: "Objetivo:", text: "Lograr un aspecto más relajado y rejuvenecido, manteniendo la naturalidad y la capacidad de expresar emociones." }
                ]
            },
            {
                titulo: "Ácido Hialurónico (Rellenos)",
                detalles: [
                    { label: "¿Qué es?:", text: "Una sustancia natural en nuestra piel que atrae humedad. Se utiliza como relleno para restaurar el volumen perdido, suavizar arrugas profundas y definir labios." },
                    { label: "Objetivo:", text: "Corregir surcos nasogenianos, aumentar el volumen de labios y redefinir el contorno facial, ofreciendo resultados inmediatos y naturales." }
                ]
            },
            {
                titulo: "Bioestimuladores (Colágeno, Poli-L-Láctico, Hidroxiapatita)",
                detalles: [
                    { label: "¿Qué es?:", text: "Sustancias inyectadas en las capas profundas para estimular la propia producción de colágeno y elastina, activando los fibroblastos." },
                    { label: "Objetivo:", text: "Mejorar la firmeza, densidad y calidad de la piel de forma progresiva. Ideal para flacidez en rostro, escote o manos." }
                ]
            },
            {
                titulo: "Exosomas",
                detalles: [
                    { label: "¿Qué es?:", text: "La vanguardia en medicina regenerativa. Vesículas diminutas que actúan como 'mensajeros' biológicos para reparar células de la piel y el cabello." },
                    { label: "Resultado:", text: "Rejuvenecimiento profundo, mejora de textura y luminosidad, reducción de cicatrices, y aplicados en el cuero cabelludo, estimulan el crecimiento capilar." }
                ]
            },
            {
                titulo: "Láser CO2 (y otros láseres ablativos fraccionados)",
                detalles: [
                    { label: "¿Qué es?:", text: "Láser de alta potencia que vaporiza capas dañadas de forma controlada, estimulando la regeneración y producción de colágeno." },
                    { label: "Usos:", text: "El 'gold standard' para rejuvenecimiento facial profundo, cicatrices de acné, arrugas marcadas y queratosis actínicas." }
                ]
            },
            {
                titulo: "IPL (Luz Pulsada Intensa)",
                detalles: [
                    { label: "¿Qué es?:", text: "Una fuente de luz de amplio espectro muy versátil que permite tratar melanina y hemoglobina." },
                    { label: "Usos:", text: "Fotorrejuvenecimiento, mejora del tono y textura, reducción de manchas solares, rojeces y vasos sanguíneos dilatados." }
                ]
            },
            {
                titulo: "Enzimas para Papada (Despigmentantes/Adipolíticos)",
                detalles: [
                    { label: "¿Qué es?:", text: "Técnica que inyecta sustancias para disolver y eliminar células de grasa localizada, permitiendo moldear áreas como el doble mentón." }
                ]
            },
            {
                titulo: "Depilación con IPL",
                detalles: [
                    { label: "¿Qué es?:", text: "Uso de Luz Pulsada Intensa para eliminar el vello de forma duradera al destruir el folículo piloso." }
                ]
            },
            {
                titulo: "Mesoterapia Facial y Capilar",
                detalles: [
                    { label: "¿Qué es?:", text: "Administración de microinyecciones de vitaminas, minerales y ácido hialurónico en la capa media de la piel." },
                    { label: "Usos:", text: "Facial: hidratar y revitalizar. Capilar: nutrir el cuero cabelludo y estimular el crecimiento en casos de alopecia." }
                ]
            },
            {
                titulo: "Microneedling (Inducción de Colágeno)",
                detalles: [
                    { label: "¿Qué es?:", text: "Dispositivo con microagujas que crea microperforaciones para estimular el proceso de cicatrización y producción de colágeno." },
                    { label: "Usos:", text: "Mejora la textura de la piel, reduce cicatrices de acné, estrías, arrugas finas y poros dilatados." }
                ]
            }
        ]
    },
    {
        id: "dermocosmetica",
        titulo: "Dermocosmética",
        descripcion: "En Miderma la dermatocosmética es el puente entre la salud y la estética de la piel. Entendemos que una piel luminosa, uniforme y saludable es un reflejo de bienestar integral. Nuestro enfoque va más allá de la cosmética superficial; aplicamos el conocimiento profundo de la fisiología de la piel para ofrecer tratamientos personalizados que restauran su equilibrio y vitalidad. Cada procedimiento se basa en un diagnóstico médico previo para seleccionar los principios activos y tecnologías adecuadas.",
        imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tratamientos: [
            {
                titulo: "Limpieza Facial Profunda",
                detalles: [
                    { label: "¿Qué es?:", text: "El punto de partida de todo tratamiento. Consiste en la eliminación profunda de impurezas, exceso de sebo y células muertas." },
                    { label: "Para quién:", text: "Ideal para todo tipo de pieles, especialmente con tendencia grasa o poros dilatados." },
                    { label: "Resultado:", text: "La piel queda más limpia, suave y preparada para absorber mejor los principios activos de tratamientos posteriores." }
                ]
            },
            {
                titulo: "Tratamiento Especializado para Acné, Rosácea y Manchas",
                detalles: [
                    { label: "¿Qué es?:", text: "Protocolos personalizados para abordar necesidades específicas de estas afecciones comunes." },
                    { label: "Acné:", text: "Utilizamos activos seborreguladores y antibacterianos para controlar brotes y desobstruir poros." },
                    { label: "Rosácea:", text: "Empleamos productos calmantes y antiinflamatorios que reducen el enrojecimiento y fortalecen la barrera." },
                    { label: "Manchas:", text: "Aplicamos despigmentantes y exfoliantes para aclarar manchas solares o melasma." },
                    { label: "Resultado:", text: "Mejora visible en la textura, el tono y la salud general de la piel." }
                ]
            },
            {
                titulo: "Hydrafacial",
                detalles: [
                    { label: "¿Qué es?:", text: "Procedimiento no invasivo que combina en un solo paso limpieza, exfoliación, extracción indolora e hidratación profunda con serums." },
                    { label: "Beneficios:", text: "No duele, no irrita y no requiere recuperación. Apto para todo tipo de pieles. Resultados inmediatos." },
                    { label: "Personalización:", text: "Se puede potenciar con 'boosters' específicos para tratar acné, arrugas o manchas." }
                ]
            },
            {
                titulo: "Peelings Químicos",
                detalles: [
                    { label: "¿Qué es?:", text: "Tratamiento médico que aplica ácidos para exfoliar capas superficiales y estimular renovación celular y nuevo colágeno." },
                    { label: "Tipos y usos:", text: "Seleccionamos el tipo adecuado. Superficiales: mejoran luminosidad, acné leve y manchas. Medios: indicados para arrugas marcadas, cicatrices y manchas más profundas como melasma." }
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