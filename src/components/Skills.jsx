function Skills({ skills }) {
  return (
    <div>
      <div className="section-heading">
        <p className="section-tag">Skills</p>
        <h2>Technologies and Tools</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills