import "./TutorDashboard.css";

import clubZlogo from "../../../assets/images/club-z-logo.png";
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
            <img src="" alt="temp profile photo" />
          </div>
          <div className="sideBar_btns">
            <button className="schudule-btn">Schedule</button>
            <button className="students-btn">Students</button>
            <button className="reports-btn">Reports</button>
            <button className="profile-btn">Profile</button>
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
            <div className="Stats_sessions"></div>
            <div className="Stats_Students"></div>
            <div className="Stats_hours"></div>
            <div className="Stats_rating"></div>
          </div>
          <div className="TD_main-grid">
            <div className="TDSchedule">Schedule</div>
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
