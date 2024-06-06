//7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
console.clear();
var matrizDois = new Array(3);
function number() {
    var matriz = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 10));
        }
        matriz.push(row);
    }
    return matriz;
}
function printMatrix(matrix) {
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        console.log(row.join(' '));
    }
}
// Define the dimensions of the matrix
var rows = 3;
var cols = 3;
// Generate the random matrix
var randomMatrix = number();
// Print the matrix to the console
printMatrix(randomMatrix);
