import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Menu from "../components/menu/Menu";
import './appLayOut.scss'
const AppLayOut = () => {
  return (
    <div className="appLayOut-container">
      <Header />
      <div className="main">
        <div className="main-menu">
          <Menu />
        </div>
        <div className="main-outlet">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayOut;
