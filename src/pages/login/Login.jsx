import { useNavigate } from "react-router-dom";

import "./Login.css";

import WelcomeTutorImg from "../../assets/images/login_background-tutor-img.svg";
import lockIcon from "../../assets/icons/lock-icon.svg";
import clubZlogo from "../../assets/images/club-z-logo.png";
import TutorDashboard from "../../pages/Tutor/dashboard/TutorDashboard";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section className="login_page">
        <img
          src={WelcomeTutorImg}
          className="login_background"
          alt="welcometutorimage"
        />
        <div className="login_content">
          <div className="login-left">
            <img src={clubZlogo} className="login__logo" alt="logo"></img>
            <div className="login_welcome">
              <h1>Hello,</h1>
              <h2> Welcome Back!</h2>
              <h3> Club Z Tutoring Portal</h3>
              <p>
                Access your tutoring portal to view sessions, schedules, and
                messages{" "}
              </p>
            </div>
            <button
              type="button"
              className="login_button"
              onClick={() => navigate("/tutor/dashboard")}
            >
              <img
                src={lockIcon}
                className="login_button-lockIcon"
                alt="lockIcon"
              ></img>
              Log In
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
