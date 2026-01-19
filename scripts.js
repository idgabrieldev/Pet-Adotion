//# Interatividade com JavaScript
// Botões
const catButton = document.getElementById("catBtn");
const dogButton = document.getElementById("dogBtn");

// Mensagens
const catMessage = document.getElementById("catMessage");
const dogMessage = document.getElementById("dogMessage");

// Evento para adoção de gato
catButton.addEventListener("click", function () {
  catMessage.textContent = "Thank you for choosing to adopt a cat! 🐱";
  dogMessage.textContent = "";
});

// Evento para adoção de cachorro
dogButton.addEventListener("click", function () {
  dogMessage.textContent = "Thank you for choosing to adopt a dog! 🐶";
  catMessage.textContent = "";
});
