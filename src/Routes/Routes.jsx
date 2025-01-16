import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomeLayoutes from "../Layouts/HomeLayoutes";
import AccountLayouts from "../Layouts/AccountLayouts";
import Login from "../AccountPage/Login";
import Registation from "../AccountPage/Registation";
import AllClass from "../Component/AllClass";
import ErrorPage from "@/Error/ErrorPage";
import AllTrainer from "@/Component/AllTrainer";
import AdminDashboard from "@/Admin/AdminDashboard";
import AllNewsletter from "@/Admin/AllNewsletter";
import AllTrainersAdmin from "@/Admin/AllTrainersAdmin";
import AppliedTrainer from "@/Admin/AppliedTrainer";
import BalanceAll from "@/Admin/BalanceAll";
import AddnewClass from "@/Admin/AddnewClass";
import TrainerDeatilsPage from "@/AllTrainerPage/TrainerDeatilsPage";
import BecomeATrainer from "@/AllTrainerPage/BecomeATrainer";
import TrainerBooked from "@/AllTrainerPage/TrainerBooked";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomeLayoutes />,
      },
      {
        path: "/allclass",
        element: <AllClass />,
      },{
        path:'/alltrainer',
        element: <AllTrainer/>
      },
      // trainer details
      {
        path :'/trainerDeatils/:id',
        element: <TrainerDeatilsPage/>
      },
      // become a trainer
      {
        path: '/becomeatrainer',
        element : <BecomeATrainer/>

      },
      {
        path :'/trainerbook',
        element: <TrainerBooked/>
      }
    ],
  },
  // account page
  {
    path: "accountpage",
    element: <AccountLayouts />,
    children: [
      {
        path: "/accountpage/login",
        element: <Login />,
      },
      {
        path: "/accountpage/registation",
        element: <Registation />,
      },
    ],
  },


  // admin section

  {
    path:'admindashboard',
    element: <AdminDashboard/>,
    children:[
      {
        path:'/admindashboard/allnewsletter',
        element : <AllNewsletter/>

      },
      {
        path:'/admindashboard/alltrainer',
        element : <AllTrainersAdmin/>
      },
      {
        path :'/admindashboard/appliedtrainer',
        element: <AppliedTrainer/>
      },
      {
        path : "/admindashboard/balanceall",
        element : <BalanceAll/>
      },
      {
        path:'/admindashboard/addnewclass',
        element : <AddnewClass/>
      }
    ]

  },
  {
    path:'*',
    element: <ErrorPage/>
  }
]);
