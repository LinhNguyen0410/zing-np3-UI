import React from "react";
import HeaderAuth from "../../components/Header/HeaderAuth";
import HeaderNavbar from "../../components/Header/HeaderNavbar";
import HeaderNotify from "../../components/Header/HeaderNotify";

const HeaderSection = () => {
  const backgroundSecond = "#081018";
  return (
    <div className={`header-wrapper bg-[#081018] h-20 flex items-center justify-between border-b border-zinc-500`}>
      <div className="header-left ml-12">
        <HeaderNavbar />
      </div>
      <div className="header-right flex items-center  gap-8 mr-12">
        <HeaderNotify numberOfNotify={3} />
        <HeaderAuth />
      </div>
    </div>
  );
};

export default HeaderSection;
