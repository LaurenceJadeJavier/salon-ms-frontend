import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function SignUp() {
  // State variables
  const [currentTitle, setCurrentTitle] = useState(""); // Track title
  const audioPlayer = useRef(null); // Audio player ref
  const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
  const [volume, setVolume] = useState(40); // Volume control
  const [showVolumeControl, setShowVolumeControl] = useState(false); // Show/hide volume control
  const [topTracks, setTopTracks] = useState([]); // User's top tracks

  // Authorization token that must have been created previously.
  // Replace with your Spotify access token
  const token = 'BQAHLPmj9UMUA6pyWSvTJPAEBAc-FxYay1KVBr0QkC0Gbu0UIk6aNBIojgbjLnLLEFnhwGGChM1uJE_revA5Egv1q9DHQ0FXK5zd9-UBBG3JtI3uUSUdl2AUhNyWpMfZfj5ihmEhtqjbzmK4irTOdbcJypiIEiAO-yogt9ufqJ-ba3IwqQubIrorpy9L7ZdwUfUwktGDwVnMAEXr1ABEYWsurfOFLtDyD5pUkI3-o1llowGvA0ZcZLUwh4c8xc1kfQBbegr-x0CW6DOfkCzXSpQE1KEq';

  // Fetch track data from Spotify API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/tracks/2cWH19oK2G6oDKBwScJ8Q0", // Scott Street track URI
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        const track = response.data;
        audioPlayer.current.src = track.preview_url;
        setCurrentTitle(track.name);
      } else {
        throw new Error("No track data found");
      }
    } catch (error) {
      console.error("Error fetching track data:", error);
    }
  };

  // Toggle audio play/pause
  const toggleAudio = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Event handler for volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioPlayer.current.volume = newVolume / 100;
  };

  // Show volume control when hovered over the volume icon
  const showVolumeSlider = () => {
    setShowVolumeControl(true);
  };

  // Hide volume control when not hovered over the volume icon
  const hideVolumeSlider = () => {
    setShowVolumeControl(false);
  };

  // Function to fetch user's top tracks
  const fetchTopTracks = async () => {
    try {
      const response = await fetchWebApi(
        'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
      );
      if (response.items) {
        setTopTracks(response.items);
      }
    } catch (error) {
      console.error("Error fetching top tracks:", error);
    }
  };

  useEffect(() => {
    // Fetch track data when the component mounts
    fetchData();
    // Fetch user's top tracks
    fetchTopTracks();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-row justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white text-black rounded-2xl">
        <h1 className="mb-3 font-bold text-4xl">{currentTitle}</h1>
        <div className="mt-4">
          <button onClick={toggleAudio}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <div className="mt-4">
          <div
            className="relative"
            onMouseEnter={showVolumeSlider}
            onMouseLeave={hideVolumeSlider}
          >
            {showVolumeControl && (
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                className="range volume-slider"
                onChange={handleVolumeChange}
              />
            )}
          </div>
        </div>
        <audio ref={audioPlayer} />
        <h2 className="mt-4 font-bold text-2xl">Your Top Tracks:</h2>
        <ul>
          {topTracks.map((track) => (
            <li key={track.id}>{track.name} by {track.artists.map((artist) => artist.name).join(', ')}</li>
          ))}
        </ul>
        <iframe
          title="Spotify Embed: Scott Street"
          src={`https://open.spotify.com/embed/track/2cWH19oK2G6oDKBwScJ8Q0?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '360px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Function to fetch data from the Spotify Web API
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

export default SignUp;