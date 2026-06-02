<template>
  <div class="lista-produtos">
    <h2>📖 Nossos Livros</h2>
    <div class="grade">
      <CardProduto
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
        @adicionar-ao-carrinho="$emit('adicionar-ao-carrinho', $event)"
      />
    </div>
  </div>
</template>

<script>
import CardProduto from './CardProduto.vue'

export default {
  name: 'ListaProdutos',
  components: { CardProduto },
  props: {
    produtos: {
      type: Array,
      required: true
    }
  },
  emits: ['adicionar-ao-carrinho']
}
</script>

<style scoped>
.lista-produtos { padding: 2rem; }
h2 { margin-bottom: 1.5rem; color: #2c3e50; }
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>

cardProdutos.vue 
