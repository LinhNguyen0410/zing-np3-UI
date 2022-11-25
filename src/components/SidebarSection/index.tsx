import Span from "../../common/Atomic/Span";

type Props = {
  title: string;
  children: JSX.Element;
};
const SiderbarSection = (props: Props) => {
  const { title, children } = props;

  return (
    <div className="mt-7 pb-7">
      <Span textContent={title} clazz="uppercase tracking-[.2em] text-neutral-400 text-sm" />
      <div className="mt-4 flex flex-col gap-y-3">{children}</div>
    </div>
  );
};

export default SiderbarSection;
