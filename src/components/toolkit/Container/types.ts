import { HTMLProps, PropsWithChildren } from 'react'

type ClassName = HTMLProps<HTMLElement>['className']

export interface ContainerProps extends PropsWithChildren {
  as?: keyof JSX.IntrinsicElements
  className?: ClassName
  container?: 'fluid' | 'fixed'
  'data-cid': string
  noSidePadding?: boolean
  wrapperClassName?: ClassName
}
