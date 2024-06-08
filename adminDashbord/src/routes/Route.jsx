import { createBrowserRouter } from "react-router-dom";
import AppLayOut from "./AppLayOut";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Profile from '../pages/profile/Profile';
import Orders from "../pages/orders/Order";
import Settings from "../pages/settings/Settings";
import Backups from "../pages/backups/Backups";
import Charts from "../pages/charts/Charts";
import Logs from "../pages/logs/Logs"

export const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayOut/>,
        children:[
            {
                index:true,element:<Home/>
            },
            {
                path:'/products',
                element:< Products/>
            },
            {
                path:'/users',
                element:<Users/>
            },{
                path:"/profile",
                element:<Profile/>
            },{
                path:"/orders",
                element:<Orders/>
            }
            ,{
                path:"/settings",
                element:<Settings/>
            }
            ,{
                path:"/backups",
                element:<Backups/>
            },{
                path:"/charts",
                element:<Charts/>
            },{
                path:"/logs",
                element:<Logs/>
            }

        ]
    }
])