import "./menu.scss";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaClipboardList,
} from "react-icons/fa";
import { MdBackup } from "react-icons/md";
import { IoSettings, IoStatsChartSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { GoLog } from "react-icons/go";
const Menu = () => {
  return (
    <div className=" menu-container">
      <div className="menu-items">
        <h3>Main</h3>
        <div className="menu-item">
          <Link to="/" className="menu-list">
            <FaHome />
            <h4>HomePage</h4>
          </Link>
          <Link to="profile" className="menu-list">
            <FaUser />
            <h4>Profile</h4>
          </Link>
        </div>
        <h3>Lists</h3>
        <div className="menu-item">
            <Link to="users"  className="menu-list">
              <FaUserGroup />
              <h4>Users</h4>
            </Link>
            <Link to="products"  className="menu-list">
            <FaShoppingCart />
            <h4>Products</h4>
          </Link>
          <Link to="orders"  className="menu-list">
            <FaClipboardList />
            <h4>Orders</h4>
          </Link>
        </div>
        <h3>Maintenance</h3>
        <div className="menu-item">
        <Link to="settings"  className="menu-list">
            <IoSettings />
            <h4>Settings</h4>
          </Link>
          <Link to="backups"  className="menu-list">
            <MdBackup />
            <h4>Backups</h4>
          </Link>
        </div>
        <h3>Analytics</h3>
        <div className="menu-item">
        <Link to="charts"  className="menu-list">
            <IoStatsChartSharp />
            <h4>Charts</h4>
          </Link>
          <Link to="logs"  className="menu-list">
            <GoLog />
            <h4>Logs</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
