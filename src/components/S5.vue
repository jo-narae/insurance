<template>
  <v-container grid-list-md align-center>
    <div class="nav">Provide Vehicle Details</div>
    <v-layout row class="content-info">
      - 2009 sonata
    </v-layout>
    <v-layout row class="mt30">      
      <v-flex xs12 sm12>
        <v-text-field
          label="Primary Vehicle Use"
          placeholder="Please Primary Vehicle Use"
          v-model="vehicleUse"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Parking Zipcode"
          placeholder="Please Input Parking Zipcode"
          v-model="parkingZipcode"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Ownership"
          placeholder="Please Input Ownership"
          v-model="ownership"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn slot="activator" color="primary" dark>Next</v-btn>
        <v-card>
          <v-card-title class="headline">Additional Drivers?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="confrimEvt(true)">Yes</v-btn>
            <v-btn color="green darken-1" flat @click="confrimEvt(false)">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's5',
  props: {
    e1: 0,
    confirm: Boolean,
  },
  data: () => ({
    gender: '',
    vehicleUse: '',
    parkingZipcode: '',
    ownership: '',
    dialog: false,
  }),
  methods: {
    confrimEvt(flag) {
      this.$emit('update:e1', 6);
      this.$emit('update:confirm', flag);
      this.dialog = false;
    }
  },
}
</script>
