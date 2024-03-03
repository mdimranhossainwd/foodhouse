import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import ContactPage from "../pages/ContactPage";
import HomePages from "../pages/HomePages";
import MainLayout from "../pages/MainLayout";

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
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
