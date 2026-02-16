'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { key: 'client1', rating: 5 },
    { key: 'client2', rating: 5 },
    { key: 'client3', rating: 5 },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gold-gradient mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Quote decoration */}
            <div className="absolute -top-6 -left-4 text-gold-200 dark:text-gold-800">
              <Quote className="h-24 w-24" />
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white dark:from-dark-card dark:to-dark-bg rounded-2xl p-8 md:p-12 border border-gold-200 dark:border-gold-900/30 shadow-xl">
              {/* Testimonial content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center font-cormorant italic mb-8"
                >
                  "{t(`${testimonials[currentIndex].key}.quote` as any)}"
                </motion.blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    {t(`${testimonials[currentIndex].key}.author` as any)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t(`${testimonials[currentIndex].key}.position` as any)}, {t(`${testimonials[currentIndex].key}.company` as any)}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gold-300 dark:border-gold-700 text-gold-700 dark:text-gold-300 hover:bg-gold-100 dark:hover:bg-gold-900/30 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all',
                      currentIndex === index
                        ? 'bg-gold-400 w-8'
                        : 'bg-gold-200 dark:bg-gold-800'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gold-300 dark:border-gold-700 text-gold-700 dark:text-gold-300 hover:bg-gold-100 dark:hover:bg-gold-900/30 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
