'use client';

import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useUser } from '../hook/userHook';

export default function Page() {
  const { response, loading } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className='container-profile'>
      <div className='profile-inner'>
        <div className='card backdrop-blur-md  flex justify-center w-full'>
          <ProfileCard response={response} />
        </div>
      </div>
    </main>
  );
}
