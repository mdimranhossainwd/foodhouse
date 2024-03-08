import { useQuery } from "@tanstack/react-query";
import MenuShopCard from "../Components/Card/MenuShopCard";
import CommonBanner from "../Shared/Banner/CommonBanner";
import SubHeading from "../Shared/Heading/SubHeading";
import useAxios from "../hooks/useAxios";
const ShopPage = () => {
  const axios = useAxios();
  const getShopCard = async () => {
    const res = await axios.get("/fooditems");
    return res;
  };

  const {
    data: menuItem,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shopmenu"],
    queryFn: getShopCard,
  });

  return (
    <div>
      <CommonBanner
        bgImg="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Our Shop"
        description="Would you like to try a dish?"
      />

      <div className="container mx-auto mt-16">
        <SubHeading heading="Shop Item" subHeading="Try to Shop Items" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
          {menuItem?.data?.map((item) => (
            <MenuShopCard key={item._id} menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
