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
      thumbnail: "/hero_sec.png",
      owner: { username: "Demo", avatar: "/logo.png" },
      createdAt: new Date().toISOString(),
      views: 123,
    },
  ];

  useEffect(() => {
    const getallvdo = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser?.accessToken) {
        setError("No user token found. Please log in to view videos.");
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/videos/",
          {
            headers: {
              Authorization: `Bearer ${storedUser.accessToken}`,
            },
          }
        );

        const videosData = data?.data?.videos || [];
        console.log("Fetched videos:", videosData);

        setVideos(videosData);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Could not fetch videos from API. Showing sample data.");
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
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card_for_vd0 key={video._id} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllVdo;