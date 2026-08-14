import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const location = useLocation();

    // ==========================================
    // Detectamos si estamos en la página de inicio
    // ==========================================
    const isHome = location.pathname === '/';
    
    // El Navbar debe verse "sólido" (fondo blanco) SI:
    // 1. Hemos hecho scroll hacia abajo... O BIEN
    // 2. NO estamos en la página de inicio.
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

    // Cierra el menú móvil al cambiar de ruta
    useEffect(() => {
        setMenuAbierto(false);
    }, [location.pathname]);

    const isActive = (path) => location.pathname === path;

    const estiloEnlaceDesktop = (path) => {
        const base = "text-[14px] lg:text-[15px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative py-2 ";
        
        if (isActive(path)) {
            // SI ESTÁ ACTIVO: Morado si es sólido, Blanco si es transparente
            return base + (isSolid ? "text-miderma-purple " : "text-white ") + "after:content-[''] after:absolute after:w-full after:h-1 after:bg-miderma-pink after:bottom-0 after:left-0 after:rounded-full";
        }
        // SI ESTÁ INACTIVO: Morado con opacidad si es sólido, Blanco con opacidad si es transparente
        return base + (isSolid ? "text-miderma-purple/80 hover:text-miderma-pink" : "text-white/80 hover:text-white");
    };

    const linksIzquierda = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Mí', path: '/sobre-mi' },
        { name: 'Servicios', path: '/servicios' },
    ];

    const linksDerecha = [
        { name: 'Intervenciones', path: '/intervenciones' },
        { name: 'Productos', path: '/productos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
                isSolid 
                ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
                : 'bg-transparent py-6' 
            }`}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between">
                    
                    {/* =========================================================
                        BOTÓN MÓVIL (Hamburguesa Escalonada Elegante)
                    ========================================================= */}
                    <div className="flex-1 lg:hidden">
                        <button 
                            onClick={() => setMenuAbierto(!menuAbierto)} 
                            className={`${isSolid ? 'text-miderma-pink' : 'text-white'} hover:opacity-70 focus:outline-none p-2 -ml-2 rounded-lg transition-all duration-300 flex items-center justify-center`}
                            aria-label="Menú"
                        >
                            {/* AÑADIDO: items-end alinea todo a la derecha. overflow-hidden evita que sobresalga en la animación */}
                            <div className="relative w-7 h-5 flex flex-col justify-between items-end overflow-hidden">
                                
                                {/* Línea Superior: Siempre al 100% de ancho */}
                                <span className={`block h-[3px] w-full rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'rotate-45 translate-y-[8.5px]' : ''}`} style={{ backgroundColor: 'currentColor' }}></span>
                                
                                {/* Línea Central: 80% de ancho por defecto. Al abrir se va hacia la derecha y desaparece */}
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full opacity-0 translate-x-4' : 'w-[80%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                                
                                {/* Línea Inferior: 60% de ancho por defecto. Al abrir crece al 100% y rota para hacer la "X" */}
                                <span className={`block h-[3px] rounded-full transition-all duration-300 ease-in-out ${menuAbierto ? 'w-full -rotate-45 -translate-y-[8.5px]' : 'w-[60%]'}`} style={{ backgroundColor: 'currentColor' }}></span>
                                
                            </div>
                        </button>
                    </div>

                    {/* ENLACES IZQUIERDA */}
                    <div className="hidden lg:flex flex-1 justify-end space-x-10 xl:space-x-16 pr-12 lg:pr-16 xl:pr-28">
                        {linksIzquierda.map((link) => (
                            <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                        ))}
                    </div>

                    {/* LOGO CENTRAL */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center justify-center">
                        <Link to="/">
                            <img 
                                src="/logo_extendido.png" 
                                alt="Miderma Logo" 
                                className={`transition-all duration-500 object-contain ${isSolid ? 'h-10 md:h-12 drop-shadow-none' : 'h-12 md:h-16 drop-shadow-[0_2px_15px_rgba(255,255,255,0.7)]'}`}
                                style={{ background: 'transparent' }}
                            />
                        </Link>
                    </div>

                    {/* ENLACES DERECHA */}
                    <div className="hidden lg:flex flex-1 justify-start space-x-10 xl:space-x-16 pl-12 lg:pl-16 xl:pl-28">
                        {linksDerecha.map((link) => (
                            <Link key={link.name} to={link.path} className={estiloEnlaceDesktop(link.path)}>{link.name}</Link>
                        ))}
                    </div>

                    {/* Espaciador celular */}
                    <div className="flex-1 lg:hidden"></div>
                </nav>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${menuAbierto ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-6 space-y-5 flex flex-col items-center bg-white/95 backdrop-blur-xl">
                    {[...linksIzquierda, ...linksDerecha].map((link) => (
                        <Link 
                            key={link.name} to={link.path} 
                            onClick={() => setMenuAbierto(false)} 
                            className={`text-lg font-bold tracking-wider uppercase transition-colors ${isActive(link.path) ? 'text-miderma-purple border-b-2 border-miderma-pink pb-1' : 'text-miderma-purple/80 hover:text-miderma-pink'}`}
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