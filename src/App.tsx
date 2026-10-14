import { useState } from "react";
import aboutImage from "../img/me.jpeg";
import dashboardImage from "../img/personal-dashboard.png";
import experiencesImage from "../img/experiences.png";
import memeImage from "../img/meme-generator.jpg";
import passwordImage from "../img/password-generator.jpg";
import portraitImage from "../img/dre.jpg";

const projects = [
  { number: "01", title: "Momentum Dashboard", description: "A focused personal dashboard bringing time, weather, and everyday context into one clean view.", image: dashboardImage, tags: ["JavaScript", "API", "UI design"], href: "https://stackblitz.com/edit/vitejs-vite-j2lh4dug" },
  { number: "02", title: "Meme Picker", description: "A playful, interaction-led experience for finding the right reaction for any mood.", image: memeImage, tags: ["React", "Data", "Interaction"], href: "https://stackblitz.com/edit/vitejs-vite-1fdrcd" },
  { number: "03", title: "Experience Explorer", description: "A visual travel interface designed to make discovering and saving new experiences feel effortless.", image: experiencesImage, tags: ["Responsive", "UX", "Frontend"], href: "https://github.com/greatdane-cloud" },
  { number: "04", title: "Password Generator", description: "A compact utility that turns a practical task into a clear, polished product experience.", image: passwordImage, tags: ["JavaScript", "Utility", "Accessibility"], href: "https://github.com/greatdane-cloud" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>J<span>/</span>VDB</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation-links">
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} id="navigation-links">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="availability" href="#contact"><span />Available for work</a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-kicker"><span>Frontend-focused full-stack developer</span><span>East London, South Africa</span></div>
        <div className="hero-title">
          <h1>I build digital<br />experiences <em>with</em><br /><span className="title-indent">purpose.</span></h1>
          <div className="portrait-wrap">
            <img src={portraitImage} alt="Jeandre van der Byl smiling" className="portrait" />
            <div className="portrait-label">Jeandre van der Byl</div>
          </div>
        </div>
        <div className="hero-bottom">
          <p>With 6+ years of hands-on experience, I build scalable web products from polished interfaces to dependable full-stack systems.</p>
          <a className="round-link" href="#work" aria-label="View selected work"><span>View work</span><span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>React</span><i>✳</i><span>Node.js</span><i>✳</i><span>TypeScript</span><i>✳</i><span>SQL</span><i>✳</i>
          <span>React</span><i>✳</i><span>Node.js</span><i>✳</i><span>TypeScript</span><i>✳</i><span>SQL</span><i>✳</i>
        </div>
      </div>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · 2021—2025</p>
          <h2>Projects built to be<br /><em>used, not just viewed.</em></h2>
        </div>
        <article className="featured-build">
          <div className="featured-main">
            <p className="eyebrow">Featured full-stack build</p>
            <p className="featured-index">01 / Case study</p>
            <h3>Spooky<br /><em>Sightings</em></h3>
            <p className="featured-summary">A lightweight, production-style application for recording and managing paranormal sighting reports.</p>
            <a href="https://github.com/greatdane-cloud/spooky-" target="_blank" rel="noreferrer">Explore the repository <Arrow /></a>
          </div>
          <div className="featured-details">
            <div><span>Backend</span><p>Modular Node.js architecture with custom routing, structured controllers, and JSON persistence.</p></div>
            <div><span>Frontend</span><p>A responsive, framework-free interface built with Vanilla JavaScript, HTML5, and CSS3.</p></div>
            <div><span>Workflow</span><p>Environment-based configuration, structured logging, clear documentation, and reproducible WSL development.</p></div>
          </div>
        </article>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-copy">
                <div>
                  <span className="project-index">{project.number} / Project</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul aria-label="Project technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a className="project-text-link" href={project.href} target="_blank" rel="noreferrer">View project <Arrow /></a>
              </div>
              <a className="project-image-wrap" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                <div className="browser-frame">
                  <div className="browser-bar"><span /><span /><span /><p>{project.title.toLowerCase().replaceAll(" ", "-")}.project</p></div>
                  <img className="project-image" src={project.image} alt={`${project.title} project interface`} />
                </div>
                <span className="project-arrow"><Arrow /></span>
              </a>
            </article>
          ))}
        </div>
        <a className="text-link" href="https://github.com/greatdane-cloud" target="_blank" rel="noreferrer">See more on GitHub <Arrow /></a>
      </section>

      <section className="about" id="about">
        <div className="about-image"><img src={aboutImage} alt="Jeandre standing by the ocean" /><span>Based by the coast</span></div>
        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2>Curious by nature.<br /><em>Precise by practice.</em></h2>
          <div className="about-body">
            <p>I’m Jeandre, a frontend-focused full-stack developer and the founder of Computer Connection Pty Ltd. I care about making digital products feel simple, useful, and distinctly human.</p>
            <p>Since 2020, I’ve delivered client systems, UI improvements, Shopify theme fixes, domain administration, infrastructure support, and maintainable development workflows.</p>
          </div>
          <div className="capabilities"><span>01 / Interface design</span><span>02 / Full-stack development</span><span>03 / Client systems & support</span></div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="experience-intro">
          <div><p className="eyebrow">Experience & credentials</p><h2>Built through practice.<br /><em>Backed by fundamentals.</em></h2></div>
          <div className="experience-stat"><strong>6+</strong><span>years of hands-on development and client delivery</span></div>
        </div>
        <div className="career">
          <div className="career-date">2020—Present</div>
          <div><p className="career-label">Founder & Full-Stack Developer</p><h3>Computer Connection Pty Ltd</h3><p>Building and supporting branded client solutions across React, TypeScript, Node.js, hosting, domains, email, Shopify, and technical operations.</p></div>
          <a href="https://github.com/greatdane-cloud/computer-connection" target="_blank" rel="noreferrer" aria-label="View Computer Connection on GitHub"><Arrow /></a>
        </div>
        <div className="knowledge-grid">
          <div className="knowledge-column">
            <p className="eyebrow">Core subjects</p>
            <ul>
              <li><span>Languages</span><strong>JavaScript, TypeScript, SQL, C++</strong></li>
              <li><span>Frontend</span><strong>React, HTML5, CSS3, accessibility</strong></li>
              <li><span>Backend</span><strong>Node.js, Express, REST APIs</strong></li>
              <li><span>Systems</span><strong>Git, WSL, Dev Containers, DNS</strong></li>
              <li><span>Practice</span><strong>Clean architecture, documentation</strong></li>
            </ul>
          </div>
          <div className="knowledge-column credentials">
            <p className="eyebrow">Certifications</p>
            <ol>
              <li><span>01</span><strong>MCSA</strong><p>SQL Database Development</p></li>
              <li><span>02</span><strong>MTA</strong><p>Software Development Fundamentals</p></li>
              <li><span>03</span><strong>MTA</strong><p>Database Fundamentals</p></li>
              <li><span>04</span><strong>C++ CPA</strong><p>Programming Fundamentals</p></li>
              <li><span>05</span><strong>Scrimba</strong><p>Frontend Developer Career Path</p></li>
            </ol>
          </div>
        </div>
        <div className="profile-footer">
          <div><span>English</span><span>Native / Bilingual</span></div><div><span>Afrikaans</span><span>Full professional</span></div><div><span>Xhosa</span><span>Full professional</span></div>
          <a href="/jeandre-van-der-byl-cv.html" target="_blank">View full CV <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let’s make something<br /><em>worth talking about.</em></h2>
        <a className="contact-email" href="mailto:vanderbyljeandre@gmail.com">vanderbyljeandre@gmail.com <Arrow /></a>
        <footer>
          <p>© {new Date().getFullYear()} Jeandre van der Byl</p>
          <div className="social-links">
            <a href="https://github.com/greatdane-cloud" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jeandre-van-der-byl" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/jeandreavdb/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com/Jeandre_Vdb" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
