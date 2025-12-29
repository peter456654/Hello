"use client";
import React from "react";

function SignatureOverView() {
  return (
    <div className="relative bg-secondary min-h-screen overflow-hidden">
      
      {/* ==== Decorative Circles ==== */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full" />
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-secondary/15 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-secondary/25 rounded-full" />
      </div>
      
      {/* ==== Animated Dots ==== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce" />
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 py-12 relative z-10">
        
        {/* ==== Intro Section ==== */}
        <div className="mb-12">
          
          <h2 className="text-5xl font-bold text-primary mb-4">
            Advanced Handwritten <span className="bg-gradient-to-r from-primary via-primary-400 to-primary bg-clip-text text-transparent">Signature Recognition System</span>
          </h2>
          <p className="mt-4 text-primary/80 max-w-4xl leading-relaxed border-l-4 border-secondary/40 pl-6">
            Our Advanced Handwritten Signature Recognition System makes signature verification faster, smarter, 
            and more accurate. It uses advanced image processing techniques like template matching and correlation 
            to compare handwritten signatures with stored samples. This technology is perfect for form validation 
            and other low-security verification needs, helping organizations save time and avoid human errors.
          </p>
        </div>

        {/* ==== Images Row ==== */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16 justify-center items-center">
          {[
            { src: "/CaseStudies/signature.jpg", caption: "Efficient Signature Verification" },
            { src: "/CaseStudies/sign.jpg", caption: "Automated Authentication" }
          ].map((img, index) => (
            <div key={index} className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img.src}
                alt={img.caption}
                className="w-[400px] h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-primary">
                <h3 className="text-lg font-bold">{img.caption}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-3xl transition-all duration-500 group-hover:border-secondary/50"></div>
            </div>
          ))}
        </div>

        {/* ==== Challenges ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Challenges</h3>
          <p className="text-primary/90 border-l-4 border-secondary/40 pl-4 max-w-4xl">
            Manual signature verification often leads to human errors, delays, and inconsistent results. It can be 
            extremely time-consuming, especially when handling large document volumes. The reliance on human judgment 
            makes the process less reliable and harder to scale—slowing operations and reducing trust in the verification process.
          </p>
        </div>

        {/* ==== Strategic Shift ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Strategic Shift</h3>
          <p className="text-primary/90 border-l-4 border-secondary/40 pl-4 max-w-4xl">
            To solve these problems, we moved from manual verification to a fully automated system powered by 
            <span className="text-secondary font-medium"> OpenCV-based image processing</span>. It uses correlation-based matching 
            methods to check authenticity, eliminating subjective human decisions and making verification faster, more consistent, 
            and highly efficient.
          </p>
        </div>

        {/* ==== Benefits & Tech ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Benefits */}
          <div className="bg-secondary/70 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl transition hover:bg-secondary/80">
            <h3 className="text-3xl font-bold text-primary mb-6">Benefits of the In-House System</h3>
            <ul className="text-primary/90 space-y-3 list-disc list-inside">
              <li>Higher accuracy, reducing incorrect approvals/rejections</li>
              <li>Processes signatures in seconds instead of minutes</li>
              <li>Cost-effective, internally developed and maintained</li>
              <li>Scales to thousands of signatures without extra staff</li>
              <li>Future-ready for AI integration and real-time verification</li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="bg-secondary/70 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl transition hover:bg-secondary/80">
            <h3 className="text-3xl font-bold text-primary mb-6">Technology Stack Used</h3>
            <ul className="text-primary/90 space-y-3 list-disc list-inside">
              <li><span className="text-secondary font-medium">OpenCV</span> – Image processing & template matching</li>
              <li>Correlation coefficient algorithms for accuracy scoring</li>
              <li>Structured signature database for reliable comparison</li>
              <li><span className="text-secondary font-medium">Python</span> – Backend automation and processing</li>
            </ul>
          </div>
        </div>

        {/* ==== Fast-Tracking Development ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Fast-Tracking Development</h3>
          <p className="text-primary/90 border-l-4 border-secondary/40 pl-4 max-w-4xl">
            Development was completed in record time by focusing on key stages:  
            building a clean signature database, creating robust template-matching algorithms,  
            adding correlation-based scoring for precision, and optimizing for speed.  
            We’ve also prepared for AI integration to take intelligence even further.
          </p>
        </div>

        {/* ==== Conclusion ==== */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-10 shadow-2xl text-primary relative overflow-hidden border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
            <h3 className="text-4xl font-bold mb-6">Conclusion</h3>
            <p className="text-xl font-light text-primary/90">
              The Advanced Handwritten Signature Recognition System sets a new benchmark for speed, accuracy, and cost-efficiency 
              in signature verification. By replacing slow, error-prone manual checks with a fast, automated process, we’ve created 
              a solution adaptable to industries from banking to healthcare. With upcoming AI integration, real-time high-accuracy 
              verification is on the horizon.
            </p>
          </div>
        </div>

      </div>
      
      {/* ==== Bottom Decoration ==== */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </div>
  );
}

export default SignatureOverView;
