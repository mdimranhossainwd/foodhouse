import { GiForkKnifeSpoon } from "react-icons/gi";
import SubHeading from "../../Shared/Heading/SubHeading";
const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const message = form.message.value;

    const postAllVlue = { name, category, price, message };

    console.log(postAllVlue);
  };

  return (
    <div>
      <SubHeading heading="Add An Item" subHeading="What's New" />
      <div className="bg-[#F3F3F3] px-10 py-14 my-16">
        <form onSubmit={handleAddItem} className="">
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
              className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
              placeholder="Recipe Name"
              required
            />
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
              rows="8"
              className="block px-4 py-3 w-full text-md bg-gray-50 rounded-lg border "
              placeholder="Write to Recipe Details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className=" px-5 py-2.5 flex justify-center items-center gap-2 text-lg bg-[#F42643] text-white font-semibold"
          >
            Add Item
            <GiForkKnifeSpoon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
