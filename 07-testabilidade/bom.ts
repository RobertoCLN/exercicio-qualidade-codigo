interface BancoDeDados {
  salvar(nome: string): void;
}

function salvarUsuario(nome: string, banco: BancoDeDados) {
  banco.salvar(nome);
}

const bancoReal: BancoDeDados = {
  salvar: (nome: string) => console.log("Salvando", nome)
};

salvarUsuario("Betin", bancoReal);