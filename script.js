// Seleciona o formulário
var formulario = document.getElementById("formulario");

// Adiciona um evento de envio ao formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Obtém os valores das notas e pesos
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var peso1 = parseFloat(document.getElementById("peso1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var peso2 = parseFloat(document.getElementById("peso2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var peso3 = parseFloat(document.getElementById("peso3").value);

  // Calcula a média ponderada
  var somaPesos = peso1 + peso2 + peso3;
  var mediaPonderada =
    (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

  // Exibe o resultado na tela
  document.getElementById("resultado").innerHTML =
    "Média ponderada: " + mediaPonderada.toFixed(2);
});
