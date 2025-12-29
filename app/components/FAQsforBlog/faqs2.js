"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the history behind Artificial Intelligence (AI)?",
    answer: [
      "Artificial Intelligence dates back to 1956, when it was introduced at the Dartmouth Conference. Early AI systems relied on rule-based logic for problem-solving. Over time, advances in machine learning and deep learning led to powerful systems that learn from data and perform complex tasks, transforming industries and everyday life.",
    ],
  },
  {
    question: "How did deep learning and transformers revolutionize AI?",
    answer: [
      'The deep learning revolution in the 2010s, powered by neural networks and high computational resources, drastically improved AI performance. Transformers, introduced in the paper “Attention Is All You Need”, changed the game by enabling faster, parallel processing and contextual understanding, paving the way for modern language models like GPT.',
    ],
  },
  {
    question: "What are AI agents, and how are they different from language models?",
    answer: [
      "AI agents go beyond traditional language models by autonomously reasoning, planning, and performing tasks. Powered by tools like LangChain and OpenAI's Function Calling, these agents can book trips, write code, and even collaborate with humans, marking a shift toward general-purpose, action-oriented AI.",
    ],
  },
  {
    question: "What is the difference between open-source and closed-source AI models?",
    answer: [
      "Open-source models (like Meta’s LLaMA and Hugging Face tools) promote transparency and community-driven innovation. Closed-source models (like GPT-4 or Claude) offer powerful performance but are restricted by licenses. Each approach has unique benefits in scalability, accessibility, and use cases.",
    ],
  },
  {
    question: "What are reasoning models in AI, and why are they important?",
    answer: [
      "Reasoning models represent the next leap in AI, focusing on logical decision-making and structured problem-solving. Techniques like Chain-of-Thought, Self-Reflection, and tree-of-thought help AI systems think more like humans, enhancing accuracy in multi-step tasks and real-world applications.",
    ],
  },
];

const Faqs2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-secondary py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-glow">
            Frequently Asked Questions
          </h3>
          <p className="text-primary/70 text-lg">
            AI, Agents, Reasoning & Ecosystem
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="bg-secondary/80 border border-primary/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-primary/5 transition-colors duration-200"
                onClick={() => toggle(idx)}
              >
                <span className="text-primary font-semibold text-left pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-primary transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-primary/80 space-y-2 border-t border-primary/20">
                  {faq.answer.map((line, lineIdx) => (
                    <div key={lineIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px #1ddfea66, 0 0 2px #223044;
        }
        .shadow-glow {
          box-shadow: 0 0 32px #1ddfea22, 0 0 8px #22304426;
        }
      `}</style>
    </div>
  );
};

export default Faqs2;
