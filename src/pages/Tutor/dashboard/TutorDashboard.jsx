import "./TutorDashboard.css";
import "../schedule/Calendar.jsx";

import { useNavigate } from "react-router-dom";

import clubZlogo from "../../../assets/images/club-z-logo.png";
import tutor1 from "../../../assets/images/sample profile photo/tutor1.jpg";
import {
  alertBlk,
  alertBlue,
  calendarBlk,
  calendarBlue,
  clockBlk,
  clockBlue,
  clockIcon,
  lockIcon,
  messageBlk,
  messageBlue,
  peopleBlK,
  peopleBlue,
  peopleIcon,
} from "../../../assets/icons/icons";

function TutorDashboard() {
  return (
    <div className="Tdashboard_page">
      <div className="TDpage-container">
        <div className="TDSideBar">
          <div className="sideBar_logo">
            <img src={clubZlogo} alt="Club Z Logo" />
          </div>
          <div className="sideBar_profile-photo">
            <img src={tutor1} alt="temp profile photo" />
            Marcus Humane
          </div>
          <div className="sideBar_btns">
            <button type="button" className="dashboard">
              <img src={calendarBlk} alt="Dashboard-Home"></img>
              Dashboard
            </button>
            <button
              onClick={() => navigate("tutor/schedule")}
              type="button"
              className="schedule-btn"
            >
              <img src={calendarBlk} alt="calendar-blk"></img>
              Schedule
            </button>
            <button type="button" className="messages-btn">
              <img src={calendarBlk} alt="messages"></img>
              Messages
            </button>
            <button type="button" className="resources-btn">
              <img src={calendarBlk} alt="resources"></img>
              Resources
            </button>
            <button type="button" className="students-btn">
              <img src={peopleIcon} alt=""></img>
              Students
            </button>
            <button type="button" className="reports-btn">
              <img src={calendarBlk} alt="calendar-blk"></img>
              Reports
            </button>
            <button type="button" className="profile-btn">
              <img src={peopleBlK} alt="calendar-blk"></img>
              Profile
            </button>
          </div>

          <button
            type="button"
            className="logout-btn"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>

        <div className="TD_main-content">
          <div className="TDheader-container">
            <div className="TDheader-text">
              <h1>DashBoard</h1>
              <h2>Here's what's happening with your tutoring sessions</h2>
            </div>
            <div className="TDdate-time-location"></div>
            <button className="alerts-button">
              <img src={alertBlk} alt="alert-button" />
            </button>
            <button className="messages-button">
              <img src={messageBlk} alt="messages-button" />
            </button>
          </div>
          <div className="TD-main-stats">
            <div className="Stats_sessions">
              <button type="button" className="session_status">
                <img scr={calendarBlk} alt="calendar"></img>
              </button>
            </div>
            <div className="Stats_Students">
              <button type="button" className="session_status">
                <img scr={calendarBlk} alt="students"></img>
              </button>
            </div>
            <div className="Stats_hours">
              <button type="button" className="session_status">
                <img scr={calendarBlk} alt="clock"></img>
              </button>
            </div>
            <div className="Stats_rating">
              <button type="button" className="session_status">
                <img scr={calendarBlk} alt="rating"></img>
              </button>
            </div>
          </div>
          <div className="TD_main-grid">
            <div className="TDSchedule">
              <img src={calendarBlk} alt="calendar-blk"></img>
              Schedule
            </div>
            <div className="TDSessions">Sessions</div>
            <div className="TDoverview">Overview</div>
            <div className="TDmessage">Messages</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;
