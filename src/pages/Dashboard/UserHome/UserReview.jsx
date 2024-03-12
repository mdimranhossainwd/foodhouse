import { FaStar } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import SubHeading from "../../../Shared/Heading/SubHeading";

const UserReview = () => {
  return (
    <div className="mx-10">
      <SubHeading heading="Give a Review" subHeading="Sharing is Caring!!!" />

      <div className="bg-[#F3F3F3] px-16 ">
        <div className="text-center py-14 space-y-6">
          <h2 className="text-4xl font-semibold">Rate US!</h2>
          <div className="text-2xl text-orange-500 flex items-center justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="" className="block font-bold mb-3">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              name="name"
              id="date"
              placeholder="Recipe you liked most"
              className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
            />
          </div>
          <div>
            <label htmlFor="" className="block font-bold mb-3">
              Do you have any suggestion for us?
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Sugggestion"
              className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
            />
          </div>
          <div>
            <label htmlFor="" className="block font-bold mb-3">
              Kindly express your care in a short way.
            </label>
            <textarea
              name="text"
              placeholder="Review in detail"
              id=""
              cols=""
              rows="07"
              className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
            ></textarea>
          </div>
        </form>
        <div className="pb-24">
          <button
            type="submit"
            className="bg-[#1F2937] flex items-center gap-3 mt-4 px-8 text-md space-x-2 font-medium py-3 text-white border-0 "
          >
            Send Review
            <IoIosRocket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
