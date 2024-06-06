import { useEffect } from 'react'

export const useLockBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    if (!isOpen) document.body.style.overflow = 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
}
