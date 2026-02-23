
function Card_for_vd0({ video }) {
  return (
    <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg bg-red-100">
      <img className="w-full h-[55%]" src={video.thumbnail} alt="Video Thumbnail" />

      <div className="px-2 py-2 h-[30%]">
        <div className="font-bold text-xl mb-2">
          {video.title}
        </div>
        <p className="text-gray-700 text-[12px] ">
          {video.description}
        </p>
      </div>

      <div className="px-3 sticky bottom-0 h-[10%] flex justify-start items-center gap-1 bg-red-100">
        <img
          className="w-10 h-10 rounded-full mr-2"
          // src={video.owner.avatar}
          alt="Author Avatar"
        />
        <div className="text-sm ">
          <p className="text-gray-900 leading-none">
            {/* {video.owner.username} */}
          </p>
          <p className="text-gray-600">
            {new Date(video.createdAt).toDateString()}
          </p>
        </div>
      </div>

      <div className=" flex justify-start gap-3 text-[12px] text-gray-900">
        <span>{video.views} views</span>
        {/* <span>{video.stats.likes} likes</span> */}
        {/* <span>{video.stats.comments} comments</span> */}
      </div>
    </div>
  );
}

export default Card_for_vd0;
