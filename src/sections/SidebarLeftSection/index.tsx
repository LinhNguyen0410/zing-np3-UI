import MenuItem from "../../common/components/MenuItem";
import Logo from "../../components/Logo";
import SidebarLeftItem from "../../components/SidebarLeftItem";
import { sidebarCustomize, sidebarLibrary, sidebarMenu } from "./data";

const SidebarLeftSection = () => {
  const backgroundFirst = "#191b25";
  return (
    <div className={`bg-[#191b25] border-r border-zinc-500 h-[100%]`}>
      <Logo />
      <SidebarLeftItem title="Menu">
        <>
          {sidebarMenu.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarLeftItem>
      <SidebarLeftItem title="Library">
        <>
          {sidebarLibrary.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarLeftItem>
      <SidebarLeftItem title="Customize">
        <>
          {sidebarCustomize.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SidebarLeftItem>
    </div>
  );
};

export default SidebarLeftSection;
