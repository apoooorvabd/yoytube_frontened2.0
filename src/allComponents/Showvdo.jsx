//going to write a component to show the video of the movie when the user clicks on the movie card
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

function Showvdo() {
  const { id } = useParams()
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)

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
    fetchVideo()
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>
  if (!video) return <div className="p-6">Video not found.</div>

  return (
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
