import { useEffect, useState } from "react";

import { IStopwatch } from "../types/IStopwatch";

import Button from "../Button";
import Clock from "./Clock";
import { tempoParaSegundos } from "../../common/utils/time";

import style from './Stopwatch.module.scss'

const Stopwatch = ({ selecionado }: IStopwatch) => {
  const [tempo, setTempo] = useState<number>();//

  useEffect( () => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);



  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}

export default Stopwatch;