import { MessageCircle } from "lucide-react";
import UtilServices from "../services/UtilServices";

type HeaderProps = {
  system: number;
};

const WhatsApp = ({ system }: HeaderProps) => {
  return (
    <a
      onClick={() => {
        if (system === 1) {
          UtilServices.getWhatsApp(
            "5511933773522",
            "Olá! Vim pelo site e tenho interesse em conhecer melhor as soluções de automação da KTechno.",
          );
        } else if (system === 2) {
          UtilServices.getWhatsApp(
            "5511933773522",
            "Olá! Vim pelo site e tenho interesse em conhecer melhor a solução de automação para EFD-Contribuições.",
          );
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};

export default WhatsApp;
