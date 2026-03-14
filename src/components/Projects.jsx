function Projects({ projects }) {
  return (
    <div>
      <div className="section-heading">
        <p className="section-tag">Projects</p>
        <h2>My Academic and Personal Works</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((item, techIndex) => (
                <span key={techIndex}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects