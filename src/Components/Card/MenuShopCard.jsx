const MenuShopCard = ({ menu }) => {
  const { _id, str_Name, str_Thumb, str_Introduction, str_Prize } = menu || {};
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

          <button className="bg-[#E8E8E8] px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#F42643] text-[#F42643] border-0 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuShopCard;
