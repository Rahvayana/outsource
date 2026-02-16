'use client';

import { usePathname, useRouter } from '@/app/[locale]/i18n/routing';
import { useState, useTransition, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const locales = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'id', label: 'Indonesia', short: 'ID' },
  ] as const;

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  const changeLocale = (newLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:border-gold-400/50 transition-all duration-300",
          isPending && "opacity-50"
        )}
      >
        <Globe className="w-4 h-4 text-gold-400" />
        <span className="text-xs font-bold text-white uppercase tracking-widest">{currentLocale.short}</span>
        <ChevronDown className={cn("w-3 h-3 text-gray-400 transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[100]"
          >
            <div className="p-1.5">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => changeLocale(locale.code)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                    currentLocale.code === locale.code 
                      ? "bg-gold-400 text-primary" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {locale.short}
                  {currentLocale.code === locale.code && (
                    <div className="w-1.2 h-1.2 rounded-full bg-primary"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
