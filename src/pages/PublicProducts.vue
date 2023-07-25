
<script setup>
import { AppStore } from '@/core/store'
import { computed, onMounted, ref } from 'vue'

const app = AppStore()
const category = ref(null)
const categories = computed(() => app.categories)
const products = ref([])

async function getProducts() {
  const tmp = await app.products()
  products.value = !category.value
    ? tmp
    : tmp.filter(o => o.category === category.value)
}

async function handleCategory(newCategory) {
  category.value = newCategory
  await getProducts()
}

onMounted(() => getProducts())
</script>

<template>
  <full-page>
    <div class="products">
      <div class="products-categories">
        <div @click="handleCategory(null)" class="category" :class="!category ? 'active' : ''">
          <t t="all" />
        </div>
        <div v-for="(cat, idx) in categories" :key="idx">
          <div @click="handleCategory(cat)" class="category" :class="category === cat ? 'active' : ''">
            <t :t="cat" />
          </div>
        </div>
      </div>
      <div class="products-list">
        <div v-if="!products.length" class="coming-soon">
          <t t="coming-soon" />
        </div>
        <cards-list v-else>
          <card-item v-for="(product, idx) in products" :key="idx">
            <h3><t :ts="product.name.split('_')" /></h3>
            <img :src="product.image" />
            <div class="items">
              <div class="item">
                <div class=""><t t="category" />:</div>
                <div class=""><t :t="product.category" /></div>
              </div>
              <div class="item">
                <div class=""><t t="latency" />:</div>
                <div class="">{{ product.latency }}ms</div>
              </div>
              <div class="item">
                <div class=""><t t="cost" />:</div>
                <div class=""><t t="$" />{{ product.cost }}/req</div>
              </div>
              <div class="item">
                <div class=""><t t="status" />:</div>
                <div class=""><t :t="product.status" /></div>
              </div>
            </div>
          </card-item>
        </cards-list>
      </div>
    </div>
  </full-page>
</template>

<style lang="scss" scoped>
.products {
  @include flex(row);

  &-categories {
    min-width: 10vw;

    .category {
      background-color: $white;
      color: $blue;
      cursor: pointer;
      font-size: 1.5em;
      padding: 0.25em;

      &.active {
        font-weight: bold;
      }
    }
  }

  &-list {
    @include flex(column);

    .coming-soon {
      @include border;

      font-size: 2em;
      padding: 2em;
      text-align: center;
    }

    .card {
      @include flex(column);
      @include flex-between;

      height: 22em;
      margin: 0.5em;
      width: 20em;

      @media (max-width: $sm) {
        height: fit-content;
        width: 90vw;
      }

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
      }

      h3 {
        text-align: center;
      }

      img {
        height: 180px;
        width: 100%;
      }
    }

    .items {
      @include flex(row);
      @include flex-between;

      flex-wrap: wrap;

      .item {
        @include flex(row);
        @include flex-between;

        flex: 1;
        font-size: 1em;
        font-weight: 300;
        padding: 0 0.5em;

        @media (max-width: $sm) {
          flex-direction: row;
        }

        & div:nth-child(2) {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
