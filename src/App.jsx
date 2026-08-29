import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Panel from './pages/Panel';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Tratamientos from './pages/Tratamientos'; // <-- IMPORTADO AQUÍ
import Intervenciones from './pages/Intervenciones';
import IntervencionDetalle from './pages/IntervencionDetalle';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';

import ProductosTabla from './components/ProductosTabla';
import PaquetesTabla from './components/PaquetesTabla';
import PublicacionesTabla from './components/PublicacionesTabla';
import CasosTabla from './components/CasosTabla';

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
          <Route path="/tratamientos" element={<Tratamientos />} /> {/* <-- RUTA AÑADIDA */}
          <Route path="/intervenciones" element={<Intervenciones />} />
          <Route path="/intervenciones/:id" element={<IntervencionDetalle />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>

        <Route path="/login" element={<Login />} />
        
        <Route path="/panel" element={<Panel />}>
            <Route index element={<Navigate to="productos" />} />
            <Route path="productos" element={<ProductosTabla />} />
            <Route path="paquetes" element={<PaquetesTabla />} />
            <Route path="publicaciones" element={<PublicacionesTabla />} />
            <Route path="casos" element={<CasosTabla />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;