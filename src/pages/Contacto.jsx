import { useState } from 'react';
import Navbar from '../components/Navbar';

const Contacto = () => {
    // =======================================================
    // NÚMERO DE WHATSAPP REAL (Con código de país, ej: 51 para Perú)
    // =======================================================
    const numeroWhatsApp = "51999999999"; 

    // Estado para Formulario de Citas
    const [formCita, setFormCita] = useState({
        nombres: '',
        dni: '',
        email: '',
        telefono: '',
        direccion: '',
        distrito: '',
        ciudad: '',
        servicio: '',
        mensaje: ''
    });

    // Handlers
    const handleChangeCita = (e) => setFormCita({ ...formCita, [e.target.name]: e.target.value });

    // Submit Citas
    const handleSubmitCita = (e) => {
        e.preventDefault();
        const texto = `*NUEVA SOLICITUD DE CITA* 📅\n\n*Paciente:* ${formCita.nombres}\n*DNI:* ${formCita.dni}\n*Teléfono:* ${formCita.telefono}\n*Email:* ${formCita.email}\n*Ubicación:* ${formCita.direccion}, ${formCita.distrito}, ${formCita.ciudad}\n*Servicio de interés:* ${formCita.servicio}\n\n*Mensaje:* ${formCita.mensaje}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
        setFormCita({ nombres: '', dni: '', email: '', telefono: '', direccion: '', distrito: '', ciudad: '', servicio: '', mensaje: '' });
    };

    // Estilo base para los inputs para mantener consistencia
    const inputStyle = "w-full px-5 py-3.5 bg-[#F2F2F2]/60 border border-[#F2F2F2] rounded-xl text-[#291840] text-sm focus:bg-white focus:border-[#F2BDC7] focus:outline-none transition-colors shadow-sm";
    const labelStyle = "text-[10px] font-bold text-[#615573] uppercase tracking-widest pl-2 mb-1.5 block";

    return (
        <div className="w-full bg-white min-h-screen flex flex-col">
            <Navbar />

            {/* HERO DE CONTACTO */}
            <div className="w-full pt-32 pb-12 bg-[#FDF6F4] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2BDC7]/20 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
                    <span className="text-[11px] md:text-xs font-bold text-[#F2BDC7] uppercase tracking-widest mb-3 block">
                        Estamos para escucharte
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#291840] mb-4 font-serif">
                        Contacto y Reservas
                    </h1>
                    <div className="w-16 h-1.5 bg-[#F2BDC7] rounded-full mx-auto mb-6"></div>
                </div>
            </div>

            {/* =========================================================
                SECCIÓN 1: RESERVAR CITA
            ========================================================= */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 border-b border-[#F2F2F2]">
                <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    
                    {/* Lado Izquierdo: Textos e Imagen */}
                    <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#291840] mb-6 font-serif">
                            Reserve su cita
                        </h2>
                        
                        <div className="prose prose-p:text-[#615573] prose-p:leading-relaxed prose-p:mb-5">
                            <p>
                                <strong>Haz que tu piel se sienta cuidada con nosotros.</strong> En Miderma sabemos que tu tiempo es valioso y que la salud de tu piel no puede esperar. Por eso hemos creado un sistema de reservas sencillo y rápido: completa el formulario y agenda tu consulta en pocos pasos. Nuestro equipo revisará tu solicitud y confirmará tu cita a la brevedad posible.
                            </p>
                            
                            <div className="bg-[#FDF6F4] border-l-4 border-[#F2BDC7] p-5 rounded-r-2xl my-8 shadow-sm">
                                <span className="block text-[#615573] text-sm uppercase tracking-widest font-bold mb-1">Inversión</span>
                                <span className="text-3xl font-extrabold text-[#291840] font-serif">Precio de Consulta: S/. 120.00</span>
                            </div>

                            <p className="text-sm bg-gray-50 p-4 rounded-xl italic">
                                👉 Si tienes una urgencia, indícalo en tu mensaje y nos pondremos en contacto contigo lo más pronto posible.
                            </p>
                            <p>
                                De esta manera, garantizamos que recibas la atención que necesitas con confianza y tranquilidad.
                            </p>
                        </div>

                        {/* Imagen referencial opcional */}
                        <div className="mt-8 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white h-64 relative hidden md:block">
                            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" alt="Reserva de cita" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Lado Derecho: Formulario Largo */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_10px_40px_rgba(41,24,64,0.08)] border border-[#F2F2F2]">
                            <h3 className="text-xl font-bold text-[#291840] mb-2 font-serif">Formulario de Citas</h3>
                            <p className="text-[#9A92A6] text-sm mb-8">(Llene todos los campos por favor)</p>

                            <form onSubmit={handleSubmitCita} className="flex flex-col gap-5">
                                {/* Fila 1 */}
                                <div>
                                    <label className={labelStyle}>Nombres y Apellidos</label>
                                    <input type="text" name="nombres" value={formCita.nombres} onChange={handleChangeCita} required className={inputStyle} placeholder="Ej. María Pérez" />
                                </div>
                                
                                {/* Fila 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className={labelStyle}>DNI</label>
                                        <input type="text" name="dni" value={formCita.dni} onChange={handleChangeCita} required className={inputStyle} placeholder="Nro de Documento" />
                                    </div>
                                    <div>
                                        <label className={labelStyle}>Teléfono / Celular</label>
                                        <input type="tel" name="telefono" value={formCita.telefono} onChange={handleChangeCita} required className={inputStyle} placeholder="Ej. 999 888 777" />
                                    </div>
                                </div>

                                {/* Fila 3 */}
                                <div>
                                    <label className={labelStyle}>Email</label>
                                    <input type="email" name="email" value={formCita.email} onChange={handleChangeCita} required className={inputStyle} placeholder="tucorreo@ejemplo.com" />
                                </div>

                                {/* Fila 4: Dirección Completa */}
                                <div>
                                    <label className={labelStyle}>Dirección Exacta</label>
                                    <input type="text" name="direccion" value={formCita.direccion} onChange={handleChangeCita} required className={inputStyle} placeholder="Av/Calle/Urb..." />
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className={labelStyle}>Distrito</label>
                                        <input type="text" name="distrito" value={formCita.distrito} onChange={handleChangeCita} required className={inputStyle} placeholder="Ej. San Borja" />
                                    </div>
                                    <div>
                                        <label className={labelStyle}>Ciudad</label>
                                        <input type="text" name="ciudad" value={formCita.ciudad} onChange={handleChangeCita} required className={inputStyle} placeholder="Ej. Lima" />
                                    </div>
                                </div>

                                {/* Fila 5: Servicio */}
                                <div>
                                    <label className={labelStyle}>Servicios</label>
                                    <select name="servicio" value={formCita.servicio} onChange={handleChangeCita} required className={`${inputStyle} appearance-none cursor-pointer`}>
                                        <option value="" disabled>Seleccione el servicio que necesita</option>
                                        <option value="Dermatología Clínica">Dermatología Clínica</option>
                                        <option value="Dermatología Estética">Dermatología Estética</option>
                                        <option value="Dermatología Quirúrgica">Dermatología Quirúrgica</option>
                                        <option value="Dermatología Oncológica">Dermatología Oncológica</option>
                                        <option value="Dermocosmética">Dermocosmética</option>
                                    </select>
                                </div>

                                {/* Fila 6: Mensaje */}
                                <div>
                                    <label className={labelStyle}>Mensaje / Motivo de consulta</label>
                                    <textarea name="mensaje" value={formCita.mensaje} onChange={handleChangeCita} required rows="4" className={`${inputStyle} resize-none`} placeholder="Cuéntenos brevemente su caso o si tiene alguna urgencia..."></textarea>
                                </div>

                                <button type="submit" className="w-full mt-4 bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.397C5.952 7.327 5 8.22 5 10.149c0 1.93 1.353 3.797 1.543 4.058.19.262 2.768 4.221 6.705 5.922 3.937 1.701 3.937 1.134 4.679 1.084.743-.05 2.38-.972 2.716-1.91.337-.939.337-1.745.238-1.912-.1-.167-.372-.266-.67-.416zm-5.417 7.747h-.004a9.663 9.663 0 01-4.93-1.325l-.353-.21-3.666.962.978-3.576-.23-.367a9.638 9.638 0 01-1.474-5.184 9.67 9.67 0 019.678-9.678 9.678 9.678 0 019.677 9.678 9.673 9.673 0 01-9.676 9.67v.03z"/></svg>
                                    Enviar solicitud por WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================
                SECCIÓN 3: TARJETAS DE INFORMACIÓN, REDES SOCIALES Y MAPA
            ========================================================= */}
            <section className="w-full bg-white pt-16 pb-20">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6">
                    
                    {/* 4 Tarjetas Informativas (grid-cols-2 en celular) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
                        {/* Dirección */}
                        <div className="bg-[#FDF6F4] p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-[#F2BDC7]/20 flex flex-col items-center text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h4 className="font-bold text-[#291840] mb-1.5 sm:mb-2 font-serif text-sm sm:text-lg">Dirección</h4>
                            <p className="text-[10px] sm:text-sm text-[#615573] leading-relaxed">Av. San Borja Sur 1234,<br/>Lima - Perú.</p>
                        </div>

                        {/* WhatsApp / Teléfono */}
                        <div className="bg-[#FDF6F4] p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-[#F2BDC7]/20 flex flex-col items-center text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <h4 className="font-bold text-[#291840] mb-1.5 sm:mb-2 font-serif text-sm sm:text-lg">Teléfono</h4>
                            <p className="text-[10px] sm:text-sm text-[#615573] leading-relaxed">+51 987 654 321<br/>(01) 456 - 7890</p>
                        </div>

                        {/* Email */}
                        <div className="bg-[#FDF6F4] p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-[#F2BDC7]/20 flex flex-col items-center text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h4 className="font-bold text-[#291840] mb-1.5 sm:mb-2 font-serif text-sm sm:text-lg">Correo</h4>
                            <p className="text-[10px] sm:text-sm text-[#615573] leading-relaxed">citas@miderma.com.pe</p>
                        </div>

                        {/* Horario */}
                        <div className="bg-[#FDF6F4] p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-[#F2BDC7]/20 flex flex-col items-center text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#F2BDC7] mb-3 sm:mb-4">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h4 className="font-bold text-[#291840] mb-1.5 sm:mb-2 font-serif text-sm sm:text-lg">Horario</h4>
                            <p className="text-[10px] sm:text-sm text-[#615573] leading-relaxed">Lun a Vie: 9am-7pm<br/>Sábados: 9am-1pm</p>
                        </div>
                    </div>

                    {/* ==========================================
                        BANNER DE REDES SOCIALES
                    ========================================== */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-gradient-to-r from-[#F2F2F2]/50 to-[#FDF6F4] p-6 md:px-12 md:py-8 rounded-[2rem] border border-[#F2F2F2]">
                        <div className="text-center md:text-left">
                            <h4 className="font-extrabold text-[#291840] font-serif text-xl sm:text-2xl mb-1">Únete a nuestra comunidad</h4>
                            <p className="text-[#615573] text-sm">Descubre tips, casos reales y novedades para cuidar tu piel.</p>
                        </div>
                        
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#291840] shadow-sm hover:bg-[#F2BDC7] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#291840] shadow-sm hover:bg-[#F2BDC7] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#291840] shadow-sm hover:bg-[#F2BDC7] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.52.88-5.1 2.89-6.6 1.71-1.28 3.9-1.74 5.92-1.36v4.11c-1.19-.24-2.45-.14-3.51.46-.78.43-1.35 1.15-1.6 2.01-.22.8-.13 1.68.27 2.41.48.91 1.45 2.48 1.63 1.26.11 2.53-.41 3.24-1.42.44-.61.64-1.35.63-2.09.03-5.59.01-11.18.02-16.77z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Mapa a lo ancho completo de la caja */}
                    <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white relative z-10">
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
            </section>

        </div>
    );
};

export default Contacto;