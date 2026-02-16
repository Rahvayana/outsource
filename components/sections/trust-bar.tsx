'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Grand Hotel', initials: 'GH' },
  { name: 'Luxury Resorts', initials: 'LR' },
  { name: 'Paradise Inn', initials: 'PI' },
  { name: 'Elite Stays', initials: 'ES' },
  { name: 'Royal Suites', initials: 'RS' },
];

export function TrustBar() {
  const t = useTranslations('trust');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 border-y border-gold-200 dark:border-gold-900/30 bg-white/50 dark:bg-dark-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm uppercase tracking-wider"
        >
          {t('title')}
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center text-white font-semibold text-sm shadow-md group-hover:shadow-lg transition-shadow">
                {partner.initials}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hidden sm:block">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
