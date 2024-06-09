import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export interface getInterface {
  request?: Request
  params: Params
}

export interface PopupProps {
  children: React.ReactNode
  title: string
  description?: string
  showState: boolean
  setShowState(arg: boolean): void
  handleSubmit?: () => void
  showCloseButton?: boolean;
}

export interface UserProps {
  id: string
  username: string
  password: string
  email?: string | null
  picture: string
  backgroundColor: string
  createdAt: string
  updatedAt: string
  points: number
}

export interface NextPageDefaultProps {
  params: {
    locale: string
  }
}
