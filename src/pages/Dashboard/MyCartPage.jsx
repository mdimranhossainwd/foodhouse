import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import SubHeading from "../../Shared/Heading/SubHeading";
import useAxios from "../../hooks/useAxios";
import useCarts from "../../hooks/useCarts";

const MyCartPage = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.str_Prize, 0);
  const parsePrice = Math.floor(totalPrice).toFixed(2);
  const axios = useAxios();

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
        axios.delete(`/additem/${id}`).then((res) => {
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
    <div>
      <SubHeading heading="Wanna Add More" subHeading="My Cart" />
      <div className="overflow-x-auto bg-white py-10 mr-8 px-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-pt font-semibold">
            Total Orders : {cart.length}
          </h2>
          <h2 className="text-4xl font-pt font-semibold">
            Total Price : {parsePrice}
          </h2>
          <button className="text-white font-medium text-lg py-2 px-5 bg-[#F42643]">
            <NavLink to="/dashboard/payment"> Pay</NavLink>
          </button>
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
            </tr>
          </thead>
          <tbody className="w-full">
            {cart.map((item, index) => (
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
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
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
  );
};

export default MyCartPage;
