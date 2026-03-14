function StudentCard({ school, course, year, email, location }) {
  return (
    <div className="student-card">
      <div className="section-heading left-align">
        <p className="section-tag">Student Profile</p>
        <h2>Quick Information</h2>
      </div>

      <div className="student-info-grid">
        <div className="info-box">
          <span>School</span>
          <h3>{school}</h3>
        </div>
        <div className="info-box">
          <span>Course</span>
          <h3>{course}</h3>
        </div>
        <div className="info-box">
          <span>Year Level</span>
          <h3>{year}</h3>
        </div>
        <div className="info-box">
          <span>Email</span>
          <h3>{email}</h3>
        </div>
        <div className="info-box">
          <span>Location</span>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  )
}

export default StudentCard