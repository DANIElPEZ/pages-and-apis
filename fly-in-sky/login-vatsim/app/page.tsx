'use client';
import { useEffect } from 'react';

function generateCodeVerifier() {
  const array = new Uint32Array(56);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

async function generateCodeChallenge(verifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export default function LoginPage() {
  useEffect(() => {
    const startOAuth = async () => {
      const verifier = generateCodeVerifier();
      const challenge = await generateCodeChallenge(verifier);
      
      localStorage.setItem('pkce_verifier', verifier);

      const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL!,
        scope: process.env.NEXT_PUBLIC_SCOPES!,
        code_challenge: challenge,
        code_challenge_method: 'S256',
      });

      window.location.href = `${process.env.NEXT_PUBLIC_AUTH}?${params.toString()}`;
    };
    startOAuth();
  }, []);

  return <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">Redirection to VATSIM...</div>;
}
