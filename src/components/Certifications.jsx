import '../styles/certifications.css'
import { FaDownload } from 'react-icons/fa'

export default function Certifications({ id, setActiveSection }) {
  const certifications = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      date: "2023",
      credential: "Credential ID: SSHKZ4GYQHG8",
      pdfFile: "/front-specialization.pdf" // Path to PDF in public folder
    },
    {
      title: "Meta React Native",
      issuer: "Coursera",
      date: "2023",
      credential: "Credential ID: P6D4V6NDVY4B",
      pdfFile: "/react-native-sp.pdf" // Path to PDF in public folder
    }
  ]

  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = fileName || 'certificate.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id={id} className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-header">
              <h3>{cert.title}</h3>
              <button 
                className="download-btn"
                onClick={() => handleDownload(cert.pdfFile, `${cert.title.replace(/\s+/g, '_')}.pdf`)}
                aria-label={`Download ${cert.title} certificate`}
              >
                <FaDownload className="download-icon" />
              </button>
            </div>
            <p className="issuer">{cert.issuer}</p>
            <div className="cert-meta">
              <span className="date">{cert.date}</span>
              <span className="credential">{cert.credential}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}