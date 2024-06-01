import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'hover:scale110 flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition',
        className,
      )}
    >
      {icon}
    </button>
  );
};
