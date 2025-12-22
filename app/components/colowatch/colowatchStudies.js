"use client";
import React from 'react'
import { 
  FaStethoscope, 
  FaExclamationTriangle, 
  FaUnlink, 
  FaFrown,
  FaFileAlt,
  FaComments,
  FaCogs,
  FaLanguage,
  FaGlobe,
  FaBook,
  FaChartBar,
  FaEye,
  FaHandPaper,
  FaHandshake,
  FaCheckCircle,
  FaBrain,
  FaRobot,
  FaMicrophone,
  FaPalette,
  FaChartLine,
  FaQuestionCircle,
  FaUserMd,
  FaHeart
} from 'react-icons/fa'

function ColowatchStudies() {
  return (
    <div className="relative bg-secondary min-h-screen overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
            Healthcare Communication
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
            Making Medical Reports <span className="bg-gradient-to-r from-primary via-primary-400 to-primary bg-clip-text text-transparent">More Accessible</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
                Challenges Patients Face
              </h2>
              <p className="text-lg text-primary/90 leading-relaxed mb-6">
                Deciphering <span className="text-secondary font-medium">medical reports</span> can often be an overwhelming experience for patients. The use of technical and intricate <span className="text-secondary font-medium">medical terms</span> can lead to:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: <FaExclamationTriangle className="text-secondary" />, text: "Confusion about their health and diagnosis" },
                  { icon: <FaUnlink className="text-secondary" />, text: "A sense of disconnection from their healthcare journey" },
                  { icon: <FaFrown className="text-secondary" />, text: "Rising stress and anxiety" }
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border-l-4 border-secondary hover:bg-secondary/15 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-primary">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Images Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/colon2.jpg"
                alt="Medical professional reviewing complex medical reports"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-primary">
                <h3 className="text-xl font-bold mb-2">Complex Medical Reports</h3>
                <p className="text-sm opacity-90 text-secondary">Traditional reports with technical jargon</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/CaseStudies/colonScan.jpg"
                alt="Simplified medical report interface with visual aids"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-secondary/30 group-hover:border-secondary/50 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-primary">
                <h3 className="text-xl font-bold mb-2">Simplified Communication</h3>
                <p className="text-sm opacity-90 text-secondary">Clear, patient-friendly explanations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* How It Works */}
            <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <FaCogs className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-primary">How It Works</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "Simple Language Translation", 
                    desc: "Converts medical jargon into language that patients can grasp without needing a medical degree", 
                    icon: <FaComments className="text-secondary" />
                  },
                  { 
                    title: "Visual Diagrams", 
                    desc: "Illustrative diagrams that simplify complex medical concepts", 
                    icon: <FaChartBar className="text-secondary" />
                  },
                  { 
                    title: "Multilingual Support", 
                    desc: "Language support for diverse patient populations", 
                    icon: <FaGlobe className="text-secondary" />
                  },
                  { 
                    title: "Contextual Definitions", 
                    desc: "Provides clear explanations to ensure complete understanding", 
                    icon: <FaBook className="text-secondary" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-primary/80">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
            </div>

            {/* The Impact */}
            <div className="bg-gradient-to-br from-secondary/80 to-secondary rounded-3xl p-8 shadow-2xl text-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                  <FaHeart className="text-primary text-xl" />
                </div>
                <h3 className="text-3xl font-bold">The Impact</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                {[
                  { 
                    title: "Accurate Translation", 
                    desc: "Translates medical jargon with impressive accuracy", 
                    icon: <FaCheckCircle className="text-primary" />
                  },
                  { 
                    title: "Breaks Language Barriers", 
                    desc: "Overcomes communication barriers by offering multilingual support", 
                    icon: <FaLanguage className="text-primary" />
                  },
                  { 
                    title: "Visual Learning", 
                    desc: "Improves comprehension through the power of visuals", 
                    icon: <FaEye className="text-primary" />
                  },
                  { 
                    title: "Empowers Patients", 
                    desc: "Encourages patients to make confident and informed choices about their care", 
                    icon: <FaHandPaper className="text-primary" />
                  },
                  { 
                    title: "Better Communication", 
                    desc: "Facilitates meaningful conversations between patients and healthcare professionals", 
                    icon: <FaHandshake className="text-primary" />
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{impact.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{impact.title}</h4>
                      <p className="text-primary/80">{impact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technology Stack */}
        <div className="mb-20">
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-2xl opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-2xl opacity-60"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center border border-secondary/30 bg-white/5 backdrop-blur-sm text-secondary px-6 py-3 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
                Technology Stack
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Powered by Advanced Healthcare Technology
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Natural Language Processing", desc: "Advanced NLP for medical text analysis", icon: <FaBrain className="text-secondary" /> },
                { title: "Machine Learning", desc: "Trained on vast medical literature datasets", icon: <FaRobot className="text-secondary" /> },
                { title: "Multi-language AI", desc: "Support for 50+ languages", icon: <FaMicrophone className="text-secondary" /> },
                { title: "Visual Generation", desc: "AI-powered medical diagram creation", icon: <FaPalette className="text-secondary" /> }
              ].map((tech, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-secondary/30 group">
                  <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h4 className="font-bold text-primary mb-2">{tech.title}</h4>
                  <p className="text-primary/80 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
          </div>
        </div>

        {/* Enhanced Results Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-8 shadow-2xl text-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-3xl font-bold mb-4">Measurable Healthcare Impact</h3>
              <p className="text-xl text-primary/90">Real results from healthcare providers using <span className="font-medium">Radi Insight Scan</span></p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { stat: "85%", label: "Improved patient comprehension", icon: <FaChartLine className="text-primary" /> },
                { stat: "70%", label: "Reduction in follow-up questions", icon: <FaQuestionCircle className="text-primary" /> },
                { stat: "50+", label: "Languages supported", icon: <FaGlobe className="text-primary" /> },
                { stat: "92%", label: "Healthcare provider satisfaction", icon: <FaUserMd className="text-primary" /> }
              ].map((result, index) => (
                <div key={index} className="text-center p-6 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300 group">
                  <div className="text-3xl mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">{result.icon}</div>
                  <div className="text-3xl font-bold mb-2">{result.stat}</div>
                  <div className="text-sm text-primary/80">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-4xl font-bold mb-6 relative z-10">
              Transforming Healthcare Communication
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8 text-primary/90 relative z-10">
              <span className="font-medium">Radi Insight Scan</span> is revolutionizing how patients understand their medical reports, creating a bridge between complex <span className="font-medium">medical terminology</span> and patient comprehension.
            </p>
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto relative z-10 border border-primary/30">
              <p className="text-lg font-medium">
                Empowering patients with knowledge leads to better healthcare outcomes for everyone.
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

export default ColowatchStudies
