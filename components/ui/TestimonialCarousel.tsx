"use client";

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type TestimonialCarouselProps = {
  locale: string;
};

export default function TestimonialCarousel({ locale }: TestimonialCarouselProps) {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Get testimonials from translations
  const testimonials = [
    {
      eyebrow: t('about.testimonials.slide1.eyebrow'),
      quote: t('about.testimonials.slide1.quote'),
      attribution: t('about.testimonials.slide1.attribution'),
      badges: [
        t('about.testimonials.slide1.badge1'),
        t('about.testimonials.slide1.badge2'),
        t('about.testimonials.slide1.badge3')
      ],
      avatar: '/testimonials/mike-johnson.jpg',
      initials: 'MJ'
    },
    {
      eyebrow: t('about.testimonials.slide2.eyebrow'),
      quote: t('about.testimonials.slide2.quote'),
      attribution: t('about.testimonials.slide2.attribution'),
      badges: [
        t('about.testimonials.slide2.badge1'),
        t('about.testimonials.slide2.badge2'),
        t('about.testimonials.slide2.badge3')
      ],
      avatar: '/testimonials/sarah-martinez.jpg',
      initials: 'SM'
    },
    {
      eyebrow: t('about.testimonials.slide3.eyebrow'),
      quote: t('about.testimonials.slide3.quote'),
      attribution: t('about.testimonials.slide3.attribution'),
      badges: [
        t('about.testimonials.slide3.badge1'),
        t('about.testimonials.slide3.badge2'),
        t('about.testimonials.slide3.badge3')
      ],
      avatar: '/testimonials/dana-lee.jpg',
      initials: 'DL'
    }
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isPlaying, prefersReducedMotion, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);
  const handleFocus = () => setIsPlaying(false);
  const handleBlur = () => setIsPlaying(true);

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm text-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide Content */}
      <div className="relative overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-all duration-200 ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-2 absolute inset-0'
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${testimonials.length}`}
            style={{
              transition: prefersReducedMotion ? 'opacity 0ms' : 'opacity 200ms ease-in-out, transform 200ms ease-in-out'
            }}
          >
            <figure>
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                {testimonial.eyebrow}
              </div>
              
              <blockquote className="text-lg md:text-xl leading-8 font-medium mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <figcaption>
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-slate-600 font-medium text-sm" aria-label="Avatar for ${testimonial.attribution}">${testimonial.initials}</div>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="mt-4 text-sm text-slate-600">
                      {testimonial.attribution}
                    </div>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {testimonial.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-600 gap-1"
                        >
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-3 text-xs text-slate-500">
                      {t('about.testimonials.disclaimer')}
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous/Next Buttons */}
        <div className="flex gap-2">
          <button
            onClick={goToPrevious}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
                index === currentSlide 
                  ? 'bg-slate-600' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}