import OnlineCard from "../Components/Card/OnlineCard";
import Chef from "../Components/Chef/Chef";
import NewsLetter from "../Components/Newsletter/NewsLetter";
import Banner from "../Shared/Banner/Banner";
import SubBaner from "../Shared/Banner/SubBaner";
const HomePages = () => {
  return (
    <div>
      <Banner />
      <OnlineCard />
      <Chef />
      <SubBaner />
      <NewsLetter />
    </div>
  );
};

export default HomePages;
