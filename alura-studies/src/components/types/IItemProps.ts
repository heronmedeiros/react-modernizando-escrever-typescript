import ITfarefa from "./ITarefa";

interface IItemProps extends ITfarefa {
  selecionaTarefa: (tarefaSelectionada: ITfarefa) => void,
}

export default IItemProps;