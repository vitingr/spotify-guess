import { PICTURES } from "./data"

export function getRandomPicture(): string {
  const randomIndex = Math.floor(Math.random() * PICTURES.length)
  return PICTURES[randomIndex]
}
