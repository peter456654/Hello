"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

export default function Ecommerce() {
  // Industry cards data (excluding E-commerce since this is the E-commerce page)
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
      title: "Education",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp",
      description: "Explore unique insights into how AI in education empowers and transforms student learning experiences for a brighter future.",
      link: "/unique-ai-in-education",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
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
              src="https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/ECommerce.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/45 to-secondary/30 z-10" />
        </div>
        
        {/* Background image positioned at bottom half with responsive positioning */}
        <div className="absolute bottom-0 left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%] h-1/4 sm:h-1/3 md:h-2/5 lg:h-1/2 w-[90%] sm:w-4/5 md:w-4/5 lg:w-4/5">
          <Image
            src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif"
            alt="AI in E-commerce"
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
                  AI in <br/> E-commerce
                </h1>
                <p className="text-base sm:text-lg md:text-lg lg:text-lg text-primary/90 leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
                  How AI is Quietly Rewriting the Rules of E-Commerce. Artificial Intelligence has been silently shaping online shopping, transforming basic suggestions into powerful systems that predict, personalize, and optimize the entire shopping journey.
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
                  Connect with our e-commerce AI experts to learn how we can help transform your online business.
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
              <h2 className="text-4xl font-bold text-primary mb-6">What Exactly is AI in E-Commerce?</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                In simple terms, AI in e-commerce means using smart computer systems that can learn from data, recognize patterns, and improve over time—without needing to be told exactly what to do in every situation. Unlike traditional software that follows rigid rules, AI adjusts to changes, becoming smarter with every interaction. Today, AI isn't just for large scale businesses. Even small businesses can tap into these capabilities, making it possible to compete in crowded markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Common AI Applications in E-commerce</h3>
              <p className="text-primary/80 mb-6">
                AI transforms every aspect of online retail, from customer interactions to backend operations.
              </p>
              
              <ul className="space-y-3 text-primary/80">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Machine Learning</strong> – Predicts customer needs based on shopping patterns and behavior analysis.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Natural Language Processing (NLP)</strong> – Powers chatbots and voice assistants that respond like real humans.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Recommendation Engines</strong> – Suggest products that match customer interests and browsing history.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span><strong>Visual Search</strong> – Lets customers upload photos to find similar products instantly.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Key AI Features Transforming E-commerce</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Personalization at Scale</h4>
                  <p className="text-primary/70 text-sm">Real-time product recommendations and dynamic pricing based on individual customer behavior.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">24/7 Customer Support</h4>
                  <p className="text-primary/70 text-sm">AI-powered chatbots handle routine questions and process orders instantly without overhead.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Smart Inventory Management</h4>
                  <p className="text-primary/70 text-sm">Predicts demand using sales history, seasonal patterns, and social media trends.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Fraud Detection</h4>
                  <p className="text-primary/70 text-sm">Real-time monitoring of transactions to flag suspicious activity while keeping checkout smooth.</p>
              </div>
            </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Benefits of AI in E-commerce</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Enhanced Customer Experience</strong> – Personalized shopping journeys and instant support.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Reduced Costs</strong> – Automated operations and optimized inventory management.</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Increased Sales</strong> – Better product recommendations and dynamic pricing strategies.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-primary/80"><strong>Competitive Advantage</strong> – Small businesses can now compete at enterprise level.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Image */}
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif"
                alt="AI E-commerce Technology"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
              <p className="text-primary/90 text-lg leading-relaxed">
                <strong>The Future is Already Here:</strong> AI is no longer a "nice-to-have" in e-commerce—it's the new baseline. These tools are no longer reserved for the biggest players. Platforms now bake AI right into their features, letting small businesses play at an enterprise level—without the enterprise budget.
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
