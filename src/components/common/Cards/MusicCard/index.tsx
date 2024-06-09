import Image from 'next/image'
import { MusicCardProps } from './types'

export const MusicCard: React.FC<MusicCardProps> = ({ musicCard }) => {
  return (
    <article className="animate__fadeIn animate__animated max-w-sm w-full h-[520px] flex flex-col items-center rounded-[2px] drop-shadow-2xl">
      <div className="rounded-sm h-full max-w-sm overflow-hidden relative cursor-pointer w-full bg-slate-800 group">
        <div
          className="w-full h-full absolute bg-cover bg-no-repeat transition-all duration-500 group-hover:brightness-110 group-hover:scale-110 cursor-pointer "
          style={{
            backgroundImage: `url("${musicCard.background}")`,
            backgroundPosition: 'center'
          }}
        />
        <article className="group h-full flex items-end z-20 relative text-white p-4">
          <div className="flex gap-3 items-center">
            <Image
              src={musicCard.picture}
              alt={musicCard.name}
              width={40}
              height={40}
              className="rounded-full "
            />
            <div className="w-full flex flex-col">
              <h2 className="text-white font-semibold text-left">
                {musicCard.music.label}
              </h2>
              <p className="text-white text-left text-xs">{musicCard.name}</p>
            </div>
          </div>
        </article>
        <div className="absolute -mt-[460px] h-full w-[384px] bg-gradient-to-t from-[#222224f5] to-transparent z-10" />
      </div>
    </article>
  )
}
