import React from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import { Card } from "./components/ui/card";
import Sigup from "./components/Sigup";
import { useContext } from "react";
import { DataContext } from "./UserContext";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

export default function App() {
  const { sigup, login } = useContext(DataContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigup" element={<Sigup />} />
      </Routes>
      {sigup && <Sigup />}
      {login && <Login />}
    </>
  );
}