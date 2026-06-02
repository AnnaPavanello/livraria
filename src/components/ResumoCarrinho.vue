
<template>
  <div class="resumo-carrinho">
    <div class="linha-resumo">
      <span>Subtotal ({{ totalItens }} itens)</span>
      <span>{{ formatarMoeda(totalValor) }}</span>
    </div>
    <div class="linha-resumo">
      <span>Frete</span>
      <span class="gratis">GRÁTIS</span>
    </div>
    <div class="linha-resumo total">
      <span>Total</span>
      <span>{{ formatarMoeda(totalValor) }}</span>
    </div>
    <button
      class="btn-finalizar"
      @click="$emit('finalizar')"
      :disabled="totalItens === 0"
    >
      Finalizar Compra
    </button>
  </div>
</template>

<script>
import { formatarMoeda } from '@/utils/moedaUtils'

export default {
  name: 'ResumoCarrinho',
  props: {
    totalItens: { type: Number, default: 0 },
    totalValor: { type: Number, default: 0 }
  },
  emits: ['finalizar'],
  methods: { formatarMoeda }
}
</script>

<style scoped>
.resumo-carrinho {
  border-top: 2px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;
}
.linha-resumo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #555;
}
.linha-resumo.total {
  font-weight: bold;
  font-size: 1.1rem;
  color: #2c3e50;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
}
.gratis { color: #27ae60; font-weight: bold; }
.btn-finalizar {
  width: 100%;
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}
.btn-finalizar:hover:not(:disabled) { background: #219150; }
.btn-finalizar:disabled { background: #bdc3c7; cursor: not-allowed; }
</style>