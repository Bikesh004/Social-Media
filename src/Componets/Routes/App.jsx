import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import CreatePost from "../CreatePost";
import PostList from "../PostList";
import { useState } from "react";
import PolistlistProvider from "../../Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [slectedTab, setSlectedTab] = useState("Home");
  return (
    <PolistlistProvider>
      <div className="app-container">
        <Sidebar
          slectedTab={slectedTab}
          setSlectedTab={setSlectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PolistlistProvider>
  );
}

export default App;
