import { Anchor } from "../Anchor";
import { Button } from "../Buttons/Button";
import Popup from "../Popup";
import { ShowDefeatPopupProps } from "./types";

export const ShowDefeatPopup: React.FC<ShowDefeatPopupProps> = ({ setShowDefeatPopup, showDefeatPopup, score, setScore }) => {
  return showDefeatPopup ? (
    <Popup description="Mas não se preocupe, você pode jogar denovo!" setShowState={setShowDefeatPopup} showState={showDefeatPopup} title="😭 Você perdeu...">
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="my-8">
          <span className="font-semibold text-lg lg:text-2xl">você teve <span className="text-green-500 text-lg lg:text-2xl">{score}</span> acertos!</span>
        </div>
        <Button label="Jogar novamente" onClick={() => setShowDefeatPopup(!showDefeatPopup)} className="w-full max-w-full" />
        <Anchor label="Ir para home" href="/" className="w-full max-w-full" />
      </div>
    </Popup>
  ) : null
}
