import IIListProps from '../types/IListProps';

import Item from './Item';
import style from './List.module.scss';

function List({ tarefas, selecionaTarefa }: IIListProps) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map( (item) => (
          <Item
            key={item.id}
            {...item}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  )
}


export default List;