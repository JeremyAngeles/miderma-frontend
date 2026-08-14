import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';

const Panel = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Función para saber si una ruta está activa
    const isActive = (ruta) => location.pathname.includes(ruta);

    // Estilos para los botones del menú en ESCRITORIO
    const estiloBotonDesktop = (ruta) => {
        const base = "w-full text-left px-4 py-3 rounded-lg font-semibold transition-all shadow-sm block ";
        return isActive(ruta) 
            ? base + "bg-miderma-pink text-miderma-dark font-bold" 
            : base + "hover:bg-miderma-purple text-white";         
    };

    // Estilos para los botones del menú en CELULAR (Bottom Bar)
    const estiloBotonMobile = (ruta) => {
        const base = "flex flex-col items-center justify-center w-full py-2 transition-colors text-xs sm:text-sm ";
        return isActive(ruta)
            ? base + "text-miderma-pink font-bold"
            : base + "text-gray-400 hover:text-white";
    };

    return (
        // flex-col para móvil, flex-row para escritorio
        <div className="min-h-screen bg-miderma-light flex flex-col md:flex-row font-sans relative">
            
            {/* =========================================
                1. BARRA SUPERIOR MÓVIL (Solo Celulares)
                ========================================= */}
            <header className="md:hidden bg-miderma-dark text-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-md">
                <div className="flex items-center gap-2">
                    <img src="/logomiderma.png" alt="Logo" className="h-8 bg-white p-1 rounded-lg object-contain" />
                    <span className="font-bold text-miderma-pink">Admin</span>
                </div>
                <button 
                    onClick={cerrarSesion}
                    className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow"
                >
                    Salir
                </button>
            </header>

            {/* =========================================
                2. MENÚ LATERAL (Solo Escritorio/Laptops)
                ========================================= */}
            <aside className="hidden md:flex w-64 bg-miderma-dark text-white flex-col shadow-2xl z-10 sticky top-0 h-screen">
                <div className="p-6 text-center border-b border-miderma-purple">
                    <img src="/logomiderma.png" alt="Logo" className="h-16 mx-auto bg-white p-1 rounded-xl mb-3 object-contain" />
                    <h2 className="font-bold text-miderma-pink text-lg tracking-wide">Panel Admin</h2>
                </div>
                
                <nav className="flex-1 p-4 space-y-3 mt-4 overflow-y-auto">
                    <Link to="/panel/productos" className={estiloBotonDesktop('/panel/productos')}>
                        📦 Productos
                    </Link>
                    <Link to="/panel/paquetes" className={estiloBotonDesktop('/panel/paquetes')}>
                        🎁 Paquetes
                    </Link>
                    <Link to="/panel/publicaciones" className={estiloBotonDesktop('/panel/publicaciones')}>
                        📰 Publicaciones
                    </Link>
                    <Link to="/panel/casos" className={estiloBotonDesktop('/panel/casos')}>
                        ✨ Casos Clínicos
                    </Link>
                </nav>

                <div className="p-4 border-t border-miderma-purple">
                    <button onClick={cerrarSesion} className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-colors shadow-md">
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* =========================================
                3. CONTENIDO PRINCIPAL (El Outlet)
                ========================================= */}
            {/* pb-24 en móvil evita que la barra inferior tape el contenido */}
            <main className="flex-1 p-4 md:p-10 flex flex-col pb-24 md:pb-10 overflow-x-hidden">
                <header className="mb-6 md:mb-10 flex justify-between items-center hidden md:flex">
                    <div>
                        <h1 className="text-3xl font-extrabold text-miderma-dark mb-1">Administración</h1>
                        <p className="text-miderma-purple font-medium">Gestiona el contenido de tu clínica desde aquí.</p>
                    </div>
                </header>
                
                <div className="flex-1 bg-white p-4 md:p-8 rounded-2xl shadow-lg border-t-4 border-miderma-pink">
                    <Outlet /> 
                </div>
            </main>

            {/* =========================================
                4. BARRA DE NAVEGACIÓN INFERIOR (Solo Celulares)
                ========================================= */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-miderma-dark text-white flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.2)] z-50 rounded-t-2xl pb-safe">
                <Link to="/panel/productos" className={estiloBotonMobile('/panel/productos')}>
                    <span className="text-xl mb-1">📦</span>
                    <span>Productos</span>
                </Link>
                
                <Link to="/panel/paquetes" className={estiloBotonMobile('/panel/paquetes')}>
                    <span className="text-xl mb-1">🎁</span>
                    <span>Paquetes</span>
                </Link>
                
                <Link to="/panel/publicaciones" className={estiloBotonMobile('/panel/publicaciones')}>
                    <span className="text-xl mb-1">📰</span>
                    <span>Publicaciones</span>
                </Link>
                
                <Link to="/panel/casos" className={estiloBotonMobile('/panel/casos')}>
                    <span className="text-xl mb-1">✨</span>
                    <span>Casos</span>
                </Link>
            </nav>
            
        </div>
    );
};

export default Panel;