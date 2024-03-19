import { useQuery } from "@tanstack/react-query";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import SubHeading from "../../../Shared/Heading/SubHeading";
import useAxios from "../../../hooks/useAxios";

const MangeItem = () => {
  const axios = useAxios();
  const getFoodItems = async () => {
    const res = await axios.get("/fooditems");
    return res;
  };

  const {
    data: foodInfo,
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["foodInfo"],
    queryFn: getFoodItems,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/fooditems/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div>
        <SubHeading heading="Manage All Items" subHeading="Hurry Up" />

        <div className="overflow-x-auto bg-white py-10 mr-8 mb-6 px-8">
          <div className="flex justify-between mb-6">
            <h2 className="text-4xl font-pt font-semibold">
              Total Items : {foodInfo?.data?.length}
            </h2>
          </div>

          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#F42643] text-white rounded-xl">
              <tr className="text-xl font-pt">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {foodInfo?.data?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className=" w-16 h-16 rounded-md">
                          <img
                            src={item.str_Thumb}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.str_Name}</td>
                  <td>$ {item.str_Prize}</td>
                  <th>
                    <NavLink to={`/dashboard/updateitem/${item._id}`}>
                      <button className="p-4 transition rounded-md text-lg hover:bg-[#1F2937] hover:text-white">
                        <AiTwotoneEdit />
                      </button>
                    </NavLink>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-4 transition rounded-md text-lg hover:bg-[#1F2937] hover:text-white"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MangeItem;
