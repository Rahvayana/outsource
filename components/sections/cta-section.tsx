'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const tForm = useTranslations('cta.form');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-gold-100 via-white to-gold-50 dark:from-dark-card dark:via-dark-bg dark:to-dark-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gold-gradient mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-8 md:p-12 shadow-2xl border border-gold-200 dark:border-gold-900/30"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  {tForm('success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={tForm('name')}
                    placeholder={tForm('name')}
                    required
                  />
                  <Input
                    label={tForm('email')}
                    type="email"
                    placeholder={tForm('email')}
                    required
                  />
                </div>
                <Input
                  label={tForm('hotel')}
                  placeholder={tForm('hotel')}
                  required
                />
                <Textarea
                  label={tForm('message')}
                  placeholder={tForm('message')}
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gold-shimmer"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {tForm('submit')}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
