/**
 * Calcula o preço final de um produto aplicando desconto percentual.
 *
 * @param originalPrice Valor original do produto
 * @param discountPercentage Percentual de desconto (0 a 100)
 * @returns Valor final após desconto
 */
function calculateFinalPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  const discountValue = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountValue;

  return finalPrice;
}

const productPrice = 200;
const discount = 10;

console.log(calculateFinalPrice(productPrice, discount));