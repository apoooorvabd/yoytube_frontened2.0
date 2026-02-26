import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../Context/UserContext';
import Uploadvdo from './Uploadvdo';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import Card_for_vd0 from './Card_for_vd0';

export default function UserDashboard() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(DataContext);
    const [videos, setVideos] = useState([]);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    

    useEffect(() => {
        async function fetchVideos() {
            try {
                const storedUser = JSON.parse(localStorage.getItem("user"));
                if (!storedUser?.accessToken) {
                    console.log("No stored user token found — skipping videos fetch.");
                    return;
                }

                setUser(storedUser);
                const response = await axios.get(
                    "http://localhost:8000/api/v1/dashboard/videos",
                    {
                        headers: {
                            Authorization: `Bearer ${storedUser.accessToken}`,
                        },
                    }
                );

                const fetched = response.data?.data || [];
                setVideos(fetched);
                console.log("fetched videos:", fetched);
            } catch (err) {
                console.error(err);
                if (err.response?.status === 401) {
                    localStorage.removeItem("user");
                    navigate("/Login");
                }
            }
        }

        fetchVideos();
    }, [navigate]);
    return (
        <div className="min-h-screen bg-white py-10 px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="theme-card shadow rounded-lg p-6 md:flex md:items-center md:justify-between animate-fade-up">
                    <div className="flex items-center gap-4">
                        <img
                            src={user?.avatar}
                            alt={user?.name}
                                className="w-20 h-20 rounded-full object-cover ring-2 ring-red-100"
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
                <div className="theme-card shadow rounded-lg p-6 animate-fade-up">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Your Videos ({videos.length})</h2>
                    </div>

                    {videos.length === 0 ? (
                        <p className="text-center text-gray-500">No videos yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {videos.map((v) => (
                                <Card_for_vd0 key={v._id || v.id} video={v} />
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={() => navigate("/Upload")} className="theme-accent py-2 px-4 rounded-md text-white w-full md:w-auto">Upload new Video</button>

            </div>
        </div>
    );
}