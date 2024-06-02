import { createBrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/aboutUs/About";
import Contact from "../pages/contact/Contact";
import AppLayOut from "../components/AppLayOut";
import Recipes from "../pages/recipes/Recipes";
import Blog from "../pages/blog/Blog";
import Shop from "../pages/shop/Shop";
import Cart from "../components/cart/Cart";
import RecipeDetail from "../pages/recipes/RecipeDetail";
import HomeRecipeDetail from "../feateurs/home/HomeRecipeDetail";
import MenuDetail from "../feateurs/home/MenuDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "recipes",
        element: <Recipes/>,
      },
      {
        path:"cart/shop",
        element:<Shop/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
      {
        path: "MenuDetail/:id",
        element: <MenuDetail/>,
      },
      {
        path:'recipeDetaill/:id',
        element:<HomeRecipeDetail/>
      },
      {
        path:'recipes/recipeDetaill/:id',
        element:<RecipeDetail/>
      }
    ],
  },
]);

export default router;
