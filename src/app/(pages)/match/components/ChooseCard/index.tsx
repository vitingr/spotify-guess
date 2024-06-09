'use client'

import { MusicCard } from '@/src/components/common/Cards/MusicCard'
import { MusicProps } from '@/src/components/common/Cards/MusicCard/types'
import { ShowDefeatPopup } from '@/src/components/common/ShowDefeatPopup'
import { Container } from '@/src/components/toolkit/Container'
import { ARTISTS_DATA } from '@/src/constants/artists'
import { getUser } from '@/src/contexts/UserContext'
import { getUserByUsername } from '@/src/services/users/get'
import { updateUserScore } from '@/src/services/users/post'
import { UserProps } from '@/src/types'
import { randomize } from '@/src/utils/formatters/randomItem'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ChooseCard: React.FC = () => {
  const { userData, setUserData } = getUser()

  const [leftMusic, setLeftMusic] = useState<MusicProps>()
  const [rightMusic, setRightMusic] = useState<MusicProps>()
  const [score, setScore] = useState<number>(0)
  const [highestScore, setHighestScore] = useState<boolean>(false)

  const [showCheckmark, setShowCheckmark] = useState<boolean>(false)
  const [showDefeatPopup, setShowDefeatPopup] = useState<boolean>(false)

  const handleChooseMusic = async (palpite: number) => {
    const correctMusic =
      leftMusic!.listeners > rightMusic!.listeners ? leftMusic : rightMusic
    const selectedMusic = palpite === 0 ? leftMusic : rightMusic

    if (selectedMusic === correctMusic) {
      setShowCheckmark(true)
      setTimeout(() => setShowCheckmark(false), 1500)
      setScore(score + 1)
      setLeftMusic(rightMusic)
      await randomizeRightMusic()
    } else {
      if (userData) {
        if (userData.points < score) {
          setUserData((prevUserData: UserProps) => ({
            ...prevUserData,
            points: score
          }))
          await updateUserScore()
          setHighestScore(true)
        }
      }
      setShowDefeatPopup(!showDefeatPopup)
    }
  }

  const updateUserScore = async () => {
    try {
      const response = await fetch('/api/users/updateScore', {
          method: 'POST',
          body: JSON.stringify({
            userId: userData.id,
            score: score
          })
        })
    } catch (error) {
      console.error(error)
    }
  }

  const randomizeLeftMusic = async () => {
    setLeftMusic((await randomize(ARTISTS_DATA)?.[0]) ?? [])
  }

  const randomizeRightMusic = async () => {
    let newRightMusic: MusicProps

    do {
      newRightMusic = await randomize(ARTISTS_DATA)?.[0]
    } while (
      newRightMusic?.id === leftMusic?.id ||
      newRightMusic?.id === rightMusic?.id
    )

    setRightMusic(newRightMusic)
  }

  useEffect(() => {
    setScore(0)
    randomizeLeftMusic()
    randomizeRightMusic()
  }, [])

  return leftMusic && rightMusic ? (
    <>
      <Container
        as="section"
        data-cid="choose-card-menu"
        className="lg:px-12 lg:py-40 relative w-full flex flex-col items-center"
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
      <ShowDefeatPopup
        score={score}
        setScore={setScore}
        showDefeatPopup={showDefeatPopup}
        setShowDefeatPopup={setShowDefeatPopup}
        randomizeRightMusic={randomizeRightMusic}
        randomizeLeftMusic={randomizeLeftMusic}
        highestScore={highestScore}
        setHighestScore={setHighestScore}
      />
    </>
  ) : null
}
