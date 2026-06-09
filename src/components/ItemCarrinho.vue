<template>
  <div class="item-carrinho">
    <img :src="item.imagem" :alt="item.titulo" class="imagem-item" />
    <div class="info-item">
      <p class="titulo-item">{{ item.titulo }}</p>
      <p class="preco-item">{{ formatarMoeda(item.preco) }}</p>
      <div class="controles-quantidade">
        <button @click="$emit('diminuir', item.id)">−</button>
        <span>{{ item.quantidade }}</span>
        <button @click="$emit('aumentar', item.id)">+</button>
      </div>
    </div>
    <button class="btn-remover" @click="$emit('remover', item.id)">🗑️</button>
  </div>
</template>

<script>
import { formatarMoeda } from '@/utils/moedaUtils'

export default {
  name: 'ItemCarrinho',
  props: {
    item: { type: Object, required: true }
  },
  emits: ['remover', 'aumentar', 'diminuir'],
  methods: { formatarMoeda }
}
</script>

<style scoped>
.item-carrinho {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}
.imagem-item {
  width: 55px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}
.info-item { flex: 1; }
.titulo-item { font-size: 0.9rem; font-weight: bold; margin: 0 0 0.2rem; }
.preco-item { color: #27ae60; font-size: 0.85rem; margin: 0 0 0.4rem; }
.controles-quantidade {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.controles-quantidade button {
  background: #ecf0f1;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.controles-quantidade span {
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}
.btn-remover { background: none; border: none; cursor: pointer; font-size: 1.1rem; }
</style>