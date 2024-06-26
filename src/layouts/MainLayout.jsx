import UserSidebar from "@/components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="flex">
      <UserSidebar />
      <div
        className={`h-screen w-full  bg-white  ${
          location.pathname.includes("event") ? "" : "bg-grid-black/[0.1]"
        } relative `}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="h-screen overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
