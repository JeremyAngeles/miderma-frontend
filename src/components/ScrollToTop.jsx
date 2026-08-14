import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. Esto le dice al navegador: "Oye, no recuerdes dónde estaba el usuario si recarga la página con F5"
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // 2. Esto fuerza a la ventana a subir a la coordenada (0, 0) cada vez que cambia la ruta o se refresca
        window.scrollTo(0, 0);
    }, [pathname]);

    // Este componente es un "fantasma", no dibuja nada en la pantalla
    return null; 
};

export default ScrollToTop;