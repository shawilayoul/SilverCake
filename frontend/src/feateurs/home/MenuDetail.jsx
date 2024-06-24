import { useNavigate, useParams } from "react-router-dom";
import "./singleMenu.scss";
import images from "../../assets/images";
import { getMenu } from "../../srevices/apiMenu";
import { useMutation, useQuery } from "@tanstack/react-query";

const MenuDetail = () => {
  const navigate = useNavigate();
  const { id: menuId } = useParams();
    // Queries
    const query = useQuery({ queryKey: ["menus"], queryFn: getMenu });

    // Mutations
    const mutation = useMutation({
      mutationFn: getMenu,
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["menus"] });
      },
    });
  const menu = query.data?.filter(({ _id }) => _id == menuId);
  
  return (
    <div className="singlMenuContainer">
      <div className="singlMTop">
        <img src={images.bgImage} alt="menu" />
        <div className="title">
          <h2>Our Shop</h2>
        </div>
      </div>
      <div className="menuItems">
        <div className="menuImg">
          <img src={`http://localhost:8000/${menu[0].image}`} alt="" />
        </div>
        <div className="menuInfo">
          <h3>{menu[0].title}</h3>
          <p>${menu[0].price}</p>
          <p>${menu[0].description}</p>
          <input type="number" defaultValue={0} />
          <button onClick={() => navigate(`#`)}>Add To Cart</button>
        </div>
      </div>
      <div className="relatedProduct">
      
      </div>
    </div>
  );
};

export default MenuDetail;
