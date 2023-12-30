import {createBrowserRouter} from "react-router-dom"
import Layout from "../Layout/layout"
import HomeScreen from "../Pages/HomeScreen"
import AuthLayout from "../Layout/AuthLayout"
import Get_started from "../Auth/GetStarted"
import Register from "../Auth/Register"
import Login from "../Auth/Login"
import Verifys from "../Auth/Verify"
export const mainRouter = createBrowserRouter([
    {
        {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <HomeScreen />,
              },
            ],
          },
          {
            path: "/account",
            element: <AuthLayout />,
            children: [
              {
                path: "get_started",
                element: <Get_started />,
              },
              {
                path: "signup",
                index: true,
                element: <Register />,
              },
              {
                path: "signin",
                index: true,
                element: <Login />,
              },
              {
                path: "verify",
                index: true,
                element: <Verifys />,
              },
            ],
          },
    },
])