import MainLayout from "@/layouts/MainLayout";
import Login from "@/shared/Login";
import Registration from "@/shared/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Not found 404</p>,
    children: [
      {
        path: "/",
        element: <p>home</p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
