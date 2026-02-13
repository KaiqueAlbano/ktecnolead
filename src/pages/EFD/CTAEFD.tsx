import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import Button from "../../componentes/button/Button";
import UtilServices from "../../services/UtilServices";

const CTAEFD = () => {
  return (
    <section
      className="py-24 relative overflow-hidden flex items-center justify-center"
      id="contact"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-card via-card to-card/50 border border-border overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-[-2px] bg-gradient-to-r from-primary via-orange-glow to-primary rounded-3xl animate-spin-slow"
                style={{ animationDuration: "8s" }}
              />
              <div className="absolute inset-[1px] bg-card rounded-3xl" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-glow/10 rounded-full blur-2xl" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-float">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Comece Gratuitamente
                </span>
              </div>

              {/* Content */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para <span className="gradient-text">automatizar?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
                Fale com nossa equipe e descubra como transformar sua rotina
                fiscal em poucos cliques.
              </p>

              <Button
                size="xl"
                className="group/btn relative overflow-hidden"
                variant="whatsapp"
                onClick={() => {
                  UtilServices.getWhatsApp(
                    "5511933773522",
                    "Olá! Vim pelo site e tenho interesse em conhecer melhor a solução de automação para EFD-Contribuições.",
                  );
                }}
              >
                <div className="flex gap-5 items-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  <MessageCircle className="w-5 h-5" />
                  Conversar no WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Button>

              {/* Trust note */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Resposta em até 5 minutos
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Demonstração gratuita
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAEFD;
