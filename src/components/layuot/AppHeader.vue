<script setup>
defineProps({
  quantity: Number
})
</script>

<template>
  <header>
    <h1>Livraria Online</h1>

    <div class="cart-info">
       Itens no carrinho: {{ quantity }}
    </div>
  </header>
</template>

<style scoped>
header {
  background: #2c3e50;
  color: white;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-info {
  font-weight: bold;
}
</style>
