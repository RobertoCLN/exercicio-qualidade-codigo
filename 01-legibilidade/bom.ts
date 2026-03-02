/**
 * Soma todos os valores de um array que sejam maiores que um valor mínimo informado.
 * 
 * @param numbers Lista de números
 * @param minimumValue Valor mínimo para considerar na soma
 * @returns Soma dos números maiores que o valor mínimo
 */
function sumValuesGreaterThan(
  numbers: number[],
  minimumValue: number
): number {
  let totalSum = 0;

  for (const number of numbers) {
    if (number > minimumValue) {
      totalSum += number;
    }
  }

  return totalSum;
}

const values = [10, 5, 20, 8, 30];
const minimum = 10;

console.log(sumValuesGreaterThan(values, minimum));