import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";

const Dashboard = () => {
  return (
    <div className="lg:flex ">
      <div className="min-h-full bg-[#F42643]">
        <DashboardMenu />
      </div>
      <div className="md:flex-1 bg-[#F8F8F8]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
