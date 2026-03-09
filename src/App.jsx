import React from "react";
import Login from "./allComponents/userComponents/Login";
import Hero from "./allComponents/userComponents/Hero";
import { Card } from "./allComponents/ui/card";
import Sigup from "./allComponents/userComponents/Sigup";
import { useContext } from "react";
import { DataContext } from "./Context/UserContext";
import { Routes } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./allComponents/userComponents/UserDashboard";
import Uploadvdo from "./allComponents/userComponents/Uploadvdo";
import Showvdo from "./allComponents/vdoComponents/Showvdo";
import { useParams } from "react-router-dom";
import VdoComments from "./allComponents/vdoComponents/Vdocomments";
import  Playlist  from "./allComponents/vdoComponents/Playlist";
import  VdoFunc from "./allComponents/vdoComponents/VdoFunc"
import SubscribedChannel from "./allComponents/userComponents/SubcribedChannel";

// wrapper that keys Showvdo by id so it fully remounts when the parameter changes
function VideoWrapper() {
  const { id } = useParams();
  return <Showvdo key={id} />;
}


export default function App() {
  const ctx = useContext(DataContext);
  const vdoFunc =useContext(DataContext);
  if (!ctx) return null;
  const { sigup, login } = ctx;

  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sigup />} />
        <Route path="/Upload" element={<Uploadvdo />} />
        <Route path="/Dashboard" element={<UserDashboard />} />
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/subscribedchannels" element={<SubscribedChannel/>}/>
        {/* wrap Showvdo in a wrapper with key so it remounts when id changes */}
        <Route
          path="/videos/:id"
          element={<VideoWrapper />}
        />
</Routes>
       <Toaster position="top-right" />

       
    </BrowserRouter>
  );
}