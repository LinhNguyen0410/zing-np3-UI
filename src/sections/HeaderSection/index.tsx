import React from "react";
import HeaderAuth from "../../components/Header/HeaderAuth";
import HeaderNavbar from "../../components/Header/HeaderNavbar";
import HeaderActions from "../../components/Header/HeaderActions";
import { BellIcon } from "../../assets/icons";
import { HEADER_ACTIOS_TYPE } from "../../@types/enum";
import ThemeIcon from "../../assets/icons/Theme";

const HeaderSection = () => {
  const backgroundSecond = "#081018";
  const handleHeaderActions = (type: HEADER_ACTIOS_TYPE) => {
    console.log(type);
  };
  return (
    <div className={`header-wrapper bg-[#081018] h-20 flex items-center justify-between border-b border-zinc-500`}>
      <div className="header-left ml-12">
        <HeaderNavbar />
      </div>
      <div className="header-right flex items-center  gap-8 mr-12">
        <div className="flex gap-4">
          <HeaderActions type={HEADER_ACTIOS_TYPE.THEME} icon={<ThemeIcon />} onClick={handleHeaderActions} />
          <HeaderActions
            type={HEADER_ACTIOS_TYPE.NOTIFY}
            numberOfNotify={3}
            icon={<BellIcon />}
            onClick={handleHeaderActions}
          />
        </div>
        <HeaderAuth />
      </div>
    </div>
  );
};

export default HeaderSection;
