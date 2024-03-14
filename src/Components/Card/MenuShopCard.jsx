import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";

const MenuShopCard = ({ menu }) => {
  const { _id, str_Name, str_Thumb, str_Introduction, str_Prize } = menu || {};
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const handleAddtoCart = () => {
    console.log("User", user.email);
    if (user && user?.email) {
      const addItem = {
        menuID: _id,
        str_Name,
        email: user?.email,
        str_Thumb,
        str_Prize,
      };

      axios.post("/additem", addItem).then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            title: `${str_Name}`,
            text: "Food is Added to The Cart",
            icon: "success",
            showConfirmButton: false,
          });
        }
      });
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] border " data-aos="fade-up">
        <a href="#" className="">
          <img
            className="rounded-t-lg z-10 h-72 w-full"
            src={str_Thumb}
            alt=""
          />
        </a>

        <div className="p-5 text-center">
          <div className="flex justify-between items-center">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-[#151515] ">
                {str_Name}
              </h5>
            </a>
            <a href="#" className=" ">
              <h5 className="mb-2 text-md font-semibold tracking-tight text-[#151515] ">
                {str_Prize}
              </h5>
            </a>
          </div>

          <p className="mb-3 font-normal text-[#151515] ">{str_Introduction}</p>

          <button
            onClick={handleAddtoCart}
            className="bg-[#E8E8E8] hover:bg-[#F42643] px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#F42643] hover:border-[#fff] hover:text-white transition text-[#F42643] border-0 rounded-md"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuShopCard;
