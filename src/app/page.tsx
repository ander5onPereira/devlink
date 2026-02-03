'use client';

import React from 'react';
import ProfileCard from '../components/ProfileCard';

export default function Page() {
  return (
    <main className='container-profile'>
      <div className='profile-inner'>
        <div className='card backdrop-blur-md  flex justify-center w-full'>
          <ProfileCard />
        </div>
      </div>
    </main>
  );
}
