import React, { useState } from "react";
import watson from "../view/components/assets/watson.jpg";
import hope from "../view/components/assets/hope.jpg";
import { IoIosNotifications } from "react-icons/io";

function Home() {
  const initialSalonCard = [
    {
      name: "Ruperts",
      availability: "Open",
      description:
        "Our committed and competent team is here to help keep your hair, nails, skin, and body healthy and beautiful.",
      image: hope,
    },
    {
      name: "Ernest",
      availability: "Close",
      description: "Salon Description 2",
      image: hope,
    },
    {
      name: "Laurence",
      availability: "Open",
      description: "Salon Description 3",
      image: hope,
    },
  ];

  const [search, setSearch] = useState("");
  const [SalonCard, setSalonCard] = useState(initialSalonCard);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    // Filter the SalonCard array based on the search input
    const filteredSalonCard = initialSalonCard.filter((salon) =>
      salon.name.toLowerCase().includes(searchTerm)
    );
    setSalonCard(filteredSalonCard);
  };

  return (
    <div>
      <div className="navbar bg-second">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <IoIosNotifications className="h-5 w-5" />
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        {SalonCard.map((salon, index) => (
          <div
            key={index}
            className={`card bordered mx-4 max-w-xs shadow-lg bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform ease-in-out duration-300`}
          >
            <div className="relative group">
              <img
                src={salon.image}
                alt={`Salon ${index + 1} Image`}
                className="w-full h-auto transition-transform transform-gpu cursor-pointer group-hover:scale-105 group-hover:blur-sm" // Apply blur to the image on hover
              />
              <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-gray-800 text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md rounded-lg">
                <p className="mt-2 text-white salon-description focus:outline-none focus:bg-opacity-80 focus:bg-gray-800 focus:text-white">
                  {salon.description}
                </p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold salon-name">{salon.name}</h2>
              <p
                className={`text-gray-500 ${
                  salon.availability === "Open"
                    ? "text-green-600"
                    : "text-red-600"
                } salon-availability`}
              >
                {salon.availability}
              </p>
              <button className="btn btn-primary mt-4 hover:bg-primary-500 hover:text-white transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
