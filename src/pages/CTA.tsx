import { ArrowRight } from "lucide-react";
import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-5 px-4 sm:scroll-mt-30 scroll-mt-100 mb-25"
    >
      {/* teste */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-12 md:p-16 text-center glow-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para sair do manual e{" "}
            <span className="gradient-text">automatizar</span> ?
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto mb-10">
            Deixe os processos manuais e repetitivos no passado. Fale conosco e
            descubra como podemos transformar sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="flex items-center justify-center"
              onClick={() => {
                UtilServices.getWhatsApp(
                  "5511933773522",
                  "Olá! Vim pelo site e gostaria de saber mais sobre as automações da KTechno.",
                );
              }}
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
