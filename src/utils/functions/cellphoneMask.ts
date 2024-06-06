export const cellphoneMask = async (value: string) => {

  // Máscara de 9 dígitos + DDD
  if (!value) return ""

  const newValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2")

  return newValue
}