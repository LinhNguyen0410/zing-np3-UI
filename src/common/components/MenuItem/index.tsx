import Span from "../../Atomic/Span";
import { hoverTextClass } from "../../utils/GlobalClass";
type Props = {
  content: string;
  children: JSX.Element;
};
const MenuItem = (props: Props) => {
  const { content, children } = props;
  return (
    <div className={`flex flex-row gap-x-4 font-extralight ${hoverTextClass} hover:border-r-2 hover:border-cyan-700`}>
      {children}
      <Span textContent={content} clazz="text-xs" />
    </div>
  );
};

export default MenuItem;
