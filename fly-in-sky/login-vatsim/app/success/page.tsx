'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const expiresIn = searchParams.get('expires_in') || '3600';

    if (accessToken) {
      window.location.href = `flyinsky://auth?access_token=${accessToken}&expires_in=${expiresIn}`;
    }
  }, [searchParams]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      <h2>Autenticación Exitosa</h2>
      <p>Redirigiéndote de vuelta a FlyInSky...</p>
    </div>
  );
}
