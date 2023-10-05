import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import ITarefa from '../components/types/ITarefa';

import style from './App.module.scss';
import { Stopwatch } from '../components/Stopwatch';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selectionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas( tarefasAnteriores => tarefasAnteriores.map( tarefa => ({
      ...tarefa,
      selecionado: (tarefa.id === tarefaSelecionada.id ? true : false)
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
        tarefas={tarefas}
        selecionaTarefa={selectionaTarefa}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
