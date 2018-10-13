<template>
  <v-container grid-list-md align-center>
    <div class="nav">First page</div>
    <v-layout row column>
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
    <v-layout row>
      <v-flex xs12 order-lg2>
        <v-text-field
          label="Email Address"
          placeholder="Please Input Email Address"
          v-model="emailAddress"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 order-lg2>
        <v-text-field
          label="Health Insurance"
          placeholder="Please Input Health Insurance"
          v-model="healthInsurance"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn color="primary" @click="gotoEvt">
        OK - Start my Quote
      </v-btn>

      <v-btn flat @click="initEvt">
        No Thanks
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's1',
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
    emailAddress: '',
    healthInsurance: '',
    menu1: false
  }),
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    gotoEvt() {
      const baseURI = 'http://localhost:18080';
      this.$http.post(`${baseURI}/customer`, {
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.date,
        streetAddress: this.streetAddress,
        aptUnitNumber: this.aptUnit,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        policyholderInformation: {
          emailAddress: this.emailAddress,
          healthInsurance: this.healthInsurance,
        }
      })
      .then(res => this.nextEvt(res))
      .catch(err => console.log(err));
    },
    nextEvt(res) {
      this.$session.set('customer', res.data._links.self.href);
      this.$emit('update:e1', 2);
    },
    initEvt() {
      this.$router.push({ path: '/' });
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
  },
  created() {
    // session clear
    this.$session.clear('customer');
    this.$session.clear('vehicles');
    this.$session.clear('vehicle');    
    this.$session.clear('insurance-policy');
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
.nav {
  text-align: center;
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 30px;
  letter-spacing: 3px;
}
</style>
