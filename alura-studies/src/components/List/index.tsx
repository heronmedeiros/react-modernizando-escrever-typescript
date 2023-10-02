import ITfarefa from '../../types/ITarefa';
import Item from './Item';
import style from './List.module.scss';


function List({ tarefas }: {tarefas: Array<ITfarefa> | []}) {


  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map( (item, index) => (
          <Item key={index} {...item} />// tarefa e tempo
        ))}
      </ul>
    </aside>
  )
}


export default List;