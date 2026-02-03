'use client';

import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import SocialLinks from './SocialLinks';
import Switch from './Switch';

export const ProfileCard: React.FC<{ center?: boolean }> = ({
  center = true,
}) => {
  return (
    <div
      className={center ? 'flex flex-col items-center h-[90vh] gap-6 px-8' : ''}
    >
      <Avatar size={112} />
      <p className='text-sm text-[var(--color-text)]'>@juliasilva</p>
      <div className=''>
        <Switch />
      </div>

      <div className='w-full max-w-md space-y-3'>
        <Button variant='outline' className='w-full'>
          Inscreva-se no NLW
        </Button>
        <Button variant='outline' className='w-full'>
          Baixe meu e-book
        </Button>
        <Button variant='outline' className='w-full'>
          Veja meu portfólio
        </Button>
        <Button variant='outline' className='w-full'>
          Conheça meu curso
        </Button>
      </div>

      <div className=''>
        <SocialLinks />
      </div>

      <p className='text-xs mt-6 text-[var(--color-text)]'>
        Feito com ♥ pela Rocketseat
      </p>
    </div>
  );
};

export default ProfileCard;
