import "./App.css";
import Header from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import SidebarSection from "./sections/SidebarSection";

function App() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-[100%] flex select-none">
      <div className="sidebar-layout w-[16%]">
        <SidebarSection />
      </div>
      <div className="content-layout flex-1 bg-slate-500">
        <Header />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
