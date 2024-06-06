

//7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.

console.clear();
let matrizDois: string [][] = new Array(3);

function number(): number[][] {
    let matriz: number[][] = [];
    for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 10));
        }
        matriz.push(row);
    }
    return matriz;
}

function printMatrix(matrix: number[][]): void {
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

// Define the dimensions of the matrix
const rows = 3;
const cols = 3;

// Generate the random matrix
const randomMatrix = number();

// Print the matrix to the console
printMatrix(randomMatrix);
