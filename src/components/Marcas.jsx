const marcas = [
    "acleria.png", "bioderma.png", "cerave.png", "eucerim.png", "frezyderm.png",
    "la-roche-posay.png", "medihealth.png", "svr.png", "tizo.png", "vichy.png"
];

const BrandsMarquee = () => {
    return (
        <section className="w-full relative z-20 -mt-[1px]">
            <div className="pb-12 pt-4 bg-white overflow-hidden relative">
                
                <div className="text-center mb-8">
                    <span className="font-extrabold tracking-widest uppercase text-xs text-miderma-gray">
                        Trabajamos con las mejores marcas a nivel mundial
                    </span>
                </div>

                <div className="relative w-full flex overflow-hidden group">
                    
                    <style>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            display: flex;
                            width: max-content;
                            animation: scroll 35s linear infinite;
                        }
                        .group:hover .animate-scroll {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="animate-scroll flex items-center gap-12 sm:gap-20 px-6">
                        {[...marcas, ...marcas].map((marca, index) => (
                            <div key={index} className="flex-shrink-0 w-32 sm:w-40 h-16 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0">
                                <img 
                                    src={`/${marca}`} 
                                    alt={`Marca ${index}`} 
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default BrandsMarquee;