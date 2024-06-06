export const randomize = (array: any[]) => {
  const arrayEmbaralhado = array.slice();
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
  }
  if (arrayEmbaralhado) return arrayEmbaralhado.slice(0, 20);
}
