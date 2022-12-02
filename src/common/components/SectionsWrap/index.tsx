import React from "react";
import { PlayIcon } from "../../../assets/icons";
import Span from "../../Atomic/Span";
import { hoverTextClass } from "../../utils/GlobalClass";
type Props = {
  heading?: string;
  title?: string;
  children: JSX.Element;
};

const SectionsWrap = (props: Props) => {
  const { title, children, heading } = props;
  return (
    <div className="p-10">
      {title && <Span clazz="uppercase tracking-[.25em] text-sm" textContent={title} />}
      {heading && (
        <div className={`flex ${hoverTextClass}`}>
          <Span clazz="text-2xl block mb-5 bold" textContent={heading} />
          <PlayIcon />
        </div>
      )}
      <div className="">{children}</div>
    </div>
  );
};

export default SectionsWrap;
