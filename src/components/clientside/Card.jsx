import React from "react";
import hope from "../view/components/assets/hope.jpg";
import { Link } from "react-router-dom";

function Card({ search, onSearchChange }) {
  const SalonCard = [
    {
      id: 1,
      name: "Ruperts",
      availability: "Open",
      description:
        "Our committed and competent team is here to help keep your hair, nails, skin, and body healthy and beautiful.",
      image: hope,
    },
    {
      id: 2,
      name: "Ernest",
      availability: "Close",
      description: "Salon Description 2",
      image: hope,
    },
    {
      id: 3,
      name: "Laurence",
      availability: "Open",
      description: "Salon Description 3",
      image: hope,
    },
    // Add more salon data here
  ];

  const filteredSalonCard = SalonCard.filter((salon) =>
    salon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="flex justify-center items-center mt-10">
          {filteredSalonCard.map((salon) => (
            <div
              key={salon.id}
              className={`card bordered mx-4 max-w-xs shadow-lg bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform ease-in-out duration-300`}
            >
              <div className="relative group">
                <img
                  src={salon.image}
                  alt={`Salon ${salon.id} Image`}
                  className="w-full h-auto transition-transform transform-gpu cursor-pointer group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-gray-800 text-white p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-md rounded-lg">
                  <p className="mt-2 text-white salon-description focus:outline-none focus:bg-opacity-80 focus:bg-gray-800 focus:text-white">
                    {salon.description}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold salon-name">
                  {salon.name}
                </h2>
                <p
                  className={`text-gray-500 ${
                    salon.availability === "Open"
                      ? "text-green-600"
                      : "text-red-600"
                  } salon-availability`}
                >
                  {salon.availability}
                </p>
                <Link
                  to={`/salon/${salon.id}`}
                  className="btn btn-primary mt-4 hover:bg-primary-500 hover:text-white transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
