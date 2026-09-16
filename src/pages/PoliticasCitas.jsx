import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PoliticasCitas = () => {
    return (
        <>
            <Navbar />
            <section className="w-full bg-[#FDF6F4] text-[#291840] pt-32 pb-20 px-4 sm:px-6 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_15px_40px_rgba(41,24,64,0.05)] border border-white">
                    
                    <div className="text-center mb-10">
                        <span className="font-bold tracking-widest uppercase mb-3 block text-xs sm:text-sm text-[#F2BDC7] font-Montserrat">
                            Atención al Paciente
                        </span>
                        <h1 className="text-3xl md:text-5xl font-normal text-[#291840] font-GFSDidot uppercase">
                            Políticas de Citas
                        </h1>
                        <div className="w-16 h-1.5 bg-[#F2BDC7] mt-6 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8 font-Montserrat text-[#615573] leading-relaxed text-sm md:text-base">
                        
                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">1. Reserva y Confirmación</h3>
                            <p>Las citas en el Centro Dermatológico Miderma se reservan a través de nuestros canales oficiales (WhatsApp, teléfono o correo electrónico). Toda cita será confirmada un (1) día hábil antes de su fecha programada. Si el paciente no confirma su asistencia, la clínica se reserva el derecho de liberar el espacio para otro paciente en lista de espera.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">2. Tolerancia y Puntualidad</h3>
                            <p>Valoramos el tiempo de nuestros pacientes y de nuestro equipo médico. Por ello, brindamos un tiempo de <strong>tolerancia máximo de 15 minutos</strong> desde la hora programada. Pasado este tiempo, la cita será considerada como inasistencia y deberá ser reprogramada según la disponibilidad de la agenda médica.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">3. Reprogramaciones y Cancelaciones</h3>
                            <p>Entendemos que pueden surgir imprevistos. Si necesita reprogramar o cancelar su cita, le solicitamos hacerlo con una <strong>anticipación mínima de 24 horas</strong>. Esto nos permite ofrecer ese horario a un paciente que requiera atención urgente.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">4. Inasistencias (No-Show)</h3>
                            <p>La inasistencia a citas confirmadas sin previo aviso afecta la calidad de nuestro servicio. Pacientes con inasistencias recurrentes podrían requerir un abono previo no reembolsable para agendar futuras evaluaciones o tratamientos dermatológicos.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#291840] mb-3 uppercase tracking-wider">5. Preparación para su Consulta</h3>
                            <p>Se recomienda asistir a la consulta dermatológica con el rostro limpio (sin maquillaje) o el área a tratar despejada. Asimismo, le sugerimos traer cualquier examen previo o receta de tratamientos dermatológicos que esté usando actualmente.</p>
                        </div>

                    </div>

                    {/* BOTÓN REGRESAR */}
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

export default PoliticasCitas;