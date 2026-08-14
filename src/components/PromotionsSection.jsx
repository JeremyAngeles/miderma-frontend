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
    },
    {
        id: 3,
        titulo: "EMS SCULPT",
        subtitulo: "Abdomen o glúteos",
        descripcion: "Tonifica, fortalece y define tu figura sin esfuerzo.",
        precioAntes: "S/ 1000",
        precioAhora: "S/ 500",
        sesiones: "5 sesiones",
        validez: "Promoción válida por todo el mes.",
        imagen: "/promo-3.jpg"
    }
];

const PromotionsSection = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-white text-miderma-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center md:text-left mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-miderma-dark">Promociones</h2>
                    <div className="w-20 h-1.5 bg-miderma-pink mt-4 mx-auto md:mx-0 rounded-full"></div>
                </div>

                {/* MAGIA AQUÍ: justify-items-center asegura que las cards no se estiren a lo ancho en móvil */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {promociones.map((promo) => (
                        <div key={promo.id} className="relative bg-[#F4EFEA] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col w-[320px] h-[460px] md:w-full md:h-[550px]">
                            
                            {/* IMAGEN DE FONDO */}
                            <img 
                                src={promo.imagen} 
                                alt={promo.titulo} 
                                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1615286611384-5f508003f6f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }}
                            />
                            
                            {/* Gradientes para oscurecer solo la parte del texto (Derecha) */}
                            <div className="absolute inset-0 bg-gradient-to-l from-[#F4EFEA]/90 via-[#F4EFEA]/30 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFEA]/80 via-transparent to-transparent"></div>

                            {/* CONTENIDO INTERNO */}
                            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                
                                <div className="text-right flex flex-col items-end mt-4">
                                    <span className="text-[8px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">MIDERMA exclusiva</span>
                                    
                                    {/* translate="no" evita que Chrome traduzca EMS SCULPT y deforme el diseño */}
                                    <h3 translate="no" className="text-3xl font-light text-[#5A4A42] leading-[1.1] mb-1 font-serif max-w-[180px]">
                                        {promo.titulo}
                                    </h3>
                                    
                                    <p className="text-[10px] font-bold text-[#5A4A42] uppercase tracking-wider mb-2">
                                        {promo.subtitulo}
                                    </p>
                                    
                                    <p className="text-[10px] text-[#7A6B63] leading-tight max-w-[140px]">
                                        {promo.descripcion}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-col items-end">
                                    <span className="text-[10px] text-[#7A6B63] line-through mb-1">
                                        Antes: {promo.precioAntes}
                                    </span>
                                    
                                    <div className="bg-[#786154] text-white px-4 py-2 rounded-lg text-right w-[140px] transform group-hover:-translate-y-1 transition-transform">
                                        <p className="text-[8px] uppercase tracking-wider opacity-80 mb-0.5">Ahora:</p>
                                        <p className="text-3xl font-serif font-light leading-none">{promo.precioAhora}</p>
                                    </div>

                                    <div className="bg-[#EADDCB] text-[#786154] text-[9px] font-bold px-4 py-1.5 rounded-b-lg w-[140px] text-center mb-2">
                                        {promo.sesiones}
                                    </div>

                                    <p className="text-[8px] text-[#7A6B63] font-medium text-right max-w-[120px] leading-tight">
                                        {promo.validez}
                                    </p>
                                </div>
                            </div>
                            
                            <Link to="/contacto" className="absolute inset-0 z-20"></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromotionsSection;