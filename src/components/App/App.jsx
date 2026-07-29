//import { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import "./App.css";

import tutorStudentImage from "../../assets/images/tutorStudentImage.png";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <section className="login_page" id="center">
        <div className="login_background">
          <img
            src={tutorStudentImage}
            className="login_background-img"
            width="170"
            height="179"
            alt="background-img"
          />
          <div className="login_background-shape"></div>
        </div>
        <div className="login_welcome">
          <h1>Welcome!</h1>
          <p>Signin to access your tutor portal</p>
        </div>
        <button
          type="button"
          className="login_button"
          onClick={() => setCount((count) => count + 1)}
        >
          <img className="login_button-lockIcon" alt="lockIcon"></img>
          Login
        </button>
      </section>
    </>
  );
}

export default App;
