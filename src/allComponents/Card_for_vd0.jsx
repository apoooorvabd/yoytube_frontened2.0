import { useNavigate } from "react-router-dom";

function Card_for_vd0({ video }) {
  const navigate = useNavigate();
  console.log("card is called", video);
  
  const handleVideoClick = (id) => {
    console.log("video id in card", id);
    navigate(`/videos/${id}`);
  };

  if (!video) {
    return <div className="text-gray-500">No video data</div>;
  }

  return (
    <div className="w-[320px] h-[380px] rounded-xl overflow-hidden shadow-md theme-card flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-fade-up px-3 mx-2 ">
      {/* Thumbnail */}
      <div className="h-[180px] w-full overflow-hidden cursor-pointer" onClick={() => handleVideoClick(video._id)}>
        <img
          className="w-full h-full object-cover"
          src={video.thumbnail}
          alt="Video Thumbnail"
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-3 py-2 flex flex-col justify-between bg-red-50">

        {/* Title + Description */}
        <div className="border-[2px solid red] w-auto h-auto border-red-900">
          <h2 className="font-semibold text-[16px] line-clamp-2 text-red-700">
            {video.title}
          </h2>
          <p className="text-gray-600 text-[13px] line-clamp-2 mt-1">
            {video.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-3 text-xs text-gray-700 mt-2">
          <span>{video.views || 0} views</span>
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-2 mt-3 bg-white">
          <img
            className="w-9 h-9 rounded-full object-cover"
            src={video.owner?.avatar || "/default-avatar.png"}
            alt="Author Avatar"
          />
          <div className="text-xs">
            <p className="font-medium text-gray-800">
              {video.owner?.username || "Unknown"}
            </p>
            <p className="text-gray-500">
              {video.createdAt ? new Date(video.createdAt).toDateString() : ""}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card_for_vd0;

