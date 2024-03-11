import { FaCreditCard } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineCreditCard, MdOutlinePreview } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <div className="py-8">
        <h2 className="text-4xl font-lobster font-semibold">
          Hello, Wellcome Back Again !
        </h2>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-4">
          <div className=" bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
            <div className="flex justify-center py-12 items-center gap-4 text-white text-2xl">
              <FaCreditCard />

              <div className="pl-3">
                <h3 className="text-3xl mb-3 font-bold">205</h3>
                <span className="text-2xl ">Menu</span>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
            <div className="flex justify-center py-12 items-center gap-4 text-white text-2xl">
              <RiHomeOfficeLine />

              <div className="pl-3">
                <h3 className="text-3xl mb-3 font-bold">105</h3>
                <span className="text-2xl ">Shop</span>
              </div>
            </div>
          </div>
          <div className="  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
            <div className="flex justify-center py-12 items-center gap-4 text-white text-2xl">
              <IoCallOutline />

              <div className="pl-3">
                <h3 className="text-3xl font-bold mb-3">11</h3>
                <span className="text-2xl ">Call</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex my-10 gap-3 items-center justify-center">
          <div className="bg-[#FFEDD5] w-1/2 text-center space-y-6 py-16">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-[#FE4880] ring-offset-[#FECDE9] ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h2 className="text-3xl font-semibold">John Doe</h2>
          </div>
          <div className="w-1/2 mr-4">
            <div className="bg-[#FEF9C3] py-14 pl-8 space-y-6">
              <h2 className="text-5xl font-semibold font-pt">
                Your Activities
              </h2>
              <div>
                <NavLink className="flex items-center gap-2 text-lg font-semibold">
                  {" "}
                  <FaCartShopping /> Orders : 18
                </NavLink>
                <NavLink className="flex items-center gap-2 text-lg font-semibold">
                  {" "}
                  <MdOutlinePreview /> Reviews : 11{" "}
                </NavLink>
                <NavLink className="flex items-center gap-2 text-lg font-semibold">
                  {" "}
                  <TbBrandBooking /> Booking : 5{" "}
                </NavLink>
                <NavLink className="flex items-center gap-2 text-lg font-semibold">
                  {" "}
                  <MdOutlineCreditCard /> Payments : 02
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
