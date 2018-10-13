<template>
  <v-container grid-list-md align-center>
    <v-layout row wrap>
      <v-flex xs12 sm12 v-for="(product, i) in products" :key="i">
        <v-card flat>
          <v-layout row wrap primary-title>
            <v-flex xs12 sm12>
              <div class="headline">{{ product.name }}</div>
            </v-flex>
          </v-layout>
          <v-layout row wrap v-for="(item, j) in product.items" :key="j">
            <v-flex xs6 sm6>
              {{ item.name }}
            </v-flex>
            <v-flex xs6 sm6 d-flex>
              <v-select
                :items="item.options"
                item-text="name"
                item-value="id"
                v-model="product.pickOptions[j]"
                label="Solo field"
                solo
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's7',
  props: {
    e1: 0,
  },
  data () {
    return {
      products: [
        {        
          name: 'Insurance Product 1',
          items: [
            { name: 'coverage-item 1', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
            { name: 'coverage-item 2', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
            { name: 'coverage-item 3', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
          ],
          pickOptions: [],
        },
        {        
          name: 'Insurance Product 1',
          items: [
            { name: 'coverage-item 1', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
            { name: 'coverage-item 2', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
            { name: 'coverage-item 3', 
              options: [
                { name: '선택 없음', id: '' },
                { name: '100번 상품', id: '100' },                
                { name: '200번 상품', id: '200' },                
                { name: '300번 상품', id: '300' },
              ],
            },
          ],
          pickOptions: [],
        }
      ]
    }
  },
}
</script>

