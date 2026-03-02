function buscarUsuario(nome: string) {
  const query = "SELECT * FROM usuarios WHERE nome = ?";
  const parametros = [nome];

  console.log("Query segura:", query);
  console.log("Parâmetros:", parametros);
}

buscarUsuario("Betin' OR '1'='1");