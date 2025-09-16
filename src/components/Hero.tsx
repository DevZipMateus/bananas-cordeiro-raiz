import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('banana-container');
    if (!container) return;

    // Limpa bananas existentes
    container.innerHTML = '';
    
    const numeroDeBananas = 25; // Número de bananas caindo

    for (let i = 0; i < numeroDeBananas; i++) {
      // Cria um novo elemento div para a banana
      const banana = document.createElement('div');
      banana.className = 'absolute text-2xl md:text-3xl select-none z-0 animate-banana-fall';
      banana.innerHTML = '🍌';

      // Randomiza a posição horizontal
      banana.style.left = Math.random() * 95 + '%';

      // Randomiza o tamanho da banana
      const size = Math.random() * 1.5 + 1;
      banana.style.fontSize = size + 'rem';

      // Randomiza a duração da animação (velocidade de queda)
      banana.style.animationDuration = (Math.random() * 6 + 8) + 's'; // Entre 8s e 14s

      // Randomiza o atraso para o início da animação
      banana.style.animationDelay = Math.random() * 10 + 's';

      // Adiciona opacidade variada
      banana.style.opacity = (Math.random() * 0.4 + 0.3).toString(); // Entre 0.3 e 0.7

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
      {/* Background with gradient from sky blue to deeper blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600" />
      
      {/* Banana container for falling bananas */}
      <div id="banana-container" className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
        {/* Hero content with semi-transparent background */}
        <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
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