import SubHeading from "../../Shared/Heading/SubHeading";
import ChefCard from "../Card/ChefCard";
const Chef = () => {
  return (
    <div className="container mx-auto mt-24 ">
      <SubHeading heading="Chef Recommends" subHeading="Should try" />
      <ChefCard />
    </div>
  );
};

export default Chef;
