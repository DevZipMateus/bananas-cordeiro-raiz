import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Galeria = () => {
  const images = [
    {
      src: "/galeria/familia.jpg",
      alt: "Família Cordeiro",
      title: "Nossa Família"
    },
    {
      src: "/galeria/inauguracao_de_mais_um_parceiro_.jpg",
      alt: "Inauguração de parceiro",
      title: "Inauguração de Parceiro"
    },
    {
      src: "/galeria/mais_uma_inauguracao_do_grupo_koch..jpg",
      alt: "Inauguração do Grupo Koch",
      title: "Inauguração Grupo Koch"
    },
    {
      src: "/galeria/midia_5.jpg",
      alt: "Mídia da empresa",
      title: "Nossa Equipe"
    },
    {
      src: "/galeria/produtos_e_qualidade_e_sabor.jpg",
      alt: "Produtos e qualidade",
      title: "Produtos e Qualidade"
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa trajetória, nossa família e nossos parceiros através de momentos especiais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-video relative group">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <h3 className="text-white font-semibold text-lg text-center px-4">
                              {image.title}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/80 hover:bg-background border-border" />
            <CarouselNext className="bg-background/80 hover:bg-background border-border" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Galeria;