import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import ForgetPassword from "./ForgetPassword/index";
import Overview from "./Overview/overview";

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
      path: "/overview",
      element: <Overview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
