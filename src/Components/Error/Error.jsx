import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Recipe-Realm || Error Page</title>
      </Helmet>
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <img
            src="https://i.ibb.co/2F6jmmW/a87cd3cbf82a76241fa909a3cffde711.gif"
            alt=""
          />
          <NavLink to="/">
            <div className="bg-[#1F2937] mb-12 mx-auto w-48 text-lg text-white px-5 text-md space-x-2 font-medium py-3  border-0 rounded-md">
              <div className="flex items-center gap-3 justify-center">
                <span>Back to Home</span>
                <FaHome />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
