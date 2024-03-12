import { Helmet } from "react-helmet-async";
import { FaRegBookmark } from "react-icons/fa";
import ContactInfo from "../../../Components/Contact/ContactInfo";
import SubHeading from "../../../Shared/Heading/SubHeading";
const UserReservartion = () => {
  return (
    <>
      <Helmet>
        <title>Resipie-Realm || Dashboard-Reservaraton</title>
      </Helmet>
      <div className="bg-[#FDFDFD]">
        <SubHeading heading="Book a Table" subHeading="Reservation" />

        <form className="space-y-6 my-16">
          <div className="grid grid-cols-3 gap-4 mx-10 items-center justify-center ">
            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Date *
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Time *
              </label>
              <input
                type="time"
                name="Time"
                id="date"
                className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Guest *
              </label>
              <input
                type="select"
                name="name"
                placeholder="1st Guest"
                id="name"
                className="bg-gray-50 border w-full border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>

            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Name *
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                id="name"
                className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone No"
                className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-bold mb-3">
                Email *
              </label>
              <input
                type="text"
                name="email"
                id="eamil"
                placeholder="Your Email "
                className="bg-gray-50 border w-full border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#1F2937] flex items-center gap-3 mt-4 px-8 text-md space-x-2 font-medium py-3 text-white border-0 "
            >
              More Details
              <FaRegBookmark />
            </button>
          </div>
        </form>
        <div className="mx-10">
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default UserReservartion;
