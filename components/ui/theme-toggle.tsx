'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative w-10 h-10 flex items-center justify-center rounded-xl',
        'bg-white/5 border border-white/10 hover:border-gold-400/50',
        'transition-all duration-300 group'
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn(
        "h-5 w-5 transition-all duration-500 absolute",
        theme === 'dark' ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100 text-gold-500'
      )} />
      <Moon className={cn(
        "h-5 w-5 transition-all duration-500 absolute",
        theme === 'dark' ? 'scale-100 rotate-0 opacity-100 text-gold-400' : 'scale-0 -rotate-90 opacity-0'
      )} />
    </button>
  );
}
