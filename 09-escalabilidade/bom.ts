interface Usuario {
  nome: string;
}

class UsuarioService {
  private usuarios: Usuario[] = [];

  adicionar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  listar(): Usuario[] {
    return [...this.usuarios];
  }
}

const service = new UsuarioService();
service.adicionar({ nome: "Betin" });
console.log(service.listar());