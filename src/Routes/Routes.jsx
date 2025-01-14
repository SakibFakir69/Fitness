import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";




export const route =createBrowserRouter([

    {
        path: '/',
        element : <MainLayouts/>,
        children:[
            {
                path:'/',
                element : <h1>Ohh</h1>
            }
        ]
    }




])