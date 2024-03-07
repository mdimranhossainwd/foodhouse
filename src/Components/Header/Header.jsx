import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const Menu = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/service"
      >
        Services
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/shop"
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/cart"
      >
        Cart
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
        to="/contact"
      >
        Contact
      </NavLink>

      {user?.email ? (
        ""
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#F42643]" : "")}
          to="/login"
        >
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="container absolute top-0 left-0 right-0 mx-auto">
      <div className="navbar py-4 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" text-white mr-28 md:mr-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg gap-2 font-medium w-52"
            >
              {Menu}
            </ul>
          </div>
          <Link hrefLang="index.html">
            <img
              className="w-40 h-14 bg-cover"
              src="https://i.ibb.co/cTdQQc1/asian-logo-1024x291.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-lg gap-5 font-medium">
            {Menu}
          </ul>
        </div>

        <>
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end ml-12">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 text-white menu dropdown-content bg-[#3b4655]"
                >
                  <li>
                    <a>{user?.email}</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

export default Header;
