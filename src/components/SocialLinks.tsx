'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface SocialLinksProps {
  links: { title: string; url: string }[];
}
export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className='flex items-center gap-3'>
      {links.map((link) => {
        return (
          <Link
            target='_blank'
            href={link.url}
            aria-label={link.title}
            className='rounded-full bg-transparent'
            key={link.title}
          >
            <Image
              src={`/icon/${link.title.toLowerCase()}.svg`}
              alt={link.title}
              width={48}
              height={48}
              className='transition invert dark:invert-0'
            />
          </Link>
        );
      })}
      {/* <Link
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
      </Link> */}
    </div>
  );
};

export default SocialLinks;
