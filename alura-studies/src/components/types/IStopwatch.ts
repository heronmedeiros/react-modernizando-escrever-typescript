import ITarefa from "./ITarefa";

export interface IStopwatch {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}