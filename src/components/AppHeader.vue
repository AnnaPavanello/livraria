<template>
  <header class="cabecalho">
    <div class="marca">
      <span class="logo"></span>
      <h1>Livraria Vue</h1>
    </div>
    <button class="btn-carrinho" @click="$emit('abrir-carrinho')">
       Carrinho
      <span v-if="totalItens > 0" class="badge">{{ totalItens }}</span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    totalItens: {
      type: Number,
      default: 0
    }
  },
  emits: ['abrir-carrinho']
}
</script>

<style scoped>
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
}
.marca {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.marca h1 {
  font-size: 1.5rem;
  margin: 0;
}
.logo { font-size: 1.8rem; }
.btn-carrinho {
  position: relative;
  background: #e67e22;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-carrinho:hover { background: #d35400; }
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
