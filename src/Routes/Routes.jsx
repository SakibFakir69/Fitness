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
import AppliedTrainerDetailsPage from "@/Admin/AppliedTrainerDetailsPage";
import AllUser from "@/Admin/AllUser";
import Payment from "@/PaymentPage/Payment";
import TrainerDashboard from "@/Trainer/TrainerDashboard";
import ManageSlot from "@/Trainer/ManageSlot";
import AddNewSlot from "@/Trainer/AddNewSlot";
import AddNewform from "@/Trainer/AddNewform";
import FormCommunity from "@/Component/FormCommunity";
import ProfilePage from "@/Component/ProfilePage";
import UserBookedTrainer from "@/Component/UserBookedTrainer";
import PrivateRoutes from "@/private/PrivateRoutes";
import AdminPrivateRoute from "@/Component/AdminPrivateRoute";
import TrainerPrivateRoute from "@/Component/TrainerPrivateRoute";

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
        element :<PrivateRoutes> <BecomeATrainer/></PrivateRoutes>

      },
      {
        path :'/trainerbook/:id',
        element: <PrivateRoutes><TrainerBooked/></PrivateRoutes>
      },

      // payment page 
      {
        path:'/payment',
        element: <PrivateRoutes><Payment/></PrivateRoutes>
      },
      {
        path:'/userbookedtrainer',
        element: <UserBookedTrainer/>
      },
      {
        path :"/formcomunity",
        element: <FormCommunity/>
      },
    
      {
        path:'/profile',
        element :<ProfilePage/>
    
      },
      
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
    element:  <AdminDashboard/>,
    children:[
      {
        path:'/admindashboard',
        element : <AllNewsletter/>

      },
      {
        path:'/admindashboard/alltrainer',
        element : <AllTrainersAdmin/>
      },
      {
        path :'/admindashboard/appliedtrainer',
        element: <PrivateRoutes><AppliedTrainer/></PrivateRoutes>
        // private 
      },
      {
        path : "/admindashboard/balanceall",
        element : <BalanceAll/>
      },
      {
        path:'/admindashboard/addnewclass',
        element : <AddnewClass/>
      },
      {
        path:'/admindashboard/appliedTrainerdetails/:id',
        element: <AppliedTrainerDetailsPage/>
      },
      {
        path :'/admindashboard/alluser',
        element: <AllUser/>
      },
      {
        path : '/admindashboard/addnewform',
        element: <AddNewform/>
      }
    ]

  },


  {
    path : 'trainerdashboard',
    element: <TrainerPrivateRoute> <TrainerDashboard/></TrainerPrivateRoute>,
    children:[
      {
        path :'/trainerdashboard/manageslot',
        element : <ManageSlot/>
      },
      {
        path :'/trainerdashboard/addnewslot',
        element: <AddNewSlot/>

      },
      {
        path : '/trainerdashboard/addnewform',
        element: <AddNewform/>
      }
    ]
  }

  ,
  // form couminity 

  // {
  //   path :"/formcomunity",
  //   element: <FormCommunity/>
  // },

  // {
  //   path:'/profile',
  //   element :<ProfilePage/>

  // },
  





  {
    path:'*',
    element: <ErrorPage/>
  }
]);
