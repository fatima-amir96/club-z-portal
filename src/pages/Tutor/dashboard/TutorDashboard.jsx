import clubZlogo from "../../assets/images/club-z-logo.png";

function TutorDashboard() {
  return (
    <div className="Tdashboard">
      <div className="TDheader-container">
        <h1>DashBoard</h1>
        <h2>Here's what's happeing with you tutoring sessions</h2>
        <div className="date-time-location"></div>
        <button className="alerts-button">
          <img src="" alt="alert-button" />
        </button>
        <button className="messages-button">
          <img src="" alt="alert-button" />
        </button>
      </div>
      <div className="TDpage-container">
        <div className="TDSideBar">
          <div className="sideBar_logo">
            <img src={clubZlogo} alt="Club Z Logo" />
          </div>
          <div className="sideBar_profile-photo"></div>
          <button className="schudule-btn">Schedule</button>
          <button className="students-btn">Students</button>
          <button className="reports-btn">Reports</button>
          <button className="profile-btn">Profile</button>
        </div>
        <div className="TD_main-content">
          <div className="TD_main-grid">
            <div className="TDSchedule"></div>
            <div className="TDSessions"></div>
            <div className="TDoverview"></div>
            <div className="TDmessage"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;
