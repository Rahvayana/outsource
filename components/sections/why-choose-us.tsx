'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, TrendingUp, Award, Zap } from 'lucide-react';

const features = [
  { icon: DollarSign, key: 'cost' },
  { icon: TrendingUp, key: 'scalability' },
  { icon: Award, key: 'expertise' },
  { icon: Zap, key: 'technology' },
];

export function WhyChooseUs() {
  const t = useTranslations('whyChooseUs');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50/30 dark:from-dark-bg dark:to-dark-card">
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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gold-400/20 blur-xl group-hover:blur-2xl transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {t(`${feature.key}.title` as any)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t(`${feature.key}.description` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
