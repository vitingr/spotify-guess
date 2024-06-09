export const getDomain = (email: string) => {
  return email.substring(email.indexOf('@'))
}
