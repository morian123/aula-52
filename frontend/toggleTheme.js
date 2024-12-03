const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  // Alterar texto do botão conforme o tema
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.innerText = "Tema Claro";
  } else {
    toggleButton.innerText = "Tema Escuro";
  }
});
