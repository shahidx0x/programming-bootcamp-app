import { Home, ListCollapse, Ticket } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "@/utils/localstorage";
import { clearUser } from "@/redux/slices/authSlice";

const UserSidebar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  console.log(user);
  const [current, setCurrent] = useState("#home");
  useEffect(() => {
    setCurrent(location.hash);
  }, [location]);

  return (
    <div className="hidden md:flex items-center h-screen lg:block border-r rounded-lg bg-dot-black/[0.2]">
      <div className="h-full p-3 space-y-2 w-80 bg-gray-50 text-gray-800 bg-dot-black/[0.2]">
        {user.isAuthenticated && (
          <>
            <div className="flex items-center p-2 space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/480px-User-avatar.svg.png"
                alt=""
                className="w-12 h-12  rounded-full bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.user.fullname}</h2>
                <span className="flex items-center space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-gray-600"
                  >
                    {user.user.email}
                  </a>
                </span>
              </div>
            </div>
          </>
        )}
        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li
              className={`px-8 py-2 rounded-full bg-gradient-to-b  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ${
                current === "#home" || current === "/"
                  ? "from-blue-500 to-blue-600"
                  : "from-gray-500 to-gray-600"
              }`}
            >
              <a
                href="/#home"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <Home />
                <span>Home</span>
              </a>
            </li>
            <li
              className={`px-8 py-2 rounded-full bg-gradient-to-b  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ${
                current === "#events" || location.pathname.includes("event")
                  ? "from-blue-500 to-blue-600"
                  : "from-gray-500 to-gray-600"
              }`}
            >
              <a
                rel="noopener noreferrer"
                href="/#events"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ListCollapse />
                <span>Events</span>
              </a>
            </li>
          </ul>

          <div>
            {!user.isAuthenticated && (
              <>
                <Link to="/login">
                  <button className="shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Login
                  </button>
                </Link>

                <Link to="/registration">
                  <button className="shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 mt-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Registration
                  </button>
                </Link>
              </>
            )}

            {user.isAuthenticated && (
              <>
                <ul className="mt-5">
                  <li
                    className={`px-8 py-2 rounded-full bg-gradient-to-b  text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 ${
                      current === "/my-tickets"
                        ? "from-blue-500 to-blue-600"
                        : "from-gray-500 to-gray-600"
                    }`}
                  >
                    <a
                      href="/#home"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <Ticket />
                      <span>My Tickets</span>
                    </a>
                  </li>
                </ul>
                <button
                  className="shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 mt-2 bg-transparent border border-black dark:border-white dark:text-white text-red-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => {
                    dispatch(clearUser());
                    deleteToken();
                    navigateTo("/login");
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
