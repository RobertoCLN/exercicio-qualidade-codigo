/**
 * Calcula o valor final de um produto aplicando desconto conforme o tipo de cliente.
 *
 * Regras de negócio:
 * - Cliente tipo "A" recebe 10% de desconto.
 * - Cliente tipo "B" recebe 20% de desconto.
 * - Outros tipos não recebem desconto.
 *
 * @param originalPrice Valor original do produto
 * @param customerType Tipo do cliente ("A", "B" ou outro)
 * @returns Valor final com desconto aplicado
 */
function calculateDiscount(
  originalPrice: number,
  customerType: string
): number {
  switch (customerType) {
    case "A":
      return originalPrice * 0.9;
    case "B":
      return originalPrice * 0.8;
    default:
      return originalPrice;
  }
}

const productPrice = 100;
console.log(calculateDiscount(productPrice, "A"));