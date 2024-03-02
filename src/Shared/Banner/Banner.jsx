const Banner = () => {
  return (
    <div
      className="hero min-h-[590px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/vxJSXNx/photo-1488992783499-418eb1f62d08.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center text-neutral-content">
        <div className="max-w-[730px]">
          <h1 className="mb-5 text-5xl font-bold">Welcome To RecipeRealm</h1>
          <p className="mb-5">
            Indulge in our handcrafted dishes, meticulously prepared to
            tantalize your taste buds and ignite your senses. At FlavorFusion
            Kitchen, we blend diverse flavors from around the world to create a
            symphony of culinary delights. From mouthwatering appetizers to
            delectable main courses and irresistible desserts, our menu offers a
            fusion of innovation and tradition.
          </p>
        </div>
        <button className="bg-[#1F2937] px-5 text-md space-x-2 font-medium py-3 text-[#F42643] border-0 rounded-md">
          More Details{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
