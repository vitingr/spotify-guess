const getRandomString = () => Math.random().toString(36).substring(2) 

export function generateToken(length: number) {
  const token = getRandomString() + getRandomString()

  return token.substring(0, length)
}