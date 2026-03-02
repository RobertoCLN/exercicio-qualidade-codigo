function salvarUsuario(nome: string) {
  const banco = {
    salvar: (n: string) => console.log("Salvando", n)
  };

  banco.salvar(nome);
}

salvarUsuario("Betin");