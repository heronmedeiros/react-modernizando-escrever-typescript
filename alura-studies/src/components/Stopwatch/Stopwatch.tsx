import { useEffect, useState } from "react";

import { IStopwatch } from "../types/IStopwatch";

import Button from "../Button";
import Clock from "./Clock";
import { tempoParaSegundos } from "../../common/utils/time";

import style from './Stopwatch.module.scss'

const Stopwatch = ({ selecionado, finalizarTarefa }: IStopwatch) => {
  const [tempo, setTempo] = useState<number>();

  useEffect( () => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const contagemRegressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return contagemRegressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button onClick={ () => contagemRegressiva(tempo) }>
        Começar!
      </Button>
    </div>
  )
}

export default Stopwatch;