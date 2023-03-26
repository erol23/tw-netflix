import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Favorites from "../pages/Favorites";


const AppRouter = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/myfavorites" element={<Favorites />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default AppRouter;