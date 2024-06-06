import { HamburgerButtonProps } from './types'

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  variant
}) => {
  const genericHamburgerLine = `h-[2px] w-5 my-[2px] rounded-full transition ease transform duration-default ${
    variant === 'secondary' ? 'bg-slate-50' : 'bg-slate-700'
  }`

  return (
    <button
      className="group flex flex-col items-center justify-center rounded-sm p-2 duration-default"
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </button>
  )
}
