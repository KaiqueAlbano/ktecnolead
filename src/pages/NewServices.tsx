import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Receipt,
  Truck,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Search,
  Bot,
  Globe,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";
import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";
import { useNavigate } from "react-router-dom";

const NewServices = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const solutions = [
    {
      icon: FileText,
      title: "Automação de EFD",
      description:
        "Transforme a EFD-Contribuições em um processo 100% automatizado, preciso e em total conformidade com o SPED.",
      features: [
        "Geração automática via Domínio",
        "Validação automática no SPED",
        "Recibo disponível em tempo real",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-orange-500 to-amber-500",
      fn: () => {
        navigate("/automatizacao-efd-contribuicao");
      },
    },
    {
      icon: Receipt,
      title: "Receita BX",
      description:
        "Automatize receitas e baixas fiscais com integração direta à Receita Federal e controle total das informações.",
      features: [
        "Integração direta com Receita BX",
        "Processamento 100% automatizado",
        "Monitoramento em tempo real",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
    {
      icon: Truck,
      title: "Consulta CT-e",
      description:
        "Consulta de CT-e e eventos de desacordo, com mais de 100 mil requisições diárias e integração direta às APIs oficiais.",
      features: [
        "Consulta de CT-e em larga escala",
        "Registro e consulta de desacordo",
        "Integração direta às APIs oficiais",
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      color: "from-green-500 to-emerald-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
    {
      icon: Search,
      title: "Consulta Simples Nacional",
      description:
        "Alta performance em consultas ao Simples Nacional, com 100 mil+ requisições diárias e total eficiência operacional.",
      features: [
        "100 mil+ consultas diárias",
        "Processamento rápido e automatizado",
        "Integração direta ao Simples Nacional",
      ],
      image: "imgs/simplesnacional.png",
      color: "from-yellow-500 to-yellow-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
    {
      icon: Calculator,
      title: "IBS/CBS",
      description:
        "Sua empresa pronta para a Reforma Tributária com integração completa de IBS e CBS",
      features: [
        "Integração com IBS e CBS",
        "Adaptação automática às novas regras",
        "Atualizações conforme a legislação",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-purple-500 to-violet-500",
      fn: () => {
        window.open("https://fiscal.ktechno.com.br/#/ConsultaIbscbs", "_blank");
      },
    },
    {
      icon: Bot,
      title: "RPAs",
      description:
        "Robotic Process Automation para automatizar tarefas repetitivas e aumentar a produtividade.",
      features: [
        "Automação de tarefas repetitivas",
        "Execução 24/7 sem intervenção humana",
        "Aumento de produtividade operacional",
      ],
      image: "imgs/rpas.png",
      color: "from-orange-500 to-amber-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
    {
      icon: Globe,
      title: "Landing Pages e Sites",
      description:
        "Criação de landing pages e sites profissionais para impulsionar sua presença digital.",
      features: [
        "Design moderno e responsivo",
        "Desenvolvimento otimizado para SEO",
        "Integração com ferramentas de marketing",
      ],
      image: "imgs/landingpages.png",
      color: "from-blue-500 to-cyan-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
    {
      icon: MessageCircle,
      title: "Chat Bot",
      description:
        "Desenvolvimento de chatbots inteligentes para automatizar atendimentos e otimizar a comunicação com clientes.",
      features: [
        "Atendimento automatizado 24/7",
        "Respostas rápidas e personalizadas",
        "Integração com WhatsApp e sistemas internos",
      ],
      image: "imgs/chatbot.png",
      color: "from-green-500 to-emerald-500",
      fn: () => {
        UtilServices.getWhatsApp(
          "5511933773522",
          "Olá! Vim pelo site e gostaria de saber mais sobre automações em geral.",
        );
      },
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-32 relative overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tecnologia que <span className="text-gradient">transforma</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de automação fiscal para impulsionar seu negócio
            ao próximo nível
          </p>
        </motion.div>

        {/* Solutions Grid - Large Vertical Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                zIndex: 10,
              }}
              className="group cursor-pointer relative"
            >
              <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-glow">
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Floating Icon */}
                  <div
                    className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    onClick={solution.fn}
                  >
                    <div className="flex items-center justify-center gap-5">
                      <span>Saber mais</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-light mb-6">
            Não encontrou o que procura? Temos soluções personalizadas para o
            seu negócio.
          </p>
          <Button
            size="lg"
            className="group"
            onClick={() => {
              UtilServices.getWhatsApp(
                "5511933773522",
                "Olá! Vim pelo site e gostaria de saber mais sobre automações da ktechno.",
              );
            }}
          >
            <div className="flex items-center justify-center gap-5">
              Falar com especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewServices;
