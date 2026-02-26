//going to write a component to show the video of the movie when the user clicks on the movie card
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
<<<<<<< HEAD
import { set } from "zod"
import AllVdo from "./AllVdo"
import Sidevdoinvdo from "./Sidevdoinvdo"
=======
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e

function Showvdo() {
  const { id } = useParams()
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)
<<<<<<< HEAD
  const [vdoowner, setVdoOwner] = useState(null);

  // log changes and ensure loading state resets when id changes
  useEffect(() => {
    console.log("Showvdo mounted/updated with id:", id)
    if (!id) return;
    setLoading(true)
    setVideo(null)

    const fetchVideo = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          `http://localhost:8000/api/v1/videos/${id}`,
          {
            headers: {
              Authorization: `Bearer ${storedUser?.accessToken}`,
            },
          }
        )
        console.log("Video loaded for id", id, ":", response.data.data);
        
        setVideo(response.data.data[0])
        setVdoOwner(response.data.data[1]);
      } catch (err) {
        console.error("Error fetching video:", err.response || err.message)
        toast.error("Failed to load video")
      } finally {
        setLoading(false)
      }
    }

=======

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/videos/${id}`)
        console.log("ii");
        
        setVideo(response.data.data)
        setLoading(false)
      } catch (err) {
        console.error(err)
        toast.error("Failed to load video")
        setLoading(false)
      }
    }
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
    fetchVideo()
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>
  if (!video) return <div className="p-6">Video not found.</div>

  return (
<<<<<<< HEAD
  <div className="min-h-screen bg-white text-gray-900 px-4 md:px-8 py-6">

    <div className="flex flex-col lg:flex-row gap-8">

      {/* ================= LEFT MAIN VIDEO ================= */}
      <div className="w-full lg:w-[65%]">

        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-4 md:p-6 transition hover:shadow-2xl">

          {/* Video Player */}
          <div className="overflow-hidden rounded-xl group">
            <video
              controls
              className="w-full h-[240px] sm:h-[350px] md:h-[420px]
              rounded-xl transition-transform duration-300 
              group-hover:scale-[1.01]"
            >
              <source src={video.videoFile} type="video/mp4" />
            </video>
          </div>

          {/* Video Info */}
          <div className="mt-6 space-y-4">

            <h1 className="text-2xl md:text-3xl font-bold text-red-600">
              {video.title}
            </h1>

            <p className="text-gray-600 leading-relaxed">
              {video.description}
            </p>

            {/* Author Section */}
            <div className="flex flex-wrap justify-between items-center gap-4">

              <div className="flex items-center gap-4">
                {vdoowner?.avatar && (
                  <img
                    className="w-12 h-12 rounded-full object-cover
                    border-2 border-red-500
                    transition-transform duration-300
                    hover:scale-110"
                    src={vdoowner.avatar}
                    alt="Author Avatar"
                  />
                )}

                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {vdoowner?.username || "Unknown Author"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {video.createdAt
                      ? new Date(video.createdAt).toDateString()
                      : ""}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-gray-600">
                <span className="hover:text-red-600 transition">
                  👁 {video.views || 0} views
                </span>
                <span className="hover:text-red-600 transition">
                  ⏱ {video.duration || 0}s
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="w-full lg:w-[35%]">

        <div className="bg-white rounded-2xl shadow-xl border border-red-100 p-4 transition hover:shadow-2xl">

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-4">

            <button className="px-4 py-2 rounded-full 
              bg-red-600 text-white 
              hover:bg-red-700 
              hover:scale-105 
              transition-all duration-300 
              shadow-md">
              All Videos
            </button>

            <button className="px-4 py-2 rounded-full 
              border border-red-500 text-red-600 
              hover:bg-red-50 
              hover:scale-105 
              transition-all duration-300">
              Recommended
            </button>

            <button className="px-4 py-2 rounded-full 
              border border-red-500 text-red-600 
              hover:bg-red-50 
              hover:scale-105 
              transition-all duration-300">
              From this Channel
            </button>

          </div>

          <Sidevdoinvdo />
        </div>
      </div>

    </div>
  </div>
)
}

export default Showvdo
=======
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video controls className="w-full h-auto rounded-lg shadow-md">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="mt-4 text-gray-600">{video.description}</p>
    </div>
  )
}

export default Showvdo  
>>>>>>> 151fbb083222d386ef954a4b9934c9b6101d0f7e
