export const tempoParaSegundos = (tempo: string) => {
  const umaHoraEmSegundos = 3600;
  const umMinutoEmSegundos = 60;

  const [horas ='0', minutos ='0', segundos ='0'] = tempo.split(":");

  const horasEmSegundos = Number(horas) * umaHoraEmSegundos;
  const minutoEmSegundos = Number(minutos) * umMinutoEmSegundos;

  return horasEmSegundos + minutoEmSegundos + Number(segundos);
}

export const formataMinutosESegundos = (tempo: number) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = (tempo % 60);
  const [minDezena, minUnidade] = String(minutos).padStart(2, '0');
  const [segDezena, segUnidade] = String(segundos).padStart(2, '0');

  return {minDezena,
    minUnidade,
    segDezena,
    segUnidade
  };
}