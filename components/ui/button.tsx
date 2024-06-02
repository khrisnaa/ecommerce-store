import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          className,
          'w-auto rounded-full border-transparent bg-black px-5 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50',
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
