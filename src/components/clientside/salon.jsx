
import React from "react";
import { useParams } from "react-router-dom"; 

function Salon() {
  const { id } = useParams(); // Get the salon ID from the URL

  // Fetch salon data based on the ID, or use a static salon data object

  return (
      <div>
        <h2>Salon {id} Page</h2>
        {/* Display salon information here */}
        <h2>HELOOOOO</h2>
      </div>
  );
}

export default Salon;
