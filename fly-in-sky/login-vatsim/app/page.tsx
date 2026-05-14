"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const authUrl = process.env.NEXT_PUBLIC_AUTH || "";
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || "";
    const scopes = process.env.NEXT_PUBLIC_SCOPES || "";
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL || "";
    const fullUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${encodeURIComponent(scopes)}`;

    window.location.href = fullUrl;
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirigiendo a VATSIM...</p>
    </div>
  );
}