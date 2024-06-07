import { Fragment } from 'react'

import { useLockBodyScroll } from '@/src/hooks/useLockBodyScroll'
import { Transition } from '@headlessui/react'
import { DrawerProps } from './types'

import { CgCloseR } from 'react-icons/cg'


export const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  setIsOpen,
  fullScreenOnMobile
}) => {
  const handleCloseDrawer = () => {
    setIsOpen(false)
  }

  useLockBodyScroll(isOpen)

  return (
    <Transition.Root show={isOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            (event.target as HTMLDivElement).id === 'side-menu-backdrop' &&
            handleCloseDrawer()
          }
          className="fixed left-0 top-0 z-10 h-screen w-screen bg-slate-900/40"
          id="side-menu-backdrop"
          tabIndex={-1}
        />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-full"
      >
        <div
          className={`drawer-toolkit fixed left-0 py-56 pr-88 w-full  overflow-hidden top-0 z-50 h-full min-w-80  bg-white shadow-xl ${
            fullScreenOnMobile ? 'w-full lg:w-auto' : ''
          }`}
        >

          {children}
        </div>
      </Transition.Child>
    </Transition.Root>
  )
}
