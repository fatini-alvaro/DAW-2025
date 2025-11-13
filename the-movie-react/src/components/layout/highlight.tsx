export function Highlight() {

  const BACKGROUND_URL = "/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg";
  const CAPA_URL = "/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg";

  return (
    <section 
      className="relative min-h-[50vh] flex items-center bg-gray-900" 
      style={{ backgroundImage: `url(${BACKGROUND_URL})` }}
    >
      <div 
        className="absolute inset-0 z-10 
                   bg-gradient-to-r 
                   from-black via-black/80 to-black/80 
                   md:from-black/100 md:via-black/70 md:to-black/70"
      ></div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-8 z-20 relative text-white">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <img 
            className="highlight-poster rounded-lg shadow-xl w-48 md:w-64 flex-shrink-0 hidden md:block" 
            src={CAPA_URL} 
            alt="Capa Filme" 
            style={{ minHeight: '384px', objectFit: 'cover' }}
          />

          {/* Detalhes do Destaque */}
          <div className="highlight-detail flex flex-col pt-16 md:pt-0">
            
            {/* Título */}
            <h2 className="font-normal text-4xl sm:text-5xl lg:text-6xl pb-2">
              Como Treinar o seu Dragão
            </h2>

            {/* Metadados */}
            <div className="highlight-meta text-sm my-3 flex flex-wrap gap-2 items-center">
              
              {/* Gêneros */}
              <span className="genre bg-white/20 px-3 py-1 rounded-full text-xs font-medium mr-2">
                Fantasia
              </span>
              <span className="genre bg-white/20 px-3 py-1 rounded-full text-xs font-medium mr-2">
                Família
              </span>
              <span className="genre bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                Ação e Aventura
              </span>
              
              {/* Duração */}
              <span className="duration ml-4 text-gray-300">
                2h 5m
              </span>
            </div>

            {/* Sinopse */}
            <div className="highlight-sinopse">
              <h4 className="text-xl md:text-2xl font-normal pt-8 pb-2">
                Sinopse
              </h4>
              <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
                Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um dragão
                ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são
                os monstros que todos acreditavam ser.
              </p>
            </div>

            <div className="highlight-actions flex flex-wrap gap-4 my-8">
              
              <button 
                className="bg-[#e50914] text-white px-6 py-3 rounded-lg font-bold 
                           transition duration-300 hover:bg-[#b9070f] shadow-lg"
              >
                Assistir
              </button>
              
              <button 
                className="bg-white/20 text-white border border-white/30 px-6 py-3 
                           rounded-lg transition duration-300 hover:bg-white/30 font-bold"
              >
                Detalhes
              </button>
              
              <button 
                className="bg-white/20 text-white border border-white/30 px-6 py-3 
                           rounded-lg transition duration-300 hover:bg-white/30 font-bold"
              >
                + Adicionar à lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};