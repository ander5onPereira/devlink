'use client';

import React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
};

export const Button: React.FC<Props> = ({
  variant = 'outline',
  className,
  children,
  ...props
}) => {
  const base =
    'h-12 w-full rounded-md text-sm font-medium inline-flex items-center gap-2 flex justify-center hover:bg-[var(--bg-hover-button)] transition-colors ';
  const solid = 'bg-stroke text-surface';
  const outline = 'border border-[var(--border-style)] bg-[var(--bg-button)]';

  return (
    <button
      className={clsx(base, variant === 'solid' ? solid : outline, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
