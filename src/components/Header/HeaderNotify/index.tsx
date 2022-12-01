import React from "react";
import { BellIcon } from "../../../assets/icons";
import Span from "../../../common/Atomic/Span";
import { hoverTextClass } from "../../../common/utils/GlobalClass";

type Props = {
  numberOfNotify: number;
};
const HeaderNotify = ({ numberOfNotify }: Props) => {
  return (
    <div className={`relative ${hoverTextClass} border rounded-full p-1.5`}>
      <BellIcon />
      <Span clazz="notifi-total absolute -top-1.5 -right-2 text-blue-500 text-xs" textContent={numberOfNotify} />
    </div>
  );
};

export default HeaderNotify;
