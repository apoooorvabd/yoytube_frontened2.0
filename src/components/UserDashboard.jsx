import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../UserContext';
import Uploadvdo from './Uploadvdo';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(DataContext);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        async function fetchVideos() {
            if (!user?.accessToken) {
                if (mounted) {
                    setVideos([]);
                    setLoading(false);
                }
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/v1/dashboard/videos",
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );
                if (!mounted) return;
                setVideos(response.data?.videos || []);
                setError(null);
            } catch (err) {
                if (!mounted) return;
                setError(err.response?.data?.message || err.message);
                setVideos([]);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchVideos();
        return () => {
            mounted = false;
        };
    }, [user?.accessToken]);
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="bg-white shadow rounded-lg p-6 md:flex md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src={user?.avatar}
                            alt={user?.name}
                            className="w-20 h-20 rounded-full object-cover ring-2 ring-indigo-100"
                        />
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">{user?.username}</h1>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                            <p className="mt-2 text-sm text-gray-600">{user?.fullName}</p>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0 grid grid-cols-3 gap-4 text-center md:w-1/3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-gray-800">{videos.length}</div>
                            <div className="text-xs text-gray-500">Videos</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-gray-800">{user?.subscribers || 0}</div>
                            <div className="text-xs text-gray-500">Subscribers</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-gray-800">{user?.totalViews || 0}</div>
                            <div className="text-xs text-gray-500">Views</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Your Videos ({videos.length})</h2>
                    </div>

                    {videos.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video) => (
                                <div key={ 123} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-44 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold text-gray-800 truncate">{video.title}</h3>
                                        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                                            <span>{video.views} views</span>
                                            <span>{new Date(video.uploadedAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center text-gray-500">No videos uploaded yet</div>
                    )}
                </div>
                <button onClick={() => navigate("/Upload")}>Upload new Video</button>

            </div>
        </div>
    );
}