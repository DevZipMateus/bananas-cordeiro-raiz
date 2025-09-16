import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('banana-container');
    if (!container) return;

    // Limpa bananas existentes
    container.innerHTML = '';
    
    const numeroDeBananas = 15; // Número de bananas caindo
    const gifBananaURL = 'https://media.tenor.com/images/73b4d4586d649ff5287f3b8a32a0c6ed/tenor.gif';

    for (let i = 0; i < numeroDeBananas; i++) {
      // Cria um novo elemento img para a banana GIF
      const banana = document.createElement('img');
      banana.className = 'absolute select-none z-0 animate-banana-gif-fall';
      banana.src = gifBananaURL;
      banana.alt = 'Banana Caindo';

      // Posição horizontal aleatória
      banana.style.left = Math.random() * 98 + 'vw';

      // Tamanho aleatório
      const randomSize = Math.random() * 50 + 60;
      banana.style.width = randomSize + 'px';
      banana.style.height = 'auto';

      // Duração da animação aleatória (entre 7 e 12 segundos)
      banana.style.animationDuration = (Math.random() * 5 + 7) + 's';

      // Atraso para começar a animação (entre 0 e 8 segundos)
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
      {/* Background with plantation image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/hero-bg.jpg)'
        }}
      />
      
      {/* Banana container for falling bananas */}
      <div id="banana-container" className="absolute inset-0 pointer-events-none z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white animate-fade-in-up">
        {/* Hero content with semi-transparent background */}
        <div className="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bananas Cordeiro
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Tradição familiar na produção de bananas de qualidade superior desde 1994. 
            Da nossa família para sua família, oferecemos frescor e excelência em cada produto.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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