import Image from 'next/image'
import { ScoreboardCardProps } from './types'

export const ScoreboardCard: React.FC<ScoreboardCardProps> = ({
  user,
  index
}) => {
  return (
    <article className="gap-3 py-3 border-b border-slate-300 flex items-center w-full">
      <figure>
        <Image
          alt={`${user.username}-profile-picture`}
          src={user.picture}
          width={50}
          height={50}
          className="rounded-full selection:bg-transparent"
        />
      </figure>
      <div className="w-full flex-1">
        <p className="font-medium">{user.username}</p>
        <p className="text-slate-500">#{index + 1} no Ranking</p>
      </div>
      <p className="text-green-500 font-medium text-lg">{user.points} pontos</p>
    </article>
  )
}
