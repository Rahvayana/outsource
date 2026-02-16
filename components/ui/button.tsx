import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-gold text-white hover:shadow-lg hover:scale-105 active:scale-100':
              variant === 'primary',
            'bg-gold-100 text-gold-900 dark:bg-gold-900/30 dark:text-gold-200 hover:bg-gold-200 dark:hover:bg-gold-900/50':
              variant === 'secondary',
            'border-2 border-gold-400 text-gold-700 dark:text-gold-300 hover:bg-gold-50 dark:hover:bg-gold-900/20':
              variant === 'outline',
            'text-gold-700 dark:text-gold-300 hover:bg-gold-50 dark:hover:bg-gold-900/20':
              variant === 'ghost',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
