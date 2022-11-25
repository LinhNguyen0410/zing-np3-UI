import React from "react";
import Span from "../../../common/Atomic/Span";
import { hoverTextClass } from "../../../common/utils/GlobalClass";
import { navbarData } from "./data";

const HeaderNavbar = () => {
  return (
    <div>
      <ul className="flex gap-8">
        {navbarData.map((item, idx) => (
          <li
            key={item.title + idx}
            className={`flex gap-2 items-center uppercase text-xs tracking-widest cursor-pointer ${hoverTextClass}`}>
            <Span textContent={item.title} clazz="" />
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderNavbar;
