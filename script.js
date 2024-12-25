// Function to run the code and update the output
function run() {
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;

  const output = document.getElementById("output");
  const documentContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>
        try {
          ${jsCode}
        } catch (error) {
          document.body.innerHTML += '<div style="color: red;">' + error.message + '</div>';
        }
      </script>
    </body>
    </html>
  `;
  output.srcdoc = documentContent;
}

// Auto-save functionality
function autoSave() {
  const editors = {
    html: document.getElementById("html-code").value,
    css: document.getElementById("css-code").value,
    js: document.getElementById("js-code").value,
  };
  localStorage.setItem("editorContent", JSON.stringify(editors));
}

// Load saved content
function loadSavedContent() {
  const saved = localStorage.getItem("editorContent");
  if (saved) {
    const editors = JSON.parse(saved);
    document.getElementById("html-code").value = editors.html;
    document.getElementById("css-code").value = editors.css;
    document.getElementById("js-code").value = editors.js;
    run();
  }
}

// Add event listeners for auto-save and tabs
["html-code", "css-code", "js-code"].forEach((id) => {
  const editor = document.getElementById(id);
  editor.addEventListener("input", () => {
    autoSave();
    run();
  });
  editor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
    }
  });
});

// Initialize the editor
window.onload = function () {
  loadSavedContent();
  run();
};
