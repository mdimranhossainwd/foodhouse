import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentications/Login";
import Register from "../Components/Authentications/Register";
import Error from "../Components/Error/Error";
import ContactPage from "../pages/ContactPage";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";
import ShopPage from "../pages/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
