import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Botao from "../Button";
import style from './Form.module.scss';
import IForm from "../types/IForm";

function Form ({ setTarefas } : IForm) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const addTask = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    setTarefas( tarefasAntigas => [
      ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4(),
        }
      ]
    )

      setTarefa("");
      setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tafera"
          id="tafera"
          placeholder="O que você quer estudar?"
          required
          value={tarefa}
          onChange={ event => setTarefa(event.target.value) }
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={tempo}
          onChange={ event => setTempo(event.target.value) }
          required
        />
        <Botao tipo="submit">
          Adicionar
        </Botao>
      </div>
    </form>
  )
}

export default Form;