import { NextPage } from 'next'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Highlight } from './components/Highlight'
import { ScoreBoard } from './components/Scoreboard'

const Page: NextPage = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      <ScoreBoard />
      <Highlight />
      <Features />
    </main>
  )
}

export default Page
