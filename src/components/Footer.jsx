import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-miderma-dark text-white pt-16 pb-8 border-t-[6px] border-miderma-pink">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                

                {/* CONTENEDOR PRINCIPAL: 4 Columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* COLUMNA 1: Logo y Redes Sociales */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        
                        {/* LOGO ARREGLADO: Sin fondos, sin bordes, 100% transparente */}
                        <img 
                            src="/logo_minerba_morado.png" 
                            alt="Miderma Logo" 
                            className="h-28 w-auto object-contain mb-6" 
                            style={{ background: 'transparent' }}
                        />
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-8">
                            Especialistas en el cuidado integral de tu piel. 
                            Tecnología de vanguardia y tratamientos personalizados para resaltar tu belleza natural con seguridad y profesionalismo.
                        </p>
                        
                        {/* Redes Sociales */}
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a href="#" className="bg-white/10 hover:bg-miderma-pink text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="bg-white/10 hover:bg-miderma-pink text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            {/* TikTok */}
                            <a href="#" className="bg-white/10 hover:bg-miderma-pink text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.71a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 2: Enlaces Rápidos */}
                    <div>
                        <h3 className="text-miderma-pink font-bold text-lg mb-6 uppercase tracking-wider">Menú Principal</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Inicio</Link></li>
                            <li><Link to="/sobre-mi" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Conoce a la Doctora</Link></li>
                            <li><Link to="/servicios" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Tratamientos Médicos</Link></li>
                            <li><Link to="/intervenciones" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Casos de Éxito (Fotos)</Link></li>
                            <li><Link to="/productos" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Tienda Dermocosmética</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: Legal y Soporte */}
                    <div>
                        <h3 className="text-miderma-pink font-bold text-lg mb-6 uppercase tracking-wider">Atención al Paciente</h3>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Preguntas Frecuentes</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Políticas de Citas</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Términos y Condiciones</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all block">Política de Privacidad</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: Horarios y Contacto */}
                    <div>
                        <h3 className="text-miderma-pink font-bold text-lg mb-6 uppercase tracking-wider">Contacto</h3>
                        
                        <div className="space-y-5 text-gray-300 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-xl mt-0.5">📍</span>
                                <p>Av. Los Fresnos 123, Consultorio 402<br/>Santa Anita, Lima - Perú</p>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <span className="text-xl mt-0.5">🕒</span>
                                <div>
                                    <p className="font-semibold text-white">Lunes a Viernes</p>
                                    <p>9:00 AM - 7:00 PM</p>
                                    <p className="font-semibold text-white mt-1">Sábados</p>
                                    <p>9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 group">
                                <span className="text-xl">📞</span>
                                <a href="tel:+51999999999" className="hover:text-white transition-colors text-base font-semibold group-hover:underline">
                                    +51 999 999 999
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <span className="text-xl">✉️</span>
                                <a href="mailto:citas@miderma.pe" className="hover:text-white transition-colors group-hover:underline">
                                    citas@miderma.pe
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM: Copyright & Créditos */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Clínica Dermatológica Miderma. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Diseñado y desarrollado por</span>
                    
                        <span> <a href="#" className="text-white hover:text-miderma-pink font-bold transition-colors">Jeremy Andre</a></span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;