export const rgMask = async (value: string) => {
  let rg = value

  rg=rg.replace(/\D/g,"");
  rg=rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
  return rg;
}