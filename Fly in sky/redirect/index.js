const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const input = document.getElementById("codeInput");
const btn = document.getElementById("copyBtn")
input.value = code || "Code not found";

function copyCode() {
     if (code) {
          await navigator.clipboard.writeText(code);
          alert("Código copiado: " + code);
          window.close();
     } else {
          alert("No hay código para copiar.");
     }
}

btn.addEventListener("click",async () => {
        if (code) {
          await navigator.clipboard.writeText(code);
          alert("Code copied: " + code);
          window.close();
        }
    });
