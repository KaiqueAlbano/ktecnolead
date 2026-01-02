import { Menu, X } from "lucide-react";
import { useState } from "react";
import IconKtech from "../icons/IconKtech";
import Button from "../componentes/button/Button";
import UtilServices from "../services/UtilServices";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Nosso Serviços", href: "services" },
    { label: "Como Funciona", href: "howitworks" },
    { label: "Avaliações", href: "testimonials" },
    { label: "Contato", href: "contact" },
  ];

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <IconKtech width={50} height={50} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="text-light hover:text-accent transition-colors duration-200 text-sm font-medium cursor-pointer"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-primary px-4 p-2 text-black text-main-foreground hover:bg-primary/90 hover:shadow-glow font-semibold text-[14px]"
              onClick={() => {
                UtilServices.getWhatsApp(
                  "5511964861193",
                  "Olá! Vim pelo site e gostaria de saber mais sobre as automações da KTechno.",
                );
              }}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-accent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 p-4 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="text-light hover:text-accent transition-colors duration-200 text-sm font-medium py-2 cursor-pointer"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-border" />
              <Button
                className="bg-primary px-4 p-2 text-black text-main-foreground hover:bg-primary/90 hover:shadow-glow font-semibold text-[14px]"
                onClick={() => {
                  UtilServices.getWhatsApp(
                    "5511964861193",
                    "Olá! Vim pelo site e gostaria de saber mais sobre as automações da KTechno.",
                  );
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
