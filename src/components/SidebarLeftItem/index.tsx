import Span from "../../common/Atomic/Span";

type Props = {
  title: string;
  children: JSX.Element;
};
const SidebarLeftItem = (props: Props) => {
  const { title, children } = props;

  return (
    <div className="mt-7 pb-7 pl-12 ">
      <Span textContent={title} clazz="uppercase tracking-[.2em]  text-sm" />
      <div className="mt-4 flex flex-col gap-y-3">{children}</div>
    </div>
  );
};

export default SidebarLeftItem;
