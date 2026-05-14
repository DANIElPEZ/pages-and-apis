"use client";

import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const authUrl = process.env.NEXT_PUBLIC_AUTH;
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const scopes = process.env.NEXT_PUBLIC_SCOPES;
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URL;

    // Validación básica: Si falta algo, no redirigimos para evitar errores de VATSIM
    if (!authUrl || !clientId || !redirectUri) {
      console.error("Configuración incompleta. Revisa las variables de entorno.");
      return;
    }

    const fullUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${encodeURIComponent(scopes || "")}`;

    // Pequeño delay opcional para que el usuario vea que algo ocurre
    const timeout = setTimeout(() => {
      window.location.href = fullUrl;
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-[#1a2f56] font-mono text-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner animado */}
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        
        <div className="text-center">
          <h2 className="text-xl font-medium mb-2">Connecting to VATSIM</h2>
          <p className="text-white/60 text-sm italic">Please wait a moment...</p>
        </div>
      </div>

      {/* Footer decorativo */}
      <div className="absolute bottom-10 opacity-30 text-xs tracking-widest uppercase">
        OAuth Secure Gateway
      </div>
    </main>
  );
}
