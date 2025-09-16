import { Award, Heart, Sprout, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Tradição familiar",
      description: "Três gerações dedicadas ao cultivo de bananas, com conhecimento passado de pai para filho."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Qualidade comprovada",
      description: "Faturamento de R$ 9 milhões anuais e parceria com grandes redes de supermercados."
    },
    {
      icon: <Sprout className="h-8 w-8 text-secondary" />,
      title: "Sustentabilidade",
      description: "Práticas agrícolas responsáveis com mínimo impacto ambiental e cuidado com a terra."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Equipe especializada",
      description: "Mais de 30 colaboradores entre funcionários e promotores, todos capacitados e experientes."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Por que escolher a Bananas Cordeiro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Décadas de experiência e compromisso com a qualidade nos tornam 
              referência no mercado de bananas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      {diferencial.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{diferencial.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    {diferencial.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary via-accent to-primary-glow text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Compromisso com a excelência</h3>
            <p className="text-lg mb-6 opacity-90">
              "Da nossa família para sua família" - esse é o nosso compromisso. 
              Tratamos cada produto com o mesmo cuidado que oferecemos à nossa própria família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold">30 anos</div>
                <div className="text-sm opacity-80">de tradição</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">R$ 9 MI</div>
                <div className="text-sm opacity-80">faturamento anual</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">qualidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;