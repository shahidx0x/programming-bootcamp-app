import MainLayout from "@/layouts/MainLayout";
import { EventDetails } from "@/pages/EventDetails";
import Home from "@/pages/Home";
import Payment from "@/pages/Payment";

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
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/event/details",
        element: <EventDetails />,
      },
      {
        path: "/payments",
        element: <Payment />,
      },
    ],
  },
]);
