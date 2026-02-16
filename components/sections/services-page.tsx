'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CalendarCheck,
  Users,
  PhoneCall,
  CalendarClock,
  AlertCircle,
  Sparkles,
  Settings,
  MessageSquare,
  FileText,
  Bot,
  Database,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceIcons = {
  reservation: CalendarCheck,
  guestSupport: Users,
  callCenter: PhoneCall,
  booking: CalendarClock,
  emergency: AlertCircle,
  experience: Sparkles,
  technical: Settings,
  omnichannel: MessageSquare,
  backoffice: FileText,
};

const categories = [
  { key: 'reservations', icon: 'reservation' },
  { key: 'guest', icon: 'guestSupport' },
  { key: 'technical', icon: 'technical' },
  { key: 'backoffice', icon: 'backoffice' },
];

const processSteps = [
  { num: '01', key: 'step1' },
  { num: '02', key: 'step2' },
  { num: '03', key: 'step3' },
  { num: '04', key: 'step4' },
  { num: '05', key: 'step5' },
];

const techFeatures = [
  { icon: Bot, key: 'ai' },
  { icon: Database, key: 'crm' },
  { icon: MessageSquare, key: 'omnichannel' },
  { icon: BarChart3, key: 'analytics' },
];

export function ServicesPage() {
  const t = useTranslations('servicePage');
  const tServices = useTranslations('services');
  const [activeCategory, setActiveCategory] = useState('reservations');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gold-50 via-white to-gold-100 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-300/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold-gradient mb-6">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-4">
              {t('categories.title')}
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = serviceIcons[category.icon as keyof typeof serviceIcons];
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={cn(
                    'flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300',
                    activeCategory === category.key
                      ? 'bg-gradient-gold text-white shadow-lg'
                      : 'bg-gold-50 dark:bg-gold-900/20 text-gray-700 dark:text-gray-300 hover:bg-gold-100 dark:hover:bg-gold-900/30'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{t(`categories.${category.key}` as any)}</span>
                </button>
              );
            })}
          </div>

          {/* Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-gold-300 dark:border-gold-700">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  {t(`categories.${activeCategory}` as any)}
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive {activeCategory} solutions for your hospitality business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gold-50 dark:bg-gold-900/20">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      24/7 Availability
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Round-the-clock support for your guests
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gold-50 dark:bg-gold-900/20">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Multi-language Support
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fluent agents in 30+ languages
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50/30 dark:from-dark-bg dark:to-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-4">
              {t('process.title')}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gold-200 dark:bg-gold-800" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-gold text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-lg font-bold">{step.num}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {t(`process.${step.key}.title` as any)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t(`process.${step.key}.description` as any)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-4">
              {t('technology.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('technology.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-gold-400 dark:hover:border-gold-600 transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center text-white mx-auto mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">
                      {t(`technology.${feature.key}` as any)}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gold-100 via-white to-gold-50 dark:from-dark-card dark:via-dark-bg dark:to-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can tailor our services to your specific needs
            </p>
            <Button size="lg" className="gold-shimmer">
              Get a Custom Proposal
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
