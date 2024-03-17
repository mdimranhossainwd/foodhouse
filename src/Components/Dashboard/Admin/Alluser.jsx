import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import SubHeading from "../../../Shared/Heading/SubHeading";
import useAxios from "../../../hooks/useAxios";

const Alluser = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const speceficUsers = async () => {
    const res = await axios.get("/user");
    return res;
  };
  const {
    data: usersInfo,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: speceficUsers,
  });

  return (
    <div>
      <SubHeading heading="Manage All Users" subHeading="How Many" />
      <div className="overflow-x-auto bg-white py-10 mr-8 px-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-pt font-semibold">
            Total Orders : {usersInfo?.data?.length}
          </h2>
          <h2 className="text-4xl font-pt font-semibold"></h2>
          <button className="text-white font-medium text-lg py-2 px-5 bg-[#F42643]">
            <NavLink to=""> Pay</NavLink>
          </button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#F42643] text-white rounded-xl">
            <tr className="text-xl font-pt">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {usersInfo?.data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="text-md font-semibold">{item.name}</td>
                <td className=" font-lobster text-lg">{item.mail}</td>
                <td>
                  <button className="p-4 transition text-lg rounded-md hover:bg-[#1F2937] hover:text-white">
                    <FaUsers />
                  </button>
                </td>
                <td>
                  <button className="p-4 transition rounded-md text-lg hover:bg-[#1F2937] hover:text-white">
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
