function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }

  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.error("Erro:", (error as Error).message);
}