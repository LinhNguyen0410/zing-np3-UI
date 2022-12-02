import React from "react";
import { playerHeight } from "../../common/utils/GlobalClass/globalClassStyles";

const Player = () => {
  return <div className={`w-[100%] h-[${playerHeight}px]  bg-slate-500 z-[9999999]`}></div>;
};

export default Player;
