import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentications/Login";
import Register from "../Components/Authentications/Register";
import AdminProfile from "../Components/Dashboard/Admin/AdminProfile";
import Alluser from "../Components/Dashboard/Admin/Alluser";
import MangeItem from "../Components/Dashboard/MangeItem/MangeItem";
import Error from "../Components/Error/Error";
import AddItem from "../Components/form/AddItem";
import UpdateItem from "../Components/form/UpdateItem";
import ContactPage from "../pages/ContactPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyCartPage from "../pages/Dashboard/MyCartPage";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserProfile from "../pages/Dashboard/UserHome/UserProfile";
import UserReservartion from "../pages/Dashboard/UserHome/UserReservartion";
import UserReview from "../pages/Dashboard/UserHome/UserReview";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";
import ShopPage from "../pages/ShopPage";
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <ShopPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
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
      {
        path: "mycart",
        element: <MyCartPage />,
      },
      {
        path: "adminhome",
        element: <AdminProfile />,
      },
      {
        path: "alluser",
        element: <Alluser />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
      {
        path: "manageitem",
        element: <MangeItem />,
      },
      {
        path: "/dashboard/updateitem/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/resturant/api/v1/fooditems/${params.id}`
          ),
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
