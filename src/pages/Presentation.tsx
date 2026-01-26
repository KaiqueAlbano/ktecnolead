import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";
import ContadorDecimal from "../componentes/contador/Contador";

const Presentation = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 lg:mt-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--one-white)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--one-white)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="text-sm text-primary font-medium">
              Soluções personalizadas para sua empresa
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-slide-up">
            Tecnologia com propósito{" "}
            <span className="gradient-text glow-text">Resultados reais.</span>
          </h1>

          {/* Subtitle */}
          <div className="flex justify-center">
            <p
              className="text-lg md:text-xl text-light max-w-xl mx-auto lg:mx-0 mb-12 animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Os planos bem elaborados levam à fartura; mas o apressado sempre
              acaba na miséria.
              <br /> Provérbios 21:5
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button
              variant="default"
              size="xl"
              onClick={() => {
                UtilServices.getWhatsApp(
                  "5511933773522",
                  "Olá! Vim pelo site e gostaria de saber mais sobre as automações da KTechno.",
                );
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in justify-center max-w-2xl mx-auto"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { value: 100, label: "Foco no cliente", type: "%" },
              { value: 0, label: "Burocracia", type: "%" },
              { value: 24, label: "Tempo de resposta", type: "h" },
              { value: 0, label: "Promessas irreais", type: "%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  <ContadorDecimal alvo={stat.value} duracao={1000} casas={0} />
                  {""}
                  {stat.type}
                </div>
                <div className="text-light text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-light/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
