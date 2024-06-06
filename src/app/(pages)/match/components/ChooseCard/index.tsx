'use client'


import { MusicCard } from '@/src/components/common/Cards/MusicCard'
import { MusicProps } from '@/src/components/common/Cards/MusicCard/types'
import { Container } from '@/src/components/toolkit/Container'
import { ARTISTS_DATA } from '@/src/constants/artists'
import { randomize } from '@/src/utils/functions/randomItem'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const ChooseCard: React.FC = () => {
  const [leftMusic, setLeftMusic] = useState<MusicProps>()
  const [rightMusic, setRightMusic] = useState<MusicProps>()
  const [score, setScore] = useState<number>(0)
  const [showCheckmark, setShowCheckmark] = useState<boolean>(false)

  const handleChooseMusic = (palpite: number) => {
    const correctMusic =
      leftMusic!.listeners > rightMusic!.listeners ? leftMusic : rightMusic
    const selectedMusic = palpite === 0 ? leftMusic : rightMusic

    if (selectedMusic === correctMusic) {
      setShowCheckmark(true)
      setTimeout(() => setShowCheckmark(false), 1500)
      setScore(score + 1)
      setLeftMusic(rightMusic)
      randomizeRightMusic()
    } else {
      toast.error('Você perdeu!')
      setScore(0)
    }
  }

  const randomizeLeftMusic = () => {
    setLeftMusic(randomize(ARTISTS_DATA)?.[0] ?? [])
  }

  const randomizeRightMusic = () => {
    let newRightMusic: MusicProps

    do {
      newRightMusic = randomize(ARTISTS_DATA)?.[0]
    } while (
      newRightMusic?.id === leftMusic?.id ||
      newRightMusic?.id === rightMusic?.id
    )

    setRightMusic(newRightMusic)
  }

  useEffect(() => {
    randomizeLeftMusic()
    randomizeRightMusic()
  }, [])

  return leftMusic && rightMusic ? (
    <Container
      as="section"
      data-cid="choose-card-menu"
      className="lg:pb-40 py-12 lg:px-12 p relative w-full flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-full flex gap-4 justify-between">
          <article className="flex flex-col items-center w-full gap-8">
            <button
              className="w-full flex flex-col items-center"
              onClick={() => handleChooseMusic(0)}
            >
              <MusicCard musicCard={leftMusic} />
            </button>
            <h2 className="font-semibold text-3xl text-slate-700">
              {leftMusic.listeners.toLocaleString()} ouvintes
            </h2>
          </article>
          <article className="w-full h-full min-h-[460px] flex gap-4 justify-center">
            <figure className="h-full min-h-[460px] justify-center flex gap-8 flex-col items-center relative">
              <h2 className="font-semibold text-xl lg:text-3xl text-slate-700">
                Score: {score}
              </h2>
              <Image
                src={'/svgs/lightVs.PNG'}
                alt="logo-higher-lower"
                width={140}
                height={140}
              />
              {showCheckmark ? (
                <Image
                  src={'/svgs/checkmark_green.PNG'}
                  alt="checkmark"
                  className="animate__fadeIn animate__animated animate__fadeOut"
                  width={40}
                  height={40}
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '45%',
                    transform: 'translate(-25%, -50%)'
                  }}
                />
              ) : null}
            </figure>
          </article>
          <article className="flex flex-col items-center w-full gap-8">
            <button
              className="w-full flex flex-col items-center"
              onClick={() => handleChooseMusic(1)}
            >
              <MusicCard musicCard={rightMusic} />
            </button>
          </article>
        </div>
      </div>
    </Container>
  ) : null
}
