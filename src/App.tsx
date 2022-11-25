import "./App.css";
import Header from "./sections/Header";
import Sidebar from "./sections/Sidebar";

function App() {
  return (
    <div className="container w-[100%] flex">
      <div className="sidebar-layout w-[18%]">
        <Sidebar />
      </div>
      <div className="content-layout flex-1 bg-slate-500">
        <Header />
      </div>
    </div>
  );
}

export default App;
