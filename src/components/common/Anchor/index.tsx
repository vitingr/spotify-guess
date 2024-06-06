import { AnchorCopy } from '@/src/types/AnchorCopy'
import Link from 'next/link'

export const Anchor: React.FC<AnchorCopy> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="px-6 transition-all duration-300 hover:brightness-105 text-center text-sm py-2 cursor-pointer max-w-[250px] text-white rounded-md bg-gradient-to-br from-green-600 via-green-600 to-green-500"
    >
      {label}
    </Link>
  )
}
