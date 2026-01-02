import { MessageCircle, Lightbulb, Rocket } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Entre em contato",
    description:
      "Fale conosco através dos nossos canais de atendimento. Estamos prontos para ouvir você.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Apresente seu problema",
    description:
      "Nos conte sobre os desafios e necessidades da sua empresa. Queremos entender seu contexto.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Receba sua solução",
    description:
      "Desenvolvemos e entregamos a solução personalizada ideal para resolver seu problema.",
    icon: Rocket,
  },
];

const Howitworks = () => {
  return (
    <section
      id="howitworks"
      className="py-5 px-4 relative sm:scroll-mt-30 scroll-mt-100"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Como Funciona
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Simples e <span className="gradient-text">direto ao ponto</span>
            </h2>
            <p className="text-light text-lg max-w-2xl mx-auto">
              Em apenas 3 passos, transformamos o seu problema em uma solução
              eficiente.
            </p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.25, // 👈 atraso progressivo
              }}
            >
              <div
                key={step.number}
                className="glass-card p-8 relative overflow-hidden group hover-lift text-center"
              >
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-[120px] font-bold text-primary/5 select-none">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
