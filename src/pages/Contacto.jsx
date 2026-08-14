import { useState } from 'react';
import Navbar from '../components/Navbar';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        servicio: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // =======================================================
        // NÚMERO DE WHATSAPP REAL (Con código de país, ej: 51 para Perú)
        // =======================================================
        const numeroWhatsApp = "51999999999"; 
        
        const texto = `Hola Miderma, mi nombre es ${formData.nombre}. Estoy interesado/a en el servicio de ${formData.servicio}. \n\nMensaje: ${formData.mensaje}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        
        window.open(url, '_blank');
        setFormData({ nombre: '', servicio: '', mensaje: '' });
    };

    return (
        <div className="w-full bg-[#FDF6F4] min-h-screen flex flex-col">
            <Navbar />

            {/* HEADER DE CONTACTO */}
            <div className="w-full pt-32 pb-12 md:pb-16 bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                    <span className="text-[11px] md:text-xs font-bold text-[#F2BDC7] uppercase tracking-widest mb-3 block">
                        Estamos para escucharte
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#291840] mb-6 font-serif tracking-wide">
                        Reserva tu cita o resuelve tus dudas
                    </h1>
                    <p className="text-[#615573] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        En Miderma nos preocupamos por tu bienestar integral. Escríbenos o visítanos en nuestra clínica en San Borja. Nuestro equipo médico está listo para atenderte.
                    </p>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 py-12 md:py-16 w-full flex flex-col gap-12">
                
                {/* FILA SUPERIOR: Tarjetas (Izquierda) y Formulario (Derecha) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                    
                    {/* MITAD IZQUIERDA: 4 TARJETAS (Siempre 2x2) */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                            
                            {/* Dirección */}
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[2rem] border border-[#F2F2F2] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDF6F4] rounded-full flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-[#291840] mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Dirección</h4>
                                <p className="text-xs sm:text-sm text-[#615573] leading-relaxed">Av. San Borja Sur 1234,<br/>Lima - Perú.</p>
                            </div>

                            {/* WhatsApp / Teléfono */}
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[2rem] border border-[#F2F2F2] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDF6F4] rounded-full flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <h4 className="font-bold text-[#291840] mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">WhatsApp</h4>
                                <p className="text-xs sm:text-sm text-[#615573] leading-relaxed">+51 987 654 321<br/>(01) 456 - 7890</p>
                            </div>

                            {/* Email */}
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[2rem] border border-[#F2F2F2] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDF6F4] rounded-full flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <h4 className="font-bold text-[#291840] mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Correo</h4>
                                <p className="text-xs sm:text-sm text-[#615573] leading-relaxed">citas@miderma.com.pe</p>
                            </div>

                            {/* Horario */}
                            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[2rem] border border-[#F2F2F2] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-full">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDF6F4] rounded-full flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-[#291840] mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Horario</h4>
                                <p className="text-xs sm:text-sm text-[#615573] leading-relaxed">Lun a Vie: 9am - 7pm<br/>Sábados: 9am - 1pm</p>
                            </div>

                        </div>
                    </div>

                    {/* MITAD DERECHA: FORMULARIO */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-xl border border-[#F2F2F2] relative overflow-hidden h-full flex flex-col justify-center">
                            
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F2BDC7]/10 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>

                            <h2 className="text-2xl md:text-3xl font-bold text-[#291840] mb-2 font-serif relative z-10">Envíanos un mensaje</h2>
                            <p className="text-[#9A92A6] text-sm md:text-base mb-8 relative z-10">
                                Escríbenos directamente y te responderemos por WhatsApp para coordinar tu atención.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                                        <label className="text-[11px] font-bold text-[#615573] uppercase tracking-wider pl-2">Nombre completo</label>
                                        <input 
                                            type="text" 
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3.5 bg-[#F2F2F2]/50 border border-[#F2F2F2] rounded-xl text-[#291840] text-sm focus:bg-white focus:border-[#F2BDC7] focus:outline-none transition-colors"
                                            placeholder="Ej. María Pérez"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                                        <label className="text-[11px] font-bold text-[#615573] uppercase tracking-wider pl-2">Servicio de interés</label>
                                        <select 
                                            name="servicio"
                                            value={formData.servicio}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-3.5 bg-[#F2F2F2]/50 border border-[#F2F2F2] rounded-xl text-[#291840] text-sm focus:bg-white focus:border-[#F2BDC7] focus:outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option value="Dermatología Clínica">Dermatología Clínica</option>
                                            <option value="Dermatología Estética">Dermatología Estética</option>
                                            <option value="Dermatología Quirúrgica">Dermatología Quirúrgica</option>
                                            <option value="Láser y Aparatología">Láser y Aparatología</option>
                                            <option value="Productos">Consulta por productos</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[11px] font-bold text-[#615573] uppercase tracking-wider pl-2">Mensaje</label>
                                    <textarea 
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-5 py-4 bg-[#F2F2F2]/50 border border-[#F2F2F2] rounded-xl text-[#291840] text-sm focus:bg-white focus:border-[#F2BDC7] focus:outline-none transition-colors resize-none"
                                        placeholder="Cuéntanos brevemente sobre qué tratamiento o condición deseas consultar..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-[#291840] hover:bg-[#F2BDC7] text-white font-bold py-4 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.397C5.952 7.327 5 8.22 5 10.149c0 1.93 1.353 3.797 1.543 4.058.19.262 2.768 4.221 6.705 5.922 3.937 1.701 3.937 1.134 4.679 1.084.743-.05 2.38-.972 2.716-1.91.337-.939.337-1.745.238-1.912-.1-.167-.372-.266-.67-.416zm-5.417 7.747h-.004a9.663 9.663 0 01-4.93-1.325l-.353-.21-3.666.962.978-3.576-.23-.367a9.638 9.638 0 01-1.474-5.184 9.67 9.67 0 019.678-9.678 9.678 9.678 0 019.677 9.678 9.673 9.673 0 01-9.676 9.67v.03z"/></svg>
                                    Enviar por WhatsApp
                                </button>
                                
                            </form>
                        </div>
                    </div>

                </div>

                {/* FILA INFERIOR: MAPA (Abajo de todo ocupando todo el ancho) */}
                <div className="w-full h-[350px] md:h-[450px] bg-white rounded-[2rem] overflow-hidden shadow-md border border-[#F2F2F2] relative mt-2">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3255146522434!2d-77.0016056!3d-12.09916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c13cb1277d%3A0xc68a27d2c3dfb6f2!2sSan%20Borja!5e0!3m2!1ses!2spe!4v1680000000000!5m2!1ses!2spe" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Miderma"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contacto;