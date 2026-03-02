function buscarUsuario(nome: string) {
  const query = "SELECT * FROM usuarios WHERE nome = '" + nome + "'";
  console.log("Executando query:", query);
}

buscarUsuario("Betin' OR '1'='1");