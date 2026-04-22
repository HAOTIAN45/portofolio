import { useEffect, useRef } from "react"

export default function Hero() {
    const heroRef = useRef(null)

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

        const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #09090b;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Gradient background effect */
        .hero-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 30%, rgba(63, 63, 70, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-greeting {
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #52525b;
          font-family: 'DM Mono', monospace;
        }

        .hero-name {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          letter-spacing: -0.03em;
          line-height: 1.1;
          background: linear-gradient(135deg, #fafafa 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #3f3f46;
          font-family: 'DM Mono', monospace;
        }

        .hero-description {
          color: #71717a;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid #27272a;
          color: #fafafa;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          transition: all 0.3s ease;
        }

        .hero-cta:hover {
          border-color: #fafafa;
          gap: 1rem;
        }

        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #18181b;
          border: 1px solid #27272a;
          color: #a1a1aa;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          transition: all 0.3s ease;
        }

        .hero-cta-secondary:hover {
          background: #27272a;
          color: #fafafa;
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

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>

            <section id="hero" className="hero-root" ref={heroRef}>
                <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Column */}
                            <div>
                                <div className="animate-on-scroll">
                                    <p className="hero-greeting mb-4">✦ Welcome</p>
                                    <h1 className="hero-name mb-4">
                                        Christian<br />
                                        Dwi Nugroho
                                    </h1>
                                    <p className="hero-title mb-6">Fullstack Developer</p>
                                    <p className="hero-description mb-8">
                                        Crafting digital experiences with modern web technologies.
                                        Specializing in React, Next.js, and fullstack development.
                                    </p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="hero-cta"
                                        >
                                            Let's Connect
                                            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                                                <path d="M1 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="hero-cta-secondary"
                                        >
                                            View Work
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Code/Design element */}
                            <div className="animate-on-scroll hidden md:block">
                                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <pre className="text-zinc-400 text-xs font-mono">
                                        <code>{`const developer = {
  name: "Christian",
  role: "Fullstack Developer",
  location: "Magelang, Indonesia",
  passion: ["Web Dev", "UI/UX", "Problem Solving"]
};

function build() {
  return developer.passion.map(p => 
    <Project tech={p} />
  );
}`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="2">
                        <path d="M12 5v14M8 15l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>
        </>
    )
}