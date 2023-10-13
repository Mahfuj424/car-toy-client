import {
     createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToy from "../pages/AllToy/AllToy";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivetRoute from "../Component/PrivetRoute/PrivetRoute";
import EditToy from "../pages/EditToy/EditToy";
   

const Router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
               {
                    path: '/',
                    element: <Home/>
               },
               {
                    path: '/login',
                    element: <Login/>
               },
               {
                    path: '/register',
                    element: <Register/>
               },
               {
                    path: '/allToy',
                    element: <AllToy/>
               },
               {
                    path: '/myToy',
                    element: <MyToy/>
               },
               {
                    path: 'addToy',
                    element: <AddToy/>
               }, 
               {
                    path: 'toyDetails/:id',
                    element: <PrivetRoute><ToyDetails/></PrivetRoute>,
                    loader: ()=> fetch(`http://localhost:5000/allToy`)
               },
               {
                    path: 'updateToy/:id',
                    element: <EditToy />,
                    loader: ()=> fetch(`http://localhost:5000/allToy`)
               }
          ]
     }
])
     

export default Router;