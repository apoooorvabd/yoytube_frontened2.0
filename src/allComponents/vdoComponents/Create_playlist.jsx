import { use,useState ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Create_playlist() { 
    const [newPlaylist, setNewPlaylist] = useState({
        name: "",
        description: "",
    });
    const storedUser = JSON.parse(localStorage.getItem("user"));
        // Fetch existing playlists if needed
    const handleSubmit = async (e) => {  
        console.log("Submitting playlist:", newPlaylist); 
            e.preventDefault();
            try {
                const response = await axios.post(
                    "http://localhost:8000/api/v1/playlist",
                    {
                        name: newPlaylist.name,
                        description: newPlaylist.description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${storedUser?.accessToken}`, 
                        },
                    }
                );
                console.log("Playlist created:", response.data);
                toast.success(`Playlist "${response.data.data.name}" created successfully! `);
                // Optionally, reset form or show success message
            } catch (err) {
                console.error("Failed to create playlist:", err);
                toast.error("Failed to create playlist. Please try again.");
                // Optionally, show error message
            }   
        };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"> 
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Create New Playlist</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Playlist Name</label> 
                        <input type="text" className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Enter playlist name" onChange={(e) => setNewPlaylist({...newPlaylist, name: e.target.value})} />
                    </div>
                    <div className="mb-4">  
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Description</label>
                        <textarea className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Enter playlist description" onChange={(e) => setNewPlaylist({...newPlaylist, description: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Create Playlist</button>
                </form>
            </div>  
        </div>
    );
}   
export default Create_playlist;