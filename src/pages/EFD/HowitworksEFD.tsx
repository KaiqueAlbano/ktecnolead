import { FileText, Cog, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Domínio Automatizado",
    description:
      "Nós acessamos o domínio automaticamente e cuidamos do download do arquivo EFD-Contribuições para você, sem complicação.",
    gifUrl: "/gifs/dominio_001.gif",
  },
  {
    icon: Cog,
    number: "02",
    title: "Regras Fiscais",
    description:
      "Algoritmos inteligentes aplicam automaticamente todas as regras do EFD-Contribuições, garantindo conformidade total com a legislação vigente.",
    gifUrl: "/gifs/regras_002.gif",
  },
  {
    icon: Send,
    number: "03",
    title: "Entrega Segura",
    description:
      "Validamos a EFD-Contribuições e cuidamos da entrega para você. Com notificações em tempo real, você fica tranquilo sabendo que tudo está sendo enviado corretamente.",
    gifUrl: "/gifs/efd_003.gif",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Recibo Validado",
    description:
      "Baixe seu recibo diretamente na nossa plataforma e tenha o acompanhamento em tempo real de cada etapa. Com a nossa solução, você tem total controle e transparência sobre o processo.",
    gifUrl: "/gifs/plataformarecibo_004.gif",
  },
];

const HowitworksEFD = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleSteps.includes(index)) {
            setVisibleSteps((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" },
    );

    stepsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section
      id="howitworks"
      className="py-5 px-4 relative sm:scroll-mt-30 scroll-mt-100"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-glow/5 rounded-full blur-3xl" />
      </div>

      <div>
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-up">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up-delay-1">
            Processo <span className="gradient-text">simplificado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-up-delay-2">
            De ponta a ponta, automatizado para você focar no que importa.
          </p>
        </div>

        {/* Spiral Process Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated vertical connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse-slow" />
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.includes(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  stepsRefs.current[index] = el;
                }}
                data-index={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 mb-20 last:mb-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible
                    ? `translateX(${isEven ? "-20px" : "20px"})`
                    : undefined,
                }}
              >
                {/* Step number badge - center on line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 hidden md:flex">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-500 hover:scale-110 hover:rotate-6 ${isVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"}`}
                  >
                    <span className="text-lg font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content wrapper - alternating sides */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-6 w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* GIF Container */}
                  <div
                    className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-orange-glow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* GIF frame */}
                      <div className="relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm p-1.5 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-[1.02]">
                        <div className="rounded-xl overflow-hidden relative">
                          <img
                            src={step.gifUrl}
                            alt={step.title}
                            className="w-full h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Mobile step number */}
                        <div className="absolute top-3 left-3 md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-glow flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-primary-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the center line */}
                  <div className="hidden md:block w-2/12" />

                  {/* Text Content */}
                  <div
                    className={`w-full md:w-5/12 ${isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"} text-center md:text-left`}
                  >
                    <div className="space-y-4">
                      {/* Icon and title */}
                      <div
                        className={`flex items-center gap-3 justify-center ${isEven ? "md:justify-start" : "md:justify-end md:flex-row-reverse"}`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110 group">
                          <step.icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-muted-foreground leading-relaxed ${isEven ? "" : "md:text-right"}`}
                      >
                        {step.description}
                      </p>

                      {/* Connector line to next step */}
                      {index < steps.length - 1 && (
                        <div
                          className={`hidden md:flex pt-4 items-center gap-2 ${isEven ? "" : "md:flex-row-reverse"}`}
                        >
                          <div className="flex items-center gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse"
                                style={{ animationDelay: `${i * 200}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowitworksEFD;
