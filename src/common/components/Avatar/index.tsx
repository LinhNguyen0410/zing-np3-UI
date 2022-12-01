import React from "react";
import { CheckIcon } from "../../../assets/icons";
import Span from "../../Atomic/Span";
type Props = {
  srcAvt: string;
  name?: string;
  status?: string;
};
const Avatar = ({ srcAvt, name, status }: Props) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <div className="relative">
        <img className="w-9 h-9 rounded-full object-cover" src={srcAvt} alt={`${name} + ${status}`} />
        <div className="absolute -bottom-1 -right-1">
          <CheckIcon />
        </div>
      </div>
      <div className="account-wrap flex flex-col">
        <Span clazz="account-name text-sm capitalize" textContent={name} />
        <Span clazz="account-status  text-xs capitalize text-blue-500" textContent={status} />
      </div>
    </div>
  );
};

export default Avatar;
