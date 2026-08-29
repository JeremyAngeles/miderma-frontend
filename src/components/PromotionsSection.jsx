import { Link } from 'react-router-dom';

const promociones = [
    {
        id: 1,
        titulo: "Cóctel Vitamina B",
        subtitulo: "+ Diclofenaco",
        descripcion: "(Vitamina B3, B6, B12) Recupera energía y bienestar desde adentro.",
        precioAntes: "S/ 150",
        precioAhora: "S/ 135",
        sesiones: "1 sesión",
        validez: "Promoción válida por todo el mes.",
        imagen: "/promo-1.jpg"
    },
    {
        id: 2,
        titulo: "BODY SCULPT",
        subtitulo: "(EMS + EXILIS + CRIO)",
        descripcion: "Tratamiento integral para remodelar y definir tu figura.",
        precioAntes: "S/ 1500",
        precioAhora: "S/ 900",
        sesiones: "3 sesiones",
        validez: "Promoción válida por todo el mes.",
        imagen: "/promo-2.jpg"
    }
];

const PromotionsSection = () => {
    return (
        <section className="w-full relative z-10 flex flex-col bg-white overflow-hidden -mt-[1px]">
            
            <div className="pt-16 md:pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto w-full flex-grow">
                
                <div className="text-center md:text-left mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark font-serif">Promociones</h2>
                    <div className="w-20 h-1.5 bg-miderma-pink mt-4 mx-auto md:mx-0 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                    {promociones.map((promo) => (
                        <div key={promo.id} className="relative bg-[#F4EFEA] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col w-full h-[460px] sm:h-[450px] lg:h-[480px]">
                            
                            {/* IMAGEN DE FONDO */}
                            <img 
                                src={promo.imagen} 
                                alt={promo.titulo} 
                                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }}
                            />
                            
                            {/* Gradientes para oscurecer solo la parte del texto (Derecha) */}
                            <div className="absolute inset-0 bg-gradient-to-l from-[#F4EFEA] via-[#F4EFEA]/75 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFEA]/80 via-transparent to-transparent sm:opacity-60"></div>

                            {/* CONTENIDO INTERNO */}
                            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between">
                                
                                <div className="text-right flex flex-col items-end mt-2 sm:mt-4">
                                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
                                        MIDERMA exclusiva
                                    </span>
                                    
                                    <h3 translate="no" className="text-3xl lg:text-4xl font-light text-[#5A4A42] leading-[1.1] mb-2 font-serif max-w-[220px] sm:max-w-[280px]">
                                        {promo.titulo}
                                    </h3>
                                    
                                    <p className="text-xs sm:text-sm font-bold text-[#5A4A42] uppercase tracking-wider mb-2">
                                        {promo.subtitulo}
                                    </p>
                                    
                                    <p className="text-xs sm:text-sm text-[#7A6B63] leading-relaxed max-w-[200px] sm:max-w-[250px]">
                                        {promo.descripcion}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-col items-end">
                                    <span className="text-xs sm:text-sm text-[#7A6B63] line-through mb-1.5">
                                        Antes: {promo.precioAntes}
                                    </span>
                                    
                                    <div className="bg-[#786154] text-white px-5 py-3 rounded-t-xl text-right w-[140px] sm:w-[160px] transform group-hover:-translate-y-1 transition-transform shadow-md">
                                        <p className="text-[10px] sm:text-xs uppercase tracking-wider opacity-80 mb-0.5">Ahora:</p>
                                        <p className="text-3xl sm:text-4xl font-serif font-light leading-none">{promo.precioAhora}</p>
                                    </div>

                                    <div className="bg-[#EADDCB] text-[#786154] text-xs sm:text-sm font-bold px-4 py-2 rounded-b-xl w-[140px] sm:w-[160px] text-center mb-3">
                                        {promo.sesiones}
                                    </div>

                                    <p className="text-[10px] sm:text-xs text-[#7A6B63] font-medium text-right max-w-[140px] sm:max-w-[160px] leading-tight">
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