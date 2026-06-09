<template>
 <div id="app">
    <AppHeader
      :totalItens="totalCarrinho"
      @abrir-carrinho="carrinhoAberto = !carrinhoAberto"
    />

<main>
      <ListaProdutos
        :produtos="produtos"
        @adicionar-ao-carrinho="handleAdicionarAoCarrinho"
      />
    </main>

<PainelCarrinho 
:carrinho="carrinho"
      :aberto="carrinhoAberto"
      @fechar="carrinhoAberto = false"
      @remover="handleRemover"
      @aumentar="handleAumentar"
      @diminuir="handleDiminuir"
      @finalizar="handleFinalizar" />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import ListaProdutos from './components/Products/ListaProdutos.vue'
import PainelCarrinho from './components/PainelCarrinho.vue'
import { produtos } from './data/produtos.js'
import {
  adicionarItem,
  removerItem,
  aumentarQuantidade,
  diminuirQuantidade,
  totalItens
} from './utils/carrinhoUtils'

export default {
  name: 'App',
  components: { AppHeader, ListaProdutos, PainelCarrinho },
  data() {
    return {
      produtos,
      carrinho: [],
      carrinhoAberto: false
    }
  },
  computed: {
    totalCarrinho() {
      return totalItens(this.carrinho)
    }
  },
  methods: {
    handleAdicionarAoCarrinho(produto) {
      this.carrinho = adicionarItem(this.carrinho, produto)
      this.carrinhoAberto = true
    },
    handleRemover(produtoId) {
      this.carrinho = removerItem(this.carrinho, produtoId)
    },
    handleAumentar(produtoId) {
      this.carrinho = aumentarQuantidade(this.carrinho, produtoId)
    },
    handleDiminuir(produtoId) {
      this.carrinho = diminuirQuantidade(this.carrinho, produtoId)
    },
    handleFinalizar() {
      alert(` Compra finalizada! Obrigada pela preferência! `)
      this.carrinho = []
      this.carrinhoAberto = false
    }
  }
}
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f6f9;
  min-height: 100vh;
}
</style>