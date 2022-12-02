import { PlayIcon } from "../../../assets/icons";
import { SONG_BLOCK_TYPE } from "../../../constant";
import Span from "../../Atomic/Span";
import { songBlockSquare } from "../../utils/GlobalClass";
import "./style.css";
import { useEffect } from "react";
import {
  hoverTextClass,
  songBlockRectangle,
  textPrimary,
  textSecondary,
} from "../../utils/GlobalClass/globalClassStyles";

type Props = {
  songImgSrc: string;
  songName: string;
  singerName: string;
  mode: string;
  orderlyNumber?: number;
};

const SongItem = (props: Props) => {
  const { songImgSrc, songName, singerName, mode, orderlyNumber } = props;
  const generateColor = () => {
    switch (orderlyNumber) {
      case 1:
        return "emerald-500";
      case 2:
        return "red-600";
      case 3:
        return "amber-400";
      default:
        return "white";
    }
  };
  return mode === SONG_BLOCK_TYPE.SQUARE ? (
    <div className={`${songBlockSquare}`}>
      <img src={songImgSrc} alt={songImgSrc} />
      <div className="flex flex-col gap-1 mt-4">
        <Span clazz={`${textPrimary} ${hoverTextClass}`} textContent={songName} />
        <Span clazz={textSecondary} textContent={singerName} />
      </div>
    </div>
  ) : (
    <div className={` w-[${orderlyNumber ? "450px" : "300px"}] ${songBlockRectangle}`}>
      {orderlyNumber && <Span clazz={`orderly-number text-${generateColor()}`} textContent={orderlyNumber} />}
      <img src={songImgSrc} alt={songImgSrc} className="w-[80px] object-contain rounded-lg" />
      <div className={`flex flex-col gap-1 w-[${orderlyNumber ? "400px" : "200px"}]`}>
        <Span clazz={`${textPrimary} ${hoverTextClass}`} textContent={songName} />
        <Span clazz={textSecondary} textContent={singerName} />
      </div>
      <div className="ml-[auto] pr-4 play-icon">
        <PlayIcon w={7} h={7} color={"blue"} />
      </div>
    </div>
  );
};

export default SongItem;
