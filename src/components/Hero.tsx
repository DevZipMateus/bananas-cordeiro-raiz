import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById('banana-gif-container');
    if (!container) return;

    const gifBananaURL = 'https://i.ibb.co/hK5X37M/pixel-banana.gif';
    const numeroDeBananas = 25;

    for (let i = 0; i < numeroDeBananas; i++) {
      const banana = document.createElement('img');
      banana.classList.add('banana-gif');
      banana.src = gifBananaURL;
      banana.alt = 'Banana Pixel Caindo';

      banana.style.left = Math.random() * 98 + 'vw';
      const randomSize = Math.random() * 30 + 40;
      banana.style.width = randomSize + 'px';
      banana.style.height = 'auto';

      banana.style.animationDuration = Math.random() * 4 + 6 + 's';
      banana.style.animationDelay = Math.random() * 8 + 's';

      container.appendChild(banana);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: 'url(https://i.ibb.co/k2L3x2F/3c118e7a0233a77b57c79d96f8fb6c22.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div id="banana-gif-container"></div>

      <div className="hero-content relative z-[3] bg-black/50 p-10 rounded-2xl border border-white/20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bananas Cordeiro
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Tradição familiar na produção de bananas de qualidade superior desde 1994. 
          Da nossa família para sua família, oferecemos frescor e excelência em cada produto.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 py-3"
            onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
          >
            Fale conosco
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary px-8 py-3"
            onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Nossa história
          </Button>
        </div>
        
        {/* Slogan */}
        <div className="mt-12">
          <p className="text-lg italic opacity-80">"Da Nossa Família pra sua Família"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;