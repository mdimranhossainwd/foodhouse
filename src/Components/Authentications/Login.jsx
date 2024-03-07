import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat px-6 md:px-0"
      style={{
        backgroundImage: "url(https://i.ibb.co/gwxz2ZS/Rectangle-75.png)",
      }}
    >
      <div className="container mx-auto">
        <div className="hero min-h-screen ">
          <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-5">
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/GnJBqgj/1811f344025539b7b4abb446eb6f910d-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="w-full borderp-4 rounded-lg  sm:p-6 md:p-8 ">
              <form onSubmit={handleLogin} className="space-y-6" action="#">
                <h5 className="text-4xl text-center font-bold text-[#151515] ">
                  Log In
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-md font-medium text-[#151515]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  block w-full p-2.5 dark:placeholder-gray-400  py-3 px-4"
                    placeholder="Your mail address here ...."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-medium text-[#151515]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  block w-full p-2.5 dark:placeholder-gray-400  py-3 px-4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#F42643] font-medium rounded-lg text-md px-5 py-4 text-center "
                >
                  Sign In
                </button>
                <div className="text-md text-center font-medium ">
                  <p className="text-md mb-3 text-[#F42643]">
                    New here?{" "}
                    <NavLink to="/register" className="font-bold">
                      Create a New Account
                    </NavLink>
                  </p>
                  <a href="#" className="text-[#444]">
                    Or sign in with
                  </a>
                </div>
                <div className="flex items-center gap-8 text-2xl rounded-full py-4 text-center justify-center">
                  <FaFacebook />
                  <FaGoogle />
                  <FaGithub />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
