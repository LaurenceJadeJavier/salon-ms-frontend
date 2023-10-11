import React, { useState, useEffect } from "react";
import * as MDicons from "react-icons/md";
import watson from "../view/components/assets/watson.jpg";
import { Link, Outlet } from "react-router-dom";
import Card from "./Card";

function Home() {
  const [search, setSearch] = useState("");
  const [NotificationsComponents, setNotificationsComponents] = useState([
    {
      name: "Salon Name",
      value: "Your booking was successful.",
      timestamp: new Date(),
      isActive: true,
      image: watson,
    },
    {
      name: "Salon 2",
      value: "Your booking was successful.",
      timestamp: new Date(),
      isActive: true,
      image: watson,
    },
    {
      name: "Salon 3",
      value: "Your booking was successful.",
      timestamp: new Date(),
      isActive: true,
      image: watson,
    },
    // Add more notifications here
  ]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
  };

  const handleNotificationSelect = (notification) => {
    setSelectedNotification(notification);
  };

  const handleCloseModal = () => {
    setSelectedNotification(null);
  };

  useEffect(() => {
    const markNotificationsInactive = () => {
      const updatedNotifications = NotificationsComponents.map(
        (notification) => ({
          ...notification,
          isActive: false,
        })
      );
      setNotificationsComponents(updatedNotifications);
    };

    const timerId = setInterval(markNotificationsInactive, 5000);

    return () => clearInterval(timerId);
  }, [NotificationsComponents]);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    if (diff < 60000) {
      return "Just now";
    } else if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    } else {
      return timestamp.toLocaleDateString();
    }
  };

  return (
    <div>
      <div className="navbar bg-second">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">LOGO</a>
        </div>
        <div className="flex-none gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <div className="relative inline-block text-left dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MDicons.MdNotifications size={24} />
                <span className="badge badge-sm indicator-item">
                  {NotificationsComponents.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 ml-4 z-[1] card card-compact dropdown-content w-72 bg-base-100 shadow"
            >
              <div className="card-body max-h-[400px] overflow-y-auto">
                <span className="font-bold text-lg">Notifications</span>
                <ul className="flex flex-col flex-wrap gap-2">
                  {NotificationsComponents.map((notification, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 justify-between notification-item cursor-pointer"
                      onClick={() => handleNotificationSelect(notification)}
                    >
                      <div className="flex flex-row items-center gap-2">
                        {notification.isActive && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <img
                          className="w-6 h-6 bg-primary rounded-full"
                          src={notification.image}
                          alt={`User ${notification.name} Avatar`}
                        />
                        <span
                          className={`text-xs flex flex-col ${
                            notification.isActive ? "active" : ""
                          }`}
                        >
                          <strong className="text-xxs">
                            {notification.name}
                          </strong>
                          <span>{notification.value}</span>
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {formatTimeAgo(notification.timestamp)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary btn-block">
                    View All
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
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      {selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2>{selectedNotification.name}</h2>
              <p>{selectedNotification.value}</p>
              <button
                className="btn btn-primary mt-4"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Card search={search} onSearchChange={handleSearchChange} />
    </div>
  );
}

export default Home;
