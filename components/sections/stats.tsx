'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Hotel, HeadphonesIcon, Languages, Star } from 'lucide-react';

const stats = [
  { icon: Hotel, value: 500, suffix: '+', key: 'partners' },
  { icon: HeadphonesIcon, value: 24, suffix: '/7', key: 'support' },
  { icon: Languages, value: 30, suffix: '+', key: 'languages' },
  { icon: Star, value: 98, suffix: '%', key: 'satisfaction' },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return Math.min(prev + increment, value);
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="text-4xl md:text-5xl font-playfair font-bold text-gold-gradient">
      {Math.round(count)}{suffix}
    </span>
  );
}

export function Stats() {
  const t = useTranslations('stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-gold-50/50 to-white dark:from-dark-bg dark:to-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                {t(stat.key as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
