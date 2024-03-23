import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="space-y-4">
      <NavLink
        to="adminhome"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <FaCalendarAlt /> Admin Home
      </NavLink>
      <NavLink
        to="alluser"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <FaUsers /> All User
      </NavLink>
      <NavLink
        to="additem"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <GiForkKnifeSpoon /> Add Item
      </NavLink>
      <NavLink
        to="manageitem"
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-4 text-lg text-black font-semibold"
            : "flex items-center gap-4 text-lg font-semibold"
        }
      >
        <IoMenuOutline /> Manage Items
      </NavLink>
    </div>
  );
};

export default AdminMenu;
