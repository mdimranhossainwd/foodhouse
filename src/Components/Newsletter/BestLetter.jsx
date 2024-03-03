import React from "react";
import SubHeading from "../../Shared/Heading/SubHeading";

const BestLetter = () => {
  return (
    <div className=" bg-base-200 my-10">
      <div className="container mx-auto py-6">
        <SubHeading subHeading="Try to BestFood" heading="Best Foods" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          <div className="text-center px-4 md:px-0 lg:text-left">
            <h1 className="text-5xl font-bold">JALAPENO</h1>
            <p className="py-6">
              PThe different toppings and styles of pizza are endless. You can
              even explore different crust options like pretzel or stuffed. The
              different toppings and styles of pizza are endless. You can even
              explore different crust options like pretzel or stuffed. The
              different toppings and styles of pizza are endless. You can even
              explore different crust options like pretzel or stuffed.
            </p>
          </div>
          <div className=" w-3/4 mx-auto ">
            <img
              src="https://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/06/inner_pizza_10-640x640.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestLetter;
