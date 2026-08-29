import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full relative z-20 bg-white">
            
            {/* CONTENEDOR PRINCIPAL CON IMAGEN Y EFECTOS */}
            <div className="relative pt-24 lg:pt-16 pb-12 rounded-t-[3rem] lg:rounded-t-[4rem] shadow-[0_-10px_40px_rgba(41,24,64,0.15)] overflow-hidden bg-[#8E6F96]">
                
                {/* 1. FOTO DE FONDO */}
                <img 
                    src="/footer.jpg" 
                    alt="Fondo Miderma" 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
                />

                {/* 2. DEGRADADO Y EFECTO CRISTAL (Morado a la izq -> Rosa a la der) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8E6F96] via-[#8E6F96]/80 to-[#F2BDC7]/60 backdrop-blur-[2px] z-0"></div>

                {/* 3. CONTENIDO DEL FOOTER (Aseguramos z-10 para que esté por encima del fondo) */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                        
                        {/* COLUMNA 1: LOGO Y REDES */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                            <img 
                                src="/logoopuesto-removebg-preview.png"
                                alt="Miderma Logo" 
                                className="h-24 w-auto object-contain mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" 
                                style={{ background: 'transparent' }}
                            />
                            
                            <p className="text-white/90 text-sm leading-relaxed mb-8">
                                Especialistas en el cuidado integral de tu piel. 
                                Tecnología de vanguardia y tratamientos personalizados para resaltar tu belleza natural con seguridad y profesionalismo.
                            </p>
                            
                            {/* Redes Sociales */}
                            <div className="flex gap-4">
                                <a href="#" className="bg-white/10 border border-white/30 text-white hover:bg-[#F2BDC7] hover:text-[#291840] hover:border-[#F2BDC7] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                </a>
                                <a href="#" className="bg-white/10 border border-white/30 text-white hover:bg-[#F2BDC7] hover:text-[#291840] hover:border-[#F2BDC7] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="#" className="bg-white/10 border border-white/30 text-white hover:bg-[#F2BDC7] hover:text-[#291840] hover:border-[#F2BDC7] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.71a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* COLUMNA 2 */}
                        <div className="lg:pl-8">
                            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-[0.15em] font-serif">Menú Principal</h3>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Inicio</Link></li>
                                <li><Link to="/sobre-mi" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Conoce a la Doctora</Link></li>
                                <li><Link to="/servicios" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Tratamientos Médicos</Link></li>
                                <li><Link to="/intervenciones" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Casos de Éxito</Link></li>
                                <li><Link to="/productos" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Tienda Dermocosmética</Link></li>
                            </ul>
                        </div>

                        {/* COLUMNA 3 */}
                        <div>
                            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-[0.15em] font-serif">Atención al Paciente</h3>
                            <ul className="space-y-4">
                                <li><Link to="#" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Preguntas Frecuentes</Link></li>
                                <li><Link to="#" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Políticas de Citas</Link></li>
                                <li><Link to="#" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Términos y Condiciones</Link></li>
                                <li><Link to="#" className="text-white/80 hover:text-[#F2BDC7] hover:translate-x-1 transition-all block text-sm font-medium">Política de Privacidad</Link></li>
                            </ul>
                        </div>

                        {/* COLUMNA 4 */}
                        <div>
                            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-[0.15em] font-serif">Contacto</h3>
                            
                            <div className="space-y-5 text-white/80 text-sm">
                                
                                <div className="flex items-start gap-3">
                                    <div className="bg-white/10 border border-white/20 p-2 rounded-full shadow-sm text-[#F2BDC7] mt-0.5 shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <p className="font-medium mt-1 text-white/90">Av. Los Fresnos 123, Consultorio 402<br/>Santa Anita, Lima - Perú</p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="bg-white/10 border border-white/20 p-2 rounded-full shadow-sm text-[#F2BDC7] mt-0.5 shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div className="mt-1">
                                        <p className="font-bold text-white">Lunes a Viernes</p>
                                        <p className="font-medium mb-2 text-white/80">9:00 AM - 7:00 PM</p>
                                        <p className="font-bold text-white">Sábados</p>
                                        <p className="font-medium text-white/80">9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="bg-white/10 border border-white/20 p-2 rounded-full shadow-sm text-[#F2BDC7] group-hover:bg-[#F2BDC7] group-hover:text-[#291840] transition-colors shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <a href="tel:+51999999999" className="hover:text-[#F2BDC7] transition-colors font-medium text-white/90">
                                        +51 999 999 999
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="bg-white/10 border border-white/20 p-2 rounded-full shadow-sm text-[#F2BDC7] group-hover:bg-[#F2BDC7] group-hover:text-[#291840] transition-colors shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <a href="mailto:citas@miderma.pe" className="hover:text-[#F2BDC7] transition-colors font-medium text-white/90">
                                        citas@miderma.pe
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Divisor y Copyright */}
                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
                        <p className="mb-4 md:mb-0 font-medium text-center md:text-left">
                            &copy; {new Date().getFullYear()} Clínica Dermatológica Miderma. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-1 font-medium">
                            <span>Diseñado y desarrollado por</span>
                            <a href="https://github.com/JeremyAngeles" target="_blank" rel="noreferrer" className="text-white hover:text-[#F2BDC7] font-bold transition-colors">Jeremy Andre</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;