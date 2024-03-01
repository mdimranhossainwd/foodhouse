import { TbMessageCircle2Filled } from "react-icons/tb";
import SubHeading from "../../Shared/Heading/SubHeading";

const ContactForm = () => {
  return (
    <div className="container mx-auto pt-14">
      <div>
        <SubHeading subHeading="Send Us a Message" heading="Contact Form" />
      </div>

      <div className="bg-[#F3F3F3] px-10 py-14 my-16">
        <form className="">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-[#444]"
              >
                Your email *
              </label>
              <input
                type="email"
                id="email"
                className=" bg-white border  text-md rounded-lg text-md px-4 py-3 block w-full  dark:text-white "
                placeholder="Your Mail Address"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium  text-[#444]"
              >
                Your Name *
              </label>
              <input
                type="name"
                id="name"
                className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
                placeholder="You Name"
                required
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="Phone"
              className="block mb-2 text-lg font-medium  text-[#444]"
            >
              Phone No *
            </label>
            <input
              type="name"
              id="name"
              className="bg-white border text-md rounded-lg  block w-full px-4 py-3 "
              placeholder="Phone No"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-[#444]"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="8"
              className="block px-4 py-3 w-full text-md bg-gray-50 rounded-lg border "
              placeholder="Write Your Message Here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className=" px-4 py-2.5 flex justify-center items-center gap-2 text-lg bg-[#F42643] text-white font-semibold"
          >
            Send Message
            <TbMessageCircle2Filled />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
