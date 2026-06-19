'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const expiresIn = searchParams.get('expires_in') || '3600';

    if (accessToken) {
      window.location.href = `flyinsky://auth?access_token=${accessToken}&expires_in=${expiresIn}`;
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      Redirection to fly in sky...
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
        <p>Loading...</p>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
