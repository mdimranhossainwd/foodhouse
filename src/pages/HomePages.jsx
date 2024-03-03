import { Helmet } from "react-helmet-async";
import OnlineCard from "../Components/Card/OnlineCard";
import Chef from "../Components/Chef/Chef";
import BestLetter from "../Components/Newsletter/BestLetter";
import NewsLetter from "../Components/Newsletter/NewsLetter";
import Banner from "../Shared/Banner/Banner";
import SubBaner from "../Shared/Banner/SubBaner";
import TestimonialBanner from "../Shared/Banner/TestimonialBanner";
const HomePages = () => {
  return (
    <div>
      <Helmet>
        <title>Recipe-Realm || Home Page</title>
      </Helmet>
      <Banner />
      <OnlineCard />
      <BestLetter />
      <Chef />
      <SubBaner />
      <NewsLetter />
      <TestimonialBanner />
    </div>
  );
};

export default HomePages;
