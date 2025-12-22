"use client";
import React from 'react'

function InsightScan() {
  return (
    <div className="relative bg-secondary min-h-screen overflow-hidden">
      {/* ==== Background Decorative Circles ==== */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full" />
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-secondary/15 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-secondary/25 rounded-full" />
      </div>
      {/* ==== Floating Small Dots ==== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-48 right-20 w-2 h-2 bg-white/60 rounded-full animate-bounce" />
        <div className="absolute bottom-56 left-1/4 w-3 h-3 bg-secondary/80 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 py-12 relative z-10">
        {/* ====== Project Title/Intro ====== */}
        <div className="mb-12">
        <div className="inline-flex items-center border border-secondary/30 bg-white/5 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Radi Insight Scan: Fixing Medical Communication
        </div>
        <h2 className="text-5xl font-bold text-primary mb-6">
          Turn Medical Jargon into <span className="bg-gradient-to-r from-primary via-primary-400 to-primary bg-clip-text text-transparent">Patient Understanding</span>
        </h2>
        <p className="pl-8 text-xl text-primary/90 leading-relaxed font-light max-w-4xl border-l-4 border-secondary/30">
          Our mission: Transform every medical report from a source of confusion into a tool for patient empowerment.
        </p>
      </div>

      {/* ==== Images Row ==== */}
        <div className="flex flex-col lg:flex-row gap-28 pl-32 mb-16 justify-center items-center">
          {[
            { src: "/CaseStudies/scans.jpg", caption: "Complex Medical Reports" },
            { src: "/CaseStudies/scans2.jpg", caption: "Simplified Reports" }
          ].map((img, i) => (
            <div key={i} className="relative group rounded-3xl overflow-hidden shadow-2xl">
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

      {/* ====== The Problem ====== */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
          <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
          The Problem
        </h3>
        <ul className="space-y-4 text-primary/90 pl-4 border-l-4 border-secondary/40">
          <li><span className="text-secondary font-semibold">73%</span> of patients can't understand their medical reports. This leads to:</li>
          <li>• Missed follow-up appointments (<span className="text-secondary font-semibold">43%</span> of patients)</li>
          <li>• Unnecessary anxiety and confusion</li>
          <li>• Wasted physician time explaining basic findings</li>
          <li>• Communication failures leading to malpractice suits</li>
        </ul>
        <p className="mt-3 text-primary/85">
          <span className="text-secondary font-semibold">Root cause:</span> Medical reports are written for doctors, not patients.
        </p>
      </div>

      {/* ====== Our Solution: 3-Layer Intelligence ====== */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
          Our Solution: 3-Layer Intelligence System
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-6 border border-primary/20 shadow-2xl">
            <h4 className="text-xl font-bold text-secondary mb-3">Layer 1: Smart Language Processing</h4>
            <ul className="text-primary/90 space-y-1">
              <li>• Contextual AI rebuilds reports in patient-friendly language</li>
              <li>• Risk-weighted explanations for clinical significance</li>
              <li>• Demographic adaptation adjusts complexity</li>
            </ul>
            <div className="mt-3 p-3 bg-white/10 rounded text-primary/90 text-sm">
              <div className="mb-2 font-medium">Example transformation:</div>
              <div><span className="text-secondary">Before:</span> "Mild hepatic steatosis with no focal lesions identified"</div>
              <div><span className="text-secondary">After:</span> "Your liver shows small fat deposits (common in 30% of adults your age). This is mild and typically improves with diet changes. No concerning masses found."</div>
            </div>
          </div>
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-6 border border-primary/20 shadow-2xl">
            <h4 className="text-xl font-bold text-secondary mb-3">Layer 2: Dynamic Visual Intelligence</h4>
            <ul className="text-primary/90 space-y-1">
              <li>• Anatomical maps show exact location of findings</li>
              <li>• Comparative visualizations show results spectrum</li>
              <li>• Progressive disclosure: explore deeper at own pace</li>
            </ul>
          </div>
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-6 border border-primary/20 shadow-2xl">
            <h4 className="text-xl font-bold text-secondary mb-3">Layer 3: Predictive Communication</h4>
            <ul className="text-primary/90 space-y-1">
              <li>• Anxiety prediction for sensitive findings</li>
              <li>• Pre-answers likely patient questions</li>
              <li>• Cultural adaptation: 12-language support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ====== Technical Stack ====== */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
          <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
          Technical Stack
        </h3>
        <ul className="space-y-2 text-primary/90 list-disc list-inside pl-3">
          <li><span className="font-semibold text-secondary">AI & NLP:</span> Proprietary medical ontology mapping 180,000+ terms</li>
          <li><span className="font-semibold text-secondary">React.js:</span> Mobile-optimized interface for hospitals</li>
          <li><span className="font-semibold text-secondary">Node.js:</span> HIPAA-compliant backend (10,000+ reports/day)</li>
          <li><span className="font-semibold text-secondary">MongoDB:</span> Flexible, complex data handling</li>
        </ul>
      </div>

      {/* ====== Results After 6 Months ====== */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
          <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
          Results After 6 Months
        </h3>
        <ul className="space-y-4 text-primary/90 pl-4 border-l-4 border-secondary/40">
          <li><span className="text-secondary font-semibold">89%</span> of patients report better understanding</li>
          <li><span className="text-secondary font-semibold">76%</span> reduction in follow-up calls for clarification</li>
          <li><span className="text-secondary font-semibold">45%</span> reduction in physician time spent explaining reports</li>
          <li><span className="text-secondary font-semibold">29%</span> improvement in treatment adherence rates</li>
          <li><span className="text-secondary font-semibold">56%</span> increase in informed patient questions during consultations</li>
        </ul>
      </div>

      {/* ====== Differentiators ====== */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
          <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
          What Makes Us Different
        </h3>
        <ul className="space-y-3 text-primary/90 pl-4 border-l-4 border-secondary/40">
          <li>• <span className="font-semibold text-secondary">Clinical integration:</span> Works within EHR systems</li>
          <li>• <span className="font-semibold text-secondary">Cultural intelligence:</span> True multilingual adaptation, not just translation</li>
          <li>• <span className="font-semibold text-secondary">Continuous learning:</span> AI improves with every processed report</li>
          <li>• <span className="font-semibold text-secondary">Provider-friendly:</span> Reduces — not adds to — physician workload</li>
        </ul>
      </div>

      {/* ====== The Impact ====== */}
      <div className="mt-16">
        <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          <h3 className="text-4xl font-bold mb-8 relative z-10 flex items-center">
            <span className="w-4 h-4 bg-secondary rounded-full mr-4 animate-pulse"></span>
            The Impact
          </h3>
          <div className="w-20 h-1 bg-secondary rounded-full mb-8 relative z-10"></div>
          <p className="text-xl font-light leading-relaxed text-primary/90">
            When patients understand their health information, everyone wins: better outcomes, reduced anxiety, improved adherence, and more efficient healthcare delivery.
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default InsightScan;
