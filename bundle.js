var banca = parseFloat(prompt("Digite o valor da sua banca:"));

if (isNaN(banca) || banca <= 0) {
    alert("Por favor, digite um valor válido para a banca.");
} else {
    var valorAposta = banca * 0.1;
    var numeroApostas = 0;

    while (banca >= valorAposta) {
        banca -= valorAposta;
        valorAposta *= 1.1;
        numeroApostas++;
    }

    alert("Você pode fazer " + numeroApostas + " apostas.");
}
