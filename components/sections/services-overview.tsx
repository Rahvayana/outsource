'use client';

import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CalendarCheck,
  Users,
  PhoneCall,
  CalendarClock,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { Link } from '@/app/[locale]/i18n/routing';

const serviceIcons = {
  reservation: CalendarCheck,
  guestSupport: Users,
  callCenter: PhoneCall,
  booking: CalendarClock,
  emergency: AlertCircle,
  experience: Sparkles,
};

export function ServicesOverview() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    { key: 'reservation', icon: 'reservation' },
    { key: 'guestSupport', icon: 'guestSupport' },
    { key: 'callCenter', icon: 'callCenter' },
    { key: 'booking', icon: 'booking' },
    { key: 'emergency', icon: 'emergency' },
    { key: 'experience', icon: 'experience' },
  ];

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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href="/services">
                  <Card className="h-full hover:border-gold-400 dark:hover:border-gold-600 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle>{t(`${service.key}.title` as any)}</CardTitle>
                      <CardDescription className="mt-2">
                        {t(`${service.key}.description` as any)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
