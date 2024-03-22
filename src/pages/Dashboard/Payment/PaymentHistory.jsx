import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SubHeading from "../../../Shared/Heading/SubHeading";
import useAxios from "../../../hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const totalPayment = async () => {
    const res = await axios.get("/payment");
    return res;
  };

  const { data: payment, refetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: totalPayment,
  });

  console.log(payment);

  return (
    <div>
      <SubHeading heading="Payment History" subHeading="How Many" />
      <div className="overflow-x-auto bg-white py-10 mr-8 px-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-pt font-semibold">
            Total Payment : {payment?.data?.length}
          </h2>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#F42643] text-white rounded-xl">
            <tr className="text-xl font-pt">
              <th></th>
              <th>Email</th>
              <th>Category</th>
              <th>Total Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {payment?.data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td className="text-md font-semibold">{item.user}</td>
                <td className=" font-lobster text-lg">Food</td>
                <td className=" font-lobster text-lg">{item.str_Prize}</td>
                <td className=" font-lobster text-lg">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
