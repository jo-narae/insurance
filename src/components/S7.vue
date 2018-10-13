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
          <v-layout row wrap v-for="(item, j) in product.coverageItems" :key="j">
            <v-flex xs6 sm6>
              {{ item.name }}
            </v-flex>
            <v-flex xs6 sm6 d-flex>
              <v-select
                :items="item.coverageItemOptions"
                item-text="value"
                item-value="id"
                v-model="pickOptions[(i*product.coverageItems.length+j)]"
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
      pickOptions: [],
      products: [
        {        
          name: 'Insurance Product 1',
          id: 'P1',
          coverageItems: [
            { name: 'coverage-item 1',
              id: 'C1', 
              coverageItemOptions: [
                { id: 'CO1', value: '100' },                
                { id: 'CO2', value: '200' },                
                { id: 'CO3', value: '300' },
              ],
            },
           { name: 'coverage-item 2',
              id: 'C2', 
              coverageItemOptions: [
                { id: 'CO4', value: '100' },                
                { id: 'CO5', value: '200' },                
                { id: 'CO6', value: '300' },
              ],
            },
            { name: 'coverage-item 3',
              id: 'C2', 
              coverageItemOptions: [
                { id: 'CO7', value: '100' },                
                { id: 'CO8', value: '200' },                
                { id: 'CO9', value: '300' },
              ],
            },
          ],
          
        },
        {        
          name: 'Insurance Product 1',
          id: 'P1',
          coverageItems: [
            { name: 'coverage-item 1',
              id: 'C1', 
              coverageItemOptions: [
                { id: 'CO1', value: '100' },                
                { id: 'CO2', value: '200' },                
                { id: 'CO3', value: '300' },
              ],
            },
           { name: 'coverage-item 2',
              id: 'C2', 
              coverageItemOptions: [
                { id: 'CO4', value: '100' },                
                { id: 'CO5', value: '200' },                
                { id: 'CO6', value: '300' },
              ],
            },
            { name: 'coverage-item 3',
              id: 'C2', 
              coverageItemOptions: [
                { id: 'CO7', value: '100' },                
                { id: 'CO8', value: '200' },                
                { id: 'CO9', value: '300' },
              ],
            },
          ],
          
        },
      ]
    }
  },
  methods: {
  }
}
</script>

