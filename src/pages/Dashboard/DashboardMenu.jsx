import { FaCalendarAlt, FaHome, FaRegCreditCard } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import { MdOutlineCreditCard, MdOutlinePreview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import { Link, NavLink } from "react-router-dom";
import useRole from "../../hooks/useRole";
import AdminMenu from "./AdminMenu";

const DashboardMenu = () => {
  const [role] = useRole();
  console.log(role);

  const DashboardMenu = (
    <div className=" gap-5 grid grid-cols-1 ">
      {role === "admin" && <AdminMenu />}
      <NavLink
        to="/dashboard/userdashboard"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        {" "}
        <FaHome /> User Home
      </NavLink>
      <NavLink
        to="reservation"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <FaCalendarAlt /> Reservation
      </NavLink>
      <NavLink
        to="payment"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <FaRegCreditCard /> Payment
      </NavLink>
      <NavLink
        to="mycart"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <FiShoppingCart /> My Cart
      </NavLink>
      <NavLink
        to="userreview"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <MdOutlinePreview /> Add Review
      </NavLink>
      <NavLink
        to="paymenthistory"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <MdOutlineCreditCard /> Payment History
      </NavLink>
      <NavLink
        to="booking"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <TbBrandBooking /> My Booking
      </NavLink>
      <hr />

      <NavLink to="/" className="flex items-center gap-4 text-lg font-semibold">
        <FaHome /> Home
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        <IoMdMenu /> Menu
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        <FaCartShopping /> Shop
      </NavLink>
      <NavLink className="flex items-center gap-4 text-lg font-semibold">
        <IoMdMail /> Contact
      </NavLink>
    </div>
  );

  return (
    <div className="w-64 max-h-full bg-[#F42643] text-lg text-white">
      <Link>
        <h2 className=" font-lobster text-5xl py-8 text-center ">Resturant</h2>
        <hr />
      </Link>

      <ul className="menu p-4 gap-6 w-80 text-white font-medium min-h-full">
        {/* Sidebar content here */}
        {DashboardMenu}
      </ul>
    </div>
  );
};

export default DashboardMenu;
