import '../styles/Footer.css'; // Adjust the path as necessary

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Abdullah Habib</h3>
            <p>Full Stack Developer specializing in MERN stack applications.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/abdullah-tanoli" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/abdullah1139" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:abdullah74865@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Abdullah Habib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}