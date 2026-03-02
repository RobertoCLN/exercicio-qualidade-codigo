/**
 * Calcula a área de um retângulo.
 *
 * @param width Largura do retângulo
 * @param height Altura do retângulo
 * @returns Área calculada
 */
function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

// Reutilização da mesma função
console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(7, 3));
console.log(calculateRectangleArea(4, 2));