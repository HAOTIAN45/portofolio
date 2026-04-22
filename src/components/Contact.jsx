import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: "📧", label: "Email", value: "danidwinugroho@gmail.com", link: "danidwinugroho@gmail.com" },
    { icon: "📱", label: "Phone", value: "+62 882 1570 7730", link: "tel:+6288215707730" },
    { icon: "📍", label: "Location", value: "Magelang, Indonesia", link: null }
  ]

  return (
    <>
      <style>{`
        .contact-root {
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

        .contact-card {
          background: #0f0f11;
          border: 1px solid #18181b;
          transition: all 0.2s ease;
        }

        .contact-card:hover {
          border-color: #27272a;
        }

        .form-input {
          width: 100%;
          background: #0f0f11;
          border: 1px solid #27272a;
          color: #fafafa;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          padding: 0.75rem 1rem;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #52525b;
        }

        .form-input::placeholder {
          color: #3f3f46;
        }

        .form-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #52525b;
          font-family: 'DM Mono', monospace;
          margin-bottom: 0.5rem;
          display: block;
        }

        .submit-button {
          width: 100%;
          padding: 0.875rem;
          background: #18181b;
          border: 1px solid #27272a;
          color: #a1a1aa;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          transition: all 0.2s ease;
        }

        .submit-button:hover:not(:disabled) {
          background: #27272a;
          color: #fafafa;
          border-color: #52525b;
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .success-message {
          background: #0f0f11;
          border: 1px solid #22c55e;
          color: #22c55e;
          padding: 1rem;
          text-align: center;
          font-size: 0.875rem;
          font-family: 'DM Mono', monospace;
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

      <section id="contact" className="contact-root py-24 px-6" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="section-badge mb-4">✦ Get In Touch</span>
            <h2 className="section-title mt-4">Let's Work Together</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. 
              Feel free to reach out using the form below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4 animate-on-scroll">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="contact-card rounded-lg p-6"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-3">{info.icon}</div>
                  <div className="text-zinc-500 text-xs font-mono mb-1">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} className="text-white hover:text-zinc-300 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white">{info.value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              {isSubmitted ? (
                <div className="success-message rounded-lg">
                  ✨ Message sent successfully! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input rounded-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input rounded-lg resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button rounded-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}