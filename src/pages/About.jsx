import './About.css'
import { convertMarkdownToHtml } from '../utils/markdown.js'
import aboutMd from '../data/about.md?raw'

function About() {
  const aboutContent = convertMarkdownToHtml(aboutMd);
  
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-container">
          <div className="about-header">
            <div className="profile-image-placeholder">
              <span className="initials">MFP</span>
            </div>
            <h1 className="about-title">Mohammed Firdouse Pasha</h1>
            <p className="about-subtitle">Technology Strategy & Transformation | AWS Cloud Specialist | Cyber Security Lead</p>
            <p className="about-tagline">Ex-Deloitte | Ex-VMware | Ex-Thomson Reuters</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/pashafirdous" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/pashafirdous" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="content-container">
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: aboutContent }} />
        </div>
        <div className="content-container-old" style={{display: 'none'}}>
          <section className="about-section">
            <h2>About Me</h2>
            <p className="intro-text">
              Technology Consultant/Manager with over <strong>16+ years</strong> of proven track record in Cloud migrations, 
              Containerization, Datacenter Virtualization, DevOps, and Cloud Security. I have helped numerous teams 
              harness the power of cloud platforms and services, migrated datacenter workloads, and optimized 
              applications with best practices architecture design and implementation across the <strong>US, Europe, and Middle East</strong>.
            </p>
            <p className="intro-text">
              I've been an integral part of multiple projects, leading cloud strategy formulation, identification and 
              architecture development of hybrid cloud services, and assessment of application suitability for cloud 
              migration. I possess a strong command of infrastructure services and have delivered effective solutions 
              with outstanding customer satisfaction.
            </p>
            <p className="intro-text">
              My passion lies in enabling <strong>Platform agnostic, Infrastructure as Code (IaC) solutions, DevOps, 
              and Kubernetes workloads</strong>!
            </p>
          </section>

          <section className="about-section">
            <h2>Professional Experience</h2>
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Cyber Security Lead</h3>
                  <span className="experience-date">Aug 2024 - Present</span>
                </div>
                <p className="experience-company">Private Company · Saudi Arabia</p>
                <p className="experience-description">Leading cybersecurity initiatives and strategies for enterprise-level security implementations.</p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Technical Manager (Specialist Master) - Consulting</h3>
                  <span className="experience-date">Jun 2021 - Jul 2024 · 3 yrs 2 mos</span>
                </div>
                <p className="experience-company">Deloitte Consulting</p>
                <p className="experience-description">Led cloud transformation projects, architecture design, and strategic technology implementations for enterprise clients.</p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Lead Consultant</h3>
                  <span className="experience-date">Nov 2018 - Jun 2021 · 2 yrs 8 mos</span>
                </div>
                <p className="experience-company">Deloitte Consulting · Bangalore</p>
                <p className="experience-description">Delivered cloud migration strategies, infrastructure optimization, and DevOps implementations.</p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Sr. Engineer, Cloud Operations</h3>
                  <span className="experience-date">Jul 2016 - Nov 2018 · 2 yrs 5 mos</span>
                </div>
                <p className="experience-company">Integrated Telecom Company (ITC) · Saudi Arabia</p>
                <ul className="experience-highlights">
                  <li>Revamped On-Premises infrastructure with Platform, Hardware, Software solutions</li>
                  <li>Established partnership programs with Azure and AWS</li>
                  <li>Consulted with ITC Executive Cloud Customer on migration projects</li>
                  <li>VMware infrastructure management (5.5, 6.5)</li>
                  <li>Office 365 Deployment and administration</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Infrastructure Specialist</h3>
                  <span className="experience-date">May 2013 - Jun 2016 · 3 yrs 2 mos</span>
                </div>
                <p className="experience-company">EF Education First · Bangalore</p>
                <ul className="experience-highlights">
                  <li>Led cloud migration from hosted datacenter to AWS with minimal disruption</li>
                  <li>Expert management of VMware and AWS environments</li>
                  <li>Set up VPNs, IPSEC, and robust security measures (OpenVPN, SQUID proxy)</li>
                  <li>Administered Microsoft TFS servers and Windows SQL Always On clusters</li>
                  <li>Implemented enterprise antivirus solutions (TrendMicro, Symantec)</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>GOCC Analyst</h3>
                  <span className="experience-date">Oct 2011 - Mar 2013 · 1 yr 6 mos</span>
                </div>
                <p className="experience-company">VMware · Bangalore</p>
                <p className="experience-description">Certified VCP5, MCTS, CCNA, ITIL V3 - Managed global operations and cloud center infrastructure.</p>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h3>Systems Engineer</h3>
                  <span className="experience-date">Jan 2010 - Sep 2011 · 1 yr 9 mos</span>
                </div>
                <p className="experience-company">Thomson Reuters · GNOC Platforms</p>
                <ul className="experience-highlights">
                  <li>Monitored Data center and Management Servers including Virtual Machines</li>
                  <li>First-Line contact for Management Devices and Platform Servers</li>
                  <li>ITIL-based Incident Management, Change Management, and deployment activities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Key Certifications</h2>
            <div className="certifications-grid">
              <div className="cert-card active">
                <div className="cert-badge">🔒</div>
                <h4>CISSP</h4>
                <p>Certified Information Systems Security Professional</p>
                <span className="cert-date">Valid: Oct 2025 - Oct 2028</span>
              </div>
              <div className="cert-card active">
                <div className="cert-badge">☁️</div>
                <h4>Google Cloud Professional Architect</h4>
                <p>Professional Cloud Architect</p>
                <span className="cert-date">Valid: Feb 2024 - Feb 2026</span>
              </div>
              <div className="cert-card active">
                <div className="cert-badge">🔶</div>
                <h4>AWS Solutions Architect Professional</h4>
                <p>Amazon Web Services</p>
                <span className="cert-date">Valid: May 2023 - May 2026</span>
              </div>
              <div className="cert-card">
                <div className="cert-badge">⚙️</div>
                <h4>CKA & CKAD</h4>
                <p>Kubernetes Administrator & Developer</p>
                <span className="cert-date">The Linux Foundation</span>
              </div>
              <div className="cert-card">
                <div className="cert-badge">📘</div>
                <h4>VMware VCP6</h4>
                <p>Network Virtualization & Data Center</p>
                <span className="cert-date">VMware Certified Professional</span>
              </div>
              <div className="cert-card">
                <div className="cert-badge">🌐</div>
                <h4>MCSE & MCSA</h4>
                <p>Cloud Platform & Infrastructure</p>
                <span className="cert-date">Microsoft</span>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Core Expertise</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>☁️ Cloud Platforms</h3>
                <div className="skills-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Google Cloud</span>
                  <span className="skill-tag">Cloud Migration</span>
                  <span className="skill-tag">Hybrid Cloud</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🐳 Containers & Orchestration</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Container Migration</span>
                  <span className="skill-tag">Microservices</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🔧 DevOps & Automation</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Infrastructure as Code</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">DevOps</span>
                  <span className="skill-tag">Automation</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🔒 Security & Compliance</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Cyber Security</span>
                  <span className="skill-tag">Security Architecture</span>
                  <span className="skill-tag">CISSP</span>
                  <span className="skill-tag">Compliance</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🖥️ Infrastructure & Virtualization</h3>
                <div className="skills-tags">
                  <span className="skill-tag">VMware</span>
                  <span className="skill-tag">Datacenter Operations</span>
                  <span className="skill-tag">Windows Server</span>
                  <span className="skill-tag">Linux/Unix</span>
                  <span className="skill-tag">Active Directory</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🎯 Strategy & Leadership</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Technology Strategy</span>
                  <span className="skill-tag">Digital Transformation</span>
                  <span className="skill-tag">Project Management</span>
                  <span className="skill-tag">ITIL</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Education</h2>
            <div className="education-list">
              <div className="education-item">
                <h3>Master of Business Administration (MBA)</h3>
                <p className="education-school">Sikkim Manipal University - Distance Education</p>
                <p className="education-details">Project Management · 2013 - 2016 · Grade: A</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Engineering (B.E.)</h3>
                <p className="education-school">REVA University / Visvesvaraya Technological University</p>
                <p className="education-details">Electronics and Communication · 2005 - 2009</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>What You'll Find Here</h2>
            <div className="content-types">
              <div className="content-type">
                <h3>📝 Thoughts & Insights</h3>
                <p>My perspectives on technology, development practices, and industry trends.</p>
              </div>
              <div className="content-type">
                <h3>🔧 Technical Deep Dives</h3>
                <p>Detailed explorations of tools, frameworks, and programming concepts.</p>
              </div>
              <div className="content-type">
                <h3>📄 Resources & Documents</h3>
                <p>Curated guides, references, and downloadable resources to support your learning.</p>
              </div>
              <div className="content-type">
                <h3>💭 Learning Journey</h3>
                <p>Real experiences, lessons learned, and reflections from my continuous growth.</p>
              </div>
            </div>
          </section>

          <section className="about-section cta-section">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in connecting with fellow learners, builders, and thinkers. 
              Whether you have questions, ideas, or just want to say hi, feel free to reach out 
              on LinkedIn or check out my projects on GitHub.
            </p>
            <div className="cta-buttons">
              <a href="https://linkedin.com/in/pashafirdous" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                Connect on LinkedIn
              </a>
              <a href="/#" className="cta-button secondary">
                Explore My Thoughts
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
