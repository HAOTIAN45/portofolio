import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const projects = [
    {
      id: 1,
      title: "SeksEdu",
      category: "website",
      description: "Platform edukasi dan diagnosa kesehatan seksual yang aman,私密, dan terpercaya. Menyediakan informasi komprehensif tentang kesehatan reproduksi dan alat screening awal untuk berbagai kondisi.",
      longDescription: "SeksEdu adalah platform inovatif yang bertujuan untuk meningkatkan literasi kesehatan seksual di Indonesia. Dilengkapi dengan sistem diagnosa mandiri berbasis AI, artikel edukasi yang ditinjau oleh profesional medis, dan fitur konsultasi anonim. Dibangun dengan fokus pada keamanan data dan privasi pengguna.",
      tech: ["React", "Node.js", "Tailwind CSS", "Express.js", "MySQL"],
      images: [
        "assets/project/Project1-1.png",
        "assets/project/Project1-2.png",
        "assets/project/Project1-3.png",
        "assets/project/Project1-4.png"
      ],
      liveLink: "#",
      githubLink: "#",
      features: [
        "Sistem diagnosa mandiri dengan 80% akurasi",
        "Artikel edukasi dari pakar kesehatan",
        "Konsultasi anonim dengan profesional",
        "Forum diskusi terintegrasi",
        "Data pengguna terenkripsi end-to-end"
      ]
    },
    {
      id: 2,
      title: "Dimsum Wonton",
      category: "website",
      description: "Landing page modern untuk bisnis kuliner Dimsum Wonton dengan desain appetizing dan mobile-first approach.",
      longDescription: "Landing page profesional untuk brand Dimsum Wonton yang menampilkan menu, promo spesial, dan sistem pemesanan online. Desain yang colorful dan appetizing untuk meningkatkan konversi penjualan.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Google Maps API"],
      images: [
        "assets/project/Project2-1.png",
        "assets/project/Project2-2.png",
        "assets/project/Project2-3.png",
        "assets/project/Project2-4.png"
      ],
      liveLink: "#",
      githubLink: "#",
      features: [
        "Hero section dengan animasi menarik",
        "Menu interaktif dengan harga",
        "Sistem promo otomatis",
        "Integrasi Google Maps untuk lokasi",
        "Form pemesanan online"
      ]
    },
    {
      id: 3,
      title: "Sosial Media App",
      category: "website",
      description: "Platform media sosial dengan fitur lengkap seperti posting, like, comment, dan real-time chat.",
      longDescription: "Aplikasi media sosial modern yang memungkinkan pengguna berbagi momen, terhubung dengan teman, dan berinteraksi secara real-time. Dibangun dengan arsitektur microservices untuk skalabilitas maksimal.",
      tech: ["React", "Firebase", "Node.js", "Socket.io", "MongoDB"],
      images: [
        "assets/project/Project4-1.png",
        "assets/project/Project4-2.png",
        "assets/project/Project4-3.png",
        "assets/project/Project4-4.png",
        "assets/project/Project4-5.png",
      ],
      liveLink: "#",
      githubLink: "#",
      features: [
        "Feed dinamis dengan infinite scroll",
        "Real-time chat dengan typing indicator",
        "Push notification",
        "Stories & reels",
        "User authentication & authorization"
      ]
    },
    {
      id: 4,
      title: "3D Logo Animation - Product",
      category: "design",
      description: "Animasi logo 3D profesional untuk branding produk menggunakan Blender.",
      longDescription: "Animasi logo 3D berkualitas tinggi yang dibuat dengan Blender. Menggunakan teknik lighting dan texturing yang canggih untuk menghasilkan visual yang memukau dan profesional.",
      tech: ["Blender", "After Effects", "Cycles Render"],
      images: ["assets/project/3D-Logo1.mp4"],
      videoUrl: "assets/project/3D-Logo1.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Animasi 4K resolution",
        "Cinematic lighting",
        "Smooth transitions",
        "Professional texturing",
        "Ready for commercial use"
      ]
    },
    {
      id: 5,
      title: "3D Logo Animation - Corporate",
      category: "design",
      description: "Animasi logo 3D untuk corporate branding dengan gaya profesional dan elegan.",
      longDescription: "Animasi logo 3D corporate yang elegan dan profesional. Menggunakan teknik motion graphics modern dengan hasil render berkualitas cinema.",
      tech: ["Blender", "Cinema 3D", "Octane Render"],
      images: ["/images/3d/corporate-logo.mp4"],
      videoUrl: "assets/project/3D-Logo2.mov",
      isVideo: true,
      liveLink: "#",
      features: [
        "Animasi cinematic",
        "High-end visual effects",
        "Multiple camera angles",
        "Professional color grading",
        "4K output ready"
      ]
    },
    {
      id: 6,
      title: "Kinetic Typography Motion",
      category: "video",
      description: "Motion graphic dengan fokus pada kinetic typography dan animasi teks yang dinamis.",
      longDescription: "Project motion graphic yang mengutamakan kinetic typography sebagai elemen visual utama. Menggunakan perpaduan animasi teks, timing, transisi, dan sinkronisasi dengan audio untuk menghasilkan video yang dinamis dan menarik.",
      tech: ["CapCut"],
      images: ["assets/project/MotionGraphic1.mp4"],
      videoUrl: "assets/project/All-B-Roll.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Kinetic typography",
        "Dynamic text animation",
        "Smooth transitions",
        "Beat synchronization",
        "Short-form video editing"
      ]
    },

    {
      id: 7,
      title: "Dynamic Motion Graphic",
      category: "video",
      description: "Video motion graphic dengan kombinasi typography, shape animation, dan transisi dinamis.",
      longDescription: "Project motion graphic yang mengeksplorasi kombinasi antara typography, shape animation, visual transitions, dan timing. Dibuat untuk menghasilkan video pendek dengan visual yang modern dan dinamis.",
      tech: ["CapCut"],
      images: ["assets/project/MotionGraphic2.mp4"],
      videoUrl: "assets/project/B-Roll-2.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Shape animation",
        "Typography animation",
        "Dynamic transitions",
        "Visual synchronization",
        "Creative composition"
      ]
    },

    {
      id: 8,
      title: "Social Media Motion",
      category: "video",
      description: "Motion graphic pendek yang dirancang untuk kebutuhan konten media sosial.",
      longDescription: "Project motion graphic yang dibuat untuk format short-form content pada media sosial. Menggabungkan typography, transitions, visual effects, dan pacing yang cepat untuk menghasilkan konten yang engaging.",
      tech: ["CapCut"],
      images: ["assets/project/MotionGraphic3.mp4"],
      videoUrl: "assets/project/B-Roll-3.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Short-form content",
        "Motion graphics",
        "Dynamic typography",
        "Fast-paced editing",
        "Social media optimized"
      ]
    },

    {
      id: 9,
      title: "Minimalist Motion Design",
      category: "video",
      description: "Motion graphic minimalis dengan fokus pada typography, timing, dan clean visual composition.",
      longDescription: "Project motion design dengan pendekatan minimalis yang mengutamakan typography, spacing, timing, dan smooth transitions. Konsep ini dibuat untuk menghasilkan visual yang sederhana namun tetap memiliki daya tarik.",
      tech: ["CapCut"],
      images: ["assets/project/MotionGraphic4.mp4"],
      videoUrl: "assets/project/B-Roll-4.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Minimalist motion",
        "Typography animation",
        "Clean composition",
        "Smooth transitions",
        "Visual storytelling"
      ]
    },

    {
      id: 10,
      title: "Podcast Motion Graphic",
      category: "video",
      description: "Video editing podcast berdurasi pendek dengan kombinasi motion graphic dan dynamic typography.",
      longDescription: "Project video editing podcast dalam format short-form content berdurasi 20 hingga 40 detik. Menggabungkan potongan percakapan, dynamic captions, motion graphic, transitions, dan pacing yang disesuaikan dengan kebutuhan konten media sosial.",
      tech: ["CapCut"],
      images: ["assets/project/MotionGraphic5.mp4"],
      videoUrl: "assets/project/B-Roll-5.mp4",
      isVideo: true,
      liveLink: "#",
      features: [
        "Podcast video editing",
        "Dynamic captions",
        "Motion typography",
        "Social media format",
        "Short-form storytelling"
      ]
    },
  ]

  const filters = [
    { id: "all", label: "All Work" },
    { id: "website", label: "Websites" },
    { id: "design", label: "Design & 3D" },
    { id: "video", label: "Video & Animation" }
  ]

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter)

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (selectedProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <>
      <style>{`
        .projects-root {
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

        .filter-button {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
          font-family: 'DM Mono', monospace;
          color: #52525b;
        }

        .filter-button.active {
          color: #fafafa;
          border-bottom: 1px solid #fafafa;
        }

        .filter-button:hover:not(.active) {
          color: #a1a1aa;
        }

        .project-card {
          background: #0f0f11;
          border: 1px solid #18181b;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .project-card:hover {
          border-color: #27272a;
          transform: translateY(-4px);
        }

        .project-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-tech {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          background: #18181b;
          border: 1px solid #27272a;
          color: #71717a;
          font-size: 0.65rem;
          font-family: 'DM Mono', monospace;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }

        .modal-content {
          background: #0f0f11;
          border: 1px solid #27272a;
          max-width: 90vw;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-image-container {
          position: relative;
          background: #000;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
        }

        .modal-video {
          max-width: 100%;
          max-height: 60vh;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #27272a;
          color: white;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background: rgba(0, 0, 0, 0.8);
          border-color: #52525b;
        }

        .nav-button.prev { left: 1rem; }
        .nav-button.next { right: 1rem; }

        .image-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          font-family: 'DM Mono', monospace;
          color: #a1a1aa;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
          color: #71717a;
          font-size: 0.875rem;
        }

        .feature-list li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #52525b;
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

        /* Scrollbar styling */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: #18181b;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: #3f3f46;
        }
      `}</style>

      <section id="project" className="projects-root py-24 px-6" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge mb-4">✦ Portfolio</span>
            <h2 className="section-title mt-4">Featured Projects</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
              Berikut adalah beberapa project yang telah saya kerjakan,
              mulai dari website interaktif hingga animasi 3D profesional.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`filter-button ${filter === f.id ? 'active' : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card rounded-lg overflow-hidden animate-on-scroll"
                onClick={() => openModal(project)}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="overflow-hidden">
                  {project.isVideo ? (
                    <video
                      src={project.videoUrl}
                      className="project-image"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-serif text-lg">{project.title}</h3>
                    <span className="text-zinc-500 text-xs font-mono uppercase">
                      {project.category === 'website'
                        ? 'Website'
                        : project.category === 'design'
                          ? '3D Design'
                          : 'Video'
                      }
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="project-tech">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="project-tech">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content rounded-lg" onClick={(e) => e.stopPropagation()}>
              {/* Image/Video Viewer */}
              <div className="modal-image-container">
                {selectedProject.isVideo ? (
                  <video
                    src={selectedProject.videoUrl}
                    className="modal-video"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="modal-image"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button onClick={prevImage} className="nav-button prev">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                        <button onClick={nextImage} className="nav-button next">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </button>
                        <div className="image-counter">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white font-serif text-2xl mb-1">{selectedProject.title}</h3>
                    <span className="text-zinc-500 text-xs font-mono uppercase">
                      {selectedProject.category === 'website'
                        ? 'Website Development'
                        : selectedProject.category === 'design'
                          ? '3D Design'
                          : 'Video'}
                    </span>
                  </div>
                  <button onClick={closeModal} className="text-zinc-400 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-white text-sm font-mono mb-3">Key Features</h4>
                  <ul className="feature-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white text-sm font-mono mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="project-tech">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-800">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white text-sm font-mono transition-colors"
                  >
                    Live Demo →
                  </a>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white text-sm font-mono transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}