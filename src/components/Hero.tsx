import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import bananaPixelGif from "@/assets/banana-pixel.gif";
import bananaPlantation from "@/assets/banana-plantation.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Limpa bananas existentes
    container.innerHTML = '';
    
    const numeroDeBananas = 25; // Número de bananas caindo

    for (let i = 0; i < numeroDeBananas; i++) {
      // Cria um novo elemento img para a banana GIF
      const banana = document.createElement('img');
      banana.className = 'absolute select-none z-0 animate-banana-fall';
      banana.src = bananaPixelGif;
      banana.alt = 'Banana Pixel Caindo';
      banana.style.imageRendering = 'pixelated';

      // Randomiza a posição horizontal
      banana.style.left = Math.random() * 95 + '%';

      // Randomiza o tamanho da banana (40-70px)
      const size = Math.random() * 30 + 40;
      banana.style.width = size + 'px';
      banana.style.height = 'auto';

      // Randomiza a duração da animação (velocidade de queda)
      banana.style.animationDuration = (Math.random() * 4 + 6) + 's'; // Entre 6s e 10s

      // Randomiza o atraso para o início da animação
      banana.style.animationDelay = Math.random() * 8 + 's';

      // Adiciona a banana ao container
      container.appendChild(banana);
    }

    // Event listener para remover bananas após animação
    const onAnimationEnd = (event: AnimationEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.parentNode) {
        target.remove();
      }
    };
    
    container.addEventListener('animationend', onAnimationEnd);

    // Cleanup function
    return () => {
      container.removeEventListener('animationend', onAnimationEnd);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${bananaPlantation})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Banana container for falling bananas */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
        {/* Hero content with semi-transparent background */}
        <div className="bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg">
            Bananas Cordeiro
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-95 leading-relaxed px-2">
            Tradição familiar na produção de bananas de qualidade superior desde 1994. 
            Da nossa família para sua família, oferecemos frescor e excelência em cada produto.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Button 
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-secondary-foreground px-6 sm:px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
            >
              Fale conosco
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/20 text-white border-white/60 hover:bg-white hover:text-primary px-6 sm:px-8 py-3 backdrop-blur-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossa história
            </Button>
          </div>
          
          {/* Slogan */}
          <div className="border-t border-white/30 pt-4 sm:pt-6">
            <p className="text-lg sm:text-xl italic opacity-90 font-medium">"Da Nossa Família pra sua Família"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;