import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import CakeContext from "../../contexts/CakeContexts";
import "./header.scss";
const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();
  const { countProduct } = useContext(CakeContext);
  const menu = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "Blog",
      link: "blog",
    },
    {
      id: 3,
      name: "Recipes",
      link: "recipes",
    },
    {
      id: 4,
      name: "shop",
      link: "cart/shop",
    },
    {
      id: 5,
      name: "about",
      link: "About",
    },
    {
      id: 6,
      name: "contact",
      link: "Contact",
    },
  ];
  return (
    <nav className="headerContainer">
      <div className="appbar">
        {showBar ? (
          <IoClose onClick={() => setShowBar(!showBar)} />
        ) : (
          <IoMenu onClick={() => setShowBar(!showBar)} />
        )}

        <div className="mobilBar">
          {showBar && (
            <div className="menuLeft">
              <ul>
                {menu.map(({ id, name, link }) => (
                  <li key={id} onClick={() => setShowBar(!showBar)}>
                    <Link to={link} className="text-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="logo">
        <h2 onClick={() => navigate("/")}>
          Cake<span>Art</span>
        </h2>
      </div>
      <div className="menu">
        <div className="menuLeft">
          <ul>
            {menu.map(({ id, name, link }) => (
              <li onClick={() => setShowBar(!showBar)}>
                <Link to={link} className="text-link" key={id}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menuRight">
          <div className="searchBar">
            <FaSearch onClick={()=>setSearchBar(!searchBar)} />
            {
              searchBar &&
              <div className="searchModel">
              <input type="text" placeholder="search for a recipe" />
            </div>
            }
          
          </div>
          <div className="cart" onClick={() => navigate("cart")}>
            <GrCart />
            <span>{countProduct}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
