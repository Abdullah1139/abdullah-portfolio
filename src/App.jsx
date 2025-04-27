import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-container">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <Hero id="home" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Certifications id="certifications" setActiveSection={setActiveSection} />
        <Contact id="contact" setActiveSection={setActiveSection} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
