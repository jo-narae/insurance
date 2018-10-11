<template>
  <div class="first">
    <h1>First page</h1>

  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-text-field
          label="First Name"
          placeholder="Please Input First Name"
          v-model="firstName"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Last Name"
          placeholder="Please Input Last Name"
          v-model="lastName"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-menu
          ref="menu1"
          :close-on-content-click="false"
          v-model="menu1"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date of birth"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout row class="mt30">
      <v-flex xs6 order-lg2 class="mr15">
        <v-text-field
          label="Street Address"
          placeholder="Please Input Street Address"
          v-model="streetAddress"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 order-lg2>
        <v-text-field
          label="Apt./Unit #"
          placeholder="Please Input Apt./Unit #"
          v-model="aptUnit"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6 order-lg2 class="mr15">
        <v-text-field
          label="City"
          placeholder="Please Input City"
          v-model="city"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 order-lg2>
        <v-text-field
          label="Zip Code"
          placeholder="Please Input Zip Code"
          v-model="zipcode"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 order-lg2>
        <v-text-field
          label="State"
          placeholder="Please Input State"
          v-model="state"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>

    <v-btn
      color="primary"
      @click="gotoEvt"
    >
      Continue
    </v-btn>

    <v-btn flat>Cancel</v-btn>
  </div>
</template>

<script>
export default {
  name: 'first',
  props: {
    e1: 0,
  },
  data: () => ({
    date: null,
    dateFormatted: null,
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptUnit: '',
    city: '',
    zipcode: '',
    state: '',
    menu1: false
  }),
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    gotoEvt() {
      this.$emit('update:e1', 2);
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
</script>

<style>
.mt30 {
  margin-top: 30px !important;
}
.mr15 {
  margin-right: 15px;
}
</style>
