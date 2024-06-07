import { IoMdMusicalNote } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";

export const FEATURES_DATA = [
  {
    icon: "music",
    title: "Observe os Cartões de Músicas",
    content: "No início de cada rodada, haverá dois cartões exibindo músicas diferentes para você observar.",
  },
  {
    icon: "people",
    title: "Adivinhe a Quantidade de Ouvintes",
    content: "Com base nos seus conhecimentos musicais, clique na música que acredita ter mais ouvintes.",
  },
  {
    icon: "ranking",
    title: "Avance ou Tente Novamente",
    content: "Após sua escolha, acertando, ganhe pontos e avance. Errando, jogue novamente para melhorar sua pontuação!",
  },
]

export const FEATURES_ICONS: any = {
  music: <IoMdMusicalNote size={56} className="green-icon" />,
  people: <FaPeopleGroup size={56} className="green-icon" />,
  ranking: <FaRankingStar size={56} className="green-icon" />
}
