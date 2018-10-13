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
                :label="`Please Select ${ item.name }`"
                solo
              ></v-select>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn color="primary" @click="finishEvt">
        Finish
      </v-btn>
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
      products: [],
    }
  },
  methods: {
    setProduct(res) {
      this.products = res.data._embedded['insurance-product'];
    },
    finishEvt() {
      let data = '';
      const baseURI = 'http://localhost:18080';
      const options = this.pickOptions;
      for (let i = 0; i < options.length; i += 1) {
        data += `${ baseURI }/coverage-item-option/` + options[i] + '\n';
      }
      this.$http.patch(this.$session.get('insurance-policy') + '/coverageItemOptions', data, {
        headers: {
          'Content-Type': 'text/uri-list',
        }
      })
      .then(this.calculateEvt())
      .catch(err => console.log(err));
    },
    calculateEvt() {
      this.$http.post(this.$session.get('insurance-policy') + '/calculate')
      .then(this.initEvt())
      .catch(err => console.log(err));
    },
    initEvt() {
      alert('Finish design insurance policy!');
      this.$router.push({ path: '/' });
    },
  },
  created() {
    const baseURI = 'http://localhost:18080';
    this.$http.get(`${baseURI}/insurance-product?projection=child`)
    .then(res => this.setProduct(res))
    .catch(err => console.log(err));
  },
}
</script>

