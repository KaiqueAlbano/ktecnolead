import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Eu tive uma experiência muito boa no desenvolvimento do meu site. Desde o começo, me senti ouvida e respeitada em cada ideia que apresentei. foi sempre muito atencioso, paciente e disponível, o que fez toda a diferença durante o processo.",
    author: "Rafaela",
    role: "CEO, Lm Saude",
    rating: 5,
  },
  {
    quote:
      "Empresa muito boa, criativa (soluções inovadoras para problemas existentes), cumpre prazos e um ótimo atendimento. Recomendo.",
    author: "Carlos Eduardo",
    role: "Controller, Motz",
    rating: 5,
  },
  {
    quote:
      "Empresa super cordial, transparente e com muita presteza. Com certeza indico!!",
    author: "Amanda",
    role: "Gerente Fiscal",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative sm:scroll-mt-30 scroll-mt-80"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
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
              Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O que nossos clientes <span className="gradient-text">dizem</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
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
                key={testimonial.author}
                className="glass-card p-8 hover-lift flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 leading-relaxed flex-1 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent2/30 flex items-center justify-center">
                    <span className="font-semibold">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-light text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
