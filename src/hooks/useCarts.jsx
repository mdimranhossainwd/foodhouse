import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";

const useCarts = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/additem?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCarts;
