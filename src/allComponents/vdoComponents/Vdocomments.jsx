import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CiHeart } from "react-icons/ci";


const VdoComments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newcomment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const addcomment = async () => {
    if (!newcomment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/comments/${videoId}`,
        { content: newcomment.trim() },
        {
          headers: {
            Authorization: `Bearer ${storedUser?.accessToken}`,
          },
        }
      );

      toast.success("Comment added successfully");
      setComments((prev) => [...prev, response.data.data]);
      setNewComment("");
    } catch (err) {
      toast.error("Failed to add comment");
    }
  };
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const stored = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`http://localhost:8000/api/v1/comments/${videoId}`, {
          headers: {
            Authorization: `Bearer ${stored?.accessToken}`,
          },
        });

        setComments(response.data.data || []);
      } catch (err) {
        setError("Failed to load comments");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [videoId]);

  if (error) {
    return (
      <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
        {error}
      </p>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <Toaster position="top-right" />

      <div className="mb-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Discussion</p>
          <h2 className="mt-1 text-2xl font-black text-slate-900">Comments</h2>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          {comments.length} total
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 md:p-4">
        <textarea
          value={newcomment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment"
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-500"
        />
        <div className="mt-3 flex justify-end">
          <button
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            onClick={addcomment}
            disabled={!newcomment.trim()}
          >
            Post Comment
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {loading ? (
          <div className="space-y-2">
            <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
            <div className="h-20 animate-pulse rounded-xl bg-slate-100" />
          </div>
        ) : comments.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
            No comments yet. Start the conversation.
          </p>
        ) : (
          comments.map((comment) => (
            <article key={comment._id} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{comment.commenter?.fullName || "Unknown"}</p>
                <span className="text-xs text-slate-400">comment</span>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-6 text-slate-700">{comment.content}</p>
              <p className="text-slate-500" onClick={()=>handleLike()}><CiHeart className="text-4xl"/></p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default VdoComments;
