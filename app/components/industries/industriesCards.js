"use client";
import Link from "next/link";
import React from "react";

const IndustriesCards = () => {
  const cardData = [
    {
      title: "AI-Healthcare",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/Healthcare.jpg",
      video:
        "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Hospital.mp4",
      description:
        "Our AI-powered healthcare solutions revolutionize diagnostics with precision and speed, enabling personalized treatment plans tailored to each patient.",
      link: "/ai-in-healthcare-you-must-know",
    },
    {
      title: " AI-Education",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/education.webp",
      video:
        "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/school.mp4",
      description:
        "Explore unique insights into how AI in education empowers and transforms student learning experiences for a brighter future.",
      link: "/unique-ai-in-education",
      
    },
    {
      title: " AI-E-commerce",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/AI-E-commerce.avif",
      video:
        "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/ECommerce.mp4",
      description:
        "Discover the secrets of integrating AI in e-commerce and unlock remarkable success for your business with our expert strategies.",
      link: "/ai-in-ecommerce",
    },
    {
      title: " AI-Finance",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/finance.jpg",
      video:
        "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Money.mp4",
      description:
        "Find out how new AI technologies in finance are empowering decisions and paving the way for a brighter, more efficient financial future.",
      link: "/new-ai-in-finance",
    },
    {
      title: "  AI-Data Security",
      img: "https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/DataSecurity.avif",
      video:
        "https://codework-ebook.s3.amazonaws.com/codework-media/Industries_videos/Data%20security.mp4",
      description:
        "AI in data security refers to the use of artificial intelligence to detect, prevent, and respond to cybersecurity threats by analyzing patterns.",
      link: "/ai-in-data-security",
    },
  ];

  const videoRefs = React.useRef([]);

  const handleCardEnter = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    try {
      video.currentTime = 0;
      video.playbackRate = 0.6;
      video.load();
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } catch {}
  };

  const handleCardLeave = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    try {
      video.pause();
      video.currentTime = 0;
      video.playbackRate = 1;
    } catch {}
  };

  return (
    <div className="bg-secondary text-primary relative overflow-hidden px-4 py-20">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full"></div>
      </div> */}

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-3 h-3 bg-secondary rounded-full"></div>
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-56 left-1/4 w-4 h-4 bg-secondary/80 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
      </div> */}

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          <span>Transforming </span>
          <span className="text-primary">Industries</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-8"></div>

        <p className="text-primary/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover how our AI solutions are revolutionizing different sectors
          with cutting-edge technology and innovative approaches.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cardData.map((card, idx) => {
            const hasVideo = Boolean(card.video);
            return (
              <div
                key={idx}
                className="group bg-secondary/30 backdrop-blur-xl border border-primary/10 rounded-none overflow-hidden hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 w-full max-w-sm h-full flex flex-col"
                onMouseEnter={() => handleCardEnter(idx)}
                onMouseLeave={() => handleCardLeave(idx)}
                onTouchStart={() => handleCardEnter(idx)}
              >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    hasVideo ? "group-hover:opacity-0" : ""
                  }`}
                />
                {hasVideo && (
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={card.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-primary/80 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {card.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">
                  <Link
                    href={card.link}
                    className="group relative bg-secondary h-14 w-56 border border-primary text-left px-4 py-3 text-primary text-base font-bold rounded-none overflow-hidden underline underline-offset-2 hover:bg-secondary/90 hover:text-primary hover:underline-offset-4 hover:decoration-2 before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-primary/30 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-primary/20 after:right-8 after:top-3 after:rounded-full after:blur-lg duration-500 before:duration-500 after:duration-500 group-hover:before:duration-500 group-hover:after:duration-500 origin-left"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              
            </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="mt-20 text-center relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-primary/5 backdrop-blur-sm rounded-none p-4 border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">5+</div>
            <div className="text-primary/70 text-xs">Industries</div>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm rounded-none p-4 border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-primary/70 text-xs">Projects</div>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm rounded-none p-4 border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-primary/70 text-xs">Success Rate</div>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm rounded-none p-4 border border-primary/10">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-primary/70 text-xs">Support</div>
          </div>
        
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-64 h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Line clamp CSS */}
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IndustriesCards;
