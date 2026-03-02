const usuarios: string[] = [];

function adicionarUsuario(nome: string) {
  usuarios.push(nome);
}

function listarUsuarios() {
  return usuarios;
}