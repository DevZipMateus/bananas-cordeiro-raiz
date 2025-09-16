import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
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