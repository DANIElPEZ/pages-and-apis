"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string>("Cargando...");

  useEffect(() => {
    const codeParam = searchParams.get("code");
    if (codeParam) {
      setCode(codeParam);
    } else {
      setCode("Code not found");
    }
  }, [searchParams]);

  const handleCopy = async () => {
    if (code && code !== "Code not found" && code !== "Cargando...") {
      try {
        await navigator.clipboard.writeText(code);
        alert("Code copied: " + code);
        // Nota: window.close() solo funciona si la ventana fue abierta por script
      } catch (err) {
        console.error("Error al copiar:", err);
        alert("Could not copy the code.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#1a2f56] font-mono text-white">
      <div className="flex flex-col items-center px-4 py-40 h-screen w-full gap-[0.6rem] relative">
        
        <h2 className="text-[1.4rem] text-center font-medium">
          You are already logged in 😀
        </h2>
        
        <p className="text-[1.2rem] text-center font-normal">
          Please copy the code and paste it into the code field.
        </p>

        <input
          id="codeInput"
          readOnly
          value={code}
          className="w-[300px] h-[2rem] rounded-[0.3rem] p-2 bg-[#3c4e6f] text-white text-base text-center outline-none border-0"
        />

        <button
          id="copyBtn"
          onClick={handleCopy}
          className="absolute bottom-[30px] w-[80%] max-w-[400px] py-[0.7rem] bg-[#12213c] text-white rounded-[0.8rem] text-[1.7rem] border-0 active:scale-95 transition-transform"
        >
          Copy
        </button>
        
      </div>
    </main>
  );
}
