import ITfarefa from "./ITarefa";

export interface IStopwatch {
  selecionado: ITfarefa | undefined,
  finalizarTarefa: () => void
}