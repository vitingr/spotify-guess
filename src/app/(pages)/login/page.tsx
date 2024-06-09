import { NextPage } from 'next'
import { Header } from '../../(home)/components/Header'
import { Highlight } from '../../(home)/components/Highlight'
import { ScoreBoard } from '../../(home)/components/Scoreboard'
import { Features } from '../../(home)/components/Features'

const Page: NextPage = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <Highlight />
      <ScoreBoard />
      <Features />
    </main>
  )
}

export default Page
