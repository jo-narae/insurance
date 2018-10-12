<template>
  <v-container grid-list-md align-center>
    <div class="nav">Second page</div>
    <v-layout row class="justify-center content-info">
      concent for using private information.
    </v-layout>
    <v-layout row class="justify-center">
      <v-btn color="primary" @click="agreeEvt">
        Agree
      </v-btn>
      <v-btn flat @click="initEvt">
        Disagree
      </v-btn>
    </v-layout>
    <v-layout v-if="!securityDisabled" row class="mt30">
      <v-flex xs11 order-lg2 class="mr15">
        <v-text-field
          label="Social Security Number"
          placeholder="Please Input Social Security Number"
          v-model="securityNumber"
        ></v-text-field>
      </v-flex>
      <v-flex xs1 order-lg2> 
        <v-btn @click="gotoEvt">
          Send
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'second',
  props: {
    e1: 0,
  },
  data: () => ({
    date: null,
    securityNumber: '',
    securityDisabled: true,
  }),
  methods: {
    agreeEvt() {
      this.securityDisabled = false;
    },
    gotoEvt() {
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
