import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const PrivateRouter = ({ children }) => {
  const { user, isloading } = useContext(AuthContext);
  const location = useLocation();

  if (isloading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate state={location.state?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;
