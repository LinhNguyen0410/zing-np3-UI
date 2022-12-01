import React from "react";
import Span from "../../Atomic/Span";
type Props = {
  title: string;
  children: JSX.Element;
};

const SectionsWrap = (props: Props) => {
  const { title, children } = props;
  return (
    <div className="p-10">
      <Span clazz="title-section uppercase tracking-[.25em] text-sm" textContent={title} />
      <div className="">{children}</div>
    </div>
  );
};

export default SectionsWrap;
