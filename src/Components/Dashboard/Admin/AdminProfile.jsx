import { Helmet } from "react-helmet-async";
import { FaCreditCard } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RiHomeOfficeLine } from "react-icons/ri";

const AdminProfile = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Resipie-Realm || Dashboard-AdminProfile</title>
        </Helmet>
        <div className="bg-[#FDFDFD]">
          <div className="py-8">
            <h2 className="text-4xl font-lobster font-semibold">
              Hello, Wellcome Back !
            </h2>
          </div>

          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mr-4">
              <div className=" bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                <div className="flex justify-center py-12 items-center gap-4 text-white text-2xl">
                  <FaCreditCard />

                  <div className="pl-3">
                    <h3 className="text-3xl mb-3 font-bold">205</h3>
                    <span className="text-2xl ">Menu</span>
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                <div className="flex justify-center py-12 items-center gap-4 text-white text-2xl">
                  <IoIosPeople />

                  <div className="pl-3">
                    <h3 className="text-3xl mb-3 font-bold">1005</h3>
                    <span className="text-2xl ">Customer</span>
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

            <div className="md:flex my-10 gap-3 items-center justify-center"></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminProfile;
