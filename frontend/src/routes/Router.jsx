import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/aboutUs/About";
import Contact from "../pages/contact/Contact";
import AppLayOut from "../components/AppLayOut";
import Recipes from "../pages/recipes/Recipes";
import Blog from "../pages/blog/Blog";
import Shop from "../pages/shop/Shop";

import RecipeDetail from "../pages/recipes/RecipeDetail";
import HomeRecipeDetail from "../feateurs/home/HomeRecipeDetail";
import MenuDetail from "../feateurs/home/MenuDetail";
import Products from "../adminDashbord/pages/products/Products";
import ProductsLayOut from "../adminDashbord/routes/ProductsLayOut";
import AdminHome from "../adminDashbord/pages/home/AdminHome";
import Users from "../adminDashbord/pages/users/Users";
import Profile from "../adminDashbord/pages/profile/Profile";
import Order from "../adminDashbord/pages/orders/Order";
import Settings from "../adminDashbord/pages/settings/Settings";
import Backups from "../adminDashbord/pages/backups/Backups";
import Charts from "../adminDashbord/pages/charts/Charts";
import Logs from "../adminDashbord/pages/logs/Logs";

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
        element: <Recipes />,
      },
      {
        path: "cart/shop",
        element: <Shop />,
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
        path: "MenuDetail/:id",
        element: <MenuDetail />,
      },
      {
        path: "recipeDetaill/:id",
        element: <HomeRecipeDetail />,
      },
      {
        path: "recipes/recipeDetaill/:id",
        element: <RecipeDetail />,
      },
    ],
  },
  {
    path: "productsLayOut",
    element: <ProductsLayOut />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "backups",
        element: <Backups />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
    ],
  },
]);

export default router;
