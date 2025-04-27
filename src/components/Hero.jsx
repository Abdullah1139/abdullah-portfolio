import '../styles/main.css'

export default function Hero({ id, setActiveSection }) {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = '/Abdullah_Habib_CV.pdf' // Path to your CV in public directory
    link.download = 'Abdullah_Habib_FullStack_Developer_CV.pdf' // Custom filename for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id={id} className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Abdullah Habib</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build exceptional digital experiences with modern web technologies.
            Specializing in MERN stack development and mobile applications using React Native.
            Passionate about creating user-friendly interfaces and efficient back-end systems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary" onClick={() => setActiveSection('projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn secondary" onClick={() => setActiveSection('contact')}>
              Contact Me
            </a>
            <button className="btn tertiary" onClick={handleDownloadCV}>
              <i className="fas fa-download"></i> Download CV
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpeg" alt="Abdullah Habib" />
        </div>
      </div>
    </section>
  )
}