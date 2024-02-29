import { NavLink } from "react-router-dom";

const Header = () => {
  const Menu = (
    <>
      <NavLink>Home</NavLink>

      <NavLink>About</NavLink>
      <NavLink>Menu</NavLink>
      <NavLink>Cart</NavLink>
      <NavLink>Services</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Login</NavLink>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 py-4 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <img
            className="w-40 h-14 bg-cover"
            src="https://i.ibb.co/cTdQQc1/asian-logo-1024x291.png"
            alt=""
          />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-5 font-medium">
            {Menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
