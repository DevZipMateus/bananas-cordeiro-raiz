import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Bananas Cordeiro" className="h-10 w-10" />
            <span className="font-bold text-xl text-primary">Bananas Cordeiro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('historia')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Nossa história
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              className="hidden sm:flex"
              onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
            >
              Fale conosco
            </Button>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('historia')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Nossa história
              </button>
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
              >
                Fale conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;