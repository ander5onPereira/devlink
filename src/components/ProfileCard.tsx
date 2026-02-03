'use client';

import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import SocialLinks from './SocialLinks';
import Switch from './Switch';
import { User } from '../mocks/users';

interface ProfileCardProps {
  response?: User | null;
}
export const ProfileCard: React.FC<ProfileCardProps & { center?: boolean }> = ({
  response,
  center = true,
}) => {
  return (
    <div
      className={center ? 'flex flex-col items-center h-[90vh] gap-6 px-8' : ''}
    >
      <Avatar size={112} />
      <p className='text-sm text-[var(--color-text)]'>{response?.username}</p>
      <div className=''>
        <Switch />
      </div>

      <div className='w-full max-w-md space-y-3 flex flex-col'>
        {response?.action &&
          response.action.map((actionItem: { title: string; url: string }) => (
            <Button variant='outline' className='w-full' key={actionItem.title}>
              {actionItem.title}
            </Button>
          ))}
      </div>

      <div>{response?.links && <SocialLinks links={response.links} />}</div>

      <p className='text-xs mt-6 text-[var(--color-text)]'>
        Feito com a Rocketseat
      </p>
    </div>
  );
};

export default ProfileCard;
