"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function CallbackContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      // INTENTO DE COMUNICACIÓN CON FLUTTER
      if (window.FlutterControl) {
        window.FlutterControl.postMessage(code);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1a2f56] text-white p-6">
      <h2 className="text-xl mb-4 text-center">¡Autenticado con éxito!</h2>
      <p className="text-white/60">Cerrando ventana...</p>
      {/* Botón de respaldo por si el puente falla */}
      <button 
        onClick={() => window.FlutterControl?.postMessage(searchParams.get("code") ?? "")}
        className="mt-4 text-sm underline opacity-50"
      >
        Si no regresas a la app, toca aquí
      </button>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense>
      <CallbackContent />
    </Suspense>
  );
}
