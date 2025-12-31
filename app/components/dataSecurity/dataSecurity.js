"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

export default function DataSecurity() {
  // Industry cards data (excluding Data Security since this is the Data Security page)
  const industryCards = [
    {
      title: "Healthcare",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/Healthcare.jpg",
      description: "Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient.",
      link: "/ai-in-healthcare-you-must-know",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h1V4H4zM4 10h5v2h2v-2h1V8H4zM4 14h5v2h2v-2h1v-2H4z" />
        </svg>
      ),
    },
    {
      title: "Finance",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/finance.jpg",
      description: "Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future.",
      link: "/new-ai-in-finance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      title: "E-commerce",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif",
      description: "Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies.",
      link: "/ai-in-ecommerce",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      ),
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = "Valid email is required";
    if (!phone.trim()) errs.phone = "Phone number is required";
    if (!/^\d+$/.test(phone)) errs.phone = "Only numbers allowed";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_contact_details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone_number: phone })
      });
      if (res.ok) {
        setSuccess("Thanks! We will contact you soon.");
        setName("");
        setEmail("");
        setPhone("");
        setErrors({});
      } else {
        const data = await res.json().catch(() => null);
        setErrors({ form: data?.message || "Something went wrong" });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary text-primary min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-secondary min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Data%20security.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/55 to-secondary/30 z-10" />
        </div>

        {/* Background image positioned at bottom half with responsive positioning */}
        <div className="absolute bottom-0 left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] h-1/4 sm:h-1/3 md:h-2/5 lg:h-1/2 w-[90%] sm:w-4/5 md:w-4/5 lg:w-4/5 z-10">
          <Image
            src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/DataSecurity.avif"
            alt="AI in Data Security"
            fill
            className="object-cover rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/70 pointer-events-none rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl" />
        </div>

        {/* Contact button - HIDDEN on mobile, visible from tablet up */}
        <div className="absolute hidden sm:block top-24 right-6 md:top-32 md:right-8 lg:top-52 lg:right-8 z-30">
  <Link href="/contact-ai-solutions">
    <button className="bg-transparent border-2 border-primary text-primary font-bold py-2.5 px-6 md:py-3 md:px-8 text-sm md:text-base rounded-none transition-colors duration-200 hover:bg-primary/10">
      Contact us →
    </button>
  </Link>
</div>

        {/* Content wrapper - responsive with proper mobile spacing */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full h-full">
            
            {/* Left side - Text content with balanced spacing */}
            <div className="flex flex-col pl-4 sm:pl-8 md:pl-12 justify-center space-y-4 sm:space-y-6 md:space-y-8 pt-8 pb-16 sm:pt-8 sm:pb-8 md:pt-4 md:pb-4 lg:pt-0 lg:pb-0">            
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-primary mb-4 sm:mb-6 leading-tight">
                  AI in Data Security
                </h1>
                <p className="text-base sm:text-lg md:text-lg lg:text-lg text-primary/90 leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
                  AI in data security uses artificial intelligence to protect sensitive information from cyber threats. AI-powered systems detect suspicious activities, analyze data in real time, and respond instantly to potential breaches.
                </p>
              </div>
            </div>

            {/* Right side - Decorative elements - hidden on mobile and small screens */}
            <div className="relative hidden md:block">
              <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="bg-secondary/30 rounded-xl p-8 border border-primary/30">
            <h2 className="text-2xl font-bold text-primary mb-4">Fill the form to receive a call</h2>
            <p className="text-primary/70 mb-6">
              Connect with our cybersecurity AI experts to learn how we can help protect your organization's data.
            </p>
            
            {success && <p className="text-green-600 mb-4">{success}</p>}
            {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Full name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Carter"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Email address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@yourdomain.com"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">Phone number</label>
                <input 
                  type="tel" 
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary placeholder-primary/50 focus:outline-none focus:border-primary"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className={`w-full bg-transparent border-2 border-primary text-primary font-bold py-3 px-6 rounded-none transition-colors duration-200 hover:bg-primary hover:text-secondary ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {loading ? "Submitting..." : "Receive a call →"}
              </button>
            </form>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Data Security is Important</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                In today's digital era, data is the backbone of every organization. From personal customer information to financial transactions, any unauthorized access can result in identity theft, data breaches, and financial loss. Strong data security safeguards business reputation, ensures compliance with laws like GDPR and HIPAA, and builds customer trust. Without it, organizations face legal penalties, lost revenue, and damage to brand credibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Benefits of Strong Data Security</h3>
              <p className="text-primary/80 mb-6">
                A robust data security strategy offers multiple advantages that protect both your organization and your customers.
              </p>
              
              <ul className="space-y-3 text-primary/80">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Prevents data breaches</strong> – Stops cyberattacks and unauthorized access to sensitive information.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Ensures compliance</strong> – Meets data privacy regulations like GDPR, HIPAA, and other legal requirements.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Builds customer trust</strong> – Demonstrates commitment to protecting client data and privacy.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Reduces downtime</strong> – Minimizes business interruptions from security incidents and cyber threats.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Data Security Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Banking & Finance</h4>
                  <p className="text-primary/70 text-sm">Stops online fraud and detects unusual transactions in real-time.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Healthcare</h4>
                  <p className="text-primary/70 text-sm">Safeguards patient records and medical data from cybercriminals.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">E-commerce</h4>
                  <p className="text-primary/70 text-sm">Ensures safe payments and protects customer privacy during transactions.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Government</h4>
                  <p className="text-primary/70 text-sm">AI-powered cyber defense systems protect sensitive national data.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Best Practices for Data Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Encrypt sensitive data</strong> – Protect files and databases with strong encryption.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Multi-factor authentication</strong> – Add extra layers of security for user access.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Regular updates</strong> – Keep systems updated with latest security patches.</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Employee training</strong> – Educate staff on cybersecurity awareness and best practices.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>AI monitoring</strong> – Deploy AI tools for instant threat detection and response.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Data backups</strong> – Maintain secure backups for business continuity.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security Image */}
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/DataSecurity.avif"
                alt="AI Data Security Technology"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
              <p className="text-primary/90 text-lg leading-relaxed">
                <strong>Conclusion:</strong> AI in data security is revolutionizing the way we defend against cyber threats. By combining advanced AI technology with best security practices, organizations can ensure data privacy, maintain customer trust, and achieve long-term resilience. In a world where cyber risks evolve daily, proactive AI-driven cybersecurity is no longer optional—it's essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Industries Section */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary">More Industries</h2>
            <Link href="/industries-you-must-know" className="text-primary hover:text-primary/80 font-semibold">
              Browse all industries →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryCards.map((card, idx) => (
              <div key={idx} className="bg-secondary/20 rounded-lg p-6 border border-primary/30 hover:border-primary/50 transition-colors group">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-primary/70 mb-4">{card.description}</p>
                <Link href={card.link} className="text-primary group-hover:text-primary/80 font-semibold">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 20px rgba(29, 223, 234, 0.6), 0 0 4px rgba(34, 48, 68, 0.6);
        }
      `}</style>
    </div>
  );
}
