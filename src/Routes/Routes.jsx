import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomeLayoutes from "../Layouts/HomeLayoutes";
import AccountLayouts from "../Layouts/AccountLayouts";
import Login from "../AccountPage/Login";
import Registation from "../AccountPage/Registation";




export const route =createBrowserRouter([

    {
        path: '/',
        element : <MainLayouts/>,
        children:[
            {
                path:'/',
                element : <HomeLayoutes/>
            },
      
        ]
    },
          // account page 
          {
            path :'accountpage',
            element : <AccountLayouts/>,
            children : [
                {
                    path : '/accountpage/login',
                    element : <Login/>,

                    
                },
                {
                    path :'/accountpage/registation',
                    element : <Registation/>
                }
            ]
        }




])