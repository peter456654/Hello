"use client";
import React from 'react'
import { 
  FaSearch, 
  FaQuestionCircle, 
  FaBook, 
  FaMobileAlt, 
  FaFolder,
  FaBullseye,
  FaChartBar,
  FaLightbulb,
  FaFileAlt,
  FaBolt,
  FaImage,
  FaGraduationCap,
  FaPalette,
  FaRobot,
  FaLink,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaHeart
} from 'react-icons/fa'

function Hyperflexai() {
  return (
    <div className="relative bg-secondary text-primary min-h-screen overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-40 md:h-40 bg-secondary/20 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 md:w-32 md:h-32 bg-secondary/15 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 md:w-48 md:h-48 bg-secondary/25 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 md:w-24 md:h-24 bg-secondary/10 rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-28 h-28 bg-secondary/12 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-secondary/18 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-2 h-2 md:w-3 md:h-3 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-20 w-1 h-1 md:w-2 md:h-2 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-56 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-secondary/80 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 py-12">
          <div className="inline-flex items-center border border-secondary/30 bg-secondary/10 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Academic Search Engine
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Hyperflx: The <span className="bg-gradient-to-r from-secondary via-primary-400 to-secondary bg-clip-text text-transparent">Smarter Way</span> to Search for Academic Knowledge
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Why We Built Hyperflx
              </h2>
              <p className="text-lg leading-relaxed text-justify">
                At <span className="text-secondary font-medium">Codework</span>, we saw a gap in how students and researchers access reliable academic content. We built <span className="text-secondary font-medium">Hyperflx</span>, an AI-powered search engine made specifically for education and research. It delivers trusted, easy-to-understand, and well-organized results to make learning smoother and faster.
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Common Struggles in Academic Search
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Overwhelming Search Results", desc: "Too many irrelevant links", icon: <FaSearch className="text-secondary" /> },
              { title: "Doubtful Sources", desc: "Hard to tell what's credible", icon: <FaQuestionCircle className="text-secondary" /> },
              { title: "Dense Terminology", desc: "Complex terms with no clear definitions", icon: <FaBook className="text-secondary" /> },
              { title: "Lack of Visuals", desc: "Few images or videos to simplify learning", icon: <FaMobileAlt className="text-secondary" /> },
              { title: "Unstructured Layouts", desc: "Cluttered content makes research harder", icon: <FaFolder className="text-secondary" /> }
            ].map((problem, index) => (
              <div key={index} className="bg-secondary/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-secondary/30 hover:bg-secondary/40 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                <h3 className="font-bold mb-2">{problem.title}</h3>
                <p className="text-primary/80">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Images Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/hyperfleex.jpg"
                alt="Person using Hyperflx for academic search"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold mb-2">Smart Academic Search</h3>
                <p className="text-sm opacity-90 text-primary">AI-powered research made simple</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/hyperflx2.jpg"
                alt="Hyperflx displaying academic media results"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold mb-2">Visual Learning</h3>
                <p className="text-sm opacity-90 text-primary">Rich media for better understanding</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Strategy */}
            <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <FaBullseye className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold">Our Smarter Search Strategy</h3>
              </div>
              
              <p className="text-primary/90 mb-6 text-lg">
                <span className="text-secondary font-medium">Hyperflx</span> is built to solve those problems using a focused, AI-driven approach:
              </p>
              
              <div className="space-y-4">
                <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border-l-4 border-secondary">
                  <p className="text-primary/90">
                    <span className="font-semibold text-secondary">AI-Powered Responses:</span> Hyperflx utilizes LLMs to generate answers and responses based on training data. Unlike platforms such as PerplexCity, it does not source its information from the web in real-time. However, it does gather images and videos from online sources for visual content generation.
                  </p>
                </div>
                
                {[
                  { title: "Visual Support", desc: "Includes educational images and videos to aid understanding", icon: <FaChartBar className="text-secondary" /> },
                  { title: "Instant Definitions", desc: "Explains complex academic terms clearly", icon: <FaLightbulb className="text-secondary" /> },
                  { title: "Summarized Concepts", desc: "Offers easy-to-read summaries for faster learning", icon: <FaFileAlt className="text-secondary" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-primary/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>

            {/* Unique Value */}
            <div className="bg-gradient-to-br from-secondary/80 to-secondary rounded-3xl p-8 shadow-2xl text-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                  <FaHeart className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold">What Makes Our Tool Unique</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: "Distraction-Free Learning", desc: "No ads or unrelated links", icon: <FaBullseye className="text-primary" /> },
                  { title: "Simplified Research Experience", desc: "Get to the point quickly", icon: <FaBolt className="text-primary" /> },
                  { title: "Visual Learning Friendly", desc: "Diagrams and videos for a better grasp", icon: <FaImage className="text-primary" /> },
                  { title: "Academic Accuracy Guaranteed", desc: "Built for students and educators", icon: <FaGraduationCap className="text-primary" /> },
                  { title: "Clean and Easy Interface", desc: "Simple to search, read, and explore", icon: <FaPalette className="text-primary" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-primary/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Development Process */}
        <div className="mb-20">
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center border border-secondary/30 bg-secondary/10 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
                Development Process
              </div>
              <h3 className="text-3xl font-bold mb-4">
                From Idea to Launch: How We Did It Fast
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: "Pre-trained Language Models", desc: "Saved time on training from scratch", icon: <FaRobot className="text-secondary" /> },
                { title: "API Integrations", desc: "Connected to real-time academic sources", icon: <FaLink className="text-secondary" /> },
                { title: "User Feedback Testing", desc: "Refined through real student/teacher input", icon: <FaUsers className="text-secondary" /> },
                { title: "CI/CD Automation", desc: "Enabled fast updates and scalable improvements", icon: <FaCogs className="text-secondary" /> }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-secondary/10 backdrop-blur-sm hover:bg-secondary/20 transition-all duration-300 border border-primary/10 hover:border-secondary/30 group">
                  <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-primary/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-6 border-l-4 border-secondary">
              <p className="text-primary/90 text-lg">
                <span className="font-semibold text-secondary">Result:</span> It helped us launch ahead of schedule, without compromising quality.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Final Thoughts */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-4xl font-bold mb-6 relative z-10">
              Final Thoughts: A Better Future for Learning
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">Hyperflx</span> makes academic research smarter, simpler, and more student-friendly. It allows users to filter out irrelevant information, grasp complex concepts more quickly, and learn in a style that suits them best.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
                It's not just a search engine—it's a reliable learning partner built for the future of education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-6px) rotate(2deg); }
          66% { transform: translateY(-3px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Hyperflexai
