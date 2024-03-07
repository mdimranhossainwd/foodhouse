import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
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
            <div className="w-full borderp-4 rounded-lg  sm:p-6 md:p-8 ">
              <form onSubmit={handleSignUp} className="space-y-6" action="#">
                <h5 className="text-4xl text-center font-bold text-[#151515] ">
                  Sign Up
                </h5>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-md font-medium text-[#151515]"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300  block w-full p-2.5 dark:placeholder-gray-400  py-3 px-4"
                    placeholder="Your Name"
                    required
                  />
                </div>
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
                  Sign Up
                </button>
                <div className="text-md text-center font-medium ">
                  <p className="text-md mb-3 text-[#F42643]">
                    Already registered ?
                    <NavLink to="/login" className="font-bold">
                      Go to Login
                    </NavLink>
                  </p>
                  <a href="#" className="text-[#444]">
                    Or sign Up with
                  </a>
                </div>
                <div className="flex items-center gap-8 text-2xl rounded-full py-4 text-center justify-center">
                  <FaFacebook />
                  <FaGoogle />
                  <FaGithub />
                </div>
              </form>
            </div>
            <div>
              <img
                className="w-full"
                src="https://i.ibb.co/QYJ9VqJ/834a67b7a18094ddfdacc50059f2e68c-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
