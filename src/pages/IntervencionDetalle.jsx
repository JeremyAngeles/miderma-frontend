import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { publicacionesMock } from './Intervenciones'; // Importamos la data simulada

const IntervencionDetalle = () => {
    const { id } = useParams();
    
    // Simulamos la búsqueda en la base de datos
    const articulo = publicacionesMock.find(p => p.id === parseInt(id)) || publicacionesMock[0];
    const relacionados = publicacionesMock.filter(p => p.id !== articulo.id).slice(0, 3);

    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Navbar />

            {/* CONTENIDO DEL ARTÍCULO */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-16 w-full">
                
                {/* Cabecera del Artículo */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-miderma-pink/10 text-miderma-pink text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                            {articulo.categoria}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            {articulo.fecha}
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5A4A42] leading-tight mb-6 font-serif">
                        {articulo.titulo}
                    </h1>
                </div>

                {/* Imagen Principal */}
                <div className="w-full aspect-[21/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg mb-12">
                    <img src={articulo.imagen} alt={articulo.titulo} className="w-full h-full object-cover" />
                </div>

                {/* Texto Simulado del Blog */}
                <div className="prose prose-lg prose-pink max-w-none text-gray-700 leading-relaxed mb-16">
                    <p className="text-xl md:text-2xl text-[#5A4A42] font-medium mb-8 leading-snug">
                        {articulo.extracto}
                    </p>
                    
                    <h2 className="text-2xl font-bold text-[#5A4A42] mt-10 mb-4 font-serif">¿Por qué es importante este tratamiento?</h2>
                    <p>
                        Los avances en la dermatología estética han revolucionado la forma en que cuidamos nuestra piel. 
                        Muchos pacientes llegan a nuestra clínica buscando soluciones que no requieran intervenciones quirúrgicas extremas, y es aquí donde la tecnología y la especialización marcan la diferencia.
                    </p>
                    
                    <h3 className="text-xl font-bold text-[#5A4A42] mt-8 mb-3 font-serif">Beneficios principales:</h3>
                    <ul className="list-disc pl-5 mb-8 space-y-2">
                        <li>Resultados rápidos y clínicamente probados.</li>
                        <li>Tratamientos mínimamente invasivos con rápida recuperación.</li>
                        <li>Acompañamiento personalizado para asegurar la salud integral del paciente.</li>
                    </ul>

                    <p>
                        Para garantizar resultados duraderos, no basta con una sola sesión. Es crucial el compromiso del paciente para mantener hábitos saludables, una correcta rutina de skincare recomendada en consulta y seguir las pautas de fotoprotección al pie de la letra.
                    </p>
                </div>

                {/* CAJA DE CALL TO ACTION (Lista para transformar tu piel?) */}
                <div className="bg-[#FDF6F4] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-miderma-pink/20 mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A4A42] mb-4 font-serif">
                        ¿Lista para transformar tu piel?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto text-base md:text-lg">
                        Agenda una consulta personalizada con nuestros especialistas médicos y descubre el tratamiento perfecto y seguro para ti.
                    </p>
                    <Link to="/contacto" className="inline-flex items-center gap-2 bg-[#786154] hover:bg-miderma-pink text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:-translate-y-1">
                        Agendar Consulta Ahora
                    </Link>
                </div>

                {/* ARTÍCULOS RELACIONADOS */}
                <div className="border-t border-gray-100 pt-16">
                    <h3 className="text-3xl font-bold text-[#5A4A42] mb-8 font-serif">Artículos Relacionados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relacionados.map(rel => (
                            <Link to={`/intervenciones/${rel.id}`} key={rel.id} className="group cursor-pointer">
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm">
                                    <img src={rel.imagen} alt={rel.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h4 className="font-bold text-[#5A4A42] text-lg leading-tight group-hover:text-miderma-pink transition-colors line-clamp-2 mb-2 font-serif">
                                    {rel.titulo}
                                </h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{rel.categoria}</p>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntervencionDetalle;