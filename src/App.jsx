import './App.css'
import { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import StudentCard from './components/StudentCard'
import heroImg from './assets/hero.png'
import profileImg from './assets/profile.jpg'

function App() {

  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const projects = [
    {
      title: 'Student Information System',
      description:
        'A desktop-based system for managing student records, sections, courses, and enrollment details.',
      tech: ['VB.NET', 'MS Access', 'SQL'],
    },
    {
      title: 'Employee Attendance System',
      description:
        'Distributed attendance tracking system with branch synchronization.',
      tech: ['VB.NET', 'MySQL', 'XAMPP'],
    },
    {
      title: 'QUERYX Database Learning Game',
      description:
        'Game project designed to teach database concepts interactively.',
      tech: ['Game Design', 'UI/UX', 'Database'],
    },
  ]

  const skills = [
    'HTML','CSS','JavaScript','React','VB.NET','C++','MySQL','MS Access','XAMPP','GitHub','Python','Java'
  ]

  return (
    <div className="app-shell">

      <div className="page-blur page-blur-one"></div>
      <div className="page-blur page-blur-two"></div>

      <header className="hero-section">

        <nav className="navbar">
            <div className="logo">
              Dev <span>XNDR</span>
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? '✕' : '☰'}
            </button>

            <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
              <div className="nav-links">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
              </div>
            </div>
          </nav>

        <div className="hero-content">

          <div className="hero-text">

            <p className="eyebrow">Student Portfolio</p>

            <h1>
              Hi, I'm <span>Alexander</span>
            </h1>

            <p className="hero-description">
              I build practical student projects, database systems, and clean user
              interfaces while continuously improving my skills in software and web development.
            </p>

            <div className="hero-stats">

              <div className="stat-box">
                <h3>3+</h3>
                <p>Major Projects</p>
              </div>

              <div className="stat-box">
                <h3>10+</h3>
                <p>Technical Skills</p>
              </div>

              <div className="stat-box">
                <h3>BSIT</h3>
                <p>Student Developer</p>
              </div>

            </div>

            <div className="hero-buttons">

              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

            </div>

          </div>


          <div className="hero-visual-card">

            <div className="hero-visual-top">
              <img src={heroImg} className="hero-image" />
            </div>

            <div className="hero-visual-bottom">

              <div className="mini-card">
                <span>Focus</span>
                <strong>Frontend + Systems</strong>
              </div>

              <div className="mini-card">
                <span>Goal</span>
                <strong>Internship Ready</strong>
              </div>

            </div>

          </div>

        </div>

      </header>


      <main>

        <section id="about" className="section">

          <AboutMe
            name="Alexander C. Hoybia"
            role="BSIT Student Developer"
            bio="I am a BSIT student passionate about building practical systems and applications."
            image={profileImg}
          />

        </section>


        <section className="section">

          <StudentCard
            school="Lyceum of Alabang"
            course="BS Information Technology"
            year="3rd Year"
            email="alexanderhoybia12@gmail.com"
            location="Philippines"
          />

        </section>


        <section id="skills" className="section">

          <Skills skills={skills} />

        </section>


        <section id="projects" className="section">

          <Projects projects={projects} />

        </section>


        <section id="contact" className="section contact-section">

          <div className="section-heading">

            <p className="section-tag">Contact</p>
            <h2>Let's Build Something</h2>

          </div>

          <div className="contact-grid">

            <a className="contact-card" href="https://mail.google.com/mail/u/0/#inbox?compose=lqrsljbBpSdFhlDKjSwvpVNcQRmtqGvnbDhWLXxXnCrXKRCNshKSccFchCpwmTFBgzhmcMGcpTZRZvdhT">
              <h3>Email</h3>
              <p>alexanderhoybia12@gmail.com</p>
            </a>

            <a className="contact-card" href="https://www.facebook.com/AlexHbia.21" target="_blank">
              <h3>Facebook</h3>
              <p>Alexander Hoybia</p>
            </a>

            <a className="contact-card" href="https://github.com/AlexanderHbia0921" target="_blank">
              <h3>GitHub</h3>
              <p>AlexanderHbia0921</p>
            </a>

          </div>

        </section>

      </main>


      <button
        className="theme-toggle floating-theme-toggle"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

    </div>
  )
}

export default App