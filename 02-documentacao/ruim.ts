function calcularDesconto(valor: number, tipo: string): number {
  if (tipo === "A") {
    return valor * 0.9;
  } else if (tipo === "B") {
    return valor * 0.8;
  } else {
    return valor;
  }
}

const preco = 100;
console.log(calcularDesconto(preco, "A"));