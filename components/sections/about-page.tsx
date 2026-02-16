'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/app/[locale]/i18n/routing';
import { ArrowRight } from 'lucide-react';

const valueIcons = {
  excellence: Award,
  integrity: Heart,
  innovation: Lightbulb,
  partnership: Handshake,
};

const team = [
  {
    name: 'Amanda Wijaya',
    role: 'Chief Executive Officer',
    image: '/images/team/amanda.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Chief Operations Officer',
    image: '/images/team/budi.jpg',
  },
  {
    name: 'Catherine Lee',
    role: 'Head of Client Success',
    image: '/images/team/catherine.jpg',
  },
  {
    name: 'David Pratama',
    role: 'Head of Technology',
    image: '/images/team/david.jpg',
  },
];

export function AboutPage() {
  const t = useTranslations('about');
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

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-8 text-center">
                {t('story.title')}
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {t('story.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50/30 dark:from-dark-bg dark:to-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-gold-200 dark:border-gold-900/30 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center text-white mb-6">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {t('mission.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('mission.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-gold-200 dark:border-gold-900/30 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center text-white mb-6">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {t('vision.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('vision.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-4">
              {t('values.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(valueIcons).map(([key, Icon], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-gold-400 dark:hover:border-gold-600 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-white mx-auto mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {t(`values.${key}.title` as any)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`values.${key}.description` as any)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gold-50/50 to-white dark:from-dark-card dark:to-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-4">
              {t('team.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:border-gold-400 dark:hover:border-gold-600 transition-all">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gold-600 dark:text-gold-400">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's start a conversation about how we can elevate your guest experience
            </p>
            <Link href="/contact">
              <Button size="lg" className="gold-shimmer">
                Get in Touch
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
