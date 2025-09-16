import { Leaf, Package, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Componente removido já que agora usaremos vídeo

const Servicos = () => {
  const servicos = [
    {
      icon: <Leaf className="h-12 w-12 text-secondary" />,
      title: "Cultivo sustentável",
      description: "Plantamos e cuidamos da terra, oferecendo todo suprimento necessário para ter uma terra fértil com impacto ambiental mínimo."
    },
    {
      icon: <Package className="h-12 w-12 text-secondary" />,
      title: "Processamento",
      description: "Facilities modernas com câmara fria e controle de qualidade rigoroso para garantir o frescor dos produtos."
    },
    {
      icon: <Truck className="h-12 w-12 text-secondary" />,
      title: "Distribuição",
      description: "Distribuição para grandes redes de supermercados como Bistek, Komprão e outros parceiros comerciais."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Da plantação até sua mesa, oferecemos serviços completos de produção 
              e comercialização de bananas com qualidade garantida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {servicos.map((servico, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {servico.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{servico.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {servico.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Produção e comercialização de bananas
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Variedades:</strong> Banana branca e caturra, selecionadas 
                    por sua qualidade superior e sabor único
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Controle de qualidade:</strong> Processo rigoroso desde o 
                    plantio até a entrega, garantindo frescor e qualidade
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Logística especializada:</strong> Frota própria com câmaras 
                    frias para manter a qualidade durante o transporte
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Atendimento personalizado:</strong> Relacionamento próximo 
                    com clientes, oferecendo soluções sob medida
                  </p>
                </div>
              </div>
            </div>

            <div>
              <video 
                src="/galeria/midia_6.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                aria-label="Vídeo sobre nossos serviços"
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;