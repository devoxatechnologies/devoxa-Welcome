import { useState, useEffect } from 'react'
import './index.css'
import './App.css'

/* ─── Data ─────────────────────────────────────────── */

const SERVICES = [
  {
    icon: '🧠',
    title: 'AI & Machine Learning',
    desc: 'We embed intelligence into your products — from NLP pipelines and recommendation engines to custom LLM integrations that drive real business value.',
    tags: ['LLM Integration', 'Computer Vision', 'MLOps'],
  },
  {
    icon: '⚡',
    title: 'Full-Stack Engineering',
    desc: 'End-to-end web and mobile applications built with modern frameworks, microservices architecture, and cloud-native infrastructure for scale.',
    tags: ['React / Next.js', 'Node.js', 'Cloud Infrastructure'],
  },
  {
    icon: '🎨',
    title: 'Product Design & UX',
    desc: 'From zero-to-one product strategy to polished UI systems, we design experiences that users love and that convert visitors into loyal customers.',
    tags: ['Design Systems', 'Prototyping', 'User Research'],
  },
  {
    icon: '🔐',
    title: 'DevSecOps',
    desc: 'Security baked in from day one. We build CI/CD pipelines, container orchestration, and compliance workflows that keep you shipping fast and safe.',
    tags: ['Kubernetes', 'Zero-Trust', 'SOC 2'],
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    desc: 'Transform raw data into strategic assets. Real-time streaming pipelines, data warehouses, and analytics dashboards that surface insights instantly.',
    tags: ['Spark / Kafka', 'dbt', 'BI Dashboards'],
  },
  {
    icon: '🚀',
    title: 'Growth Engineering',
    desc: 'We run rapid experimentation cycles to optimise conversions, retention, and revenue — pairing engineering rigour with product intuition.',
    tags: ['A/B Testing', 'Analytics', 'Performance'],
  },
]

const PROCESS = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into your business goals, users, and technical landscape.' },
  { num: '02', title: 'Architect', desc: 'Design scalable systems and wireframes aligned to your objectives.' },
  { num: '03', title: 'Build', desc: 'Iterative sprints with continuous delivery and transparent communication.' },
  { num: '04', title: 'Launch', desc: 'Smooth go-live with monitoring, docs, and handover support.' },
]

const TECHS = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐋', name: 'Docker' },
  { icon: '☸️', name: 'Kubernetes' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '🤖', name: 'OpenAI' },
  { icon: '📦', name: 'Terraform' },
  { icon: '🌐', name: 'Next.js' },
  { icon: '📊', name: 'Spark' },
]

/* ─── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <a href="#home" className="navbar-brand" id="navbar-brand">
        <img src="/devoxa_logo.png" alt="Devoxa Logo" className="navbar-logo" />
        <span className="navbar-wordmark">Devoxa <span>Technologies</span></span>
      </a>
      <ul className="navbar-links">
        <li><a href="#services" id="nav-services">Services</a></li>
        <li><a href="#process" id="nav-process">Process</a></li>
        <li><a href="#tech" id="nav-tech">Tech</a></li>
        <li><a href="#contact" id="nav-contact" className="navbar-cta">Get in touch</a></li>
      </ul>
    </nav>
  )
}

/* ─── Hero ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-bg-orbs" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <img
        src="/devoxa_logo.png"
        alt="Devoxa Technologies logo"
        className="hero-logo-float"
      />

      <div className="hero-badge" id="hero-badge">
        <span className="hero-badge-dot" aria-hidden="true" />
        Now Onboarding Clients for Q4 2026
      </div>

      <h1 className="hero-title">
        Build Faster.<br />
        <span className="gradient-text">Scale Smarter.</span>
      </h1>

      <p className="hero-subtitle">
        Devoxa Technologies is a premium digital engineering studio delivering AI-powered software, 
        world-class design, and cloud-native infrastructure for ambitious companies.
      </p>

      <div className="hero-actions">
        <a href="#contact" id="hero-cta-primary" className="btn btn-primary">
          Start a Project <span className="btn-icon" aria-hidden="true">→</span>
        </a>
        <a href="#services" id="hero-cta-secondary" className="btn btn-secondary">
          Explore Services
        </a>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-mouse" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

/* ─── Stats ─────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { num: '50+', label: 'Projects Delivered' },
    { num: '30+', label: 'Happy Clients' },
    { num: '8+', label: 'Countries Served' },
    { num: '4.9★', label: 'Average Rating' },
  ]
  return (
    <div className="stats-bar" aria-label="Key metrics">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i} id={`stat-${i}`}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Services ─────────────────────────────────────── */
function Services() {
  return (
    <section className="section" id="services" aria-label="Services">
      <div className="section-inner">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">
          Services built for the<br />
          <span className="gradient-text">modern digital era</span>
        </h2>
        <p className="section-desc">
          We combine deep engineering expertise with creative product thinking to deliver 
          solutions that set you apart.
        </p>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="glass-card service-card" key={i} id={`service-card-${i}`}>
              <div className="service-icon-wrap" aria-hidden="true">{s.icon}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => (
                  <span className="service-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ─────────────────────────────────────── */
function Process() {
  return (
    <section className="section process-section" id="process" aria-label="Our process">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="section-title">A process built for clarity<br />&amp; <span className="gradient-text">velocity</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We follow a rigorous yet agile delivery model so you always know where things stand.
          </p>
        </div>
        <div className="process-steps">
          {PROCESS.map((step, i) => (
            <div className="process-step" key={i} id={`process-step-${i}`}>
              <div className="step-number-wrap" aria-hidden="true">
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  background: 'var(--gradient-brand)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {step.num}
                </span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Tech Stack ─────────────────────────────────── */
function TechStack() {
  const doubled = [...TECHS, ...TECHS]
  return (
    <section className="section tech-section" id="tech" aria-label="Technology stack">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>Our Stack</div>
        <h2 className="section-title">
          Powered by <span className="gradient-text">best-in-class</span> technology
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          We use battle-tested tools and emerging technologies to deliver reliable, future-proof solutions.
        </p>
      </div>
      <div className="tech-scroll-wrapper" aria-hidden="true">
        <div className="tech-scroll-track">
          {doubled.map((tech, i) => (
            <div className="tech-chip" key={i}>
              <span className="tech-chip-icon">{tech.icon}</span>
              <span className="tech-chip-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ────────────────────────────────────────── */
function CTA() {
  return (
    <section className="cta-section" id="contact" aria-label="Call to action">
      <div className="cta-card">
        <h2 className="cta-title">
          Ready to build something<br />
          <span className="gradient-text">extraordinary?</span>
        </h2>
        <p className="cta-subtitle">
          Let's talk about your project. We'll help you define the right approach, 
          timeline, and team to make it a reality.
        </p>
        <div className="cta-actions">
          <a
            href="mailto:hello@devoxatech.com"
            id="cta-email-btn"
            className="btn btn-primary"
          >
            Email Us <span className="btn-icon" aria-hidden="true">✉</span>
          </a>
          <a
            href="https://cal.com"
            id="cta-schedule-btn"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="navbar-brand" id="footer-brand" style={{ display: 'inline-flex' }}>
              <img src="/devoxa_logo.png" alt="Devoxa" className="navbar-logo" />
              <span className="navbar-wordmark">Devoxa <span>Technologies</span></span>
            </a>
            <p>
              Premium digital engineering for companies that refuse to settle. 
              From idea to production — we've got you covered.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#tech">Tech Stack</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="#services">AI & ML</a></li>
              <li><a href="#services">Full-Stack Dev</a></li>
              <li><a href="#services">Product Design</a></li>
              <li><a href="#services">DevSecOps</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:hello@devoxatech.com">hello@devoxatech.com</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter / X</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} Devoxa Technologies. All rights reserved.
          </span>
          <div className="footer-socials">
            <a href="https://linkedin.com" className="social-link" id="social-linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
            <a href="https://twitter.com" className="social-link" id="social-twitter" aria-label="Twitter" target="_blank" rel="noreferrer">𝕏</a>
            <a href="https://github.com" className="social-link" id="social-github" aria-label="GitHub" target="_blank" rel="noreferrer">⌨</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
