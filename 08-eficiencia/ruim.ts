function buscarNumero(lista: number[], alvo: number): boolean {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] === alvo) {
        return true;
      }
    }
  }
  return false;
}