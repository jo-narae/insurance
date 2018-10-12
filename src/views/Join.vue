<template>
  <v-container grid-list-md align-center>
    <v-layout>
      <v-flex xs12 order-lg2>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">step 1</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">step 2</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">step 3</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <first :e1.sync="e1"></first>
            </v-stepper-content>

            <v-stepper-content step="2">
              <second :e1.sync="e1"></second>
            </v-stepper-content>

            <v-stepper-content step="3">
              <third :e1.sync="e1"></third>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import First from '@/components/First'
import Second from '@/components/Second'
import Third from '@/components/Third'

export default {
  name: 'join',
  components: {
    First,
    Second,
    Third,
  },
  data() {
    return {
      e1: 0
    }
  }
}
</script>

