export function adicionarItem(carrinho, produto) {
  const existente = carrinho.find(item => item.id === produto.id)
  if (existente) {
    return carrinho.map(item =>
      item.id === produto.id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    )
  }
  return [...carrinho, { ...produto, quantidade: 1 }]
}


export function removerItem(carrinho, produtoId) {
  return carrinho.filter(item => item.id !== produtoId)
}

export function aumentarQuantidade(carrinho, produtoId) {
  return carrinho.map(item =>
    item.id === produtoId
      ? { ...item, quantidade: item.quantidade + 1 }
      : item
  )
}


export function diminuirQuantidade(carrinho, produtoId) {
  return carrinho
    .map(item =>
      item.id === produtoId
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    )
    .filter(item => item.quantidade > 0)
}


export function totalItens(carrinho) {
  return carrinho.reduce((acc, item) => acc + item.quantidade, 0)
}


export function totalValor(carrinho) {
  return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
}