import { useState } from "react";
import * as Io5icons from "react-icons/io5";
import * as MDicons from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Inventory from "./components/inventory";
import Staff from "./components/Staff";
import watson from './components/assets/watson.jpg';


function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [selected, setSelected] = useState("");
  const nav = useNavigate();

  const sidebarComp = [
    {
      name: "Dashboard",
      icon: (
        <Io5icons.IoGridOutline
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/sidebar",
      element: <Dashboard />,
    },
    {
      name: "Inventory",
      icon: (
        <Io5icons.IoAlbumsOutline
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/sidebar/inventory", // Set the desired path for the "Inventory" link
      element: <Inventory />,
    },
    {
      name: "Staff",
      icon: (
        <Io5icons.IoPeopleCircleOutline
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/sidebar/staff", // Set the desired path for the "Users" link
      element: <Staff />,
    },
    {
      name: "Notifications",
      icon: (
        <Io5icons.IoNotificationsSharp
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/payments", // Set the desired path for the "Payments" link
    },
    {
      name: "Orders",
      icon: (
        <MDicons.MdEventAvailable
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/orders", // Set the desired path for the "Orders" link
    },
    {
      name: "Payments",
      icon: (
        <MDicons.MdOutlinePayment
          className={`${
            isOpenSidebar ? "text-lg" : "text-xl"
          } transition-all duration-500 `}
        />
      ),
      path: "/payments", // Set the desired path for the "Payments" link
    },
  ];

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <div className="min-h-screen flex flex-row">
      <div
        className={`${
          isOpenSidebar ? "w-[20%]" : "w-[5%]"
        } transition-[width] duration-500 overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex flex-col gap-5 my-5 px-4">
          <div
            className={`${
              isOpenSidebar ? "translate-x-0" : "-translate-x-2.5"
            } transition-transform duration-500 justify-end flex flex-row z-20`}
          >
            {isOpenSidebar ? (
              <Io5icons.IoChevronBackOutline
                className="text-lg cursor-pointer"
                onClick={toggleSidebar}
              />
            ) : (
              <Io5icons.IoChevronForwardOutline
                className="text-lg cursor-pointer"
                onClick={toggleSidebar}
              />
            )}
          </div>
          <div className="text-center z-10">LOGO</div>
        </div>

        {/* Sidebar Navigation */}
        <div className="mt-10 pl-4">
          {sidebarComp.map(({ name, icon, path }) => (
            <Link to={path} key={name}>
              <div
                onClick={() => setSelected(name)}
                className={`${
                  selected === name ? "bg-second" : "bg-transparent"
                } flex flex-row items-center gap-2 my-2 py-2 w-52 px-2 hover:bg-second rounded-md transition-transform scale-100 hover:scale-105 cursor-pointer`}
              >
                {icon}
                <div
                  className={`${
                    isOpenSidebar ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  {name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="navbar bg-base-100 mt-4">
          <div className="flex-1"></div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <MDicons.MdNotifications size={24} />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={watson} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between"> {/* Add Link for Profile */}
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="justify-between"> {/* Add Link for Settings */}
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="justify-between"> {/* Add Link for Logout */}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
