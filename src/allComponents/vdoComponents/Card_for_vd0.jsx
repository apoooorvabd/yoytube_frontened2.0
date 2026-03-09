import { useNavigate } from "react-router-dom";

function Card_for_vd0({ video }) {
  const navigate = useNavigate();

  if (!video) {
    return <div className="text-sm text-slate-500">No video data</div>;
  }

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
      onClick={() => navigate(`/videos/${video._id}`)}
    >
      <div className="relative aspect-video overflow-hidden bg-slate-200">
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={video.thumbnail}
          alt="Video Thumbnail"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3">
          <p className="line-clamp-1 text-xs font-semibold uppercase tracking-wide text-white/95">
            {video.owner?.username || "Unknown"}
          </p>
        </div>
      </div>

      <div className="space-y-3 p-3.5">
        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-900">{video.title}</h3>
        <p className="line-clamp-2 text-xs leading-5 text-slate-600">{video.description}</p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium">{video.views || 0} views</span>
          <span>{video.createdAt ? new Date(video.createdAt).toDateString() : ""}</span>
        </div>
      </div>
    </article>
  );
}

export default Card_for_vd0;
