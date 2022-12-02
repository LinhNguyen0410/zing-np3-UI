import { HEADER_ACTIOS_TYPE } from "../../../@types/enum";
import Span from "../../../common/Atomic/Span";
import { hoverTextClass } from "../../../common/utils/GlobalClass";

type Props = {
  type: HEADER_ACTIOS_TYPE;
  icon?: JSX.Element;
  numberOfNotify?: number;
  onClick: Function;
};
const HeaderActions = ({ type, numberOfNotify, icon, onClick }: Props) => {
  const handleHeaderActions = (type: HEADER_ACTIOS_TYPE) => {
    onClick(type);
  };
  return (
    <div className={`relative ${hoverTextClass} border rounded-full p-1.5`} onClick={() => handleHeaderActions(type)}>
      {icon}
      {numberOfNotify && (
        <Span clazz="notifi-total absolute -top-1.5 -right-2 text-blue-500 text-xs" textContent={numberOfNotify} />
      )}
    </div>
  );
};

export default HeaderActions;
