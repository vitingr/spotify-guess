import { IoMdMusicalNote } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";

export const FEATURES_DATA = [
  {
    icon: "music",
    title: "Veja seus artistas",
    content: "Veja as músicas de seus artistas presentes no nosso game",
  },
  {
    icon: "people",
    title: "Desubra os ouvintes",
    content: "E descubra qual música possui a maior popularidade",
  },
  {
    icon: "ranking",
    title: "Ranking competitivo",
    content: "Dispute uma posição em nosso ranking com outras pessoas",
  },
]

export const FEATURES_ICONS: any = {
  music: <IoMdMusicalNote size={56} className="green-icon" />,
  people: <FaPeopleGroup size={56} className="green-icon" />,
  ranking: <FaRankingStar size={56} className="green-icon" />
}
