import React, { useState } from "react";
import { BUTTON_SLIDE_ACTION } from "../../@types/enum";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import "./style.css";
type Props = {
  srcBanner: string;
  onClick: Function;
  animation: boolean;
};

const Banner = (props: Props) => {
  const { srcBanner, onClick, animation } = props;
  const clazzBtnAction = "bg-[#e7e7e74e] rounded-full p-2 cursor-pointer";
  const handleSwitchBanner = (action: string) => {
    onClick(action);
  };
  return (
    <div className={`banner-wrap flex items-center justify-center relative w-full ${animation ? `animation` : null}`}>
      <div
        className={`absolute left-16 ${clazzBtnAction}`}
        onClick={() => handleSwitchBanner(BUTTON_SLIDE_ACTION.PREVIOUS)}>
        <ChevronLeft width={8} height={8} />
      </div>
      <img className="rounded-[25px] h-60 w-[85%] object-cover" src={srcBanner} alt={srcBanner + Math.random()} />
      <div
        className={`absolute right-16 ${clazzBtnAction}`}
        onClick={() => handleSwitchBanner(BUTTON_SLIDE_ACTION.NEXT)}>
        <ChevronRight width={8} height={8} />
      </div>
    </div>
  );
};

export default Banner;
