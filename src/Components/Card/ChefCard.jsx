import AOS from "aos";
import "aos/dist/aos.css";
const ChefCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 overflow-x-hidden overflow-y-hidden">
      <div className="bg-[#F3F3F3] border " data-aos="fade-up">
        <a href="#">
          <img
            className="rounded-t-lg h-72 w-full"
            src="https://i.ibb.co/FwN1GxN/a657a183f81d9637bd75e024112119a4.jpg"
            alt=""
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#151515] ">
              Food Salad
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#151515] ">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-[#E8E8E8] px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#F42643] text-[#F42643] border-0 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="bg-[#F3F3F3] border " data-aos="zoom-in">
        <a href="#">
          <img
            className="rounded-t-lg h-72 w-full"
            src="https://i.ibb.co/1vJ2wC0/52ef06ffac9d960b1014bbaa6152a902.jpg"
            alt=""
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#151515] ">
              Vegetables Salad
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#151515] ">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-[#E8E8E8] px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#F42643] text-[#F42643] border-0 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className=" bg-[#F3F3F3] border " data-aos="zoom-out">
        <a href="#">
          <img
            className="rounded-t-lg h-72 w-full"
            src="https://i.ibb.co/hc1FS3h/9e8450e037c353afd4bc2f3d8dacc854.jpg"
            alt=""
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#151515] ">
              Green Salad
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#151515] ">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="bg-[#E8E8E8] px-5 text-md space-x-2 font-medium py-3 border-b-4 border-[#F42643] text-[#F42643] border-0 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

AOS.init();

export default ChefCard;
