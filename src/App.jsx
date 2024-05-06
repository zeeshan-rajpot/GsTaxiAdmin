import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ForgetPassword from "./Pages/ForgetPassword/index";
import Verification from "./Pages/Verification/Verification";
import Overview from "./Pages/Overview/overview";
import Users from "./Pages/Users/Users";
import Approve from "./Pages/Approve/Approve";
import Pending from "./Pages/Pending/Pending";
import Rates from "./Pages/Rates/Rates";
import Restaurant from "./Pages/Restaurant/Restaurant";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/forgetPassword",
      element: <ForgetPassword />,
    },
    {
      path: "/verification",
      element: <Verification />,
    },
    {
      path: "/resetPassword",
      element: <ResetPassword />,
    },
    {
      path: "/overview",
      element: <Overview />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/approve",
      element: <Approve />,
    },
    {
      path: "/pending",
      element: <Pending />,
    },
    {
      path: "/rates",
      element: <Rates />,
    },
    {
      path: "/restaurants",
      element: <Restaurant />,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
