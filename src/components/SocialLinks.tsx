'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const SocialLinks: React.FC = () => {
  return (
    <div className='flex items-center gap-3'>
      <Link
        target='_blank'
        href='#'
        aria-label='Github'
        className='rounded-full bg-transparent'
      >
        <Image
          src='/icon/github.svg'
          alt='GitHub'
          width={48}
          height={48}
          className='transition invert dark:invert-0'
        />
      </Link>
      <Link
        target='_blank'
        href='#'
        aria-label='Instagran'
        className='rounded-full bg-transparent '
      >
        <Image
          src='/icon/instagran.svg'
          alt='Instagran'
          width={48}
          height={48}
          className='transition invert dark:invert-0'
        />
      </Link>
      <Link
        target='_blank'
        href='#'
        aria-label='Youtube'
        className='rounded-full bg-transparent '
      >
        <Image
          src='/icon/youtube.svg'
          alt='Youtube'
          width={48}
          height={48}
          className='transition invert dark:invert-0'
        />
      </Link>
      <Link
        target='_blank'
        href='#'
        aria-label='LinkedIn'
        className='rounded-full bg-transparent '
      >
        <Image
          src='/icon/linkdin.svg'
          alt='LinkedIn'
          width={48}
          height={48}
          className='transition invert dark:invert-0'
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
