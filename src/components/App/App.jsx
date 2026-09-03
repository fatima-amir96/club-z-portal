//import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../../pages/login/Login.jsx";
import TutorDashboard from "../../pages/Tutor/dashboard/tutorDashboard";

function App() {
  return (
    <Routes>
      <route path="/" element={<login />} />
      <Route path="/tutor/dashboard" element={<tutorDashboard />} />
    </Routes>
  );
}

export default App;
