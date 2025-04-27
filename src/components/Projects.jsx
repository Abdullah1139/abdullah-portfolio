import '../styles/projects.css'
import { FaGithub } from 'react-icons/fa'

export default function Projects({ id, setActiveSection }) {
  const projects = [
    {
      title: "Hostel Booking App",
      description: "A full-stack application for university students to book hostels online with payment integration.",
      technologies: ["React-Native", "Node.js", "MongoDB", "Express"],
      image: "/hostels.jpeg", // Path to image in public folder
      githubLink: "https://github.com/Abdullah1139/Find-Your-Hostel",
      demoLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store with product catalog, shopping cart, and user accounts.",
      technologies: ["React", "Redux", "Bootstrap", ],
      image: "/ecom.PNG", // Path to image in public folder
      githubLink: "https://github.com/Abdullah1139/Ecommerce-web",
      demoLink: "https://ecommerce-web-eta.vercel.app/"
    },
    {
      title: "Admin Panel",
      description: "A web-based admin panel for managing user and donations for Crowd Funding website.",
      technologies: ["React", "Redux", "Bootstrap", ],
      image: "/admin.PNG", // Path to image in public folder
      githubLink: "https://github.com/Abdullah1139/Dashboard",
      demoLink: "#"
    },
    
    
  ]

  return (
    <section id={id} className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub className="github-icon" /> View Code
                </a>
                <a 
                  href={project.demoLink} 
                  className="demo-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}