import {
  FileText,
  Receipt,
  Truck,
  Search,
  Globe,
  Bot,
  Cog,
} from "lucide-react";
import IconPva from "../icons/IconPva";
import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";

const features = [
  {
    icon: FileText,
    title: "Automação EFD Contribuições",
    description:
      "Automatize a geração e validação do EFD Contribuições de forma rápida e precisa.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria sobre a automação do EFD Contribuições",
      );
    },
  },
  {
    icon: Receipt,
    title: "Receita BX",
    description:
      "Processamento automatizado e integração completa com Receita BX para sua operação fiscal.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de saber mais sobre a automação do Receita BX.",
      );
    },
  },
  {
    icon: Truck,
    title: "CTE - Conhecimento Transporte",
    description:
      "Automatização completa do Conhecimento de Transporte para sua logística.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de saber mais sobre a automação do CTE.",
      );
    },
  },
  {
    icon: Search,
    title: "Consulta Simples Nacional",
    description:
      "Consultas automatizadas ao Simples Nacional de forma rápida e eficiente.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de saber mais sobre a automação Consulta Simples Nacional.",
      );
    },
  },
  {
    icon: Bot,
    title: "RPAs",
    description:
      "Robotic Process Automation para automatizar tarefas repetitivas e aumentar a produtividade.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de saber mais sobre as automações de RPA",
      );
    },
  },
  {
    icon: Globe,
    title: "Landing Pages e Sites",
    description:
      "Criamos landing pages e sites personalizados para sua empresa alcançar mais clientes.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de informações sobre landing pages.",
      );
    },
  },
  {
    icon: Cog,
    title: "Automações em Geral",
    description:
      "Desenvolvemos automações personalizadas para qualquer processo da sua empresa.",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511964861193",
        "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
      );
    },
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-4 relative sm:scroll-mt-10 scroll-mt-80"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas de automação e desenvolvimento para
            atender às necessidades da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-light leading-relaxed mb-5">
                {feature.description}
              </p>
              <Button
                variant="sbmais"
                size="sbmais"
                className={`cursor-pointer`}
                onClick={feature.fn}
              >
                Saiba mais →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
