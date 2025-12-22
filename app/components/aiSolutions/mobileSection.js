"use client";
import React, { useState } from 'react';
import { RiBrain2Fill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDatabase, FaRobot } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";

const ServiceCard = ({ title, icon: Icon, description, isOpen, onClick, index }) => {
  return (
    <div 
      className="w-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-secondary/30 backdrop-blur-xl border border-primary/10 rounded-2xl hover:bg-secondary/40 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-lg shadow-secondary/10">
        
        {/* Header */}
        <div 
          onClick={onClick}
          className="flex items-center justify-between p-4 md:p-6 cursor-pointer group"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon 
                className="text-lg md:text-xl text-primary group-hover:text-primary transition-colors duration-300" 
              />
            </div>
            <h3 className="text-primary text-base md:text-lg font-medium group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300">
            <MdKeyboardArrowDown 
              className={`text-lg text-primary transition-all duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </div>

        {/* Content with Smooth Expansion */}
        <div
          className={`${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 ease-out`}
        >
          <div className="px-4 md:px-6 pb-4 md:pb-6">
            <div className="bg-secondary/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-primary/10">
              <p className="text-primary/90 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom glow */}
        {isOpen && (
          <div className="h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        )}
      </div>
    </div>
  );
};

const MobileSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "AI Consulting",
      icon: RiBrain2Fill,
      description: "Our AI consulting services are designed to deliver tailor-made solutions that align with your business goals. We help organizations identify opportunities for automation, efficiency, and growth by seamlessly integrating AI into their workflows. From ideation to execution, we ensure you unlock the full potential of AI."
    },
    {
      id: 2,
      title: "Generative AI",
      icon: BsStars,
      description: "Creativity meets technology with our Generative AI solutions. Whether it's content generation, design assistance, or product innovation, we enable businesses to boost productivity and creativity. Our AI tools make it easy to manage tasks and turn your ideas into reality."
    },
    {
      id: 3,
      title: "Machine Learning",
      icon: GiGears,
      description: "With Machine Learning, Codework empowers businesses with predictive insights and more innovative automation. Leveraging advanced frameworks like PyTorch, Keras, and TensorFlow, we help analyze data, uncover patterns, and enable data-driven decisions. Our solutions, including Radi Insight Scan and Signature Identification, utilize ML concepts to provide deeper insights and enhanced automation. These innovations enable businesses to stay one step ahead of market demands and drive innovation."
    },
    {
      id: 4,
      title: "Natural Language Processing",
      icon: AiFillMessage,
      description: "Natural Language Processing (NLP) shapes communication, and our NLP solutions make it smarter. We leverage advanced language processing to enhance text analysis, automate customer support, and extract valuable insights from unstructured data. With NLP and ML, we have developed a Caregiver Communication with Text Analytics Tool to improve interactions, understand needs, and provide better support in caregiving environments."
    },
    {
      id: 5,
      title: "Data Engineering",
      icon: FaDatabase,
      description: "A robust data infrastructure is the backbone of any business. Our Data Engineering services ensure your data is well-organized, easily accessible, and efficiently processed, giving you the foundation to scale and innovate."
    },
    {
      id: 6,
      title: "Cyber Security",
      icon: MdOutlineSecurity,
      description: "Protecting digital assets is critical in today's connected world. Codework's cybersecurity solutions leverage advanced technologies, including XGBoost, to analyze threats, detect vulnerabilities, and provide comprehensive protection for your systems, data, and infrastructure. We ensure safety, trust, and resilience for your business in an ever-evolving digital landscape."
    },
    {
      id: 7,
      title: "Predictive Analysis",
      icon: BsFillBarChartLineFill,
      description: "Stay ahead of the curve with Predictive Analytics. We use AI-driven forecasting models to analyze trends, predict outcomes, and deliver actionable insights that enable businesses to plan and perform better."
    },
    {
      id: 8,
      title: "AI Chatbots",
      icon: FaRobot,
      description: "Enhance customer engagement with our intelligent AI chatbots. Codework's chatbots provide real-time responses, improve user satisfaction, and streamline customer support operations."
    }
  ];

  const handleCardClick = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="relative bg-secondary overflow-hidden py-8 px-4 md:hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/15 rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-secondary/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-secondary/8 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-1 h-1 bg-secondary rounded-full"></div>
        <div className="absolute top-24 right-10 w-1 h-1 bg-primary/50 rounded-full"></div>
        <div className="absolute bottom-28 left-1/5 w-2 h-2 bg-secondary/60 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/30 rounded-full"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 backdrop-blur-sm mb-6">
          <span className="text-primary text-sm font-medium">— AI Services —</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Our <span className="">AI Solutions</span>
        </h2>
        
        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-4"></div>
        
        <p className="text-primary/80 text-sm leading-relaxed max-w-sm mx-auto">
          Comprehensive AI services designed to transform your business with cutting-edge technology
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-4 relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            {...service}
            index={index}
            isOpen={openCard === service.id}
            onClick={() => handleCardClick(service.id)}
          />
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-15">
        <div className="w-20 h-10 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MobileSection;
