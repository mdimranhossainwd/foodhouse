import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentications/Login";
import Register from "../Components/Authentications/Register";
import Error from "../Components/Error/Error";
import ContactPage from "../pages/ContactPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserProfile from "../pages/Dashboard/UserHome/UserProfile";
import UserReservartion from "../pages/Dashboard/UserHome/UserReservartion";
import UserReview from "../pages/Dashboard/UserHome/UserReview";
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
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/userdashboard",
        element: <UserProfile />,
      },
      {
        path: "reservation",
        element: <UserReservartion />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "userreview",
        element: <UserReview />,
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
