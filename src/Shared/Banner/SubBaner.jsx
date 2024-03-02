import SubHeading from "../Heading/SubHeading";

const SubBaner = () => {
  return (
    <div
      className=" min-h-[620px] text-white bg-fixed my-12"
      style={{
        backgroundImage: "url(https://i.ibb.co/pPb9PhF/Rectangle-13.png)",
      }}
    >
      <div className="container mx-auto py-12">
        <SubHeading heading="From Our Menu" subHeading="Check it out" />

        <div className="flex items-center gap-4 px-24 mx-auto my-16">
          <img
            className="object-cover w-full h-72
           "
            src="https://i.ibb.co/y43ZdN9/DSCF2322.jpg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="3000"
          />
          <div
            className="pl-16 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
              WHERE CAN I GET SOME?
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#FFF] text-[#FFF] border-0 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBaner;
