"use client";
import { useState } from "react";

export default function VatsimLogin() {
  const [loading, setLoading] = useState(false);

  const startLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth-url');
      const data = await res.json();
      
      // En lugar de redirección automática, usamos esto:
      // Esto le dice al navegador que reemplace la entrada actual, 
      // ayudando a que el WebView no pierda el hilo.
      window.location.replace(data.url);
    } catch (e) {
      setLoading(false);
      alert("Error al conectar");
    }
  };

  return (
    <main className="min-h-screen bg-[#1a2f56] flex flex-col items-center justify-center p-6 font-mono text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold italic tracking-tighter">FLY IN SKY</h1>
        <div className="p-10 bg-[#12213c] rounded-3xl border border-white/10 shadow-2xl">
          <p className="mb-8 text-white/80">Haz clic abajo para iniciar sesión de forma segura dentro de este dominio.</p>
          
          <button 
            onClick={startLogin}
            disabled={loading}
            className="w-full py-4 bg-white text-[#1a2f56] rounded-xl font-black uppercase tracking-widest hover:bg-opacity-90 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "Cargando..." : "CONECTAR AHORA"}
          </button>
        </div>
      </div>
    </main>
  );
}
