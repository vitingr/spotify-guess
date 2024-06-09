import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { PopupProps } from '@/src/types'

export default function Popup({
  children,
  title,
  description,
  showState,
  setShowState,
  handleSubmit,
  showCloseButton = true
}: PopupProps) {
  return (
    <div className={`popup-wrapper z-[999] ${showState ? 'block' : 'hidden'}`}>
      <div className="popup-glassmorphism">
        <div className="max-w-[500px] w-full p-10 bg-white rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="w-full text-2xl font-semibold">{title}</h1>
            {showCloseButton && (
              <IoCloseOutline
                size={25}
                className="cursor-pointer"
                onClick={() => {
                  setShowState(false)
                  if (handleSubmit) handleSubmit()
                }}
              />
            )}
          </div>
          {description && (
            <p className="text-[#626B7F] text-sm mt-2 mb-6">{description}</p>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
