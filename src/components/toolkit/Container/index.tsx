import { createElement } from 'react'
import { ContainerProps } from './types'

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  wrapperClassName,
  'data-cid': dataCid,
  noSidePadding,
  container = 'fixed',
  as = 'div',
  ...props
}) => {
  return createElement(
    as,
    {
      className: `scroll-mt-[100px] ${
        noSidePadding ? '' : 'px-4'
      } ${wrapperClassName}`,
      'data-cid': dataCid,
      ...props
    },
    <div
      className={`${
        container === 'fixed' ? 'mx-auto max-w-2xl lg:max-w-[1520px]' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
