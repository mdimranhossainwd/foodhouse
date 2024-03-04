import React from "react";
import SubHeading from "../../Shared/Heading/SubHeading";

const WhyChoose = () => {
  return (
    <div className="container mx-auto">
      <SubHeading heading="Why Choose Us" subHeading="Try to Food" />

      <div className="grid grid-cols-1 items-center justify-center my-12 md:grid-cols-2 lg:grid-cols-3 overflow-x-hidden overflow-y-hidden gap-5 mt-12 ">
        <div className="space-y-6" data-aos="zoom-in-right">
          <div className="block md:flex items-center text-center md:text-left">
            <img
              src="https://i.ibb.co/4W6NpJh/Group-46-2.png"
              alt=""
              className="w-16 h-10 mb-4 md:mb-0 pr-5 mx-auto md:mx-0"
            />
            <div className="space-y-3">
              <span className="text-lg font-bold text-[#131313] ">
                Dedicated Team
              </span>
              <div className="w-1/5 mx-auto md:mx-0 h-[1px] bg-[#444]"></div>
              <p>
                Professional employees are there for you to pick the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>

          <div className="block md:flex items-center text-center md:text-left">
            <img
              src="https://i.ibb.co/DfGSJ9h/Group-46.png"
              alt=""
              className="w-16 h-10 pr-5 mb-4 md:mb-0 mx-auto md:mx-0"
            />
            <div className="space-y-3">
              <span className="text-lg font-bold text-[#131313]">
                Fresh is Best
              </span>
              <div className="w-1/5 mx-auto md:mx-0 h-[1px] bg-[#444]"></div>
              <p>
                Professional employees are there for you to pick the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>

          <div className="block md:flex items-center text-center md:text-left">
            <img
              src="https://i.ibb.co/DgJp6rp/Group-46-1.png"
              alt=""
              className="w-16 h-10 mb-4 md:0 pr-5 mx-auto md:mx-0"
            />
            <div className="space-y-4">
              <span className="text-lg font-bold text-[#131313]">
                Gift Certificates
              </span>
              <div className="w-1/5 mx-auto md:mx-0 h-[1px] bg-[#444]"></div>
              <p>
                Professional employees are there for you to pick the most
                amazing and fresh fruits.
              </p>
            </div>
          </div>
        </div>

        <div className="" data-aos="zoom-in">
          <img
            className="w-full"
            src="https://i.ibb.co/YT4Jb9G/landing-img.png"
            alt=""
          />
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <div className="">
            <div className="block md:flex-row-reverse md:flex items-center text-center md:text-right">
              <img
                src="https://i.ibb.co/4W6NpJh/Group-46-2.png"
                alt=""
                className="w-16 h-10 mb-4 md:mb-0 mx-auto md:mx-0"
              />
              <div className="space-y-4 mr-6">
                <h3 className="text-lg font-bold text-[#131313]">
                  Integrated Supplier
                </h3>
                <div className="w-24 mx-auto md:float-right md:mx-0 h-[1px] bg-[#444] "></div>

                <p className="md:float-right">
                  Professional employees are there for you to pick the most
                  amazing and fresh fruits.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block md:flex-row-reverse md:flex items-center text-center md:text-right">
              <img
                src="https://i.ibb.co/DfGSJ9h/Group-46.png"
                alt=""
                className="w-16 h-10 mb-4 md:mb-0 mx-auto md:mx-0"
              />
              <div className="space-y-4 mr-6">
                <h3 className="text-lg font-bold text-[#131313] ">
                  Sustainable Practice
                </h3>
                <div className="w-24 mx-auto md:float-right md:mx-0 h-[1px] bg-[#444]"></div>

                <p className="md:float-right">
                  Professional employees are there for you to pick the most
                  amazing and fresh fruits.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block md:flex-row-reverse md:flex items-center text-center md:text-right">
              <img
                src="https://i.ibb.co/DgJp6rp/Group-46-1.png"
                alt=""
                className="w-16 h-10 mb-4 md:mb-0 mx-auto md:mx-0"
              />
              <div className="space-y-4 mr-6">
                <h3 className="text-lg font-bold text-[#131313]">
                  The Benefits Only
                </h3>
                <div className="w-24 md:float-right mx-auto md:mx-0 h-[1px] bg-[#444]"></div>

                <p className="md:float-right">
                  Professional employees are there for you to pick the most
                  amazing and fresh fruits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
