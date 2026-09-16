import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TerminosCondiciones = () => {
    return (
        <>
            <Navbar />
            <section className="w-full bg-[#FDF6F4] text-[#291840] pt-32 pb-20 px-4 sm:px-6 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_15px_40px_rgba(41,24,64,0.05)] border border-white">
                    
                    <div className="text-center mb-10">
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-[#F2BDC7] font-Montserrat">
                            Aspectos Legales
                        </span>
                        <h1 className="text-3xl md:text-5xl font-normal text-[#291840] font-GFSDidot uppercase">
                            Términos y Condiciones
                        </h1>
                        <div className="w-16 h-1.5 bg-[#F2BDC7] mt-6 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8 font-Montserrat text-[#615573] leading-relaxed text-sm md:text-base">
                        
                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">1. Información General</h3>
                            <p>El presente documento establece los Términos y Condiciones que rigen el uso del sitio web y los servicios ofrecidos por Miderma - Centro de la Piel, clínica dermatológica ubicada en Av. San Luis 2534, Oficina 701, San Borja, Lima, Perú. Al acceder a esta web y utilizar nuestros servicios, el usuario acepta de manera íntegra estos términos.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">2. Naturaleza Informativa (Aviso Médico)</h3>
                            <p>Todo el contenido disponible en este sitio web (textos, imágenes, blogs, descripciones de tratamientos y recomendaciones) tiene un fin estrictamente educativo e informativo. <strong>De ninguna manera constituye un diagnóstico, prescripción ni reemplaza la consulta médica presencial.</strong> Todo tratamiento dermatológico requiere una evaluación médica personalizada previa en nuestras instalaciones.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">3. Tratamientos y Resultados</h3>
                            <p>La medicina no es una ciencia exacta. Los resultados de los procedimientos dermatológicos, estéticos y clínicos varían de un paciente a otro dependiendo de factores genéticos, hábitos, edad y adherencia a las indicaciones médicas. Las imágenes de "Antes y Después" publicadas en nuestro sitio representan casos reales con el consentimiento de los pacientes, pero no garantizan resultados idénticos en otras personas.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">4. Promociones y Precios</h3>
                            <p>Los precios publicados en nuestra tienda dermocosmética y las tarifas de tratamientos o promociones están expresados en Soles (PEN) e incluyen los impuestos de ley. Las promociones están sujetas a evaluación médica de viabilidad, disponibilidad de stock y vigencia indicada. Miderma se reserva el derecho de modificar sus tarifas sin previo aviso.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">5. Propiedad Intelectual</h3>
                            <p>Todo el material visual, logotipos, textos, fotografías y diseño de esta página web son propiedad exclusiva de Miderma. Queda estrictamente prohibida su reproducción, copia, distribución o uso con fines comerciales sin nuestra autorización expresa por escrito.</p>
                        </div>

                    </div>

                    <div className="mt-12 text-center pt-8 border-t border-gray-100">
                        <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] px-8 py-3.5 rounded-full font-normal transition-all duration-300 shadow-sm text-sm font-GFSDidot uppercase tracking-wider">
                            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Regresar al Inicio
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default TerminosCondiciones;