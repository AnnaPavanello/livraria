<script>
import { formatarMoeda } from '@/utils/carrinhoUtils';

export default {
  name: 'CardProduto',
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  emits: ['adicionar-ao-carrinho'],
  methods: { formatarMoeda }
}
</script>

<template>
  <div class="card-produto">
    <img :src="produto.capa" :alt="produto.titulo" class="imagem-produto" />
    <div class="info-produto">
      <span class="categoria">{{ produto.categoria }}</span>
      <h3>{{ produto.titulo }}</h3>
      <p class="autor">{{ produto.autor }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
      <div class="rodape">
        <span class="preco">{{ formatarMoeda(produto.preco) }}</span>
        <button @click="$emit('adicionar-ao-carrinho', produto)" class="btn-adicionar">
          + Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-produto {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
.card-produto:hover { transform: translateY(-4px); }
.imagem-produto {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.info-produto {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.categoria {
  font-size: 0.75rem;
  background: #eaf0fb;
  color: #2980b9;
  padding: 2px 8px;
  border-radius: 20px;
  align-self: flex-start;
  margin-bottom: 0.4rem;
}
h3 { margin: 0 0 0.2rem; font-size: 1rem; }
.autor { color: #666; font-size: 0.85rem; margin: 0 0 0.5rem; }
.descricao { font-size: 0.85rem; color: #888; flex: 1; }
.rodape {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.preco { font-weight: bold; color: #27ae60; font-size: 1.1rem; }
.btn-adicionar {
  background: #2c3e50;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-adicionar:hover { background: #e67e22; }
</style>
