import { useRef, useState } from 'react';
import '../styles/contact.css';

export default function Contact({ id, setActiveSection }) {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // Web3Forms access key (your own key)
    formData.append("access_key", "9dfbe4da-2072-4f49-ac9f-533bd1419d89");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();

      if (res.success) {
        setFormStatus("success");
        formRef.current.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus("error");
    }
  };

  return (
    <section id={id} className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll get back to you as soon as possible!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>abdullah74865@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+92 3135975939</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/abdullah-tanoli-421560253/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/abdullah-tanoli
              </a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/abdullah1139" target="_blank" rel="noopener noreferrer">
                github.com/abdullah1139
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Form Status Messages */}
        {formStatus === "success" && (
          <div className="form-status success">
            Your message has been sent successfully. Thank you!
          </div>
        )}
        {formStatus === "error" && (
          <div className="form-status error">
            Oops! Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
}
