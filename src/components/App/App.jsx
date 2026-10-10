//import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../../pages/login/Login.jsx";
import TutorDashboard from "../../pages/Tutor/dashboard/tutorDashboard";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tutor/dashboard" element={<TutorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
