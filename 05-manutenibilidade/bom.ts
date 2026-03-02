interface Item {
  preco: number;
  quantidade: number;
}

interface Pedido {
  itens: Item[];
  clienteVip: boolean;
  email: string;
}

function calcularTotal(itens: Item[]): number {
  return itens.reduce((total, item) => {
    return total + item.preco * item.quantidade;
  }, 0);
}

function aplicarDesconto(total: number, clienteVip: boolean): number {
  return clienteVip ? total * 0.9 : total;
}

function enviarEmail(email: string): void {
  console.log(`Email enviado para ${email}`);
}

function processarPedido(pedido: Pedido): number {
  const total = calcularTotal(pedido.itens);
  const totalComDesconto = aplicarDesconto(total, pedido.clienteVip);
  enviarEmail(pedido.email);
  return totalComDesconto;
}

const pedido: Pedido = {
  itens: [{ preco: 100, quantidade: 2 }],
  clienteVip: true,
  email: "cliente@email.com"
};

console.log(processarPedido(pedido));