import { formataMinutosESegundos } from '../../../common/utils/time';
import IClock from '../../types/IClock';
import style from './Clock.module.scss';

export default function Clock({ tempo = 0 }: IClock) {

  const {minDezena, minUnidade, segDezena, segUnidade} = formataMinutosESegundos(tempo)

  return (
    <>
      <span className={style.relogioNumero}>{minDezena}</span>
      <span className={style.relogioNumero}>{minUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segDezena}</span>
      <span className={style.relogioNumero}>{segUnidade}</span>
    </>
  )
}