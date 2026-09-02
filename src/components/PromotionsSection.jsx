import { Link } from 'react-router-dom';

const promociones = [
    {
        id: 1,
        titulo: "Limpieza Facial Profunda + Protector Solar SPF 50+",
        subtitulo: "La Roche – Posay",
        descripcion: "Disfruta de una limpieza facial que revitaliza tu piel y protégela con SPF50+",
        precioAntes: "S/. 195.00",
        precioAhora: "S/. 170.00",
        validez: "Promoción válida hasta el 30 setiembre",
        imagen: "/promo-1.jpg"
    },
    {
        id: 2,
        titulo: "Semana del cuidado solar",
        subtitulo: "Protector solar SPF 50+ | La Roche – Posay",
        descripcion: "Fórmula ligera y resistente al agua, ideal para uso diario y piel sensible.",
        precioAntes: "S/ 95.00",
        precioAhora: "S/ 80.00",
        validez: "Promoción válida hasta agotar stock. No acumulable con otras ofertas.",
        imagen: "/promo-2.jpg"
    }
];

const PromotionsSection = () => {
    return (
        <section className="w-full relative z-10 flex flex-col bg-white overflow-hidden -mt-[1px]">
            
            <div className="pt-16 md:pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto w-full flex-grow">
                
                <div className="text-center md:text-left mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#291840] font-serif">Promociones</h2>
                    <div className="w-20 h-1.5 bg-[#F2BDC7] mt-4 mx-auto md:mx-0 rounded-full"></div>
                </div>

                {/* Tarjetas más horizontales */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
                    {promociones.map((promo) => (
                        <div key={promo.id} className="relative bg-[#F4EFEA] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col w-full h-[400px] sm:h-[420px] lg:h-[450px]">
                            
                            {/* IMAGEN PURA: Cubre todo, sin filtros ni degradados */}
                            <img 
                                src={promo.imagen} 
                                alt={promo.titulo} 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                            />

                            {/* CONTENIDO INTERNO SOUPREPUESTO (Flotando a la derecha) */}
                            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between items-end text-right w-full sm:w-[75%] ml-auto">
                                
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#7A6B63] uppercase mb-2">
                                        MIDERMA EXCLUSIVA
                                    </span>
                                    
                                    <h3 translate="no" className="text-2xl lg:text-3xl font-light text-[#291840] leading-[1.15] mb-2 font-serif max-w-[280px]">
                                        {promo.titulo}
                                    </h3>
                                    
                                    <p className="text-xs sm:text-sm font-bold text-[#291840] uppercase tracking-wider mb-2 max-w-[250px]">
                                        {promo.subtitulo}
                                    </p>
                                    
                                    <p className="text-xs sm:text-sm text-[#5A4A42] leading-relaxed max-w-[260px] font-medium">
                                        {promo.descripcion}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-col items-end">
                                    <span className="text-xs sm:text-sm text-[#7A6B63] line-through mb-1.5 font-bold">
                                        Antes: {promo.precioAntes}
                                    </span>
                                    
                                    {/* CAJA DE PRECIO SOLUCIONADA */}
                                    {/* Cambié w-[160px] por w-max para que se adapte al contenido exacto */}
                                    <div className="bg-[#F2BDC7] text-[#291840] px-5 py-3 rounded-xl flex flex-col items-end w-max ml-auto shadow-md transform group-hover:-translate-y-1 transition-transform mb-3">
                                        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold opacity-80 mb-0.5">
                                            Ahora:
                                        </span>
                                        {/* whitespace-nowrap fuerza al S/. y al número a estar siempre en la misma línea */}
                                        <span className="text-2xl sm:text-3xl font-serif font-bold leading-none whitespace-nowrap">
                                            {promo.precioAhora}
                                        </span>
                                    </div>

                                    <p className="text-[9px] sm:text-[10px] text-[#7A6B63] font-bold text-right max-w-[180px] leading-tight">
                                        {promo.validez}
                                    </p>
                                </div>
                            </div>
                            
                            <Link to="/contacto" className="absolute inset-0 z-20"></Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full leading-none bg-white">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 lg:h-40 block">
                    <path fill="#F2BDC7" fillOpacity="0.2" d="M0,40 C400,130 800,0 1440,60 L1440,150 L0,150 Z"></path>
                    <path fill="#F2BDC7" fillOpacity="0.4" d="M0,70 C450,150 900,20 1440,90 L1440,150 L0,150 Z"></path>
                    <path fill="#F2F2F2" d="M0,100 C500,170 1000,40 1440,120 L1440,150 L0,150 Z"></path>
                </svg>
            </div>
            
        </section>
    );
};

export default PromotionsSection;