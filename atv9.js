console.clear();
var teclado = require("Prompt-sync")();
var matrizDois = new Array(6);
for (var i = 0; i < 6; i++) {
    matrizDois[i] = new Array(6);
    for (var j = 0; j < 6; j++) {
        var nome = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        matrizDois[i][j] = nome;
    }
}
console.log(matrizDois);
