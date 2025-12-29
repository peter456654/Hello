"use client";
import React from 'react';

function TextAnalytic() {
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
        {/* ==== Headline & Introduction ==== */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-primary mb-4">
            Smart Communication for <span className="bg-gradient-to-r from-primary via-primary-400 to-primary bg-clip-text text-transparent">Better Care</span>
          </h2>
          <p className="mt-4 text-primary/90 max-w-3xl leading-relaxed border-l-4 border-secondary/40 pl-6">
            Effective communication is the heart of quality caregiving. But it’s not always clearly understood or recognized. With the help of AI, our Text Analytics Project transforms regular conversations into insights that enhance the caregiver experience.
          </p>
        </div>

        {/* ==== Challenges Section ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
            Why Caregiver Conversations Often Fail
          </h3>
          <ul className="space-y-4 text-primary/90 pl-4 border-l-4 border-secondary/40 mb-2">
            <li>
              <span className="font-semibold text-primary">Misunderstood messages:</span> Where the true meaning of a conversation gets lost.
            </li>
            <li>
              <span className="font-semibold text-primary">Emotional cues often missed:</span> Making it hard to respond with care and understanding.
            </li>
            <li>
              <span className="font-semibold text-primary">No clear indicators for improvement:</span> Teams struggle to identify and fix gaps, leading to inconsistent care.
            </li>
          </ul>
          <p className="text-primary/90 mt-2">These issues can reduce trust and lower the quality of care.</p>
        </div>

        {/* ==== AI Approach Section ==== */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
            A Smarter Way to Understand Conversations
          </h3>
          <ul className="space-y-3 text-primary/90 pl-4 border-l-4 border-secondary/40">
            <li>Converted audio to clear, readable text.</li>
            <li>Applied AI tools to understand tone and context.</li>
            <li>Uncovered emotional patterns using sentiment analysis.</li>
          </ul>
          <p className="text-primary/90 mt-2">
            This change brought us closer to understanding both the <span className="font-semibold text-primary">“what”</span> and the <span className="font-semibold text-primary">“how”</span> behind every conversation.
          </p>
        </div>

        {/* ==== Images Row ==== */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 justify-center items-center">
          {[
            { src: "/CaseStudies/Text.jpg", caption: "Communication Challenges" },
            { src: "/CaseStudies/text2.jpg", caption: "AI-Powered Analysis" }
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

        {/* ==== Solution & Features ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* How Our Solution Makes a Difference */}
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl hover:bg-secondary/40 transition">
            <h3 className="text-3xl font-bold text-primary mb-6">
              How Our In-House Solution Makes a Difference
            </h3>
            <ul className="space-y-4 text-primary/90">
              <li><span className="font-semibold text-primary">Live Transcription:</span> No detail goes unnoticed.</li>
              <li><span className="font-semibold text-primary">Deeper Insight:</span> AI reads between the lines.</li>
              <li><span className="font-semibold text-primary">Emotion Tracker:</span> Picks up on frustration, satisfaction, or confusion.</li>
              <li><span className="font-semibold text-primary">Trend Spotting:</span> Helps us identify areas that require improvement.</li>
              <li><span className="font-semibold text-primary">Simple Dashboards:</span> Complex data made visual and usable.</li>
            </ul>
          </div>
          {/* Tech & Build */}
          <div className="bg-secondary/30 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 shadow-2xl hover:bg-secondary/40 transition">
            <h3 className="text-3xl font-bold text-primary mb-6">
              What Powers Our Platform
            </h3>
            <ul className="mb-4 space-y-3 text-primary/90 list-disc list-inside">
              <li><span className="font-semibold text-primary">Voice-to-Text Tools:</span> Google Cloud, Whisper AI</li>
              <li><span className="font-semibold text-primary">AI Language Processing:</span> spaCy, NLTK, BERT</li>
            </ul>
            <h4 className="mt-6 mb-2 text-xl font-bold text-primary">Faster Innovation with an In-House Build</h4>
            <ul className="mb-4 space-y-3 text-primary/90 list-disc list-inside">
              <li>Quick fixes and updates</li>
              <li>Custom fit for our needs</li>
              <li>No vendor delays or extra costs</li>
              <li>Better control = better results</li>
            </ul>
            <p className="text-primary/90">
              It’s fast, flexible, and designed for caregiving success.
            </p>
          </div>
        </div>

        {/* ==== Looking Ahead/Conclusion ==== */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-secondary/90 to-secondary rounded-3xl p-12 shadow-2xl text-primary relative overflow-hidden border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <h3 className="text-4xl font-bold mb-8 relative z-10 flex items-center">
              <span className="w-4 h-4 bg-secondary rounded-full mr-4 animate-pulse"></span>
              Looking Ahead: Empathy Meets AI
            </h3>
            <div className="w-20 h-1 bg-secondary rounded-full mb-8 relative z-10"></div>
            <p className="text-xl font-light leading-relaxed text-primary/90">
              Our Text Analytics system is already changing the way caregivers connect. But we’re just getting started. With features like real-time emotion tracking, we’re paving the way for smarter, more compassionate care, one conversation at a time.
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

export default TextAnalytic;
