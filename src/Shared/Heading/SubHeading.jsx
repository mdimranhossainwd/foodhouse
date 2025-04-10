const SubHeading = ({ heading, subHeading }) => {
  return (
    <div className="md:w-2/6 mx-auto text-center space-y-4 my-8">
      <span className=" font-lobster text-[#F42643] text-md">
        ----{subHeading}----
      </span>
      <div className="border-t-2 border-b-2 py-4">
        <h2 className="text-4xl lg:text-5xl font-lobster">{heading}</h2>
      </div>
    </div>
  );
};

export default SubHeading;
