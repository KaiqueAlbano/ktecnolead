import { useEffect, useState } from "react";

type ContadorDecimalProps = {
  alvo: number;
  duracao?: number;
  casas?: number;
};
const ContadorDecimal = ({
  alvo,
  duracao = 1000,
  casas = 1,
}: ContadorDecimalProps) => {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const passos = 20;
    const incremento = alvo / passos;
    const intervalo = duracao / passos;

    let atual = 0;
    const timer = setInterval(() => {
      atual += incremento;
      if (atual >= alvo) {
        setValor(alvo);
        clearInterval(timer);
      } else {
        setValor(atual);
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, [alvo, duracao]);

  return <span>{valor.toFixed(casas)}</span>;
};

export default ContadorDecimal;
