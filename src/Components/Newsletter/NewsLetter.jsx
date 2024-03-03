const NewsLetter = () => {
  return (
    <div
      className="min-h-[430px] flex items-center justify-center "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/v3h88Cy/photo-1629968417850-3505f5180761.jpg)",
      }}
    >
      <div className="md:w-1/2 px-4 md:px-0 mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Subscribe to Our NewsLetter
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          delectus odit aut quidem perferendis facere, fugit iusto laborum
          aperiam blanditiis, qui quasi molestiae in porro assumenda recusandae,
          consequatur officia.
        </p>
        <div className=" md:flex space-y-3 md:space-y-0 justify-center items-center">
          <input
            className="py-3 text-gray-400 px-5 rounded-3xl bg-[#FFF]"
            type="Your Email"
          />
          <input
            className="py-3 px-5 rounded-3xl bg-[#F42643] text-white font-semibold text-lg"
            type="button"
            value="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
