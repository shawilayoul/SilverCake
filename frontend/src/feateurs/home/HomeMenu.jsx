import "./homemenu.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {CakeContext} from "../../contexts/CakeContexts";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getMenu } from "../../srevices/apiMenu";

const HomeMenu = () => {
  const { addOneToCart} = useContext(CakeContext);
  const navigate = useNavigate();
  // Queries
  const query = useQuery({ queryKey: ["menus"], queryFn: getMenu });

  // Mutations
useMutation({
    mutationFn: getMenu,
    onSuccess: () => {
      // Invalidate and refetch
      QueryClient.invalidateQueries({ queryKey: ["menus"] });
    },
  });
  return (
    <div className="menuContainer">
      <div>
        <h2 style={{ color: "red" }}>Our Menu</h2>
      </div>
      <div className="menu">
        {query.data?.map(({ _id, image, title, price }) => {
          return (
            <div className="slideItems" key={_id}>
              <div
                className="slideImg"
                onClick={() => navigate(`MenuDetail/${_id}`)}
              >
                <img src={`http://localhost:8000/${image}`} alt="" />
              </div>
              <div className="slideInfo">
                <h3>{title}</h3>
                <p>${price}</p>
                <button onClick={(e)=>addOneToCart(e,_id,image, title, price )}>Add To Cart </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMenu;
