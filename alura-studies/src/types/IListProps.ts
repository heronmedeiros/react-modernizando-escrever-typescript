import ITarefa from "./ITarefa"

interface IIListProps {
  tarefas: Array<ITarefa>,
  selecionaTarefa: (tarefaSelectionada: ITarefa) => void,
}

export default IIListProps;