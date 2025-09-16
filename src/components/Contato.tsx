import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone, Instagram } from "lucide-react";

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você da melhor forma
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Telefone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    (47) 99946-9355
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
                  >
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    bananascordeiro@gmail.com
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => window.open('mailto:bananascordeiro@gmail.com', '_blank')}
                  >
                    Enviar e-mail
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Endereço</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    José Julio Moreira, 3655
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Horário de funcionamento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    Segunda a sábado: 08h às 17h
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center space-x-2">
                    <Instagram className="h-5 w-5" />
                    <span>Redes sociais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.instagram.com/bananascordeiro?igsh=OHdkbjdtbmt1OXlq', '_blank')}
                  >
                    @bananascordeiro
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
                <p className="mb-6 opacity-90">
                  Entre em contato conosco e descubra como podemos fornecer 
                  bananas de qualidade superior para seu negócio.
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 py-3"
                  onClick={() => window.open('https://wa.me/5547999469355', '_blank')}
                >
                  Falar com especialista
                </Button>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Informações empresariais
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Razão Social:</strong> Bananas Cordeiro LTDA</p>
                  <p><strong>CNPJ:</strong> 59.960.265/0001-84</p>
                  <p><strong>Website:</strong> www.bananascordeiro.com.br</p>
                </div>
              </div>

              <div className="text-center p-6 border-2 border-dashed border-secondary rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  "Da Nossa Família pra sua Família"
                </h4>
                <p className="text-muted-foreground">
                  Tradição, qualidade e confiança em cada produto entregue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;