window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (code) {
    window.location.href = `flyapp://callback?code=${code}`;
    return; // detiene el resto
  }
  const input = document.getElementById("codeInput");
  const btn = document.getElementById("copyBtn");

  if (input) input.value = code || "Code not found";

  if (btn) {
    btn.addEventListener("click", async () => {
      if (code) {
        try {
          await navigator.clipboard.writeText(code);
          alert("Code copied: " + code);
          window.close();
        } catch (err) {
          console.error("Failed to copy code:", err);
          alert("Could not copy the code.");
        }
      } else {
        alert("No code to copy.");
      }
    });
  }
});
