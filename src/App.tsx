import "./App.css";
import Header from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import SidebarLeftSection from "./sections/SidebarLeftSection";
import SidebarRightSection from "./sections/SidebarRightSection";

function App() {
  return (
    <div className="w-[100%] flex select-none">
      <div className="sidebar-layout w-[16%]">
        <SidebarLeftSection />
      </div>
      <div className="content-layout flex-1 bg-slate-500">
        <Header />
        <div className="flex">
          <MainSection />
          <SidebarRightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
