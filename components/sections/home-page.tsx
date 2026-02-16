'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Link } from '@/app/[locale]/i18n/routing';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { Menu, Close, PlayCircleOutline, ArrowForward, KeyboardArrowDown, Translate, SmartToy, RoomService, Search, School, LinkIcon, RocketLaunch, TrendingUp, Headset, Cpu, FileText, Crown } from '@/components/icons';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const t = useTranslations('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#solutions', key: 'solutions' },
    { href: '#process', key: 'process' },
    { href: '#services', key: 'services' },
    { href: '#resources', key: 'resources' },
  ];

  return (
    <>
      {/* Header */}
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-header border-b border-white/10" : "bg-transparent"
      )}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
          <Link href="/" className="flex items-center gap-2 group z-10">
            <span className="font-serif text-2xl font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
              EverHelp
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-gold-400 mt-1"></div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gold-400 transition-colors uppercase tracking-widest text-[10px] font-bold"
              >
                {t(`nav.${item.key}` as any)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-10">
            <LanguageSwitcher />
            <ThemeToggle />
            <button className="hidden md:block px-6 py-2 border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-primary font-bold text-[10px] rounded-full transition-all duration-300 uppercase tracking-widest">
              {t('nav.bookMeeting')}
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-header border-t border-white/10">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}` as any)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0 scale-105">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40 z-10"></div>
            <img
              alt="Luxurious dark hotel lobby with warm lighting"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJIhictmlR_8qPxwFRT-7yp8EMg60D9leOyBELJ8OoAQpgUdyIn9CMliXhYLtR-VlbWYKpq1Hp-Z14fQRF2k4CC9YnBDug59ftsBKyrVvOLNsRv4idZ_g6zR06DRwZ2L3QRje0251rQIAM--_A6gyQv1-BgL8SXUkim4_zbM0M2tT1MyhV3lgyA1xxcBEmDP5reQEu-djQxidN-a5DXlyW8-0F4EbpijilwfzqVu2pAfsQkmp7bjug9FFxi6EwI3IaR1AB30anvZu7"
            />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-400/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-gold-400/30 rounded-full text-[10px] font-bold text-gold-400 tracking-[0.3em] uppercase mb-2 bg-gold-400/5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
            >
              {t('hero.title')}{' '}
              <span className="text-gradient-gold italic block md:inline mt-2 md:mt-0">{t('hero.highlight')}</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 opacity-90">{t('hero.titleEnd')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 sm:mb-0"
            >
              <button className="group relative px-10 py-5 bg-gold-400 text-primary font-bold text-xs rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] uppercase tracking-[0.2em] w-full sm:w-auto overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('hero.ctaPrimary')}
                  <ArrowForward className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-20"></div>
              </button>
              
              <button className="group px-10 py-5 border border-white/20 hover:border-gold-400/50 text-white font-bold text-xs rounded-full transition-all duration-500 backdrop-blur-md uppercase tracking-[0.2em] w-full sm:w-auto flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-primary transition-colors">
                  <PlayCircleOutline className="w-5 h-5" />
                </div>
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.3em] vertical-text">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent"
            animate={{ 
              height: [0, 48, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-background-light dark:bg-background-dark border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
            {t('trusted.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-serif font-bold text-primary dark:text-white">MARRIOTT</div>
            <div className="text-2xl font-sans font-black tracking-tighter text-primary dark:text-white italic">HILTON</div>
            <div className="text-xl font-serif uppercase tracking-widest text-primary dark:text-white border-2 border-primary dark:border-white p-1">Hyatt</div>
            <div className="text-2xl font-sans font-bold text-primary dark:text-white flex items-center gap-1">
              <span className="block w-6 h-6 bg-primary dark:bg-white rounded-full"></span> ACCOR
            </div>
            <div className="text-2xl font-serif italic font-semibold text-primary dark:text-white">Four Seasons</div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-400/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6 py-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-gold-500 dark:text-gold-400 mb-2 leading-none">{t('metrics.reviews')}</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{t('metrics.reviewsLabel')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="px-6 py-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-gold-500 dark:text-gold-400 mb-2 leading-none">{t('metrics.support')}</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{t('metrics.supportLabel')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-6 py-4"
            >
              <div className="font-serif text-5xl md:text-6xl text-gold-500 dark:text-gold-400 mb-2 leading-none">{t('metrics.languages')}</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{t('metrics.languagesLabel')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden" id="solutions">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gold-400/20 blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gold-400/20 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="inline-block py-1 px-3 border border-gold-400/30 rounded-full text-[10px] font-bold text-gold-500 dark:text-gold-400 tracking-[0.2em] uppercase mb-4">
              World Class Standards
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
              {t('solutions.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-light max-w-2xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { key: 'multilingual', icon: Translate },
              { key: 'ai', icon: SmartToy },
              { key: 'concierge', icon: RoomService }
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className="h-full bg-white dark:bg-gray-800/40 backdrop-blur-sm p-10 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-400/10 transition-all duration-500 relative z-10 flex flex-col items-start overflow-hidden">
                  {/* Card Background Glow */}
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-gold-400/5 rounded-full group-hover:bg-gold-400/20 blur-3xl transition-all duration-700"></div>
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-primary shadow-lg shadow-gold-400/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gold-500 dark:text-gold-400 mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:glow-gold-sm transition-all duration-500">
                    <item.icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors duration-300">
                    {t(`solutions.${item.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8">
                    {t(`solutions.${item.key}.description`)}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    Learn More <ArrowForward className="w-3 h-3" />
                  </div>

                  {/* Top line accent */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-400 to-gold-200 group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awesomize Process */}
      <section className="pt-16 pb-24 bg-gray-950 text-white relative overflow-hidden" id="process">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block py-1 px-3 border border-gold-400/30 rounded-full text-[10px] font-bold text-gold-400 tracking-[0.2em] uppercase mb-4 bg-gold-400/5">
              {t('process.badge')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-0 text-white">{t('process.title')}</h2>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative mb-12">
            {/* Animated Line */}
            <div className="absolute top-[45px] left-0 w-full h-[2px] bg-white/10 overflow-hidden">
              <motion.div 
                className="h-full bg-gold-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-5 gap-8">
              {[
                { key: 'sourcing', icon: Search },
                { key: 'training', icon: School },
                { key: 'integration', icon: LinkIcon },
                { key: 'launch', icon: RocketLaunch },
                { key: 'growth', icon: TrendingUp }
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center group"
                >
                  {/* Step Indicator */}
                  <div className="w-24 h-24 rounded-2xl bg-gray-900 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-gold-400 transition-all duration-500 shadow-xl group-hover:shadow-gold-400/20 group-hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-400 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    <item.icon className="w-10 h-10 text-gold-400 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Number Overlay */}
                    <span className="absolute -bottom-1 -right-1 font-serif text-4xl text-white/5 font-bold group-hover:text-gold-400/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl mb-3 text-gold-400 group-hover:text-white transition-colors">
                    {t(`process.${item.key}.title`)}
                  </h4>
                  <p className="text-center text-sm text-gray-400 px-4 leading-relaxed font-light">
                    {t(`process.${item.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-12">
            {[
              { key: 'sourcing', icon: Search },
              { key: 'training', icon: School },
              { key: 'integration', icon: LinkIcon },
              { key: 'launch', icon: RocketLaunch },
              { key: 'growth', icon: TrendingUp }
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 relative"
              >
                {/* Vertical Line for Mobile */}
                {index !== 4 && (
                  <div className="absolute left-[24px] top-[48px] w-px h-[calc(100%+48px)] bg-white/10"></div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-primary border border-white/10 flex items-center justify-center relative z-10 shrink-0">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                
                <div className="pt-1">
                  <span className="text-gold-400/50 text-[10px] font-bold tracking-widest uppercase mb-1 block">
                    Step 0{index + 1}
                  </span>
                  <h4 className="font-serif text-xl mb-2 text-gold-400">{t(`process.${item.key}.title`)}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{t(`process.${item.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-24 bg-white dark:bg-black relative overflow-hidden" id="services">
        {/* Decorative subtle background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Group */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-6 leading-tight">
                {t('services.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl font-light">
                {t('services.subtitle')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/services" className="group flex items-center gap-3 text-gold-500 dark:text-gold-400 font-bold uppercase tracking-widest text-xs hover:text-gold-600 transition-colors whitespace-nowrap">
                {t('services.viewAll')} 
                <ArrowForward className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'support', icon: Headset, accent: 'bg-gold-500' },
              { key: 'technical', icon: Cpu, accent: 'bg-gray-900 dark:bg-white' },
              { key: 'backoffice', icon: FileText, accent: 'bg-gray-400' },
              { key: 'vip', icon: Crown, accent: 'bg-gold-400' }
            ].map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-900/40 p-10 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-gold-400/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Vertical Accent Line */}
                <div className={cn(
                  "absolute top-0 left-0 w-1.5 h-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top",
                  service.accent
                )}></div>
                
                {/* Icon Container */}
                <div className="w-14 h-14 bg-white dark:bg-gray-800 text-gold-500 dark:text-gold-400 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-white dark:group-hover:bg-gold-400 dark:group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  {t(`services.${service.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-white/5" id="resources">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              {t('resources.title')}
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {['hyperPersonalization', 'humanTouch', 'luxuryStandard'].map((key, index) => (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-72 shadow-lg">
                  <div className="absolute inset-0 bg-primary/20 dark:bg-primary/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    alt={t(`resources.${key}.imageAlt`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={t(`resources.${key}.image`) as string}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-widest shadow-sm">
                      {t(`resources.${key}.category`)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">
                  <span>{t(`resources.${key}.readTime`)}</span>
                  <div className="w-1 h-1 rounded-full bg-gold-400/50"></div>
                  <span>Expert Insight</span>
                </div>
                
                <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors duration-300 leading-tight">
                  {t(`resources.${key}.title`)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed line-clamp-3">
                  {t(`resources.${key}.description`)}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-gold-500 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Read Article <ArrowForward className="w-3 h-3" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
