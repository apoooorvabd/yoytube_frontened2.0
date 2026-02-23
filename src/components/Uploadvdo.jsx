import { useState, useEffect } from "react";

function Uploadvdo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        return () => {
            if (thumbnailPreview) URL.revokeObjectURL(thumbnailPreview);
        };
    }, [thumbnailPreview]);

    function onVideoChange(e) {
        const f = e.target.files && e.target.files[0];
        if (f) setVideoFile(f);
    }

    function onThumbnailChange(e) {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        setThumbnailFile(f);
        const url = URL.createObjectURL(f);
        setThumbnailPreview(url);
    }

    function validate() {
        if (!title.trim()) return "Title is required";
        if (!videoFile) return "Please select a video file";
        return "";
    }

    function onSubmit(e) {
        e.preventDefault();
        setError("");
        const v = validate();
        if (v) {
            setError(v);
            return;
        }

        // Simulate upload progress for UI feedback.
        setUploading(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((p) => {
                const np = p + Math.floor(Math.random() * 20) + 10;
                if (np >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setUploading(false);
                        setProgress(100);
                        // In real app: send FormData to API here.
                        console.log("Upload simulated:\n", {
                            title,
                            description,
                            videoFile,
                            thumbnailFile,
                        });
                    }, 300);
                }
                return Math.min(np, 100);
            });
        }, 400);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 md:flex md:items-start md:gap-6">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-gray-800">Upload Video</h2>
                            <p className="mt-2 text-sm text-gray-500">
                                Add a title, description, a thumbnail and your video file. Supports drag-and-drop on modern browsers.
                            </p>

                            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-indigo-400 focus:ring-indigo-200"
                                        placeholder="Enter video title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-indigo-400 focus:ring-indigo-200"
                                        rows={4}
                                        placeholder="Write a short description..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Thumbnail (image)</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={onThumbnailChange}
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Video file</label>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={onVideoChange}
                                        className="mt-1"
                                    />
                                    {videoFile && (
                                        <p className="text-sm text-gray-500 mt-2">Selected: {videoFile.name} • {(videoFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                    )}
                                </div>

                                {error && <p className="text-sm text-red-600">{error}</p>}

                                <div className="flex items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={uploading}
                                        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 disabled:opacity-60"
                                    >
                                        {uploading ? `Uploading...` : `Upload`}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTitle("");
                                            setDescription("");
                                            setVideoFile(null);
                                            setThumbnailFile(null);
                                            setThumbnailPreview(null);
                                            setError("");
                                        }}
                                        className="text-sm text-gray-600 hover:underline"
                                    >
                                        Reset
                                    </button>
                                </div>

                                {uploading && (
                                    <div className="w-full bg-gray-100 rounded-full h-2 mt-3 overflow-hidden">
                                        <div className="h-2 bg-indigo-500" style={{ width: `${progress}%` }} />
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="mt-6 md:mt-0 md:w-1/2">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-full bg-gray-50 rounded-lg p-4 border border-dashed border-gray-200">
                                    <p className="text-sm font-medium text-gray-700">Preview</p>
                                    <div className="mt-3 flex flex-col items-center gap-3">
                                        {thumbnailPreview ? (
                                            <img src={thumbnailPreview} alt="thumbnail preview" className="w-full h-48 object-cover rounded-md" />
                                        ) : (
                                            <div className="w-full h-48 rounded-md bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center text-gray-400">
                                                No thumbnail selected
                                            </div>
                                        )}

                                        <div className="w-full text-sm text-gray-600">
                                            <p className="font-semibold">{title || "Untitled video"}</p>
                                            <p className="mt-1 text-xs text-gray-500 line-clamp-3">{description || "No description yet."}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full text-sm text-gray-500">
                                    <p className="font-medium">Tips</p>
                                    <ul className="list-disc list-inside mt-2 text-xs">
                                        <li>Use a clear thumbnail for better clicks.</li>
                                        <li>Keep title simple and searchable.</li>
                                        <li>Large videos may take longer to upload; try compressing if possible.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uploadvdo;