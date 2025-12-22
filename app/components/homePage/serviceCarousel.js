"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { servicesData } from '../services/ourServices';

const AIKeynoteCarousel = () => {
  const topics = servicesData;

  const [activeIndex, setActiveIndex] = useState(2);
  const topNavContainerRef = useRef(null);
  const topBtnRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % topics.length);
  };

  useEffect(() => {
    const el = topBtnRefs.current[activeIndex];
    if (el && topNavContainerRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen pt-24 bg-secondary text-primary">
      {/* Top Carousel Navigation */}
      <div className="relative px-8 py-6 overflow-hidden">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 overflow-hidden">
            <div ref={topNavContainerRef} className="flex gap-3 items-center overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar">
              {topics.map((svc, idx) => (
                <Link key={idx} href={svc.link}>
                  <button
                    ref={(el) => (topBtnRefs.current[idx] = el)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 border ${
                      idx === activeIndex
                        ? 'bg-primary text-secondary border-secondary/20'
                        : 'bg-secondary/70 text-primary/70 hover:bg-secondary/60 border-primary/20 hover:border-primary/30'
                    }`}
                  >
                    {svc.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 ml-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
            >
              <IoChevronBack className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
            >
              <IoChevronForward className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Side - Title, Description, CTA */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 text-primary">
              {topics[activeIndex].title}
            </h1>
            <p className="text-xl text-primary/80 mb-10">
              {topics[activeIndex].description}
            </p>
            <Link href={topics[activeIndex].link}>
              <button className="bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right Side - Image and Title Label */}
          <div className="relative">
            <img
              src={topics[activeIndex].image}
              alt={topics[activeIndex].title}
              className="w-full h-[500px] object-cover  shadow-2xl"
            />
            
            {/* Topic Label */}
            <div className="absolute top-8 left-8 bg-secondary/70 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-xl font-semibold text-primary">{topics[activeIndex].title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKeynoteCarousel;
<style jsx>{`
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}</style>
