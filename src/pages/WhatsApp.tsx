import { MessageCircle } from "lucide-react";
import UtilServices from "../services/UtilServices";

const WhatsApp = () => {
  return (
    <a
      onClick={() => {
        UtilServices.getWhatsApp(
          "5511964861193",
          "Olá! Vim pelo site e gostaria de saber mais sobre as automações da KTechno.",
        );
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
