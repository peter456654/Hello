"use client";
import React from 'react'

function WebScrapingService() {
  return (
    <div className="relative bg-secondary min-h-screen overflow-hidden">
      
      {/* ==== Background Decorative Circles ==== */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-secondary/15 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
      </div>
      
      {/* ==== Floating Particles ==== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 py-12 relative z-10">

        {/* ==== INTRODUCTION ==== */}
        <div className="mb-12">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-primary font-medium mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Web data extraction
          </div>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Introduction: <span className="bg-gradient-to-r from-primary via-primary-400 to-primary text-transparent bg-clip-text">Why Data Matters for Businesses</span>
          </h2>
          <p className="text-primary/90 leading-relaxed border-l-4 border-secondary/40 pl-4 max-w-4xl">
            In today’s digital world, data is the key to growth. Whether you’re tracking competitors, finding leads, or understanding market trends — 
            having the right information at the right time gives your business a strong edge. Web data extraction is a smart way to collect this data quickly 
            and accurately, just like having a 24/7 digital assistant.
          </p>
        </div>

        {/* ==== CHALLENGES ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Challenges: The Problem with Manual Data Collection</h3>
          <ul className="space-y-3 text-primary/90 pl-4 border-l-4 border-secondary/40">
            <li>Time-consuming research</li>
            <li>Outdated or incomplete information</li>
            <li>Difficulty keeping up with competitor moves</li>
            <li>Limited visibility into customer behavior and market trends</li>
          </ul>
          <p className="mt-4 text-primary/90">
            Manually searching and copying data from websites slows down your business and increases errors.
          </p>
        </div>

        {/* ==== STRATEGIC SHIFT ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Strategic Shift: Moving to Smart Data Collection</h3>
          <p className="text-primary/90 mb-4">
            To overcome these challenges, we adopted custom web data extraction tools that automate the entire process. Instead of wasting hours, we now get accurate 
            data in minutes — in formats like Excel or CSV — ready for use in decision-making.
          </p>
          <h4 className="text-xl font-bold text-primary mb-2">How It Works:</h4>
          <ul className="space-y-2 text-primary/90 pl-4 border-l-4 border-secondary/40">
            <li>Define what data you need (e.g., product prices, leads, reviews)</li>
            <li>Build a scraper to pull that data from specific websites</li>
            <li>Schedule it to run daily, weekly, or monthly</li>
            <li>Get clean, usable data delivered directly to you</li>
          </ul>
        </div>

        {/* ==== IMAGE SECTION ==== */}
        <div className="flex flex-col lg:flex-row pl-20 gap-48 mb-16">
          {[
            { src: "/CaseStudies/webscrapings.jpg", caption: "Automated Data Gathering" },
            { src: "/CaseStudies/scraping2.jpg", caption: "Custom Data Solutions" }
          ].map((img, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img.src}
                alt={img.caption}
                className="w-[400px] h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-primary">
                <h3 className="text-lg font-bold">{img.caption}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl group-hover:border-secondary/50 transition-all"></div>
            </div>
          ))}
        </div>

        {/* ==== BENEFITS ==== */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl hover:bg-secondary/40 transition">
            <h3 className="text-3xl font-bold text-primary mb-6">Benefits of In-House Web data extraction Solutions</h3>
            <ul className="space-y-3 text-primary/90">
              <li>Customize data output as per team needs</li>
              <li>Save costs by avoiding third-party data services</li>
              <li>Scale data collection for multiple websites</li>
              <li>Maintain full data privacy and security</li>
            </ul>
          </div>
          {/* ==== TECH STACK ==== */}
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl hover:bg-secondary/40 transition">
            <h3 className="text-3xl font-bold text-primary mb-6">Technology Stack Used</h3>
            <ul className="space-y-3 text-primary/90">
              <li><span className="text-primary font-medium">Python</span> – for building scraping scripts</li>
              <li><span className="text-primary font-medium">BeautifulSoup & Scrapy</span> – to extract and clean data</li>
              <li><span className="text-primary font-medium">Pandas</span> – for data formatting</li>
              <li><span className="text-primary font-medium">Google Sheets & Excel</span> – for reporting</li>
              <li><span className="text-primary font-medium">Scheduler</span> (Cron Jobs or Airflow) – to automate scraping timelines</li>
            </ul>
          </div>
        </div>

        {/* ==== RESULTS ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Fast-Tracking Development & Results</h3>
          <ul className="space-y-3 text-primary/90 pl-4 border-l-4 border-secondary/40">
            <li>Setup time reduced by 60%</li>
            <li>Scraping accuracy improved by 2x</li>
            <li>Data ready for marketing, sales, and analytics teams within hours</li>
          </ul>
          <p className="mt-4 text-primary/90">
            This helped different departments work with real-time data instead of outdated reports.
          </p>
        </div>

        {/* ==== CONCLUSION ==== */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <h3 className="text-4xl font-bold mb-8">Conclusion: Smarter Decisions Start with Better Data</h3>
            <p className="text-xl font-light leading-relaxed text-primary/90">
              Web data extraction is no longer optional — it’s a must-have tool for data-driven businesses. 
              By switching to automated, in-house scraping, we saved time, cut costs, and made faster, smarter decisions. 
              Whether you're a startup or an enterprise, having real-time web data can give you a competitive edge in any industry.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-40 h-20 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  )
}

export default WebScrapingService
