'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const t = useTranslations('contact');
  const tInfo = useTranslations('contact.info');
  const tCta = useTranslations('cta.form');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: MapPin, label: tInfo('address'), value: 'Jl. Sudirman No. 123, Jakarta 12190' },
    { icon: Phone, label: tInfo('phone'), value: '+62 21 1234 5678' },
    { icon: Mail, label: tInfo('email'), value: 'info@luxehospitality.id' },
    { icon: MessageCircle, label: tInfo('whatsapp'), value: '+62 812 3456 7890' },
  ];

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

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400 flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{info.label}</p>
                        <p className="text-gray-900 dark:text-gray-100 font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden border-gold-200 dark:border-gold-900/30">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900/20 dark:to-gold-950/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gold-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-400">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-gold-200 dark:border-gold-900/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                        <Mail className="h-10 w-10 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-300">
                        {tCta('success')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        label={tCta('name')}
                        placeholder={tCta('name')}
                        required
                      />
                      <Input
                        label={tCta('email')}
                        type="email"
                        placeholder={tCta('email')}
                        required
                      />
                      <Input
                        label={tCta('hotel')}
                        placeholder={tCta('hotel')}
                        required
                      />
                      <Textarea
                        label={tCta('message')}
                        placeholder={tCta('message')}
                        rows={5}
                        required
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gold-shimmer"
                      >
                        {tCta('submit')}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gold-50/30 dark:from-dark-bg dark:to-dark-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold-gradient mb-6">
              24/7 Support Available
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Our team is always ready to assist you. Reach out anytime and experience our commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+622112345678" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 hover:bg-gold-200 dark:hover:bg-gold-900/50 transition-colors">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/6281234567890" className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
