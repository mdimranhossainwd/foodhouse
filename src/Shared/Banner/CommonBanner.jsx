const CommonBanner = ({ bgImg, heading, description }) => {
  return (
    <div
      className="hero min-h-[520px]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="bg-black px-20 md:px-44 py-14 rounded-lg mt-6 opacity-50 text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-3xl md:text-4xl font-semibold uppercase">
            {heading}
          </h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
