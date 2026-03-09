import { useContext } from "react";
import { DataContext } from "@/Context/UserContext";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Vdofunc() {
  const { setVdofunc ,setNewPlaylist} = useContext(DataContext);
  const navigate = useNavigate();
  

  return (
    <>
      {/* Backdrop */}
      <div
        className=" inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => setVdofunc(false)}
      />

      {/* Modal Panel */}
      <div className=" top-20 left-[35%] z-40 w-full max-w-md overflow-y-auto bg-white shadow-lg">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          
          <button
            onClick={() => setVdofunc(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <IoCloseSharp className="text-2xl text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <button className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left font-medium text-slate-900 transition hover:bg-slate-100" 
          onClick={()=>{navigate('/Playlist')}}>
            📋 Add to Playlist
          </button>
          <button className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left font-medium text-slate-900 transition hover:bg-slate-100">
            🔗 Share Video
          </button>
          <button className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left font-medium text-slate-900 transition hover:bg-slate-100">
            📝 Report Video
          </button>
          <button className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left font-medium text-slate-900 transition hover:bg-slate-100">
            📌 Save for Later
          </button>
        </div>
      </div>
    </>
  );
}
export default Vdofunc;