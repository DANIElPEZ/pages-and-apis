"use client";

export default function RedirectPage() {
  const handleLogin = async () => {
    const res = await fetch('/api/auth-url');
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main className="min-h-screen bg-[#1a2f56] flex flex-col items-center justify-center p-6 font-mono">
      <div className="bg-[#12213c] p-8 rounded-2xl shadow-2xl text-center border border-white/10">
        <h1 className="text-white text-2xl font-bold mb-4">Fly In Sky</h1>
        <p className="text-white/70 mb-8">Conecta tu cuenta de VATSIM para continuar</p>
        
        <button 
          onClick={handleLogin}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-lg font-bold transition-all active:scale-95"
        >
          Iniciar Sesión
        </button>
      </div>
    </main>
  );
}
