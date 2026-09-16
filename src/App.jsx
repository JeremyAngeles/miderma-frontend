import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Tratamientos from './pages/Tratamientos'; 
import Intervenciones from './pages/Intervenciones';
import IntervencionDetalle from './pages/IntervencionDetalle';
import Productos from './pages/Productos';

// COMPONENTES DE DETALLE (Productos y Blog)
import ProductDetail from './pages/ProductDetail'; 
import NewsDetail from './pages/NewsDetail'; 

// 1. IMPORTAMOS LAS 3 NUEVAS PÁGINAS LEGALES
import PoliticasCitas from './pages/PoliticasCitas';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';

import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';

// Componentes del Panel de Administración
import ProductosTabla from './components/ProductosTabla';
import PaquetesTabla from './components/PaquetesTabla';
import PublicacionesTabla from './components/PublicacionesTabla';
import CasosTabla from './components/CasosTabla';
import ListaDoctores from './components/ListaDoctores'; 

const WebPublica = () => (
  <div className="bg-miderma-light min-h-screen font-sans flex flex-col">
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<WebPublica />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/tratamientos" element={<Tratamientos />} /> 
          <Route path="/noticias" element={<Intervenciones />} />
          <Route path="/noticias/:id" element={<IntervencionDetalle />} />
          <Route path="/productos" element={<Productos />} />
          
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/publicacion/:id" element={<NewsDetail />} />
          
          <Route path="/contacto" element={<Contacto />} />

          {/* 2. AGREGAMOS LAS RUTAS LEGALES PARA EL FOOTER */}
          <Route path="/politicas-citas" element={<PoliticasCitas />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />

        </Route>

        <Route path="/login" element={<Login />} />
        
        <Route path="/panel" element={<Panel />}>
            <Route index element={<Navigate to="productos" />} />
            <Route path="productos" element={<ProductosTabla />} />
            <Route path="paquetes" element={<PaquetesTabla />} />
            <Route path="publicaciones" element={<PublicacionesTabla />} />
            <Route path="casos" element={<CasosTabla />} />
            <Route path="doctores" element={<ListaDoctores />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;