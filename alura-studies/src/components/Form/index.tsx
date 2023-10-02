import React from "react";
import Botao from "../Button";
import style from './Form.module.scss';
import ITfarefa from "../../types/ITarefa";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITfarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00:00"
  }
  addTask = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    this.props.setTarefas( tarefasAntigas => [
      ...tarefasAntigas,
      { ...this.state }
    ] )
    this.setState({
      tarefa: "",
      tempo: "00:00:00"
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tafera"
            id="tafera"
            placeholder="O que você quer estudar?"
            required
            value={this.state.tarefa}
            onChange={ event => this.setState({
              ...this.state, tarefa: event.target.value
            })}
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
            value={this.state.tempo}
            onChange={event => this.setState({
              ...this.state,
              tempo: event.target.value
            })}
            required
          />
          <Botao tipo="submit">
           Adicionar
          </Botao>
        </div>
      </form>
    )
  }
}

export default Form;