import ITfarefa from "./ITarefa"

interface IIListProps {
  tarefas: Array<ITfarefa>,
  selecionaTarefa: (tarefaSelectionada: ITfarefa) => void,
}

export default IIListProps;