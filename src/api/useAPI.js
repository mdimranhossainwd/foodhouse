import { instance } from "../hooks/useAxios";

export const getRole = async (email) => {
  const { data } = await instance(`/user/${email}`);
  return data;
};
