import ITarefa from "./ITarefa";

interface IItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelectionada: ITarefa) => void,
}

export default IItemProps;