import ITarefa from "./ITarefa";

interface IForm {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default IForm;