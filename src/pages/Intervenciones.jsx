import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// === DATOS DE PRUEBA (Agregué más para que veas la paginación en acción) ===
export const publicacionesMock = [
    {
        id: 1,
        titulo: "GLP-1 para bajar de peso: qué es y cuándo puede recomendarse",
        categoria: "Nutrición",
        tipo: "Artículo",
        orientacion: "vertical", // <-- ESTO HACE QUE SE VEA COMO TU FOTO 1 (Lado a lado)
        fecha: "22 de mayo de 2026",
        extracto: "Qué es el GLP-1, cómo funciona en procesos de pérdida de peso y por qué es importante combinar cualquier tratamiento con acompañamiento nutricional para lograr bienestar integral.",
        imagen: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=800&q=80",
        destacado: true,
        popular: true
    },
    {
        id: 2,
        titulo: "Dieta antiinflamatoria: mejora tu salud y reduce la inflamación",
        categoria: "Nutrición",
        tipo: "Artículo",
        orientacion: "horizontal", // <-- ESTO HACE QUE SE VEA COMO TU FOTO 2 (Apilado)
        fecha: "17 de julio de 2026",
        extracto: "Una dieta antiinflamatoria ayuda a reducir la inflamación crónica, fortalecer el organismo y prevenir enfermedades mediante una alimentación equilibrada.",
        imagen: "https://images.unsplash.com/photo-1490645943967-cb2eb5b8bbc3?auto=format&fit=crop&w=800&q=80",
        destacado: false,
        popular: true
    },
    {
        id: 3,
        titulo: "Rejuvenecimiento facial con Láser CO2: Lo que debes saber",
        categoria: "Estética",
        tipo: "Video",
        orientacion: "vertical",
        fecha: "10 de agosto de 2026",
        extracto: "Descubre cómo el Láser CO2 fraccionado puede eliminar manchas, cicatrices de acné y líneas de expresión, renovando tu piel desde adentro.",
        imagen: "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?auto=format&fit=crop&w=800&q=80",
        destacado: true,
        popular: true
    },
    {
        id: 4,
        titulo: "Rutina Skincare paso a paso para pieles con rosácea",
        categoria: "Dermocosmética",
        tipo: "Video",
        orientacion: "horizontal",
        fecha: "05 de septiembre de 2026",
        extracto: "Aprende a cuidar tu piel sensible con los productos correctos. Te enseñamos en este video cómo aplicar tu rutina diaria sin irritar tu rostro.",
        imagen: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
        destacado: false,
        popular: false
    },
    {
        id: 5,
        titulo: "Importancia de la Dermatoscopía en la prevención del cáncer",
        categoria: "Oncológica",
        tipo: "Artículo",
        orientacion: "vertical",
        fecha: "12 de septiembre de 2026",
        extracto: "Un chequeo a tiempo salva vidas. Entiende cómo funciona el mapeo de lunares y por qué debes realizarlo al menos una vez al año.",
        imagen: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        destacado: false,
        popular: false
    },
    {
        id: 6,
        titulo: "Mito o Verdad: ¿El Botox congela las expresiones?",
        categoria: "Estética",
        tipo: "Video",
        orientacion: "horizontal",
        fecha: "20 de septiembre de 2026",
        extracto: "Resolvemos todas tus dudas sobre la toxina botulínica y te mostramos cómo se logran resultados naturales y frescos.",
        imagen: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
        destacado: false,
        popular: true
    },
    {
        id: 7,
        titulo: "Caída del cabello: Causas y tratamientos efectivos",
        categoria: "Clínica",
        tipo: "Artículo",
        orientacion: "vertical",
        fecha: "01 de octubre de 2026",
        extracto: "Analizamos las principales causas de la alopecia y los tratamientos dermatológicos más avanzados para detenerla y recuperar el volumen.",
        imagen: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
        destacado: true,
        popular: false
    }
];

const Intervenciones = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Todos');
    const [bottomSheet, setBottomSheet] = useState(null); 
    
    // --- ESTADO PARA PAGINACIÓN ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const categorias = ['Estética', 'Dermocosmética', 'Oncológica', 'Clínica', 'Nutrición'];
    const tipos = ['Todos', 'Artículo', 'Video'];

    // Filtros
    const publicacionesFiltradas = publicacionesMock.filter(pub => {
        const coincideTexto = pub.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const coincideCat = categoriaSeleccionada === 'Todos' || pub.categoria === categoriaSeleccionada;
        const coincideTipo = tipoSeleccionado === 'Todos' || pub.tipo === tipoSeleccionado;
        return coincideTexto && coincideCat && coincideTipo;
    });

    const populares = publicacionesMock.filter(pub => pub.popular);

    // Si cambias un filtro, regresamos a la página 1 automáticamente
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, categoriaSeleccionada, tipoSeleccionado]);

    // Lógica de Paginación Matemática
    const totalPages = Math.ceil(publicacionesFiltradas.length / itemsPerPage);
    const publicacionesMostradas = publicacionesFiltradas.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const cerrarBottomSheet = () => setBottomSheet(null);

    return (
        <div className="w-full bg-gray-50 min-h-screen flex flex-col pb-20 lg:pb-0">
            <Navbar />

            {/* HEADER Y BUSCADOR */}
            <div className="w-full pt-32 pb-8 bg-white px-4 sm:px-6 shadow-sm border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-miderma-dark mb-6">
                        Nuestras Intervenciones y Novedades
                    </h1>
                    
                    <div className="relative max-w-2xl mx-auto mb-4 lg:mb-8">
                        <input 
                            type="text" 
                            placeholder="Buscar artículos, tratamientos o videos..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-6 pr-12 py-4 rounded-full border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-miderma-pink focus:outline-none shadow-sm text-miderma-dark font-medium transition-colors"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-miderma-pink hover:text-miderma-dark transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </button>
                    </div>

                    {/* FILTROS PC (Solo formatos) */}
                    <div className="hidden lg:flex justify-center gap-3">
                        {tipos.map(tipo => (
                            <button 
                                key={tipo}
                                onClick={() => setTipoSeleccionado(tipo)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${tipoSeleccionado === tipo ? 'bg-miderma-pink text-white shadow-md' : 'bg-miderma-pink/10 text-miderma-pink hover:bg-miderma-pink/20'}`}
                            >
                                {tipo}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 w-full flex flex-col lg:flex-row gap-10">
                
                {/* COLUMNA IZQUIERDA: Lista de Artículos */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-8">
                    
                    {publicacionesMostradas.length > 0 ? (
                        <>
                            {publicacionesMostradas.map(pub => {
                                // Evaluamos la orientación de la data mock
                                const isHorizontal = pub.orientacion === 'horizontal';

                                return (
                                    <div 
                                        key={pub.id} 
                                        // Cambiamos el flex dependiendo de la orientación
                                        className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex ${isHorizontal ? 'flex-col' : 'flex-col sm:flex-row'}`}
                                    >
                                        
                                        {/* ZONA DE IMAGEN */}
                                        <div className={`relative overflow-hidden ${isHorizontal ? 'w-full h-56 sm:h-72' : 'w-full sm:w-1/2 h-[250px] sm:h-auto'}`}>
                                            <img 
                                                src={pub.imagen} 
                                                alt={pub.titulo} 
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Etiqueta Izquierda: Categoría */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-md text-miderma-dark text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                                    {pub.categoria}
                                                </span>
                                            </div>
                                            {/* Etiqueta Derecha: Destacado o Video */}
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                                                {pub.destacado && (
                                                    <span className="bg-miderma-dark/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase flex items-center gap-1 shadow-sm">
                                                        ✦ Destacado
                                                    </span>
                                                )}
                                                {pub.tipo === 'Video' && (
                                                    <span className="bg-miderma-pink/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase flex items-center gap-1 shadow-sm">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Video
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* ZONA DE TEXTO */}
                                        <div className={`p-6 md:p-8 flex flex-col ${isHorizontal ? 'w-full' : 'w-full sm:w-1/2'}`}>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                                                <svg className="w-4 h-4 text-miderma-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                                {pub.fecha}
                                            </div>
                                            <h3 className="text-xl md:text-3xl font-extrabold text-miderma-dark mb-4 leading-tight group-hover:text-miderma-pink transition-colors font-serif">
                                                {pub.titulo}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                                                {pub.extracto}
                                            </p>
                                            <div>
                                                <Link to={`/intervenciones/${pub.id}`} className="inline-flex items-center gap-2 bg-miderma-dark hover:bg-miderma-pink text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors shadow-md">
                                                    Leer más ➔
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* =========================================================
                                PAGINACIÓN (Numeritos)
                            ========================================================= */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-2 mt-8">
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-miderma-dark hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                                    </button>
                                    
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${currentPage === i + 1 ? 'bg-miderma-pink text-white shadow-md' : 'bg-white border border-gray-200 text-miderma-dark hover:bg-miderma-pink/10 hover:text-miderma-pink'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-miderma-dark hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
                            <h3 className="text-xl text-miderma-dark font-bold">No se encontraron resultados.</h3>
                            <p className="text-gray-500 mt-2">Intenta buscar con otra palabra o cambiar de filtro.</p>
                        </div>
                    )}
                </div>

                {/* COLUMNA DERECHA: Sidebar (Oculta en celular) */}
                <div className="hidden lg:flex w-full lg:w-1/3 flex-col gap-8">
                    
                    {/* Categorías */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-extrabold text-miderma-dark mb-4 border-b border-gray-100 pb-4 font-serif">
                            Categorías
                        </h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <button onClick={() => setCategoriaSeleccionada('Todos')} className="w-full flex items-center justify-between py-2 group">
                                    <span className={`text-[15px] transition-colors ${categoriaSeleccionada === 'Todos' ? 'font-bold text-miderma-pink' : 'text-gray-600 group-hover:text-miderma-pink'}`}>
                                        Todos los artículos
                                    </span>
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold transition-colors ${categoriaSeleccionada === 'Todos' ? 'bg-miderma-pink text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-miderma-pink/10 group-hover:text-miderma-pink'}`}>
                                        {publicacionesMock.length}
                                    </span>
                                </button>
                            </li>
                            {categorias.map(cat => {
                                const count = publicacionesMock.filter(pub => pub.categoria === cat).length;
                                return (
                                    <li key={cat}>
                                        <button onClick={() => setCategoriaSeleccionada(cat)} className="w-full flex items-center justify-between py-2 group">
                                            <span className={`text-[15px] transition-colors ${categoriaSeleccionada === cat ? 'font-bold text-miderma-pink' : 'text-gray-600 group-hover:text-miderma-pink'}`}>
                                                {cat}
                                            </span>
                                            <span className={`text-xs px-3 py-1 rounded-full font-bold transition-colors ${categoriaSeleccionada === cat ? 'bg-miderma-pink text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-miderma-pink/10 group-hover:text-miderma-pink'}`}>
                                                {count}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Más Populares */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-extrabold text-miderma-dark mb-6 border-b border-gray-100 pb-3 font-serif">
                            Más Populares
                        </h3>
                        <div className="flex flex-col gap-5">
                            {populares.slice(0,3).map(pub => (
                                <Link to={`/intervenciones/${pub.id}`} key={pub.id} className="flex items-center gap-4 group">
                                    <img src={pub.imagen} alt={pub.titulo} className="w-20 h-20 rounded-xl object-cover shadow-sm group-hover:opacity-80 transition-opacity" />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-miderma-dark leading-tight mb-1 group-hover:text-miderma-pink transition-colors line-clamp-2">
                                            {pub.titulo}
                                        </h4>
                                        <span className="text-[10px] text-gray-500 font-medium">{pub.fecha}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-miderma-dark rounded-3xl p-8 text-white shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-miderma-pink/20 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                        <h3 className="text-xl font-extrabold mb-2 relative z-10 font-serif">Newsletter</h3>
                        <p className="text-xs text-gray-300 mb-6 relative z-10">Recibe los últimos artículos y consejos de belleza directamente en tu correo.</p>
                        <input type="email" placeholder="tu@correo.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 mb-3 focus:outline-none focus:border-miderma-pink relative z-10" />
                        <button className="w-full bg-miderma-pink hover:bg-white hover:text-miderma-dark text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg relative z-10">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>

            {/* =========================================================
                BARRA INFERIOR PARA CELULARES
            ========================================================= */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.08)] z-40 flex justify-between items-center px-4 py-2 border-t border-gray-100 safe-area-pb">
                
                <button onClick={() => setBottomSheet('categorias')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'categorias' || categoriaSeleccionada !== 'Todos' ? 'text-miderma-pink' : 'text-gray-400 hover:text-miderma-dark'}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Categoría</span>
                </button>

                <button onClick={() => setBottomSheet('tipos')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'tipos' || tipoSeleccionado !== 'Todos' ? 'text-miderma-pink' : 'text-gray-400 hover:text-miderma-dark'}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Formato</span>
                </button>

                <button onClick={() => setBottomSheet('populares')} className={`flex flex-col items-center justify-center w-1/3 py-2 transition-colors ${bottomSheet === 'populares' ? 'text-miderma-pink' : 'text-gray-400 hover:text-miderma-dark'}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Populares</span>
                </button>
            </div>

            {/* MENÚS DESPLEGABLES DESDE ABAJO */}
            {bottomSheet && (
                <>
                    <div className="lg:hidden fixed inset-0 bg-miderma-dark/50 z-40 backdrop-blur-sm transition-opacity" onClick={cerrarBottomSheet}></div>
                    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white z-50 rounded-t-[2rem] shadow-2xl transform transition-transform animate-slide-up">
                        <div className="p-6 pb-10 max-h-[80vh] overflow-y-auto">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>

                            {bottomSheet === 'categorias' && (
                                <div>
                                    <h3 className="text-xl font-extrabold text-miderma-dark mb-4 text-center font-serif">Selecciona una Categoría</h3>
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => { setCategoriaSeleccionada('Todos'); cerrarBottomSheet(); }} className={`py-3 px-4 rounded-xl text-sm font-bold flex justify-between items-center transition-colors ${categoriaSeleccionada === 'Todos' ? 'bg-miderma-pink text-white' : 'bg-gray-50 text-gray-700 hover:bg-miderma-pink/10'}`}>
                                            <span>Todos los artículos</span>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${categoriaSeleccionada === 'Todos' ? 'bg-white text-miderma-pink' : 'bg-gray-200 text-gray-600'}`}>{publicacionesMock.length}</span>
                                        </button>
                                        {categorias.map(cat => {
                                            const count = publicacionesMock.filter(pub => pub.categoria === cat).length;
                                            return (
                                                <button key={cat} onClick={() => { setCategoriaSeleccionada(cat); cerrarBottomSheet(); }} className={`py-3 px-4 rounded-xl text-sm font-bold flex justify-between items-center transition-colors ${categoriaSeleccionada === cat ? 'bg-miderma-pink text-white' : 'bg-gray-50 text-gray-700 hover:bg-miderma-pink/10'}`}>
                                                    <span>{cat}</span>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${categoriaSeleccionada === cat ? 'bg-white text-miderma-pink' : 'bg-gray-200 text-gray-600'}`}>{count}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {bottomSheet === 'tipos' && (
                                <div>
                                    <h3 className="text-xl font-extrabold text-miderma-dark mb-4 text-center font-serif">Filtrar por Formato</h3>
                                    <div className="flex flex-col gap-2">
                                        {tipos.map(tipo => (
                                            <button key={tipo} onClick={() => { setTipoSeleccionado(tipo); cerrarBottomSheet(); }} className={`py-3 px-4 rounded-xl text-sm font-bold text-left transition-colors ${tipoSeleccionado === tipo ? 'bg-miderma-pink text-white' : 'bg-gray-50 text-gray-700 hover:bg-miderma-pink/10'}`}>
                                                {tipo}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {bottomSheet === 'populares' && (
                                <div>
                                    <h3 className="text-xl font-extrabold text-miderma-dark mb-4 text-center font-serif">Lo Más Leído</h3>
                                    <div className="flex flex-col gap-4">
                                        {populares.slice(0,3).map(pub => (
                                            <Link to={`/intervenciones/${pub.id}`} key={pub.id} onClick={cerrarBottomSheet} className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-gray-100 active:border-miderma-pink transition-colors">
                                                <img src={pub.imagen} alt={pub.titulo} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-bold text-miderma-dark leading-tight mb-1 line-clamp-2">{pub.titulo}</h4>
                                                    <span className="text-[10px] text-gray-500 font-medium">{pub.fecha}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <button onClick={cerrarBottomSheet} className="w-full mt-6 py-3.5 rounded-xl border-2 border-gray-100 text-gray-500 font-bold hover:bg-gray-50 transition-colors">Cancelar</button>
                        </div>
                    </div>
                </>
            )}

            <style>{`
                @keyframes slide-up {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default Intervenciones;