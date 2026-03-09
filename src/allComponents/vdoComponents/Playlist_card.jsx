import axios from "axios";
import { useEffect ,useState,useContext} from "react";
import { toast } from "react-hot-toast";
import { DataContext } from "@/Context/UserContext";

function Card(){
    const [platlists,setPlalists]=useState([]);
const user=JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        const fetchPalylist= async ()=>{
            // ensure we have a logged-in user
           

            try{
                const res=await axios.get(`http://localhost:8000/api/v1/playlist/user/${user.user._id}`, {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    }
                });
                // server responds with { status, data, message }
                setPlalists(res.data.data || []);
                console.log(res.data);
                toast.success("playlists fetched successfully");

            }
            catch(err){
                console.log(err);
                toast.error("failed to fetch playlists");
            }
        }
        fetchPalylist();

    }, [user?._id]);

  return (
    <>
      {platlists && platlists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {platlists.map((playlist) => (
            <div
              key={playlist._id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {playlist.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {playlist.description || "No description"}
              </p>
              <p className="mt-3 text-xs text-slate-400">
                {playlist.videos.length} video{playlist.videos.length !== 1 && "s"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No playlists found.</p>
      )}
    </>
  );
}
export default Card ;
