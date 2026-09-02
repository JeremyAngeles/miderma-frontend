import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isSolid = scrolled || !isHome;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuAbierto(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    const estiloEnlaceDesktop = (path) => {
        const base = "text-[12px] lg:text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative py-2 shrink-0 flex items-center ";
        if (isActive(path)) {
            return base + (isSolid ? "text-[#291840] " : "text-white ") + "after:content-[''] after:absolute after:w-full after:h-1 after:bg-[#F2BDC7] after:bottom-0 after:left-0 after:rounded-full";
        }
        return base + (isSolid ? "text-[#291840]/80 hover:text-[#F2BDC7]" : "text-white/90 hover:text-[#F2BDC7]");
    };

    // 1. ORDEN CORREGIDO SEGÚN LA IMAGEN
    const linksIzquierda = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/sobre-mi' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Tratamientos', path: '/tratamientos' },
        
    ];

    const linksDerecha = [
        { name: 'Contacto', path: '/Contacto' },
        { name: 'Casos', path: '/intervenciones' },
        { name: 'Farmacia', path: '/productos' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 flex flex-col justify-center ${
                isSolid 
                // Reduje el padding para que la barra blanca no baje tanto e invada la página
                ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 md:py-3' 
                : 'bg-transparent py-5 md:py-6' 
            }`}
        >
            {/* CONTENEDOR EXTENSO */}
            <div className="max-w-[110rem] mx-auto w-full px-4 sm:px-6 lg:px-10">
                <nav className="flex items-center justify-between w-full">
                    
                    {/* BOTÓN MÓVIL */}
                    <div className="flex-1 lg:hidden">
                        <button 
                            onClick={() => setMenuAbierto(!menuAbierto)} 
                            className={`${isSolid ? 'text-[#F2BDC7]' : 'text-white'} hover:opacity-70 focus:outline-none p-2 -ml-2 rounded-lg transition-all duration-300 flex items-center justify-center`}
                            aria-label="Menú"
                        >
                            <div className="relative w-7 h-5 flex flex-col justify-between items-end overflow-hidden">
                                <span className={`block h-[3px] w-full rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'rotate-45 translate-y-[8.5px]' : ''}`} style={{ backgroundColor: 'currentColor' }}></span>
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full opacity-0 translate-x-4' : 'w-[80%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full -rotate-45 -translate-y-[8.5px]' : 'w-[60%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                            </div>
                        </button>
                    </div>

                    {/* ENLACES IZQUIERDA */}
                    <div className="hidden lg:flex flex-1 justify-end items-center space-x-5 xl:space-x-10 pr-6 xl:pr-12">
                        {linksIzquierda.map((link) => (
                            <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                        ))}
                    </div>

                    {/* LOGO CENTRAL (Reduje ligeramente el alto para que se aleje del texto de la página) */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center justify-center z-10 px-2 xl:px-4">
                        <Link to="/">
                            <img 
                                src="/logooooo.png" 
                                alt="Miderma Logo" 
                                className={`transition-all duration-500 object-contain ${
                                    isSolid 
                                    ? 'h-14 md:h-16 lg:h-[5.5rem] drop-shadow-none' 
                                    : 'h-16 md:h-20 lg:h-[6rem] drop-shadow-[0_2px_15px_rgba(255,255,255,0.7)]'
                                }`}
                                style={{ background: 'transparent' }}
                            />
                        </Link>
                    </div>

                    {/* ENLACES DERECHA Y BOTÓN */}
                    <div className="hidden lg:flex flex-1 justify-between items-center pl-6 xl:pl-12">
                        
                        {/* Links de la derecha */}
                        <div className="flex items-center space-x-5 xl:space-x-10">
                            {linksDerecha.map((link) => (
                                <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                            ))}
                        </div>
                        
                        {/* REDES SOCIALES Y BOTÓN DE RESERVA AL EXTREMO DERECHO */}
                        <div className="flex flex-col items-center shrink-0 ml-auto">
                            
                            {/* Redes Sociales arriba del botón */}
                            <div className="flex items-center gap-4 mb-1.5">
                                <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className={`transition-all duration-300 ${isSolid ? 'text-[#291840] hover:text-[#F2BDC7]' : 'text-white hover:text-[#F2BDC7]'}`}>
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className={`transition-all duration-300 ${isSolid ? 'text-[#291840] hover:text-[#F2BDC7]' : 'text-white hover:text-[#F2BDC7]'}`}>
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok" className={`transition-all duration-300 ${isSolid ? 'text-[#291840] hover:text-[#F2BDC7]' : 'text-white hover:text-[#F2BDC7]'}`}>
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.71a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                                </a>
                            </div>
                            
                            {/* Botón */}
                            <Link 
                                to="/contacto" 
                                className="bg-[#F2BDC7] text-[#291840] hover:bg-[#291840] hover:text-white px-7 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-[0.1em] transition-colors shadow-sm whitespace-nowrap"
                            >
                                Reservar Cita
                            </Link>
                        </div>
                    </div>

                    {/* Botón Móvil Derecho */}
                    <div className="flex-1 flex justify-end lg:hidden items-center">
                        <Link to="/contacto" className="bg-[#F2BDC7] text-[#291840] px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider shadow-sm">
                            Reservar
                        </Link>
                    </div>
                </nav>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${menuAbierto ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-6 space-y-5 flex flex-col items-center bg-white/95 backdrop-blur-xl">
                    {[...linksIzquierda, ...linksDerecha].map((link) => (
                        <Link 
                            key={link.name} to={link.path} 
                            onClick={() => setMenuAbierto(false)} 
                            className={`text-lg font-bold tracking-wider uppercase transition-colors ${isActive(link.path) ? 'text-[#291840] border-b-2 border-[#F2BDC7] pb-1' : 'text-[#291840]/80 hover:text-[#F2BDC7]'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contacto" onClick={() => setMenuAbierto(false)} className="mt-4 w-[80%] text-center bg-[#291840] hover:bg-[#F2BDC7] text-white hover:text-[#291840] px-8 py-3.5 rounded-full font-bold uppercase tracking-wider transition-colors shadow-md">
                        Reservar Cita
                    </Link>
                    
                    <div className="flex gap-6 mt-6 pt-6 border-t border-gray-100 w-[60%] justify-center">
                        <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-[#291840] hover:text-[#F2BDC7] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#291840] hover:text-[#F2BDC7] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-[#291840] hover:text-[#F2BDC7] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.52.88-5.1 2.89-6.6 1.71-1.28 3.9-1.74 5.92-1.36v4.11c-1.19-.24-2.45-.14-3.51.46-.78.43-1.35 1.15-1.6 2.01-.22.8-.13 1.68.27 2.41.48.91 1.45 2.48 1.63 1.26.11 2.53-.41 3.24-1.42.44-.61.64-1.35.63-2.09.03-5.59.01-11.18.02-16.77z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;