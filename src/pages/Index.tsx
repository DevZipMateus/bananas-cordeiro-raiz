import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/Galeria";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Historia />
        <Servicos />
        <Diferenciais />
        <Galeria />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
