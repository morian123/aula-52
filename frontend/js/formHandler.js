// Captura o formulário
const form = document.getElementById("user-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos de entrada
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validação básica
  if (name === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Simula o envio de email no console
  console.log(`📨 Email enviado com sucesso para ${name} (${email})!`);
  console.log(`Olá ${name}, obrigado por se cadastrar na nossa newsletter!`);
  console.log("Fique atento às próximas novidades sobre nosso curso de programação.");

  // Limpa os campos do formulário após o envio
  form.reset();
});
