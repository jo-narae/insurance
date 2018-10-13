<template>
  <v-container grid-list-md align-center>
    <div class="nav">Second page</div>
    <v-layout v-if="disabled" row class="justify-center content-info">
      concent for using private information.
    </v-layout>
    <v-layout v-if="disabled" row justify-center>
      <v-btn color="primary" @click="agreeEvt">
        Agree
      </v-btn>
      <v-btn flat @click="initEvt">
        Disagree
      </v-btn>
    </v-layout>
    <v-layout v-if="!disabled" row class="mt30">
      <v-flex xs10 order-lg2>
        <v-text-field type="number"
          label="Social Security Number"
          placeholder="Please Input Social Security Number"
          v-model="securityNumber"
        ></v-text-field>
      </v-flex>
      <v-flex xs2 order-lg2> 
        <v-btn @click="gotoEvt">
          Send
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's2',
  props: {
    e1: 0,
  },
  data: () => ({
    date: null,
    securityNumber: '',
    disabled: true,
  }),
  methods: {
    agreeEvt() {
      this.disabled = false;
    },
    gotoEvt() {
      this.$http.patch(this.$session.get('customer'), {
        socialSecurityNumber: this.securityNumber,
      })
      .then(res => this.nextEvt(res))
      .catch(err => console.log(err));
    },
    nextEvt(res) {
      this.$session.set('vehicles', res.data._links.vehicles.href);
      this.$emit('update:e1', 3);
    },
    initEvt() {
      this.$router.push({ path: '/' });
    },
  },
}
</script>

<style>
.content-info {
  font-size: 18px;
}
</style>
