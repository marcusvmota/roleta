
function calcularRodadas() {
  // Obter valores dos inputs
  var saldoAtual = parseFloat(document.getElementById("saldo").value)
  var valorAposta = parseFloat(document.getElementById("aposta").value)
  var multiplicador = parseFloat(
    document.getElementById("multiplicador").value
  )

  // Verificar se os valores são válidos
  if (
    isNaN(saldoAtual) ||
    isNaN(valorAposta) ||
    isNaN(multiplicador) ||
    saldoAtual <= 0 ||
    valorAposta <= 0 ||
    multiplicador <= 0
  ) {
    alert("Por favor, insira valores válidos.")
    return
  }

  // Validar aposta mínima para multiplicadores específicos
  // if (
  //   (multiplicador === 1.08 || multiplicador === 1.1) &&
  //   valorAposta < 12
  // ) {
  //   alert("Para multiplicadores de 1.08x ou 1.1x, a aposta mínima é 12.")
  //   return
  // }

  // Calcular rodadas
  var rodadas = 0
  while (saldoAtual >= valorAposta) {
    saldoAtual -= valorAposta
    valorAposta *= multiplicador // Aumento de acordo com o multiplicador escolhido
    rodadas++
  }

  // Exibir resultado
  var resultadoElement = document.getElementById("resultado")
  resultadoElement.textContent =
    "Com seu saldo você aguenta " + rodadas + " roladas."
}
