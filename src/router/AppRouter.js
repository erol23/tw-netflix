import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider, UserAuth } from "../context/AuthContext";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Favorites from "../pages/Favorites";
import Detail from "../pages/Detail";
import PrivateRouter from "./PrivateRouter";

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
          <Route path="/detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default AppRouter;
