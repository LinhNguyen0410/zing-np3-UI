import MenuItem from "../../common/components/MenuItem";
import Logo from "../../components/Logo";
import SiderbarSection from "../../components/SidebarSection";
import { sidebarCustomize, sidebarLibrary, sidebarMenu } from "./data";

const Sidebar = () => {
  const backgroundFirst = "#1c1f36";
  return (
    <div className={`bg-[${backgroundFirst}] pl-12  top-0 border-r border-zinc-500`}>
      <Logo />
      <SiderbarSection title="Menu">
        <>
          {sidebarMenu.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SiderbarSection>
      <SiderbarSection title="Library">
        <>
          {sidebarLibrary.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SiderbarSection>
      <SiderbarSection title="Customize">
        <>
          {sidebarCustomize.map((item, idx) => (
            <MenuItem key={idx + item.text} content={item.text}>
              {item.icon}
            </MenuItem>
          ))}
        </>
      </SiderbarSection>
    </div>
  );
};

export default Sidebar;
