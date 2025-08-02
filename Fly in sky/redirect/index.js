const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const input = document.getElementById("codeInput");
document.getElementById("codeInput").value = code || "Code not found";

function copyCode() {
     input.select();
     input.setSelectionRange(0, 99999);
     document.execCommand("copy");
     alert("Code copied: " + input.value);
     window.close();
}
