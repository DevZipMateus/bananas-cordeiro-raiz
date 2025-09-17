// Componente removido já que agora usaremos vídeo

const Historia = () => {
  return (
    <section id="historia" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Nossa história
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Uma jornada de três décadas dedicada à excelência
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">Os primeiros passos (1994)</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Nossa empresa foi fundada em 1994 com o plantio de banana branca e caturra. 
                  Na época, nosso pai Celso Cordeiro e nossa mãe Silvana Maia Cardoso vendiam 
                  banana somente em casa, até por volta de 2000.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">O ponto de virada (2000)</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Quando o preço da venda na roça ficou muito baixo - chegamos a vender uma 
                  caixa de 20kg por 30 reais para não jogar no chão - foi quando o pai viu 
                  que assim não dava para continuar. Ele financiou um caminhão, montou uma 
                  câmara fria e foi tentando abrir uma praça devagar.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">Crescimento familiar</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Eu, Gislaine Cordeiro, e Jaqueline Cordeiro começamos com 12 anos a trabalhar 
                  com ele no caminhão, aprendendo de tudo um pouco desde o plantio até negociar 
                  com os clientes. Aos 15-16 anos já tocávamos as praças de mercados em 
                  Joinville e São Francisco.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">Nova geração (2020)</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Em 2020 fundamos uma sociedade entre Giza (filha), Dieferson (esposo), 
                  Jaque (filha), Ivan (esposo) e Tiago (filho). Em comum acordo, arrendamos 
                  toda a empresa do Celso (pai) e entramos para grandes empresas de 
                  supermercados como Bistek, Komprão, entre outros.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
              <video 
                src="/galeria/produzindo_o_melhor_pra_sua_familia_.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                aria-label="Vídeo produzindo o melhor para sua família"
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
              
              <div className="bg-gradient-to-r from-primary to-accent text-white p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Bananas Cordeiro hoje</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">R$ 9 MI</div>
                    <div className="text-xs sm:text-sm opacity-90">Faturamento anual</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">30+</div>
                    <div className="text-xs sm:text-sm opacity-90">Colaboradores</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">30 anos</div>
                    <div className="text-xs sm:text-sm opacity-90">De experiência</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">1994</div>
                    <div className="text-xs sm:text-sm opacity-90">Fundação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;