import { produtos } from "@/data/produtos";

export function adiocinarItem(carrinho, produtos){
  const existente = carrinho.find(item => item.id === produtos.id)
  if (existente) {
    return carrinho.map(item =>
    item.id === produtos.id 
    ? { ...item, quantidade: item.quantidade + 1} 
    : item 
)
  }
  return [...carrinho, { ...produtos, quantidade: 1 }]
}

export function removerItem(carrinho, produtosId){
    return carrinho.filter(item => item.id !== produtoId)

}

export function aumentarQuantidade(carrinho, produtoId){
    return carrinho.map(item =>
        item.id === produtoId?
        ? { ... item, quantidade}
    )
}