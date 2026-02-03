'use client';

import React from 'react';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeProvider';

type SwitchProps = {
  size?: 'sm' | 'md';
  ariaLabel?: string;
};

const SunIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    aria-hidden
  >
    <path
      d='M12 4V2M12 22v-2M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5 19 19M19 5l1.5-1.5M4.5 19.5 6 18'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='12' cy='12' r='3' fill='currentColor' />
  </svg>
);

const MoonIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    aria-hidden
  >
    <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' fill='currentColor' />
  </svg>
);

export const Switch: React.FC<SwitchProps> = ({
  size = 'md',
  ariaLabel = 'Toggle theme',
}) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  const trackClasses = clsx(
    'relative flex items-center rounded-full transition-colors duration-200',
    size === 'sm' ? 'w-10 h-6 px-0.5' : 'w-14 h-8 px-1',
  );

  const knobClasses = clsx(
    'flex items-center justify-center rounded-full bg-white shadow-md transform transition-all duration-200',
    size === 'sm' ? 'w-7 h-7 -m-1' : 'w-7 h-7 -m-1',
  );

  const justifyClass = isDark ? 'justify-start' : 'justify-end';

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={ariaLabel}
      className='inline-flex items-center p-0 bg-transparent border-0'
    >
      <div
        className={clsx(trackClasses, justifyClass)}
        style={{
          background: 'var(--color-surface)',
          border: 'var(--border-style)',
          width: `3.5rem`,
          height: `1.4rem`,
        }}
      >
        <div className={knobClasses}>
          {isDark ? (
            <MoonIcon className='text-black' />
          ) : (
            <SunIcon className='text-black' />
          )}
        </div>
      </div>
    </button>
  );
};

export default Switch;
