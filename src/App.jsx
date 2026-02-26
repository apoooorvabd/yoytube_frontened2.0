import React from "react";
import Login from "./allComponents/Login";
import Hero from "./allComponents/Hero";
import { Card } from "./allComponents/ui/card";
import Sigup from "./allComponents/Sigup";
import { useContext } from "react";
import { DataContext } from "./Context/UserContext";
import { Routes } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./allComponents/UserDashboard";
import Uploadvdo from "./allComponents/Uploadvdo";
import Showvdo from "./allComponents/Showvdo";
import { useParams } from "react-router-dom";

// wrapper that keys Showvdo by id so it fully remounts when the parameter changes
function VideoWrapper() {
  const { id } = useParams();
  return <Showvdo key={id} />;
}

export default function App() {
  const ctx = useContext(DataContext);
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