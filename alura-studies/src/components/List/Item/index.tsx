import IItemProps from '../../types/IItemProps';

import style from './Item.module.scss';


export default function Item (
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: IItemProps) {

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => {selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }}
    >
      <h3>{ tarefa }</h3>
      <span>{ tempo }</span>
    </li>
  )
}