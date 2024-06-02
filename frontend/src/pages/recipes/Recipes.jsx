import images from "../../assets/images";
import "./recipes.scss";
import { FaRegStar } from "react-icons/fa";
import { RecipesData } from "../../constants/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [selectedCat, setSelectCat] = useState("");
  const navigate = useNavigate();

  //filter recipe by category or country
  const visibelCategory = selectedCat
    ? RecipesData.filter(
        (recipe) =>
          recipe.category === selectedCat ||
          recipe.categoryAll === selectedCat ||
          recipe.cuisine === selectedCat
      )
    : RecipesData;
  console.log(selectedCat);
  return (
    <div className="recipeContainer">
      <section className="recipeTop">
        <img src={images.bgImage} alt="blog" />
        <div className="title">
          <h2>Recipes</h2>
        </div>
      </section>
      <section className="recipeSearch">
        <div className="searchElement">
          <div className="searchOption">
            <select
              name=""
              id=""
              onChange={(e) => setSelectCat(e.target.value)}
            >
              <option value="All">All Category</option>
              <option value="chocolate">Chocolate</option>
              <option value="cupCake">Cupcake</option>
              <option value="pizzas">Pizzas</option>
            </select>
          </div>
          <div className="searchInpt">
            <input type="text" placeholder="Input ingredient here" />
          </div>
        </div>
        <div className="searchElement">
          <div className="searchOption">
            <select
              name=""
              id=""
              onChange={(e) => setSelectCat(e.target.value)}
            >
              <option value="All">All Recipe Cuisine</option>
              <option value="french">French Cuisine</option>
              <option value="indian">Indian Cuisine</option>
              <option value="italian">Italian Cuisine</option>
              <option value="spanish">Spanish Cuisine</option>
              <option value="vietnam">VietNam Cuisine</option>
            </select>
          </div>
          <div className="searchInpt">
            <input type="text" placeholder="Input Keyword here" />
          </div>
        </div>
        <div className="searchElement">
          <div className="searchOption">
            <select name="" id="">
              <option value="">Sort Recipe</option>
              <option value="">Title(ascending)</option>
              <option value="">Title (descending) </option>
              <option value="">Date(newest first)</option>
              <option value="">Date(oldest first)</option>
            </select>
          </div>
          <div className="btnSearch">
            <button>Search For Recipes</button>
          </div>
        </div>
      </section>
      <section className="allRecipes">
        <div className="title">
          <h2>All Recipes</h2>
        </div>
        <div className="recipesCategory">
          <div value="All" onClick={() => setSelectCat("All")}>
            All
          </div>
          <div value="chocalate" onClick={() => setSelectCat("chocolate")}>
            Chocolate
          </div>
          <div value="cupCake" onClick={() => setSelectCat("cupCake")}>
            Cupcake
          </div>
          <div option="pizzas" onClick={() => setSelectCat("pizzas")}>
            Pizzas
          </div>
        </div>
        <div className="RecipeItemsContainer">
          {visibelCategory.map(({ id, image, title, chesf, time }) => {
            return (
              <div className="recipeItems" key={id}>
                <div
                  className="recipeImg"
                  onClick={() => navigate(`recipeDetaill/${id}`)}
                >
                  <img
                    src={image}
                    alt="recipe"
                  />
                  <div>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
                <div className="slideInfo">
                  <p>{title}</p>
                  <p>
                    By <span>{chesf}</span> {time} minutes
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Recipes;
