/**
 * Função principal para processar a adoção.
 * @param {string} pet - O tipo de animal clicado ('cat' ou 'dog').
 */
function adoptPet(pet) {
  
  // 1. Buscamos no HTML onde as mensagens devem aparecer usando o ID
  const catMessage = document.getElementById("catMessage");
  const dogMessage = document.getElementById("dogMessage");

  // 2. Limpamos qualquer mensagem que já estivesse lá de um clique anterior
  catMessage.textContent = "";
  dogMessage.textContent = "";

  // 3. Verificamos qual animal foi escolhido e exibimos a mensagem no local correto
  if (pet === "cat") {
    // Se for gato, preenche o span do gato
    catMessage.textContent = "Obrigado por adotar um gato! 🐱";
  } else if (pet === "dog") {
    // Se for cachorro, preenche o span do cachorro
    dogMessage.textContent = "Obrigado por adotar um cachorro! 🐶";
  }
}