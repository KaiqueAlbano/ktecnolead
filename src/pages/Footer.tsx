import IconKtech from "../icons/IconKtech";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    Endereço: ["Av. Vila Ema, 1899 São Paulo - SP, 03281-000"],
    Contato: ["+55 (11) 93377-3522"],
    Email: ["contato@ktechno.com.br"],
    Horário: ["Segunda a Sexta: 8h ás 18h. Suporte 24/7 para clientes"],
  };

  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <a href="#" className="flex items-center gap-2">
                <IconKtech width={50} height={50} />
              </a>
            </div>
            <p className="text-light text-sm leading-relaxed">
              Tecnologia com propósito Resultados reais.
            </p>
            <div className="flex gap-2 mt-5">
              {/* <a
                href="https://www.facebook.com/people/LM-Sa%C3%BAde/61584942600033/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-main transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.instagram.com/ktechno/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-main transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/kaiquealbano/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-main transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a className="text-light hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light text-sm">
            © 2024 Ktechno. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
