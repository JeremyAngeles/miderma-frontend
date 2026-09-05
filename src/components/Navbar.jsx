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

    // === ENLACES ORDENADOS EXACTAMENTE COMO SOLICITASTE ===
    const linksIzquierda = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/sobre-mi' },
        { name: 'Servicios', path: '/servicios' },
        
    ];

    const linksDerecha = [
        { name: 'Tratamientos', path: '/tratamientos' },
        { name: 'Casos', path: '/intervenciones' },
        { name: 'Farmacia', path: '/productos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 flex flex-col justify-center ${
                isSolid 
                // Color Blanco/Hueso más oscuro (#F2F2F2)
                ? 'bg-[#F2F2F2]/95 backdrop-blur-md shadow-sm py-2 md:py-3' 
                : 'bg-transparent py-5 md:py-6' 
            }`}
        >
            <div className="max-w-[110rem] mx-auto w-full px-4 sm:px-6 lg:px-10">
                <nav className="flex items-center justify-between w-full">
                    
                    {/* BOTÓN MÓVIL (Hamburguesa) */}
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

                    {/* ENLACES IZQUIERDA (PC) */}
                    <div className="hidden lg:flex flex-1 justify-end items-center space-x-5 xl:space-x-10 pr-6 xl:pr-12">
                        {linksIzquierda.map((link) => (
                            <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                        ))}
                    </div>

                    {/* LOGO CENTRAL */}
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

                    {/* ENLACES DERECHA (PC) */}
                    <div className="hidden lg:flex flex-1 justify-start items-center space-x-5 xl:space-x-10 pl-6 xl:pl-12">
                        {linksDerecha.map((link) => (
                            <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                        ))}
                    </div>

                    {/* ESPACIADOR INVISIBLE MÓVIL DERECHO (Mantiene el logo centrado) */}
                    <div className="flex-1 flex justify-end lg:hidden items-center">
                    </div>
                </nav>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-[#F2F2F2] shadow-2xl transition-all duration-300 overflow-hidden ${menuAbierto ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-8 space-y-6 flex flex-col items-center bg-[#F2F2F2]/95 backdrop-blur-xl">
                    {[...linksIzquierda, ...linksDerecha].map((link) => (
                        <Link 
                            key={link.name} to={link.path} 
                            onClick={() => setMenuAbierto(false)} 
                            className={`text-lg font-bold tracking-wider uppercase transition-colors ${isActive(link.path) ? 'text-[#291840] border-b-2 border-[#F2BDC7] pb-1' : 'text-[#291840]/80 hover:text-[#F2BDC7]'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;