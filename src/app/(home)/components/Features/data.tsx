import { IoMdMusicalNote } from 'react-icons/io'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaRankingStar } from 'react-icons/fa6'

export const FEATURES_DATA = [
  {
    icon: 'music',
    title: 'Observe os Cartões de Músicas',
    content:
      'No início de cada rodada, haverá dois cartões exibindo músicas diferentes.'
  },
  {
    icon: 'people',
    title: 'Adivinhe a Quantidade de Ouvintes',
    content: 'Clique na música que acredita ter mais ouvintes.'
  },
  {
    icon: 'ranking',
    title: 'Avance ou Tente Novamente',
    content:
      'Se acertar, ganhe +1 ponto. Caso erre, jogue novamente para melhorar sua pontuação!'
  }
]

export const FEATURES_ICONS: any = {
  music: <IoMdMusicalNote size={56} className="green-icon" />,
  people: <FaPeopleGroup size={56} className="green-icon" />,
  ranking: <FaRankingStar size={56} className="green-icon" />
}
