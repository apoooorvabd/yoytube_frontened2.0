import Card_for_vd0 from "./Card_for_vd0"
import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../Context/UserContext";


function AllVdo() {

  const ctx = useContext(DataContext);
  if (!ctx) return null;
  const { videos, setVideos } = ctx;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sampleVideos = [
    {
      _id: "sample1",
      title: "Sample Flower Video",
      description: "A fallback sample video",
<<<<<<< HEAD
      thumbnail: "/hero.jfif",
=======
      thumbnail: "/hero_sec.png",
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
      owner: { username: "Demo", avatar: "/logo.png" },
      createdAt: new Date().toISOString(),
      views: 123,
    },
  ];

  useEffect(() => {
    const getallvdo = async () => {
<<<<<<< HEAD
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        
        if (!storedUser?.accessToken) {
          console.log("No access token found");
          setError("Please log in to view videos");
          setVideos(sampleVideos);
          setLoading(false);
          return;
        }

        console.log("Fetching videos with token:", storedUser.accessToken.substring(0, 20) + "...");
        
=======
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser?.accessToken) {
        setError("No user token found. Please log in to view videos.");
        setLoading(false);
        return;
      }
      try {
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/videos/",
          {
            headers: {
              Authorization: `Bearer ${storedUser.accessToken}`,
            },
          }
        );

<<<<<<< HEAD
        console.log("API Response:", data);
        const videosData = data?.data?.videos || [];
        console.log("Fetched videos:", videosData);

        if (videosData.length > 0) {
          setVideos(videosData);
          setError(null);
        } else {
          setVideos(sampleVideos);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching videos:", err.response?.data || err.message);
        setError("Could not fetch videos. Showing sample data.");
=======
        const videosData = data?.data?.videos || [];
        console.log("Fetched videos:", videosData);

        setVideos(videosData);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Could not fetch videos from API. Showing sample data.");
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
        setVideos(sampleVideos);
      } finally {
        setLoading(false);
      }
    };

    getallvdo();
  }, []);

  return (
    <div>
      <section className="container mx-auto px-6 py-10 animate-fade-up">
        {loading && <p className="text-center text-red-600">Loading videos...</p>}
<<<<<<< HEAD
        {error && <p className="text-center text-red-500 mb-6">{error}</p>}

        {videos && videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card_for_vd0 key={video._id} video={video} />
            ))}
          </div>
        ) : (
          !loading && <p className="text-center text-gray-600">No videos available</p>
        )}
=======
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card_for_vd0 key={video._id} video={video} />
          ))}
        </div>
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
      </section>
    </div>
  );
}

export default AllVdo;