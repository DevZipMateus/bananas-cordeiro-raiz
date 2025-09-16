import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('banana-container');
    if (!container) return;

    // Limpa bananas existentes
    container.innerHTML = '';
    
    const numeroDeBananas = 20; // Número de bananas caindo

    for (let i = 0; i < numeroDeBananas; i++) {
      // Cria um novo elemento div para a banana
      const banana = document.createElement('div');
      banana.className = 'absolute w-10 h-auto select-none z-0 animate-banana-fall';
      
      // Coloca a imagem SVG da banana dentro do elemento
      banana.innerHTML = `
        <svg viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <path d="M414.2 38.3c-3.3-3.2-8.5-3.1-11.7.2l-86.8 86.8c-11-4.2-22.9-6.3-35.3-6.3-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5c4.1 0 8.1-.2 12.1-.6l-37 37c-3.2 3.2-3.2 8.4 0 11.6l23.5 23.5c3.2 3.2 8.4 3.2 11.6 0l37-37c28.6 15.1 61.2 23.4 95.3 23.4 20.3 0 39.6-3.1 57.5-8.8 3.5-1.1 5.9-4.3 5.9-8V49.9c0-4.8-3.7-9-8.5-9.6zM280.4 324c-39.8 0-72.1-32.3-72.1-72.1s32.3-72.1 72.1-72.1 72.1 32.3 72.1 72.1-32.3 72.1-72.1 72.1z" fill="#ffda07"/>
        </svg>
      `;

      // Posição horizontal aleatória
      banana.style.left = Math.random() * 100 + 'vw';

      // Duração da animação aleatória (entre 5 e 10 segundos)
      banana.style.animationDuration = (Math.random() * 5 + 5) + 's';

      // Atraso para começar a animação (entre 0 e 5 segundos)
      banana.style.animationDelay = Math.random() * 5 + 's';

      // Tamanho aleatório (entre 50% e 120% do tamanho original)
      banana.style.transform = `scale(${Math.random() * 0.7 + 0.5})`;

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
      {/* Background with golden gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #fceabb 0%, #f8b500 100%)'
        }}
      />
      
      {/* Banana container for falling bananas */}
      <div id="banana-container" className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
        {/* Hero content with semi-transparent background */}
        <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
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