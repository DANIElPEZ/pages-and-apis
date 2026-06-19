// app/callback/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function CallbackPage() {
  const [status, setStatus] = useState('Obtaining Token...');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const verifier = localStorage.getItem('pkce_verifier');

    if (!code || !verifier) {
      setStatus('Sesion error.');
      return;
    }

    const getToken = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_TOKEN!, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
            code,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL!,
            code_verifier: verifier,
          }).toString(),
        });

        if (!response.ok) throw new Error('Error en el token');
        const data = await response.json();
        localStorage.removeItem('pkce_verifier');

        const finalParams = new URLSearchParams({
          access_token: data.access_token,
          expires_in: data.expires_in.toString(),
        });

        setStatus('Already logged in...');
        window.location.href = `https://fly-login.vercel.app/success?${finalParams.toString()}`;

      } catch (e) {
        setStatus('Authentication error.');
      }
    };

    getToken();
  }, []);

  return <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">{status}</div>;
}
