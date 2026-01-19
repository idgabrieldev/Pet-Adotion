// Função única para adoção
// Recebe o tipo de pet como parâmetro
function adoptPet(pet) {

  // Seleciona os elementos de mensagem
  const catMessage = document.getElementById("catMessage");
  const dogMessage = document.getElementById("dogMessage");

  // Limpa mensagens anteriores
  catMessage.textContent = "";
  dogMessage.textContent = "";

  // Verifica qual botão foi clicado
  if (pet === "cat") {
    catMessage.textContent = "Thank you for adopting a cat! 🐱";
  }

  if (pet === "dog") {
    dogMessage.textContent = "Thank you for adopting a dog! 🐶";
  }
}