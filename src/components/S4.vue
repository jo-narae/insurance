<template>
  <v-container grid-list-md align-center>
    <div class="nav">Provide Details</div>
    <v-layout row>
      <v-flex xs12 sm12>
        <span class="label">Gender</span>
        <v-radio-group v-model="gender" row>
          <v-radio label="Male" value="male"></v-radio>
          <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Marital Status"
          placeholder="Please Marital Status"
          v-model="maritalStatus"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="HighestEdulevel"
          placeholder="Please Input HighestEdulevel"
          v-model="highestEdulevel"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12>
        <span>Has this driver had any!</span>
        <p>At Fault Accident in the last 5 years</p>
        <v-radio-group v-model="accident" row>
          <v-radio label="Yes" value="Y"></v-radio>
          <v-radio label="No" value="N"></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn color="primary" @click="gotoEvt">
        Next
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's4',
  props: {
    e1: 0,
  },
  data: () => ({
    gender: '',
    maritalStatus: '',
    highestEdulevel: '',
    accident: '',
  }),
  methods: {
    gotoEvt() {
      this.$emit('update:e1', 5);
    },
    initEvt() {
      this.$router.push({ path: '/' });
    },
  },
}
</script>

<style>
.label {
  color: #8c8c8c;
  font-size: 12px;
}
</style>
