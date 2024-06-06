'use client'

import { useState } from 'react'
import { HamburgerButton } from '../../HamburgerButton'
import MiniNavbar from '../MiniNavbar'


export const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <div className="ml-6">
      <HamburgerButton
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="primary"
      />


        {isSidebarOpen ? (
          <MiniNavbar setShowMenu={setIsSidebarOpen} showMenu={isSidebarOpen}  />
        ) : null}

    </div>
  )
}
