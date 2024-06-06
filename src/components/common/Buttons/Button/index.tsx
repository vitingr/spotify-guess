import { ButtonCopy } from "@/src/types/ButtonCopy"

export const Button: React.FC<ButtonCopy> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 transition-all duration-300 hover:brightness-105 text-sm py-2 cursor-pointer max-w-[250px] text-white rounded-md bg-gradient-to-br from-green-600 via-green-600 to-green-500"
    >
      {label}
    </button>
  )
}
