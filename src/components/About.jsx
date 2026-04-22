import { useEffect, useRef, useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skills = {
    frontend: ["React", "Tailwind CSS", "Bootstrap", "Framer Motion"],
    backend: ["Node.js", "Express", "MySQL", "MongoDB"],
    tools: ["Git", "Docker", "Figma", "VSCode"]
  }

  const experiences = [
    { year: "2025", title: "Freelance Web Developer", company: "Haotian" },
    { year: "2025", title: "Frontend Web Developer", company: "Gamelab Indonesia" },
    { year: "2023", title: "Website Designer", company: "Yayasan Harapan Sejahtera Dunia" }
  ]

  return (
    <>
      <style>{`
        .about-root {
          font-family: 'DM Sans', sans-serif;
          background: #09090b;
          position: relative;
        }

        .section-badge {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #52525b;
          font-family: 'DM Mono', monospace;
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border: 1px solid #27272a;
          border-radius: 2rem;
        }

        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fafafa 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-text {
          color: #71717a;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .tab-button {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
          font-family: 'DM Mono', monospace;
        }

        .tab-button.active {
          color: #fafafa;
          border-bottom: 1px solid #fafafa;
        }

        .tab-button:not(.active) {
          color: #52525b;
        }

        .tab-button:not(.active):hover {
          color: #a1a1aa;
        }

        .skill-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #18181b;
          border: 1px solid #27272a;
          color: #a1a1aa;
          font-size: 0.75rem;
          font-family: 'DM Mono', monospace;
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          border-color: #52525b;
          color: #fafafa;
        }

        .timeline-item {
          position: relative;
          padding-left: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #52525b;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: 0.2rem;
          top: 1rem;
          width: 1px;
          height: calc(100% - 0.5rem);
          background: #27272a;
        }

        .timeline-item:last-child::after {
          display: none;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="about" className="about-root py-24 px-6" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge mb-4">✦ About Me</span>
            <h2 className="section-title mt-4">Crafting Code,<br />Creating Impact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="animate-on-scroll">
              <p className="about-text mb-6">
                I'm a passionate fullstack developer based in Magelang, Indonesia. 
                With over 4 years of experience in web development, I specialize in 
                building responsive, performant, and user-centric applications.
              </p>
              <p className="about-text mb-6">
                My journey in tech started with a curiosity for how things work on 
                the web. Today, I combine creativity with technical expertise to 
                deliver solutions that make a difference.
              </p>
              <p className="about-text">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying a good cup of coffee.
              </p>
            </div>

            {/* Right Column */}
            <div className="animate-on-scroll">
              <div className="flex gap-4 border-b border-zinc-800 mb-6">
                <button 
                  className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button 
                  className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </button>
              </div>

              {activeTab === 'skills' && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-white text-sm font-mono mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-white text-sm font-mono mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-mono mb-3">Tools & Others</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div>
                  {experiences.map(exp => (
                    <div key={exp.year} className="timeline-item">
                      <div className="text-zinc-500 text-xs font-mono mb-1">{exp.year}</div>
                      <div className="text-white text-sm font-medium mb-1">{exp.title}</div>
                      <div className="text-zinc-500 text-xs">{exp.company}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}