import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SubHeading from "../../Shared/Heading/SubHeading";
import useAxios from "../../hooks/useAxios";

const UpdateItem = () => {
  const item = useLoaderData();
  const axios = useAxios();
  const { _id, str_Name, str_Thumb, str_Introduction, str_Prize } = item || {};

  const updateItem = async (e) => {
    e.preventDefault();
    const form = e.target;

    const str_Name = form.name.value;
    const str_Thumb = form.img.value;
    const str_Introduction = form.message.value;
    const str_Prize = form.price.value;

    const menuItem = {
      str_Name,
      str_Thumb,
      str_Introduction,
      str_Prize,
    };

    const menuRes = await axios.patch(`/fooditems/${_id}`, menuItem);
    console.log(menuRes);
    if (menuRes.data.modifiedCount > 0) {
      // show success popup
      // reset();
      Swal.fire({
        title: `${str_Name}`,
        text: "Product is Updated to the menu",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>Recipe Relam || Update Item Page</title>
        </Helmet>
        <SubHeading heading="Update Item" />
        <div className="bg-[#F3F3F3] px-10 py-14 my-16">
          <form onSubmit={updateItem} className="">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-lg font-medium  text-[#444]"
                >
                  Recipe Name *
                </label>
                <input
                  type="name"
                  name="name"
                  defaultValue={str_Name}
                  className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
                  placeholder="Recipe Name"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-lg font-medium  text-[#444]"
                >
                  Recipe Image *
                </label>
                <input
                  type="name"
                  name="img"
                  defaultValue={str_Thumb}
                  className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
                  placeholder="Recipe Img Link Here"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-medium text-[#444]"
                >
                  Category *
                </label>
                <input
                  type="name"
                  name="category"
                  className=" bg-white border  text-md rounded-lg text-md px-4 py-3 block w-full  dark:text-white "
                  placeholder="Caregory"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="price"
                  className="block mb-2 text-lg font-medium  text-[#444]"
                >
                  Price *
                </label>
                <input
                  type="name"
                  defaultValue={str_Prize}
                  name="price"
                  className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
                  placeholder="Price"
                  required
                />
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-[#444]"
              >
                Recipe Details
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue={str_Introduction}
                rows="8"
                className="block px-4 py-3 w-full text-md bg-gray-50 rounded-lg border "
                placeholder="Write to Recipe Details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className=" px-5 py-2.5 flex justify-center mx-auto mt-14 items-center gap-2 text-lg bg-[#F42643] text-white font-semibold"
            >
              Update Recipe Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
