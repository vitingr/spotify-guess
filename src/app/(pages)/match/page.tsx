import { NextPage } from 'next'
import { ChooseCard } from './components/ChooseCard'
import { getMetaData } from '@/src/utils/getters/getMetaData'

export async function generateMetadata() {
  return getMetaData({
    title: 'Spotify Guess - Partida',
    description:
      'Tente adivinhar qual música possui mais ouvintes, quanto mais pontos você fizer, melhor colocado você ficará no ranking da nossa plataforma!',
    image: '/opengraph/opengraph.png',
    type: 'website'
  })
}

const Page: NextPage = () => {
  return (
    <main className="w-full">
      <ChooseCard />
    </main>
  )
}

export default Page
