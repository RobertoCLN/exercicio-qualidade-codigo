function processarPedido(pedido: any) {
  // calcular total
  let total = 0;
  for (let item of pedido.itens) {
    total += item.preco * item.quantidade;
  }

  // aplicar desconto fixo
  if (pedido.clienteVip) {
    total *= 0.9;
  }

  // simular envio de email
  console.log("Enviando email para:", pedido.email);

  return total;
}

const pedido = {
  itens: [{ preco: 100, quantidade: 2 }],
  clienteVip: true,
  email: "cliente@email.com"
};

console.log(processarPedido(pedido));