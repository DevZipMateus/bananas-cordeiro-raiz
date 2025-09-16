import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Bananas Cordeiro" className="h-12 w-12" />
                <span className="font-bold text-xl">Bananas Cordeiro</span>
              </div>
              <p className="text-white/80 mb-4">
                Tradição familiar na produção de bananas de qualidade superior desde 1994. 
                Da nossa família para sua família, oferecemos frescor e excelência em cada produto.
              </p>
              <p className="text-secondary font-semibold">
                "Da Nossa Família pra sua Família"
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Links rápidos</h3>
              <nav className="space-y-2">
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Início
                </button>
                <button 
                  onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Nossa história
                </button>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5547999469355" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>(47) 99946-9355</span>
                </a>
                
                <a 
                  href="mailto:bananascordeiro@gmail.com"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>bananascordeiro@gmail.com</span>
                </a>
                
                <div className="flex items-start space-x-2 text-white/80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>José Julio Moreira, 3655</span>
                </div>
                
                <a 
                  href="https://www.instagram.com/bananascordeiro?igsh=OHdkbjdtbmt1OXlq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  <span>@bananascordeiro</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                <p>© 2024 Bananas Cordeiro LTDA. Todos os direitos reservados.</p>
                <p>CNPJ: 59.960.265/0001-84</p>
              </div>
              <div className="text-white/60 text-sm">
                <p>Horário: Segunda a sábado, 08h às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;