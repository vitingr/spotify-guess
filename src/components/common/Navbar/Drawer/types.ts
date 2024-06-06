export interface DrawerProps {
  children: React.ReactNode
  fullScreenOnMobile: boolean
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}
