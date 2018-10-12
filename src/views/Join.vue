<template>
  <v-container grid-list-md align-center>
    <v-layout>
      <v-flex xs12 order-lg2>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 5" step="5"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 6" step="6"></v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="7"></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <s1 :e1.sync="e1"></s1>
            </v-stepper-content>

            <v-stepper-content step="2">
              <s2 :e1.sync="e1"></s2>
            </v-stepper-content>

            <v-stepper-content step="3">
              <s3 :e1.sync="e1"></s3>
            </v-stepper-content>

            <v-stepper-content step="4">
              <s4 :e1.sync="e1"></s4>
            </v-stepper-content>

            <v-stepper-content step="5">
              <s5 :e1.sync="e1" :confirm.sync="confirm"></s5>
            </v-stepper-content>

            <v-stepper-content step="6">
              <s6 :e1.sync="e1" :confirm="confirm"></s6>
            </v-stepper-content>

            <v-stepper-content step="7">
              <s7 :e1.sync="e1"></s7>
            </v-stepper-content>

          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import S1 from '@/components/S1'
import S2 from '@/components/S2'
import S3 from '@/components/S3'
import S4 from '@/components/S4'
import S5 from '@/components/S5'
import S6 from '@/components/S6'
import S7 from '@/components/S7'

export default {
  name: 'join',
  components: {
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
  },
  data() {
    return {
      e1: 0,
      confirm: null,
    }
  }
}
</script>

