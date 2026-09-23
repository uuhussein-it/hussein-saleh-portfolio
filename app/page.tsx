import Image from "next/image";
import Link from "next/link";
import { profile, about, skills, projects, contact } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#top" className="brand">
            Hussein<span>Saleh</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Hire Me</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-badge">
              M.Ed. • Learning Design & Technology
            </span>
            <h1>
              Hi, I&apos;m <span className="gradient">{profile.firstName} Saleh</span>
            </h1>
            <p className="lead">{profile.role}</p>
            <p className="sub">{profile.intro}</p>
            <div className="buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href={profile.resumeUrl} className="btn btn-secondary">
                Resume
              </a>
            </div>
            <div className="stats-row">
              {profile.stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="float-card float-card-lg">
              <Image
                src="/photos/elearning-module.svg"
                alt=""
                width={420}
                height={280}
                priority
              />
            </div>
            <div className="float-card float-card-sm">
              <Image
                src="/photos/microlearning.svg"
                alt=""
                width={420}
                height={280}
              />
            </div>
            <div className="float-card float-card-xs">
              <Image
                src="/photos/storyboard.svg"
                alt=""
                width={420}
                height={280}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section" id="about">
        <div className="container split">
          <div className="about-text">
            <p className="eyebrow">About Me</p>
            <h2 className="section-title">{about.headline}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-cards">
            {about.highlights.map((h) => (
              <div className="about-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt" id="skills">
        <div className="container">
          <div className="text-align-center">
            <p className="eyebrow">What I Do</p>
            <h2 className="section-title">Skills & Tools</h2>
            <p className="section-subtitle center-block">
              The frameworks, tools, and practices I use to design and build
              effective learning experiences.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <h3>
                  <span className="skill-icon" aria-hidden="true" />
                  {s.title}
                </h3>
                <div className="skill-pills">
                  {s.items.map((item) => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <div className="text-align-center">
            <p className="eyebrow">Recent Work</p>
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle center-block">
              Selected projects from my coursework and freelance work. Each
              entry explains the problem, my process, and the outcome.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <Link
                href={p.href}
                className="project-card"
                key={p.title}
              >
                <div className="project-thumb">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.title}
                      width={720}
                      height={480}
                      className="project-photo"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    p.imageLabel
                  )}
                </div>
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="skill-pills">
                    {p.tags.map((t) => (
                      <span className="pill" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="project-view">View case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-box">
            <h2>{contact.heading}</h2>
            <p>{contact.message}</p>
            <p className="contact-location">{contact.location}</p>
            <div className="contact-actions">
              <a className="btn btn-light" href={contact.emailHref}>
                {contact.email}
              </a>
              <a
                className="btn btn-outline-light"
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>
            <a href={contact.emailHref}>Email</a>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}