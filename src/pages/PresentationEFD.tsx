import { useEffect } from "react";
import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";
import { Clock, ShieldCheck, Zap } from "lucide-react";

const PresentationEFD = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-slide-up">
            EFD-Contribuições{" "}
            <span className="gradient-text glow-text">100% Automatizado</span>
          </h1>

          {/* Subtitle */}
          <div className="flex justify-center">
            <p
              className="text-lg md:text-xl text-light max-w-xl mx-auto lg:mx-0 mb-12 animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              Transforme uma obrigação fiscal complexa em um processo simples,
              seguro e totalmente automático <br />
              Sem retrabalho, sem erros e sem perda de tempo.
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
                  "Olá! Vim pelo site e tenho interesse em conhecer melhor a solução de automação para EFD-Contribuições.",
                );
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Quick benefits row with stagger animation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-15">
            {[
              { icon: Clock, text: "Economize 40h/mês", delay: "100ms" },
              { icon: ShieldCheck, text: "Zero erros fiscais", delay: "200ms" },
              { icon: Zap, text: "Setup em 24h", delay: "300ms" },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default`}
                style={{ transitionDelay: benefit.delay }}
              >
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {benefit.text}
                </span>
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

export default PresentationEFD;
