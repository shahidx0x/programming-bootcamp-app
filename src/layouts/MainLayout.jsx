import UserSidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <UserSidebar/>
      <Outlet />
    </div>
  );
};

export default MainLayout;
