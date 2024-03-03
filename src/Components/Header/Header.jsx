import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const Menu = (
    <>
      <NavLink>Home</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink>Menu</NavLink>
      <NavLink>Cart</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink>Login</NavLink>
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
      </div>
    </div>
  );
};

export default Header;
