<template>
  <div class="fundo-carrinho" v-if="aberto" @click.self="$emit('fechar')">
    <div class="painel-carrinho">
      <div class="cabecalho-carrinho">
        <h2>🛒 Carrinho</h2>
        <button @click="$emit('fechar')" class="btn-fechar">✕</button>
      </div>

      <div v-if="carrinho.length === 0" class="carrinho-vazio">
        <p> Seu carrinho está vazio</p>
      </div>

      <div v-else class="itens-carrinho">
        <ItemCarrinho
          v-for="item in carrinho"
          :key="item.id"
          :item="item"
          @remover="$emit('remover', $event)"
          @aumentar="$emit('aumentar', $event)"
          @diminuir="$emit('diminuir', $event)"
        />
      </div>

      <ResumoCarrinho
        :totalItens="totalItens"
        :totalValor="totalValor"
        @finalizar="$emit('finalizar')"
      />
    </div>
  </div>
</template>

<script>
import ItemCarrinho from './ItemCarrinho.vue'
import ResumoCarrinho from './ResumoCarrinho.vue'
import { totalItens, totalValor } from '@/utils/carrinhoUtils'

export default {
  name: 'PainelCarrinho',
  components: { ItemCarrinho, ResumoCarrinho },
  props: {
    carrinho: { type: Array, default: () => [] },
    aberto: { type: Boolean, default: false }
  },
  emits: ['fechar', 'remover', 'aumentar', 'diminuir', 'finalizar'],
  computed: {
    totalItens() { return totalItens(this.carrinho) },
    totalValor() { return totalValor(this.carrinho) }
  }
}
</script>

<style scoped>
.fundo-carrinho {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}
.painel-carrinho {
  background: white;
  width: 380px;
  max-width: 100%;
  height: 100%;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.cabecalho-carrinho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.cabecalho-carrinho h2 { margin: 0; }
.btn-fechar {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #666;
}
.carrinho-vazio {
  text-align: center;
  color: #aaa;
  margin-top: 3rem;
  font-size: 1.1rem;
}
.itens-carrinho { flex: 1; }
</style>