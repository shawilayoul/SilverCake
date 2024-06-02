import "./homemenu.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeMenuData } from "../../constants/data";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import CakeContext from "../../contexts/CakeContexts";

const HomeMenu = () => {
  const { updateCart} = useContext(CakeContext);
  const navigate = useNavigate();

  return (
    <div className="menuContainer">
      <div>
        <h2 style={{ color: "red" }}>Our Menu</h2>
      </div>
      <div className="menu">
          {homeMenuData.map(({ id, image, title, price }) => {
            return (
           
                <div className="slideItems" key={id}>
                  <div
                    className="slideImg"
                    onClick={() => navigate(`MenuDetail/${id}`)}
                  >
                    <img src={image} alt="" />
                  </div>
                  <div className="slideInfo">
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <button onClick={(e) => updateCart(e)}>Add To Cart</button>
                  </div>
                </div>
       
            );
          })}
      </div>
    </div>
  );
};

export default HomeMenu;
