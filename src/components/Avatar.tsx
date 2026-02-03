'use client';

import Image from 'next/image';
import React from 'react';

export const Avatar: React.FC<{
  src?: string;
  size?: number;
  alt?: string;
}> = ({ src, size = 48, alt = 'Avatar' }) => {
  const url =
    src ||
    `https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80&auto=format&fit=crop`;
  return (
    <div
      style={{ width: size, height: size }}
      className='rounded-full overflow-hidden ring-0 ring-offset-2 dark:ring-offset-white ring-offset-black'
    >
      <Image src={url} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Avatar;
