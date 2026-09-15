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
        const base = "font-titulos text-[10px] lg:text-[12px] xl:text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative py-2 shrink-0 flex items-center ";
        if (isActive(path)) {
            return base + (isSolid ? "text-[#291840] " : "text-white ") + "after:content-[''] after:absolute after:w-full after:h-1 after:bg-[#F2BDC7] after:bottom-0 after:left-0 after:rounded-full";
        }
        return base + (isSolid ? "text-[#291840]/80 hover:text-[#F2BDC7]" : "text-white/90 hover:text-[#F2BDC7]");
    };

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/sobre-mi' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Tratamientos', path: '/tratamientos' },
        { name: 'Casos', path: '/intervenciones' },
        { name: 'Farmacia', path: '/productos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 flex flex-col justify-center ${
                isSolid 
                ? 'bg-[#E5E5E5]/95 backdrop-blur-md shadow-sm py-2 md:py-3' 
                : 'bg-transparent py-5 md:py-6' 
            }`}
        >
            {/* ===================================================================================================
                ⚙️ PALANCA 1: CONTROL DE DISTANCIA DESDE LA IZQUIERDA ⚙️
                - `max-w-full`: Deja que el menú se estire por toda tu pantalla sin límites.
                - `lg:px-8`: Es el espacio entre el borde izquierdo de tu monitor y el logo en PC.
                  👉 ¿Lo quieres MÁS a la izquierda? Cámbialo a `lg:px-4`, `lg:px-2` o `px-0` (pegado al borde).
                  👉 ¿Lo quieres más al centro? Auméntalo a `lg:px-16` o `lg:px-24`.
            =======================================================================================================      */}
            <div className="max-w-full mx-auto w-full px-4 sm:px-6 lg:px-80">
                
                {/* ===================================================================================================
                    ⚙️ PALANCA 2: LIBERTAD DE ALINEACIÓN ⚙️
                    - Ya NO dice "lg:justify-center". Al quitarlo, todo se va naturalmente hacia la izquierda.
                =================================================================================================== */}
                <nav className="relative flex items-center justify-between w-full">
                    
                    {/* BLOQUE CENTRAL: LOGO + ENLACES */}
                    <div className="flex items-center">
                        
                        {/* LOGO */}
                        <div className="flex-shrink-0 cursor-pointer flex items-center z-20 mr-6 lg:mr-10">
                            <Link to="/">
                                <img 
                                    src={isSolid ? "/logooooo.png" : "/miderma-logo-morado.png"} 
                                    alt="Miderma Logo" 
                                    className={`transition-all duration-500 object-contain drop-shadow-none ${
                                        isSolid 
                                        ? 'h-14 md:h-16 lg:h-[5.5rem]' 
                                        : 'h-16 md:h-20 lg:h-[6rem]'
                                    }`}
                                    style={{ background: 'transparent' }}
                                />
                            </Link>
                        </div>

                        {/* ENLACES DE NAVEGACIÓN (PC) */}
                        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 z-10">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* BOTÓN MÓVIL (Hamburguesa - A la derecha en celulares) */}
                    <div className="flex lg:hidden items-center z-20 ml-auto">
                        <button 
                            onClick={() => setMenuAbierto(!menuAbierto)} 
                            className={`${isSolid ? 'text-[#F2BDC7]' : 'text-white'} hover:opacity-70 focus:outline-none p-2 rounded-lg transition-all duration-300 flex items-center justify-center`}
                            aria-label="Menú"
                        >
                            <div className="relative w-7 h-5 flex flex-col justify-between items-end overflow-hidden">
                                <span className={`block h-[3px] w-full rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'rotate-45 translate-y-[8.5px]' : ''}`} style={{ backgroundColor: 'currentColor' }}></span>
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full opacity-0 translate-x-4' : 'w-[80%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full -rotate-45 -translate-y-[8.5px]' : 'w-[60%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-[#E5E5E5] shadow-2xl transition-all duration-300 overflow-hidden ${menuAbierto ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-8 space-y-6 flex flex-col items-center bg-[#E5E5E5]/95 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} to={link.path} 
                            onClick={() => setMenuAbierto(false)} 
                            className={`font-titulos text-lg font-bold tracking-wider uppercase transition-colors ${isActive(link.path) ? 'text-[#291840] border-b-2 border-[#F2BDC7] pb-1' : 'text-[#291840]/80 hover:text-[#F2BDC7]'}`}
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