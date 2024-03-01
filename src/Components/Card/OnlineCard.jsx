import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SubHeading from "../../Shared/Heading/SubHeading";
const OnlineCard = () => {
  return (
    <div className="container mx-auto mt-12">
      <SubHeading
        heading="Online Recipes"
        subHeading="From 11:00am to 10:00pm"
      ></SubHeading>
      <>
        <Swiper
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={15}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-8"
        >
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/Tbm8f8v/high-angle-hawaiian-dish-poke-bowl-with-chopped-tomato-radish-mango-with-tofu-cheese-chia-seeds-edam.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/y43ZdN9/DSCF2322.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/5snHBh4/crop-anonymous-male-with-ornamental-bowl-delicious-japanese-noodle-soup-with-chicken-fillet-slices-f.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/hm6XvQT/thai-food-tom-yum-seafood-seafood-spicy-soup-1150-38146.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/890wJ4Z/high-angle-bowl-noodles-with-other-asian-food-23-2148382872.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/Ytgy6Br/pagliatelle-with-meat-jte-table-140725-6761.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/nRrq8ff/turkish-beef-kebab-garnished-with-spicy-tomato-sauce-grilled-vegetables-141793-1968.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="h-[380px] w-[450px]"
                src="https://i.ibb.co/0fPHqWz/thanksgiving-dinner-assortment-table-23-2149055450.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default OnlineCard;
