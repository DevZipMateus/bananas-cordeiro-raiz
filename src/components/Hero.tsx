import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('banana-container');
    if (!container) return;

    // Limpa bananas existentes
    container.innerHTML = '';
    
    const numeroDeBananas = 25;
    const gifBananaURL = 'https://i.imgur.com/E5C6y0O.gif';

    for (let i = 0; i < numeroDeBananas; i++) {
      // Cria um novo elemento img para a banana GIF
      const banana = document.createElement('img');
      banana.className = 'absolute select-none z-0 animate-banana-fall-gif';
      banana.src = gifBananaURL;
      banana.alt = 'Banana Pixel Caindo';
      banana.style.imageRendering = 'pixelated';

      // Randomiza a posição horizontal
      banana.style.left = Math.random() * 98 + 'vw';

      // Randomiza o tamanho da banana
      const randomSize = Math.random() * 30 + 40; // Entre 40px e 70px
      banana.style.width = randomSize + 'px';
      banana.style.height = 'auto';

      // Randomiza a duração da animação (velocidade de queda)
      banana.style.animationDuration = (Math.random() * 4 + 6) + 's'; // Entre 6s e 10s

      // Randomiza o atraso para o início da animação
      banana.style.animationDelay = Math.random() * 8 + 's';

      // Adiciona a banana ao container
      container.appendChild(banana);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.imgur.com/5O88n9o.jpeg')" }}
      />
      
      {/* Banana container for falling bananas */}
      <div id="banana-container" className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
        {/* Hero content with semi-transparent background */}
        <div className="bg-black/70 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Bananas Cordeiro
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Tradição familiar na produção de bananas de qualidade superior desde 1994. 
            Da nossa família para sua família, oferecemos frescor e excelência em cada produto.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
            >
              Fale conosco
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white/60 hover:bg-white hover:text-primary px-8 py-3 backdrop-blur-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossa história
            </Button>
          </div>
          
          {/* Slogan */}
          <div className="border-t border-white/30 pt-6">
            <p className="text-xl italic opacity-90 font-medium">"Da Nossa Família pra sua Família"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;