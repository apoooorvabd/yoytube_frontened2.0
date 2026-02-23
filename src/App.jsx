import React from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import { Card } from "./components/ui/card";
import Sigup from "./components/Sigup";
import { useContext } from "react";
import { DataContext } from "./UserContext";
import { Routes } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./components/UserDashboard";
import Uploadvdo from "./components/Uploadvdo";

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
      </Routes>
       <Toaster position="top-right" />
    </BrowserRouter>
  );
}