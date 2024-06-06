export interface MusicProps {
  name: string
  picture: string
  background: string
  music: {
    label: string
    href: string
  }
  listeners: number
  id: number
}

export interface MusicCardProps {
  musicCard: MusicProps
}
