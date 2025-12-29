"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the difference between WorkManager, AlarmManager, and JobScheduler in Android?",
    answer: [
      "WorkManager is a modern solution for deferrable and guaranteed background tasks, AlarmManager is best for exact time-based execution, and JobScheduler is ideal for condition-based background tasks from Android 5.0 onwards.",
    ],
  },
  {
    question: "When should I use WorkManager in Android app development?",
    answer: [
      "Use WorkManager for tasks like data syncing, file backups, or periodic maintenance, especially when tasks need to be guaranteed even after app restarts or device reboots.",
    ],
  },
  {
    question: "Can AlarmManager run background tasks when the device is idle?",
    answer: [
      "Yes, AlarmManager can wake the device from idle state and execute tasks at specified times. However, it may consume more battery and has limitations due to Doze Mode.",
    ],
  },
  {
    question: "What are the advantages of using JobScheduler over AlarmManager?",
    answer: [
      "JobScheduler is more battery-efficient and supports condition-based execution such as network availability or charging status. It also supports persistence across device reboots.",
    ],
  },
  {
    question: "Is WorkManager better than JobScheduler for background tasks in Android?",
    answer: [
      "Yes, WorkManager is generally preferred as it combines the best features of JobScheduler and AlarmManager while offering compatibility across all Android API levels and guaranteed task execution.",
    ],
  },
  {
    question: "How do I schedule a periodic background task using WorkManager in Android?",
    answer: [
      "You can use PeriodicWorkRequestBuilder to schedule recurring tasks with constraints like unmetered network and charging. WorkManager ensures these tasks are executed reliably.",
    ],
  },
];

const Faqs3 = () => {
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
            WorkManager, AlarmManager and JobScheduler in Android
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

export default Faqs3;
