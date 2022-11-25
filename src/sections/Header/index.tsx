import React from "react";
import HeaderAuth from "../../components/HeaderSections/HeaderAuth";
import HeaderNavbar from "../../components/HeaderSections/HeaderNavbar";
import HeaderNotify from "../../components/HeaderSections/HeaderNotify";

const Header = () => {
  const backgroundSecond = "#000000cc";
  return (
    <div className={`header-wrapper bg-[${backgroundSecond}] h-20 flex items-center justify-between`}>
      <div className="header-left ml-12">
        <HeaderNavbar />
      </div>
      <div className="header-right flex gap-12 mr-12">
        <HeaderNotify />
        <HeaderAuth />
      </div>
    </div>
  );
};

export default Header;
