import Image from "next/image";
import { ScoreboardCardProps } from "./types";

export const ScoreboardCard: React.FC<ScoreboardCardProps> = ({user}) => {
  return (
    <article className="flex items-center w-full">
      <figure>
        <Image alt={`${user.username}-profile-picture`} src={user.picture} width={60} height={60} className="rounded-full selection:bg-transparent" />
      </figure>
      
    </article>
  )
}
