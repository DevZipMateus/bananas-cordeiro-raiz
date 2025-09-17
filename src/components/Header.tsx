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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#0b2d14' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/logo.png" alt="Bananas Cordeiro" className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="font-bold text-base sm:text-xl text-white">Bananas Cordeiro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('historia')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Nossa história
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="outline"
              size="sm"
              className="hidden sm:flex text-white border-white hover:bg-white hover:text-[#0b2d14] text-sm px-3 py-2"
              onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
            >
              Fale conosco
            </Button>
            
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-left text-white hover:text-yellow-400 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('historia')} 
                className="text-left text-white hover:text-yellow-400 transition-colors"
              >
                Nossa história
              </button>
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="text-left text-white hover:text-yellow-400 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')} 
                className="text-left text-white hover:text-yellow-400 transition-colors"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-left text-white hover:text-yellow-400 transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="outline"
                className="w-full text-white border-white hover:bg-white hover:text-[#0b2d14]"
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