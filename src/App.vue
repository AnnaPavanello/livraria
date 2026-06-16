<script setup>
import { ref, computed } from 'vue'

import AppHeader from './components/layout/AppHeader.vue'
import ProductList from './components/products/ProductList.vue'
import CartPanel from './components/cart/CartPanel.vue'

import { products } from './data/products'
import { getCartTotal } from './utils/CartUtils'

const cart = ref([])

function addToCart(product) {
  const item = cart.value.find(
    p => p.id === product.id
  )

  if (item) {
    item.quantity++
  } else {
    cart.value.push({
      ...product,
      quantity: 1
    })
  }
}

function increase(id) {
  const item = cart.value.find(
    p => p.id === id
  )

  if (item) {
    item.quantity++
  }
}

function decrease(id) {
  const item = cart.value.find(
    p => p.id === id
  )

  if (item && item.quantity > 1) {
    item.quantity--
  }
}

function remove(id) {
  cart.value = cart.value.filter(
    p => p.id !== id
  )
}

const total = computed(() => {
  return getCartTotal(cart.value)
})

const cartQuantity = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.quantity
  }, 0)
})
</script>

<template>
  <AppHeader :quantity="cartQuantity" />

  <div class="container">

    <div class="products">
      <ProductList
        :products="products"
        @add="addToCart"
      />
    </div>

    <CartPanel
      :cart="cart"
      :total="total"
      @increase="increase"
      @decrease="decrease"
      @remove="remove"
    />

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
}
</style>
