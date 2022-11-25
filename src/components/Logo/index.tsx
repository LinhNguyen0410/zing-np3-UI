import React from "react";
import { RadioIcon } from "../../assets/icons";
import Span from "../../common/Atomic/Span";

const Logo = () => {
  return (
    <div className="flex gap-x-3 items-center pt-3">
      <RadioIcon />
      <Span textContent="ZingNP3" clazz="text-xl tracking-[.25em] font-bold text-zinc-500 " />
    </div>
  );
};
export default Logo;
