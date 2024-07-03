
import images from "../../assets/images";
import "./homeRecipe.scss";
import { FaRegStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getMenu } from "../../srevices/apiMenu";

const HomeRecipe = () => {
  const navigate = useNavigate()
   // Queries
   const query = useQuery({ queryKey: ["menus"], queryFn: getMenu });

   // Mutations
   const mutation = useMutation({
     mutationFn: getMenu,
     onSuccess: () => {
       // Invalidate and refetch
       QueryClient.invalidateQueries({ queryKey: ["menus"] });
     },
   });
  return (
    <div className="container">
      <h2>Recents Recipes</h2>
      <div className="RecipeContainer">
        {query.data?.map(({_id,image,title}) => {
          return (
            <div className="recipeItems" key={_id}>
              <div className="recipeImg" onClick={()=>navigate(`recipeDetaill/${_id}`)}>
                <img src={`http://localhost:8000/${image}`}  alt="" />
                <p>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                </p>
              </div>
              <div className="slideInfo">
                <p>{title}</p>
                <p>
                  By <span> Ali</span> 10 minutes
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btnview">
        <button onClick={()=>navigate('recipes')}>View All</button>
      </div>
      <div className="clientContainer">
        <h3>What clients say?</h3>
        <div className="clientsOpinion">
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person5} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
          <div className="clientiInfo">
            <div className="clientImg">
              <img src={images.person2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur non fuga commodi repellat
              voluptates, quam at asperiores voluptate repellat distinctio
              impedit?
            </p>
            <h4>Ali</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipe;
