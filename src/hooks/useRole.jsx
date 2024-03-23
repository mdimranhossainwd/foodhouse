import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const axios = useAxios();
  const [role, setRole] = useState(null);

  useEffect(() => {
    axios.get(`/user/${user?.email}`).then((res) => {
      setRole(res.data.role);
    });
  }, [user]);
  return [role];
};

export default useRole;
