export const isValidCPF = async (cpf: string) => {
  if (cpf.length >= 14) {
    if (typeof cpf !== "string") return false
    const cpfFormated = cpf.replace(/[\s.-]*/igm, '')
    if (
      !cpfFormated ||
      cpfFormated.length !== 11 ||
      cpfFormated === "00000000000" ||
      cpfFormated === "11111111111" ||
      cpfFormated === "22222222222" ||
      cpfFormated === "33333333333" ||
      cpfFormated === "44444444444" ||
      cpfFormated === "55555555555" ||
      cpfFormated === "66666666666" ||
      cpfFormated === "77777777777" ||
      cpfFormated === "88888888888" ||
      cpfFormated === "99999999999"
    ) {
      return false
    }
    let soma = 0
    let resto: number
    for (let i = 1; i <= 9; i++)
      soma = soma + Number.parseInt(cpfFormated.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11)) resto = 0
    if (resto !== Number.parseInt(cpfFormated.substring(9, 10))) return false
    soma = 0
    for (let i = 1; i <= 10; i++)
      soma = soma + Number.parseInt(cpfFormated.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11)) resto = 0
    if (resto !== Number.parseInt(cpfFormated.substring(10, 11))) return false
    return true
  }
    return true
}