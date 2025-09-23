"use client";

import { useState, useEffect } from "react";
import PageShell from "@/app/components/PageShell";

export default function DemoPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    {
      id: 0,
      title: "Opening",
      duration: "0:00-0:20",
      content: {
        title: "Agents spend 3+ hrs/day on email.",
        subtitle: "RealtyClose = Inbox → Deal-Closing Machine",
        description: "Real estate agents spend over three hours every day buried in email. RealtyClose transforms that inbox into a deal-closing machine."
      }
    },
    {
      id: 1,
      title: "New Listing Follow-Up",
      duration: "0:20-1:20", 
      content: {
        title: "Buyer email arrives...",
        subtitle: "AI analyzes instantly → Polished draft in 30 sec",
        description: "A buyer emails asking for more details on a new listing. RealtyClose instantly analyzes and suggests a professional response. What used to take 15 minutes now takes 30 seconds."
      }
    },
    {
      id: 2,
      title: "Closing Coordination",
      duration: "1:20-2:10",
      content: {
        title: "Closings = complex + chaotic",
        subtitle: "Unified threads, smart deadlines, one-click updates",
        description: "Multiple parties. Endless back-and-forth. RealtyClose brings order to the chaos with automatic threading, deadline tracking, and one-click status updates."
      }
    },
    {
      id: 3,
      title: "Price Negotiation",
      duration: "2:10-3:00",
      content: {
        title: "Price negotiations = high stakes",
        subtitle: "AI suggests counter-offers with market data",
        description: "RealtyClose drafts responses that balance firmness with diplomacy. Professional, data-backed responses that build trust and keep deals moving."
      }
    },
    {
      id: 4,
      title: "Quick Actions",
      duration: "3:00-3:45",
      content: {
        title: "All inside Gmail - no switching",
        subtitle: "One-click logging, scheduling, reporting",
        description: "Log calls, schedule showings, generate reports - without leaving your inbox. The productivity toolkit agents have been waiting for."
      }
    },
    {
      id: 5,
      title: "Before vs After",
      duration: "3:45-4:30",
      content: {
        title: "The difference is night and day",
        subtitle: "From chaos to confidence",
        description: "Save 3+ hours daily. Clean threads, polished responses, automated reminders, and confident client communication."
      }
    }
  ];

  // Auto-advance if playing
  useEffect(() => {
    if (isPlaying && activeStep < demoSteps.length - 1) {
      const timer = setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 10000);
      return () => clearTimeout(timer);
    } else if (isPlaying && activeStep === demoSteps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, activeStep]);

  return (
    <PageShell title="Interactive Demo">
      {/* Controls */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </button>
        <button 
          onClick={() => { setActiveStep(0); setIsPlaying(false); }}
          className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          ↺ Replay
        </button>
      </div>

      {/* Progress Steps */}
      <div className="hidden md:flex flex-wrap justify-center mb-12 gap-2">
        {demoSteps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeStep === index 
                ? "bg-blue-500 text-white scale-105" 
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {index + 1}. {step.title}
          </button>
        ))}
      </div>

      {/* Main Demo Grid */}
      <div className="grid md:grid-cols-12 md:gap-8">
        {/* Left Pane - Gmail Mock */}
        <div className="md:col-span-7 mb-8 md:mb-0">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Gmail Header */}
            <div className="bg-gray-100 border-b border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded-lg px-4 py-2 ml-4 text-sm text-gray-600">
                  mail.google.com
                </div>
              </div>
            </div>
            
            {/* Gmail Content */}
            <div className="p-6 h-[400px] overflow-y-auto bg-gray-50">
              {activeStep === 0 && (
                <div className="space-y-3">
                  {["Sarah Chen - Interested in Oak Street property", 
                    "Mike Johnson - Closing documents for Main St",
                    "Title Company - Missing disclosure form"
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="font-medium text-gray-800">{item}</div>
                      <div className="text-sm text-gray-500 mt-1">{["2:34 PM", "1:22 PM", "11:45 AM"][i]}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="font-medium text-gray-800 mb-2">From: Sarah Chen</div>
                    <p className="text-gray-600">Hi, I saw the listing for 456 Oak Street and I'm very interested! Can you tell me more about the property?</p>
                  </div>
                  
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                        RC
                      </div>
                      <span className="font-semibold text-blue-800">RealtyClose AI Assistant</span>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <p className="text-gray-700 text-sm">Hi Sarah, Thank you for your interest in 456 Oak Street! This beautiful 4-bedroom home features...</p>
                    </div>
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Insert & Send
                    </button>
                  </div>
                </div>
              )}
              
              {activeStep >= 2 && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">{["📧", "📊", "💰", "⚡", "✨"][activeStep - 1]}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{demoSteps[activeStep].title} Demo</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Pane - Captions */}
        <div className="md:col-span-5">
          <div className="bg-slate-700/50 rounded-xl p-6">
            <div className="mb-4">
              <span className="text-sm text-blue-400 font-medium">{demoSteps[activeStep].duration}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">{demoSteps[activeStep].content.title}</h2>
            <h3 className="text-lg text-blue-300 mb-4">{demoSteps[activeStep].content.subtitle}</h3>
            <p className="text-slate-300 leading-relaxed mb-6">{demoSteps[activeStep].content.description}</p>
            
            {/* Progress Bar */}
            <div className="bg-slate-600 rounded-full h-2 mb-6">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((activeStep + 1) / demoSteps.length) * 100}%` }}
              />
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                className={`text-slate-400 hover:text-white transition-colors ${activeStep === 0 ? 'opacity-50' : ''}`}
                disabled={activeStep === 0}
              >
                ← Previous
              </button>
              
              <span className="text-slate-400">{activeStep + 1} / {demoSteps.length}</span>
              
              <button
                onClick={() => setActiveStep(Math.min(demoSteps.length - 1, activeStep + 1))}
                className={`text-slate-400 hover:text-white transition-colors ${activeStep === demoSteps.length - 1 ? 'opacity-50' : ''}`}
                disabled={activeStep === demoSteps.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Ready to try it?</h4>
            <p className="text-slate-300 text-sm mb-4">Free • Instant setup • Trusted by agents</p>
            <a href="/install" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-block">
              Install Free Extension
            </a>
          </div>
        </div>
      </div>
      
      {/* Before/After Toggle */}
      <div className="mt-16">
        <h2 className="text-center mb-8">Before vs After RealtyClose</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-4">❌ Before</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• 15-20 minutes per professional email</li>
              <li>• Missed follow-ups and lost deals</li>
              <li>• Inconsistent tone and messaging</li>
              <li>• Manual tracking across spreadsheets</li>
            </ul>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">✅ After</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• 10-30 seconds per email</li>
              <li>• Automated follow-ups never miss</li>
              <li>• Consistent professional tone</li>
              <li>• Everything tracked in Gmail</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/50 rounded-xl p-6">
          <p className="text-slate-300 italic mb-4">
            "I went from chaos to confidence."
          </p>
          <cite className="text-blue-300 text-sm">- Sarah M., TX</cite>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-6">
          <p className="text-slate-300 italic mb-4">
            "Our response times improved by 80%."
          </p>
          <cite className="text-green-300 text-sm">- Mike J., AZ</cite>
        </div>
      </div>
    </PageShell>
  );
}