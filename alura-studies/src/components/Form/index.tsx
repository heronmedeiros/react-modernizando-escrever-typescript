import React from "react";
import Botao from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tafera"
            id="tafera"
            placeholder="O que você quer estudar?"
            required
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
            required
          />
          <Botao />
        </div>
      </form>
    )
  }
}

export default Form;