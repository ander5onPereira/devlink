'use client';

import { useEffect, useState } from 'react';
import { User } from '../mocks/users';

export function useUser() {
  const [response, setResponse] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/users', { cache: 'no-store' });
        const data = await res.json();
        setResponse(data.find((user:User) => user.id === '1')|| null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { response, loading, error };
}
