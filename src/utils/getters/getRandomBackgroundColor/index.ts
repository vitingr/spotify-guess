import { BACKGROUND_COLORS } from "./data"

export function getRandomBackgroundColor(): string {
  const randomIndex = Math.floor(Math.random() * BACKGROUND_COLORS.length)
  return BACKGROUND_COLORS[randomIndex]
}
