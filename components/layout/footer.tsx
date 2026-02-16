'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/app/[locale]/i18n/routing';
import { Facebook, LinkedIn, Email, ArrowForward } from '@/components/icons';
import { motion } from 'framer-motion';

export function Footer() {
  const t = useTranslations('home.footer');

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Identity - 4 Columns */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="font-serif text-3xl font-bold tracking-tight group-hover:text-gold-400 transition-colors">
                EverHelp
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-gold-400 mt-2"></div>
            </Link>
            
            <p className="text-gray-400 text-base font-light leading-relaxed max-w-sm">
              {t('tagline')}
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: LinkedIn, href: "#" },
                { icon: Email, href: "mailto:hello@everhelp.io" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300 font-bold text-xs uppercase tracking-tighter group">
                <span className="group-hover:scale-110 transition-transform">X</span>
              </a>
            </div>
          </div>

          {/* Navigation - 2 Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-gold-400/50"></span>
              {t('company')}
            </h4>
            <ul className="space-y-4">
              {[
                { label: t('links.about'), href: "/about" },
                { label: t('links.careers'), href: "#" },
                { label: t('links.press'), href: "#" },
                { label: t('links.contact'), href: "/contact" }
              ].map((link) => (
                <li key={serviceKey(link.label)}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-gold-400 text-sm font-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-400 group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - 2 Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-gold-400/50"></span>
              {t('services')}
            </h4>
            <ul className="space-y-4">
              {["Customer Support", "Back Office", "Technical Helpdesk", "VIP Concierge"].map((service) => (
                <li key={serviceKey(service)}>
                  <a 
                    href="/services" 
                    className="text-gray-400 hover:text-gold-400 text-sm font-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-400 group-hover:w-3 transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - 4 Columns */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-gold-400/20 transition-colors"></div>
            
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-gold-400/50"></span>
              {t('newsletter')}
            </h4>
            <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed">
              {t('newsletterText')}
            </p>
            
            <form className="space-y-3">
              <div className="relative group/input">
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-gold-400/50 transition-all placeholder-gray-600"
                />
              </div>
              <button
                type="button"
                className="w-full bg-gold-400 hover:bg-white text-primary font-bold uppercase text-[10px] tracking-[0.2em] py-4 rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
              >
                {t('subscribe')}
                <ArrowForward className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <span>{t('copyright')}</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-gold-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="text-gray-500 hover:text-gold-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
              {t('terms')}
            </a>
            <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Global Ops Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function serviceKey(label: string) {
  return label.toLowerCase().replace(/\s+/g, '-');
}
