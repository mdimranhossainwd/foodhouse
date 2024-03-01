import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TbClockHour1 } from "react-icons/tb";

import SubHeading from "../../Shared/Heading/SubHeading";
const ContactInfo = () => {
  return (
    <div className="container mx-auto mt-16">
      <SubHeading subHeading="Visit Us" heading="Our Location" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        <div className="border">
          <div className="bg-[#F42643] py-4 px-3 justify-center flex text-white text-xl">
            <FaPhoneVolume />
          </div>
          <div className="bg-[#F3F3F3] px-5 py-12 mx-8 mb-8 text-center">
            <h2 className="font-semibold text-lg">PHONE</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="border">
          <div className="bg-[#F42643] py-4 px-3 justify-center flex text-white text-xl">
            <IoLocationSharp />
          </div>
          <div className="bg-[#F3F3F3] px-5 py-12 mx-8 mb-8 text-center">
            <h2 className="font-semibold text-lg">ADDRESS</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="border">
          <div className="bg-[#F42643] py-4 px-3 justify-center flex text-white text-xl">
            <TbClockHour1 />
          </div>
          <div className="bg-[#F3F3F3] px-5 py-12 mx-8 mb-8 text-center">
            <h2 className="font-semibold text-lg">WORKING HOUR</h2>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
