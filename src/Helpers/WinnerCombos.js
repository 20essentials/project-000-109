const COLUMN_WIN_COMBOS = [
  // Columna 1
  [35, 28, 21, 14],
  [28, 21, 14, 7],
  [21, 14, 7, 0],

  // Columna 2
  [36, 29, 22, 15],
  [29, 22, 15, 8],
  [22, 15, 8, 1],

  // Columna 3
  [37, 30, 23, 16],
  [30, 23, 16, 9],
  [23, 16, 9, 2],

  // Columna 4
  [38, 31, 24, 17],
  [31, 24, 17, 10],
  [24, 17, 10, 3],

  // Columna 5
  [39, 32, 25, 18],
  [32, 25, 18, 11],
  [25, 18, 11, 4],

  // Columna 6
  [40, 33, 26, 19],
  [33, 26, 19, 12],
  [26, 19, 12, 5],

  // Columna 7
  [41, 34, 27, 20],
  [34, 27, 20, 13],
  [27, 20, 13, 6],
];

const ROW_WIN_COMBOS = [
  // Fila 6
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],

  // Fila 5
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],

  // Fila 4
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],

  // Fila 3
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],

  // Fila 2
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],

  // Fila 1
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];

const DIAGONAL_WIN_COMBOS = [
  // ROW 6 - (8 DIAGONALES)
  [35, 29, 23, 17], // Diagonal que comienza en la columna 1, fila 6
  [36, 30, 24, 18], // Diagonal que comienza en la columna 2, fila 6
  [37, 31, 25, 19], // Diagonal que comienza en la columna 3, fila 6
  [38, 30, 22, 14], // Diagonal que comienza en la columna 4, fila 6
  [38, 32, 26, 20], // Diagonal que comienza en la columna 4, fila 6
  [39, 31, 23, 15], // Diagonal que comienza en la columna 5, fila 6
  [40, 32, 24, 16], // Diagonal que comienza en la columna 6, fila 6
  [41, 33, 25, 17], // Diagonal que comienza en la columna 7, fila 6

  //ROW 5 - (8 DIAGONALES)
  [28, 22, 16, 10], // Diagonal que comienza en la columna 1, fila 5
  [29, 23, 17, 11], // Diagonal que comienza en la columna 2, fila 5
  [30, 24, 18, 12], // Diagonal que comienza en la columna 3, fila 5
  [31, 23, 15, 7], // Diagonal que comienza en la columna 4, fila 5
  [31, 25, 19, 13], // Diagonal que comienza en la columna 4, fila 5
  [32, 24, 16, 8], // Diagonal que comienza en la columna 5, fila 5
  [33, 25, 17, 9], // Diagonal que comienza en la columna 6, fila 5
  [34, 26, 18, 10], // Diagonal que comienza en la columna 7, fila 5

  //ROW 4 - (8 DIAGONALES)
  [21, 15, 9, 3], //Diagonal que comienza en la columna 1, fila 4
  [22, 16, 10, 4], //Diagonal que comienza en la columna 2, fila 4
  [23, 17, 11, 5], //Diagonal que comienza en la columna 3, fila 4
  [24, 16, 8, 0], // Diagonal que comienza en la columna 4, fila 4
  [24, 18, 12, 6], // Diagonal que comienza en la columna 4, fila 4
  [25, 17, 9, 1], // Diagonal que comienza en la columna 5, fila 4
  [26, 18, 10, 2], //Diagonal que comienza en la columna 6, fila 4
  [27, 19, 11, 3], //Diagonal que comienza en la columna 7, fila 4
];

const ALL_COMBOS = [
  [35, 28, 21, 14],
  [28, 21, 14, 7],
  [21, 14, 7, 0],
  [36, 29, 22, 15],
  [29, 22, 15, 8],
  [22, 15, 8, 1],
  [37, 30, 23, 16],
  [30, 23, 16, 9],
  [23, 16, 9, 2],
  [38, 31, 24, 17],
  [31, 24, 17, 10],
  [24, 17, 10, 3],
  [39, 32, 25, 18],
  [32, 25, 18, 11],
  [25, 18, 11, 4],
  [40, 33, 26, 19],
  [33, 26, 19, 12],
  [26, 19, 12, 5],
  [41, 34, 27, 20],
  [34, 27, 20, 13],
  [27, 20, 13, 6],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [35, 29, 23, 17],
  [36, 30, 24, 18],
  [37, 31, 25, 19],
  [38, 30, 22, 14],
  [38, 32, 26, 20],
  [39, 31, 23, 15],
  [40, 32, 24, 16],
  [41, 33, 25, 17],
  [28, 22, 16, 10],
  [29, 23, 17, 11],
  [30, 24, 18, 12],
  [31, 23, 15, 7],
  [31, 25, 19, 13],
  [32, 24, 16, 8],
  [33, 25, 17, 9],
  [34, 26, 18, 10],
  [21, 15, 9, 3],
  [22, 16, 10, 4],
  [23, 17, 11, 5],
  [24, 16, 8, 0],
  [24, 18, 12, 6],
  [25, 17, 9, 1],
  [26, 18, 10, 2],
  [27, 19, 11, 3],
];

export default ALL_COMBOS;