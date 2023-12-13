//Calculadora de partidas Rankeadas
let partidasRankeadas = partidas(108, 8);
let saldoVitorias = partidasRankeadas;
let nivel = "";


if (saldoVitorias <= 10) {
    nivel = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O jogador tem de saldo ${saldoVitorias} rankeadas e está no nível ${nivel}`);

function partidas(qtdVitorias, qtdDerrotas) {
    let rank = qtdVitorias - qtdDerrotas;
    return rank;
}