function AboutMe({ name, role, bio, image }) {
  return (
    <div className="about-card">
      <div className="about-image-wrap">
        <img src={image} alt={name} className="about-image" />
      </div>

      <div className="about-content">
        <p className="section-tag">About Me</p>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default AboutMe