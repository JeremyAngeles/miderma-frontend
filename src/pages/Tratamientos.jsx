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
                que_es: "Cómo actúa: Utiliza corriente eléctrica de alta frecuencia para generar calor y destruir tejido mediante coagulación térmica. En qué consiste: Se aplica una pequeña sonda o aguja sobre la lesión cutánea, generando calor controlado que elimina el tejido no deseado (verrugas, fibromas, angiomas, queratosis).",
                duracion: "5-20 minutos según número y tamaño de lesiones.",
                efectos: "Definitivo para la lesión tratada (pueden aparecer nuevas lesiones por predisposición).",
                contraindicaciones: "Marcapasos o dispositivos electrónicos implantados, embarazo, infección activa en zona a tratar, trastornos de coagulación no controlados, queloides (evaluar).",
                sesiones: "1 sesión por lesión generalmente. Lesiones extensas pueden requerir 2-3.",
                observaciones: "Puede dejar pequeña cicatriz o cambio de pigmentación. Cuidados posteriores: mantener limpia la zona, aplicar crema cicatrizante y protección solar.",
                layout_galeria: "1-foto",
                imagenes: ["/clinico-electro-1.png"]
            },
            {
                nombre: "Crioterapia",
                que_es: "Cómo actúa: Aplica frío extremo (nitrógeno líquido a -196°C) que destruye las células mediante congelación, causando necrosis selectiva del tejido. En qué consiste: Se aplica nitrógeno líquido con spray, hisopo o criosonda sobre la lesión (verrugas, queratosis actínicas, moluscos, lentigos).",
                duracion: "1-5 minutos según lesión.",
                efectos: "La lesión se desprende en 1-3 semanas. Resultado definitivo para la lesión tratada.",
                contraindicaciones: "Crioglobulinemia, síndrome de Raynaud, intolerancia al frío, lesiones en zonas con compromiso vascular, trastornos de sensibilidad.",
                sesiones: "1-3 sesiones, espaciadas 3-4 semanas.",
                observaciones: "Puede causar ampolla, enrojecimiento e hipo/hiperpigmentación temporal. Molestia tolerable durante la aplicación.",
                layout_galeria: "2-mix",
                imagenes: ["/clinico-crio-1.jpg", "/clinico-crio-2.jpg"]
            },
            {
                nombre: "Biopsia de Piel",
                que_es: "Cómo actúa: Procedimiento diagnóstico que extrae una muestra de tejido para análisis histopatológico. En qué consiste: Bajo anestesia local, se extrae una muestra de piel (punch, afeitado o incisional/excisional) de la lesión sospechosa.",
                duracion: "10-20 minutos.",
                efectos: "Diagnóstico definitivo. La cicatriz queda de forma permanente (mínima en la mayoría de casos).",
                contraindicaciones: "Trastornos de coagulación no controlados, alergia a anestésicos locales, infección activa en zona a biopsiar.",
                sesiones: "1 sesión (resultado en 7-15 días).",
                observaciones: "Requiere retiro de puntos si se colocaron (7-14 días). Evitar mojar la zona por 24-48 horas y seguir indicaciones de cuidado de herida.",
                layout_galeria: "2-horiz",
                imagenes: ["/clinico-biopsia-1.jpg", "/clinico-biopsia-2.jpg"]
            },
            {
                nombre: "Infiltración de Corticoides",
                que_es: "Cómo actúa: Antiinflamatorio potente que reduce la inflamación, suprime la proliferación celular y modula la respuesta inmune local. En qué consiste: Inyección intralesional de corticoide (triamcinolona) directamente en la lesión (alopecia areata, cicatrices queloides, granulomas, quistes inflamados, liquen).",
                duracion: "5-10 minutos.",
                efectos: "Efecto terapéutico visible en 1-4 semanas. Puede durar semanas a meses según patología.",
                contraindicaciones: "Infección activa en la zona, alergia al corticoide, embarazo (evaluar), diabetes descompensada, glaucoma (precaución en zona periorbitaria).",
                sesiones: "Variable: 1-5 sesiones, espaciadas 4-6 semanas. No más de 3-4 infiltraciones por año en misma zona.",
                observaciones: "Riesgo de atrofia cutánea si se repite en exceso. Puede causar dolor transitorio en sitio de inyección.",
                layout_galeria: "1-foto",
                imagenes: ["/clinico-corticoide-1.jpg"]
            },
            {
                nombre: "Inyección de Metotrexato para Psoriasis",
                que_es: "Cómo actúa: Inmunomodulador que inhibe la enzima dihidrofolato reductasa, reduciendo la proliferación de queratinocitos y la inflamación. En qué consiste: Aplicación de metotrexato vía subcutánea o intramuscular con esquema de dosificación personalizado para psoriasis moderada-severa.",
                duracion: "La aplicación toma 5 minutos. El tratamiento es continuo.",
                efectos: "Mejoría visible a las 4-8 semanas de inicio. El efecto se mantiene mientras se continúe el tratamiento.",
                contraindicaciones: "Embarazo y lactancia, insuficiencia hepática o renal, alcoholismo, inmunodeficiencia, infecciones activas, alteraciones hematológicas, úlcera péptica activa.",
                sesiones: "Tratamiento crónico: dosis semanal. Controles analíticos periódicos obligatorios.",
                observaciones: "Requiere suplementación con ácido fólico. Monitoreo con hemograma, función hepática y renal cada 1-3 meses. Evitar embarazo durante y 3 meses post tratamiento.",
                layout_galeria: "1-foto",
                imagenes: ["/clinico-metotrexato-1.avif"]
            },
            {
                nombre: "Curetaje",
                que_es: "Cómo actúa: Remoción mecánica de tejido mediante raspado con instrumento cortante (cureta). En qué consiste: Bajo anestesia local, se raspa la lesión (molluscum contagiosum, queratosis, verrugas) hasta retirarla completamente.",
                duracion: "5-15 minutos.",
                efectos: "Definitivo si se retira completamente la lesión.",
                contraindicaciones: "Trastornos de coagulación no controlados, infección activa, alergia a anestésicos locales.",
                sesiones: "1 sesión generalmente. Lesiones múltiples pueden requerir 2-3.",
                observaciones: "Puede dejar cicatriz residual y/o cambio de pigmentación. Cuidados similares a biopsia.",
                layout_galeria: "2-mix",
                imagenes: ["/curetaje.jpg", "/clinico-curetaje-2.avif"]
            },
            {
                nombre: "Drenaje de Absceso de Acné Nódulo-Quístico y Quiste Epidérmico",
                que_es: "Cómo actúa: Evacuación del contenido purulento o queratínico para aliviar presión, dolor y acelerar la resolución. En qué consiste: Bajo anestesia local, se realiza incisión mínima y drenaje del contenido. En quistes epidérmicos se extrae la cápsula para evitar recurrencia.",
                duracion: "10-30 minutos según tamaño.",
                efectos: "Alivio inmediato del dolor. Resolución en 7-14 días. Si se retira cápsula del quiste: definitivo.",
                contraindicaciones: "Infección sistémica con fiebre, trastornos de coagulación, alergia a anestésicos.",
                sesiones: "1 sesión. Quistes epidérmicos requieren extracción completa de cápsula.",
                observaciones: "Puede requerir antibiótico oral complementario. Dejar drenar naturalmente. Posible cicatriz residual mínima.",
                layout_galeria: "2-horiz",
                imagenes: ["/acne.jpg", "/clinico-drenaje-2.jpg"]
            }
        ]
    },
    {
        id: "quirurgicos",
        nombre: "Quirúrgicos",
        tratamientos: [
            {
                nombre: "Exéresis de Tumores Benignos y Malignos",
                que_es: "Cómo actúa: Extirpación quirúrgica completa de la lesión con márgenes de seguridad según el tipo de tumor. En qué consiste: Bajo anestesia local, se extirpa la lesión (lunares, quistes, lipomas, carcinomas basocelulares, espinocelulares, melanomas) y se cierra la herida con sutura.",
                duracion: "30-90 minutos según tamaño y complejidad.",
                efectos: "Eliminación definitiva de la lesión. La cicatriz es permanente (mejora con el tiempo).",
                contraindicaciones: "Trastornos de coagulación no controlados, alergia a anestésicos, infección activa en zona quirúrgica, expectativas irreales.",
                sesiones: "1 cirugía. En tumores malignos, el resultado de patología determina si se requieren ampliaciones.",
                observaciones: "Toda pieza extirpada se envía a estudio histopatológico (obligatorio). Retiro de puntos 7-14 días. Cuidados de cicatrización y fotoprotección por 6-12 meses.",
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
                nombre: "Subcisión de Cicatriz de Acné",
                que_es: "Cómo actúa: Libera las bandas fibrosas que anclan la piel hacia planos profundos, permitiendo que la cicatriz deprimida se eleve. En qué consiste: Se introduce una aguja especial bajo la cicatriz y se realizan movimientos de corte para liberar las adherencias. Se puede combinar con relleno o PRP.",
                duracion: "20-40 minutos según extensión.",
                efectos: "Mejoría visible desde la 3-4 semana. Resultados permanentes (la piel puede mejorar con sesiones adicionales).",
                contraindicaciones: "Infección activa, tendencia a queloides, anticoagulantes, embarazo, isotretinoína reciente (esperar 6 meses).",
                sesiones: "2-4 sesiones, espaciadas 4-8 semanas.",
                observaciones: "Puede haber hematomas y edema por 7-14 días. Se recomienda combinar con láser o dermapen para optimizar resultados.",
                layout_galeria: "1-foto",
                imagenes: ["/subsision.png"]
            },
            {
                nombre: "Dermapen (Microneedling)",
                que_es: "Cómo actúa: Crea microperforaciones que activan la regeneración dérmica mediante la estimulación de colágeno y elastina (neocolagénesis). En qué consiste: Se desliza un dispositivo con microagujas estériles sobre la piel a profundidad controlada (0.5-2.5 mm), creando microcanales.",
                duracion: "30-45 minutos (incluye anestesia tópica previa de 30 min).",
                efectos: "Mejoría progresiva durante 3-6 meses. Resultados mantenidos por 12-24 meses con cuidados adecuados.",
                contraindicaciones: "Infección activa, herpes activo, embarazo, anticoagulantes, rosácea activa severa, queloides, isotretinoína reciente.",
                sesiones: "3-6 sesiones, espaciadas 4 semanas.",
                observaciones: "Enrojecimiento y leve descamación por 2-5 días. Aplicar protector solar estricto. Ideal para cicatrices de acné, poros dilatados, líneas finas y rejuvenecimiento.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-dermapen-1.jpg"]
            },
            {
                nombre: "Láser CO2 Fraccionado y Ablativo",
                que_es: "Cómo actúa: Emite luz láser que vaporiza columnas microscópicas de piel, estimulando regeneración profunda y producción masiva de colágeno. En qué consiste: Se aplica láser de CO2 sobre la piel previamente anestesiada. El modo fraccionado deja islotes de piel sana para acelerar la recuperación. El ablativo completo trata toda la superficie.",
                duracion: "30-60 minutos.",
                efectos: "Resultados progresivos por 6-12 meses. Efectos de rejuvenecimiento pueden durar 3-5 años con cuidados.",
                contraindicaciones: "Piel bronceada reciente, infección activa, herpes activo, embarazo, fototipos altos (precaución), isotretinoína reciente, queloides.",
                sesiones: "Fraccionado: 2-4 sesiones. Ablativo: 1-2 sesiones. Espaciadas 3-6 meses.",
                observaciones: "Recuperación fraccionada: 5-7 días con enrojecimiento y descamación. Ablativo: 10-14 días. Requiere cuidados post operatorios estrictos: cremas cicatrizantes y fotoprotección total.",
                layout_galeria: "2-mix",
                imagenes: ["/quirurgico-laser.jpg", "/estetico-laserco2-2.jpg"]
            },
            {
                nombre: "IPL (Luz Pulsada Intensa)",
                que_es: "Cómo actúa: Emite luz de amplio espectro que se absorbe selectivamente por melanina y hemoglobina, tratando manchas, rojeces y estimulando colágeno. En qué consiste: Se aplican pulsos de luz sobre la piel con gel conductor. Trata fotoenvejecimiento, manchas solares, rosácea, poros y textura.",
                duracion: "20-40 minutos.",
                efectos: "Mejoría visible desde la 2-3 semana. Resultados mantenidos 6-12 meses (depende de exposición solar).",
                contraindicaciones: "Embarazo, bronceado activo, fotosensibilidad, isotretinoína reciente, infección activa, epilepsia fotosensible.",
                sesiones: "3-6 sesiones, espaciadas 3-4 semanas.",
                observaciones: "Leve enrojecimiento por 24-48 horas. Las manchas pueden oscurecerse temporalmente y desprenderse en 7-10 días. Fotoprotección estricta.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-ipl-1.jpg", "/stetico-ipl-2.jpg"]
            },
            {
                nombre: "Depilación con IPL",
                que_es: "Cómo actúa: La luz es absorbida por la melanina del folículo piloso, generando calor que destruye la matriz germinativa del vello. En qué consiste: Aplicación de pulsos de luz sobre la zona a depilar con gel conductor, cubriendo toda el área.",
                duracion: "10-60 minutos según zona (labio: 10 min; piernas completas: 60 min).",
                efectos: "Reducción permanente del 70-90% del vello tras completar esquema. Sesiones de mantenimiento 1-2 veces al año.",
                contraindicaciones: "Embarazo, bronceado activo, fotosensibilidad, epilepsia, vello blanco o gris (no responde), isotretinoína reciente.",
                sesiones: "6-10 sesiones, espaciadas 4-6 semanas (según zona).",
                observaciones: "El vello se cae entre 1-3 semanas post sesión. Evitar sol y depilación con cera entre sesiones (solo rasurado).",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-depilacion-1.png", "/estetico-depilacion-2.jpg", "/estetico-depilacion-3.jpg"]
            },
            {
                nombre: "Mesoterapia Facial y Capilar",
                que_es: "Cómo actúa: Microinyecciones superficiales de vitaminas, minerales, aminoácidos y otros activos que nutren, hidratan y estimulan la piel o el folículo piloso. En qué consiste: Se inyectan pequeñas cantidades de cóctel de activos en la dermis superficial de cara/cuero cabelludo con aguja fina o pistola mesoterápica.",
                duracion: "20-30 minutos.",
                efectos: "Mejoría visible desde la 2-3 semana. Efecto acumulativo; mantenimiento cada 3-6 meses.",
                contraindicaciones: "Embarazo, infección activa, alergia a componentes, trastornos de coagulación, diabetes descompensada.",
                sesiones: "4-6 sesiones iniciales, espaciadas 2-4 semanas. Luego mantenimiento.",
                observaciones: "Puede haber pequeños hematomas y pápulas transitorias (24-72 horas). Resultados más evidentes al completar protocolo.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-mesoterapia-1.jpg"]
            },
            {
                nombre: "Peeling de Ácido Retinoico",
                que_es: "Cómo actúa: Estimula la renovación celular acelerando la descamación, promoviendo síntesis de colágeno y aclarando hiperpigmentaciones. En qué consiste: Aplicación de ácido retinoico (concentración 3-5%) sobre la piel limpia, dejando actuar y neutralizando posteriormente.",
                duracion: "30 minutos.",
                efectos: "Descamación intensa por 5-7 días. Resultados visibles desde la 2 semana y progresivos por 3 meses.",
                contraindicaciones: "Embarazo y lactancia, rosácea activa, infección activa, herpes, isotretinoína reciente, exposición solar sin protección.",
                sesiones: "3-5 sesiones, espaciadas 4-6 semanas.",
                observaciones: "Descamación importante es esperada (aspecto de piel quemada por 1 semana). Se puede combinar con cremas despigmentantes. Fotoprotección obligatoria.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-peeling-1.webp"]
            },
            {
                nombre: "Peeling de Ácido Salicílico",
                que_es: "Cómo actúa: Betahidroxiácido lipofílico que penetra el poro, disuelve el sebo y queratina, con acción antiinflamatoria y antimicrobiana. En qué consiste: Aplicación de ácido salicílico (20-30%) sobre la piel, con sensación de calor o escozor transitorio. Se neutraliza y retira.",
                duracion: "20-30 minutos.",
                efectos: "Mejoría visible desde la primera semana. Descamación leve por 2-4 días. Efecto mantenido con sesiones periódicas.",
                contraindicaciones: "Alergia a salicilatos, embarazo, infección activa, herpes, aspirina (precaución).",
                sesiones: "4-6 sesiones, espaciadas 2-4 semanas.",
                observaciones: "Ideal para acné activo, puntos negros, poros obstruidos y piel grasa. Puede causar leve descamación blanquecina superficial.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-peeling-2.jpg"]
            },
            {
                nombre: "Peeling Súper Nova",
                que_es: "Cómo actúa: Peeling de última generación que combina múltiples activos (ácido mandélico, salicílico, retinoico, kojico, fítico, entre otros) para renovación integral. En qué consiste: Protocolo de peeling combinado aplicado en capas, con concentraciones personalizadas según tipo de piel y patología.",
                duracion: "30-45 minutos.",
                efectos: "Descamación moderada-intensa por 5-10 días. Resultados visibles desde la 2 semana, con mejoría progresiva.",
                contraindicaciones: "Embarazo, lactancia, infección activa, herpes, isotretinoína reciente, alergia a componentes.",
                sesiones: "2-4 sesiones, espaciadas 4-8 semanas.",
                observaciones: "Tratamiento combinado para manchas, acné, fotoenvejecimiento y textura. Descamación esperada. Fotoprotección estricta obligatoria.",
                layout_galeria: "2-mix",
                imagenes: ["/estetico-peeling-1.webp", "/estetico-peeling-2.jpg"]
            },
            {
                nombre: "Plasma Rico en Plaquetas (PRP)",
                que_es: "Cómo actúa: Los factores de crecimiento de las plaquetas autólogas estimulan regeneración celular, colágeno, angiogénesis y mejoran la calidad de piel o cabello. En qué consiste: Extracción de sangre del paciente, centrifugación para concentrar plaquetas y aplicación mediante microinyecciones o microneedling en cara, cuello o cuero cabelludo.",
                duracion: "45-60 minutos (incluye extracción y aplicación).",
                efectos: "Mejoría progresiva visible a las 3-6 semanas. Resultado mantenido 6-12 meses. En capilar, la mejoría persiste 12-18 meses.",
                contraindicaciones: "Trastornos hematológicos o plaquetarios, anticoagulantes, infección activa, embarazo, enfermedades autoinmunes activas, cáncer activo.",
                sesiones: "3-4 sesiones, espaciadas 4-6 semanas.",
                observaciones: "Al ser autólogo (del propio paciente), el riesgo de alergia es nulo. Puede haber leve inflamación y hematomas por 24-72 horas. Ideal para rejuvenecimiento facial y alopecia.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-prp-1.jpg", "/estetico-prp-2.jpg"]
            },
            {
                nombre: "Toxina Botulínica",
                que_es: "Cómo actúa: Bloquea temporalmente la liberación de acetilcolina en la unión neuromuscular, relajando el músculo tratado y suavizando arrugas dinámicas. Zonas de aplicación: Entrecejo, Patas de gallo, Frente, Masetero (bruxismo y afinamiento), Platisma, Sonrisa gingival. En qué consiste: Aplicación de microinyecciones de toxina botulínica en puntos específicos de cada músculo.",
                duracion: "15-30 minutos.",
                efectos: "Efecto visible a los 3-7 días. Máximo efecto a las 2 semanas. Duración: 4-6 meses (según zona y dosis).",
                contraindicaciones: "Embarazo y lactancia, miastenia gravis, síndrome de Eaton-Lambert, alergia a albúmina, infección en zona, trastornos neuromusculares.",
                sesiones: "1 sesión. Retratamiento cada 4-6 meses.",
                observaciones: "No masajear la zona tratada por 24 horas. Evitar ejercicio intenso y calor por 24-48 horas. Efecto reversible (no permanente).",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-botox-1.jpg", "/estetico-botox-2.jpg", "/estetico-botox-3.jpg"]
            },
            {
                nombre: "Ácido Hialurónico (Rellenos)",
                que_es: "Cómo actúa: Gel inyectable que rellena volúmenes, hidrata y estimula colágeno. Aporta estructura y soporte a los tejidos. Zonas de aplicación: Ojeras, Malar (pómulos), Puntos de anclaje, Mentón, Labios. En qué consiste: Inyección de ácido hialurónico reticulado con cánula o aguja en planos específicos.",
                duracion: "30-60 minutos según zonas tratadas.",
                efectos: "Resultado inmediato. Duración: 12-24 meses según zona, densidad del producto y metabolismo del paciente.",
                contraindicaciones: "Embarazo y lactancia, infección activa en zona, alergia al ácido hialurónico, enfermedades autoinmunes activas, queloides.",
                sesiones: "1-2 sesiones iniciales. Retoques opcionales a los 15 días. Mantenimiento anual.",
                observaciones: "Puede haber leve inflamación y moretones por 3-7 días. Reversible con hialuronidasa si fuera necesario. Resultados naturales si se realiza con criterio conservador.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-hialuronico-1.jpg"]
            },
            {
                nombre: "Bioestimuladores: Profhilo y Opera",
                que_es: "Cómo actúa: Profhilo es ácido hialurónico no reticulado que se difunde estimulando hidratación profunda y colágeno. Opera combina ácido hialurónico y aminoácidos que activa los fibroblastos. En qué consiste: Inyección en puntos estratégicos (técnica BAP) o microinyecciones difusas.",
                duracion: "20-30 minutos.",
                efectos: "Mejoría visible desde las 2-4 semanas, progresiva. Duración: 6-9 meses.",
                contraindicaciones: "Embarazo, lactancia, infección activa, alergia a componentes, enfermedades autoinmunes.",
                sesiones: "2 sesiones, espaciadas 4 semanas. Mantenimiento cada 6 meses.",
                observaciones: "No aporta volumen, mejora calidad de piel (hidratación, firmeza, luminosidad). Ideal para pieles desvitalizadas, con arrugas finas y flacidez leve.",
                layout_galeria: "2-mix",
                imagenes: ["/estetico-bioestimulador-1.webp", "/estetico-bioestimulador-2.jpg"]
            },
            {
                nombre: "Exosomas",
                que_es: "Cómo actúa: Vesículas extracelulares con factores de crecimiento y RNA que regulan la regeneración celular y colágeno. En qué consiste: Aplicación de exosomas (generalmente con microneedling, láser o inyecciones) que penetran en la piel y liberan su contenido.",
                duracion: "30-60 minutos según modalidad de aplicación.",
                efectos: "Mejoría progresiva durante 3-6 meses. Duración: 12-18 meses.",
                contraindicaciones: "Embarazo, lactancia, infección activa, enfermedades autoinmunes, alergia a componentes.",
                sesiones: "2-4 sesiones, espaciadas 4-6 semanas.",
                observaciones: "Tecnología avanzada en medicina regenerativa. Resultados superiores en combinación con procedimientos que creen microcanales. Mínimo tiempo de recuperación.",
                layout_galeria: "2-horiz",
                imagenes: ["/estetico-exosomas-1.webp", "/estetico-exosomas-2.webp"]
            }
        ]
    },
    {
        id: "cosmeticos",
        nombre: "Cosméticos (Dermocosmética)",
        tratamientos: [
            {
                nombre: "Limpieza Facial Profunda (Acné, Rosácea, Manchas y Envejecimiento)",
                que_es: "Cómo actúa: Elimina impurezas, células muertas, exceso de sebo y comedones mediante protocolos personalizados. En qué consiste: Protocolo que incluye: higiene profunda, vapor/ozono, exfoliación, extracción de comedones, mascarilla específica según piel, y aplicación de activos finales.",
                duracion: "60-90 minutos.",
                efectos: "Piel limpia, luminosa y despejada por 4-6 semanas. Mejoría de lesiones de acné visible desde la primera sesión.",
                contraindicaciones: "Infección activa severa, herpes, quemaduras, dermatitis aguda, uso reciente de isotretinoína (para extracciones).",
                sesiones: "1 sesión mensual como mantenimiento. En acné activo: cada 2-4 semanas.",
                observaciones: "Adaptada a cada tipo de piel y patología. Puede haber leve enrojecimiento post extracciones (2-24 horas).",
                layout_galeria: "3-fotos",
                imagenes: ["/estetico-limpieza-1.jpg", "/estetico-limpieza-2.webp", "/estetico-limpieza-3.jpg"]
            },
            {
                nombre: "Hydrafacial",
                que_es: "Cómo actúa: Sistema patentado de hidrodermoabrasión que combina limpieza, exfoliación, extracción e infusión de activos en un solo procedimiento. En qué consiste: Se utiliza un dispositivo con puntas desechables que exfolian, succionan impurezas y simultáneamente infunden sueros hidratantes y antioxidantes.",
                duracion: "45-60 minutos.",
                efectos: "Resultado inmediato de piel hidratada, luminosa y limpia. Efecto mantenido 4-6 semanas.",
                contraindicaciones: "Infección activa, herpes activo, quemaduras solares, rosácea severa en brote, alergia a componentes del sérum.",
                sesiones: "1 sesión mensual de mantenimiento. Protocolos iniciales: 3-6 sesiones quincenales.",
                observaciones: "Sin tiempo de recuperación (puede maquillarse inmediatamente). Apto para todo tipo de piel. Combina bien con otros procedimientos estéticos.",
                layout_galeria: "1-foto",
                imagenes: ["/estetico-hydrafacial-1.jpg"]
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