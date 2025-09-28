"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import PageShell from "@/app/components/PageShell";

export default function DemoPageClient() {
  const t = useTranslations();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    {
      id: 0,
      title: t('demo.steps.opening.title'),
      duration: "0:00-0:20",
      content: {
        title: t('demo.steps.opening.content.title'),
        subtitle: t('demo.steps.opening.content.subtitle'),
        description: t('demo.steps.opening.content.description')
      }
    },
    {
      id: 1,
      title: t('demo.steps.listing.title'),
      duration: "0:20-1:20", 
      content: {
        title: t('demo.steps.listing.content.title'),
        subtitle: t('demo.steps.listing.content.subtitle'),
        description: t('demo.steps.listing.content.description')
      }
    },
    {
      id: 2,
      title: t('demo.steps.closing.title'),
      duration: "1:20-2:10",
      content: {
        title: t('demo.steps.closing.content.title'),
        subtitle: t('demo.steps.closing.content.subtitle'),
        description: t('demo.steps.closing.content.description')
      }
    },
    {
      id: 3,
      title: t('demo.steps.negotiation.title'),
      duration: "2:10-3:00",
      content: {
        title: t('demo.steps.negotiation.content.title'),
        subtitle: t('demo.steps.negotiation.content.subtitle'),
        description: t('demo.steps.negotiation.content.description')
      }
    },
    {
      id: 4,
      title: t('demo.steps.actions.title'),
      duration: "3:00-3:45",
      content: {
        title: t('demo.steps.actions.content.title'),
        subtitle: t('demo.steps.actions.content.subtitle'),
        description: t('demo.steps.actions.content.description')
      }
    },
    {
      id: 5,
      title: t('demo.steps.comparison.title'),
      duration: "3:45-4:30",
      content: {
        title: t('demo.steps.comparison.content.title'),
        subtitle: t('demo.steps.comparison.content.subtitle'),
        description: t('demo.steps.comparison.content.description')
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
    <PageShell title={t('demo.title')}>
      {/* Controls */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {isPlaying ? "⏸ " + t('demo.controls.pause') : "▶ " + t('demo.controls.play')}
        </button>
        <button 
          onClick={() => { setActiveStep(0); setIsPlaying(false); }}
          className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          ↺ {t('demo.controls.replay')}
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
                  {[
                    t('demo.inbox.email1'),
                    t('demo.inbox.email2'), 
                    t('demo.inbox.email3')
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
                    <div className="font-medium text-gray-800 mb-2">{t('demo.email.from')}: Sarah Chen</div>
                    <p className="text-gray-600">{t('demo.email.content')}</p>
                  </div>
                  
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                        RC
                      </div>
                      <span className="font-semibold text-blue-800">{t('demo.ai.assistant')}</span>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <p className="text-gray-700 text-sm">{t('demo.ai.response')}</p>
                    </div>
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      {t('demo.ai.insert')}
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
                    <h3 className="text-lg font-semibold text-gray-800">{demoSteps[activeStep].title} {t('demo.demoLabel')}</h3>
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
                ← {t('demo.navigation.previous')}
              </button>
              
              <span className="text-slate-400">{activeStep + 1} / {demoSteps.length}</span>
              
              <button
                onClick={() => setActiveStep(Math.min(demoSteps.length - 1, activeStep + 1))}
                className={`text-slate-400 hover:text-white transition-colors ${activeStep === demoSteps.length - 1 ? 'opacity-50' : ''}`}
                disabled={activeStep === demoSteps.length - 1}
              >
                {t('demo.navigation.next')} →
              </button>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-white mb-3">{t('demo.cta.title')}</h4>
            <p className="text-slate-300 text-sm mb-4">{t('demo.cta.subtitle')}</p>
            <a href="/install" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-block">
              {t('demo.cta.button')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Before/After Toggle */}
      <div className="mt-16">
        <h2 className="text-center mb-8">{t('demo.comparison.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-4">❌ {t('demo.comparison.before.title')}</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• {t('demo.comparison.before.point1')}</li>
              <li>• {t('demo.comparison.before.point2')}</li>
              <li>• {t('demo.comparison.before.point3')}</li>
              <li>• {t('demo.comparison.before.point4')}</li>
            </ul>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">✅ {t('demo.comparison.after.title')}</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• {t('demo.comparison.after.point1')}</li>
              <li>• {t('demo.comparison.after.point2')}</li>
              <li>• {t('demo.comparison.after.point3')}</li>
              <li>• {t('demo.comparison.after.point4')}</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-700/50 rounded-xl p-6">
          <p className="text-slate-300 italic mb-4">
            "{t('demo.testimonials.testimonial1.quote')}"
          </p>
          <cite className="text-blue-300 text-sm">- {t('demo.testimonials.testimonial1.author')}</cite>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-6">
          <p className="text-slate-300 italic mb-4">
            "{t('demo.testimonials.testimonial2.quote')}"
          </p>
          <cite className="text-green-300 text-sm">- {t('demo.testimonials.testimonial2.author')}</cite>
        </div>
      </div>
    </PageShell>
  );
}