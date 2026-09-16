import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PoliticaPrivacidad = () => {
    return (
        <>
            <Navbar />
            <section className="w-full bg-[#FDF6F4] text-[#291840] pt-32 pb-20 px-4 sm:px-6 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_15px_40px_rgba(41,24,64,0.05)] border border-white">
                    
                    <div className="text-center mb-10">
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-[#F2BDC7] font-Montserrat">
                            Protección de Datos
                        </span>
                        <h1 className="text-3xl md:text-5xl font-normal text-[#291840] font-GFSDidot uppercase leading-tight">
                            Política de Privacidad
                        </h1>
                        <div className="w-16 h-1.5 bg-[#F2BDC7] mt-6 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8 font-Montserrat text-[#615573] leading-relaxed text-sm md:text-base">
                        
                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">1. Marco Legal</h3>
                            <p>En cumplimiento estricto con la Ley N° 29733, Ley de Protección de Datos Personales de la República del Perú, y su Reglamento, el Centro Dermatológico Miderma garantiza la seguridad, privacidad y confidencialidad de los datos personales y médicos proporcionados por nuestros pacientes y usuarios del sitio web.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">2. Recopilación de Información</h3>
                            <p>Los datos que recopilamos incluyen: Nombres completos, documento de identidad (DNI/CE), edad, correo electrónico, número de teléfono y antecedentes médicos (historia clínica dermatológica). Estos datos son recogidos únicamente cuando el usuario los proporciona voluntariamente para agendar una cita o abrir su historial médico presencialmente.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">3. Uso y Tratamiento de los Datos</h3>
                            <p>La información recopilada será utilizada exclusivamente para los siguientes fines:
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>Creación y mantenimiento de la Historia Clínica Médica del paciente.</li>
                                    <li>Confirmación, programación y recordatorio de citas vía WhatsApp o correo.</li>
                                    <li>Seguimiento de tratamientos médicos y envío de resultados.</li>
                                    <li>Envío de promociones o información relevante (boletines), siempre que el usuario haya brindado su consentimiento expreso.</li>
                                </ul>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">4. Confidencialidad y Seguridad Médica</h3>
                            <p>Como centro de salud, la información contenida en las historias clínicas goza de máxima protección bajo el secreto profesional médico. Miderma no vende, alquila ni cede datos de pacientes a terceros, empresas comerciales ni entidades externas, salvo requerimiento legal o mandato judicial peruano.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">5. Derechos ARCO</h3>
                            <p>De acuerdo a la ley peruana, el usuario puede ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> sobre sus datos personales. Para ello, puede enviar una solicitud formal a nuestro correo electrónico oficial: <strong>citas@midermacentrodelapiel.pe</strong>, adjuntando una copia de su DNI.</p>
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

export default PoliticaPrivacidad;