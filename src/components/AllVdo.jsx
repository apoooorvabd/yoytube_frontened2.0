import Card_for_vd0 from "./ui/Card_for_vd0"
import allvdo from "./allvdo"
import axios from "axios";
import React from "react";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../UserContext";



function AllVdo() {

  const { videos, setVideos } = useContext(DataContext);

    
     useEffect(() => {
    const getallvdo = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/videos/"
        );

        const videosData = data.data.videos; // correct extraction
        console.log(data);

        setVideos(videosData); // store in state
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getallvdo();
  }, []);
    
    return (
        <div>
            <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card_for_vd0 key={video._id} video={video} />
          ))}
        </div>
      </section>
        </div>
    )
}
export default AllVdo;