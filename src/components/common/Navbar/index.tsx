import { NavbarDesktop } from './Desktop'
import { NavbarMobile } from './Mobile'

export const Navbar: React.FC = () => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  )
}
