import React from "react";
import { RadioIcon } from "../../assets/icons";
import Span from "../../common/Atomic/Span";

const Logo = () => {
  const clazz = "text-xl tracking-[.25em] font-bold";
  return (
    <div className="flex flex-col items-center justify-center pt-4 ">
      <Span textContent="Zing" clazz={`text-blue-500 ${clazz}`} />
      <div className="flex">
        <RadioIcon />
        <Span textContent="NP3" clazz={`text-zinc-500 mt-1 ml-2 ${clazz}`} />
      </div>
    </div>
  );
};
export default Logo;
