import MenuItem from "../../common/components/MenuItem";
import { playerHeight } from "../../common/utils/GlobalClass/globalClassStyles";
import Logo from "../../components/Logo";
import SidebarItem from "../../components/SidebarItem";
import { sidebarCustomize, sidebarLibrary, sidebarMenu } from "./data";

const SidebarSection = () => {
  const backgroundFirst = "#191b25";
  return (
    <div className={`bg-[#191b25] border-r border-zinc-500 w-[16%] h-[100%] pb-[90px] fixed overflow-y-scroll`}>
      <Logo />
      <SidebarItem title="Menu">
        <>
          {sidebarMenu.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarItem>
      <SidebarItem title="Library">
        <>
          {sidebarLibrary.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarItem>
      <SidebarItem title="Customize">
        <>
          {sidebarCustomize.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarItem>
    </div>
  );
};

export default SidebarSection;
