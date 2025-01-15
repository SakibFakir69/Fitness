import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomeLayoutes from "../Layouts/HomeLayoutes";
import AccountLayouts from "../Layouts/AccountLayouts";
import Login from "../AccountPage/Login";
import Registation from "../AccountPage/Registation";
import AllClass from "../Component/AllClass";




export const route =createBrowserRouter([

    {
        path: '/',
        element : <MainLayouts/>,
        children:[
            {
                path:'/',
                element : <HomeLayoutes/>
            },
            {
                path:'/allclass',
                element : <AllClass/>
            }
      
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