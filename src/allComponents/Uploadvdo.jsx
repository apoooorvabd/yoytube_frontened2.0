import axios from "axios";
import { useState } from "react";

function Uploadvdo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        setError("");

        try {
            const formDataToSend = new FormData();
            if (videoFile) formDataToSend.append("videoFile", videoFile);
            if (thumbnailFile) formDataToSend.append("thumbnail", thumbnailFile);
            formDataToSend.append("title", title);
            formDataToSend.append("description", description);

            const response=await axios.post("http://localhost:8000/api/v1/videos/", formDataToSend, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.accessToken}`,
                },
            });
            alert("Video uploaded successfully!");
            console.log(response.data.message);
            
            
        } catch (err) {
            console.error("Upload error:", err);
        } finally {
            setUploading(false);
        }
    };
return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-up">
        <h2 className="text-2xl font-bold mb-4">Upload New Video</h2>
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Video File</label>
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files[0])}
                    required
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Thumbnail Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnailFile(e.target.files[0])}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
            </div>
            <button
                type="submit"
                disabled={uploading}
                className={`w-full py-2 px-4 rounded-md text-white ${uploading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
            >
                {uploading ? "Uploading..." : "Upload Video"}
            </button>
        </form>
    </div>
);
}

export default Uploadvdo;