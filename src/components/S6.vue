<template>
  <v-container grid-list-md align-center>
    <div class="nav">
      <v-layout row justify-center>
        <v-flex xs11 sm11>
          This is S6 Page
        </v-flex>
        <v-flex xs1 sm1 v-if="disabled">
          <v-btn color="primary" @click="gotoEvt">
            Next
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row class="content-info">
      <v-container grid-list-md align-center>
        <v-layout v-if="disabled" row>
          <v-flex xs12 sm12>
            <v-text-field
              label="First Name"
              placeholder="Please Input First Name"
              v-model="firstName"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="disabled" row>      
          <v-flex xs12 sm12>
            <v-text-field
              label="Last Name"
              placeholder="Please Input Last Name"
              v-model="lastName"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="disabled" row>      
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
        <v-layout v-if="disabled" row class="mt30">
          <v-flex xs12 order-lg2>
            <v-text-field
              label="Driver License Number"
              placeholder="Please Input Driver License Number"
              v-model="licenseNumber"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="disabled" row>
          <v-flex xs12 sm12>
            <span class="label">Gender</span>
            <v-radio-group v-model="gender" row>
              <v-radio label="Male" value="male"></v-radio>
              <v-radio label="Female" value="female"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
        <v-layout v-if="disabled" row>
          <v-flex xs10 sm12>
            <v-text-field
              label="Marital Status"
              placeholder="Please Marital Status"
              v-model="marritalStatus"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="disabled" row justify-center>
          <v-btn color="primary" @click="regEvt">
            Registration
          </v-btn>
        </v-layout>
        <v-layout v-if="!disabled" row>
          <v-flex xs12 sm12>
            <v-text-field
              label="Relation To Policyholder"
              placeholder="Please Input Relation To Policyholder"
              v-model="policyholder"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="!disabled" row justify-center>
          <v-btn color="primary" @click="submitEvt">
            Submit
          </v-btn>
        </v-layout>
        <v-layout v-if="confirmed" row class="headline justify-center content-info mt30">
          Additional Drivers?
        </v-layout>
        <v-layout v-if="confirmed" row justify-center>
          <v-btn color="primary" @click="initEvt">
            Yes
          </v-btn>
          <v-btn flat @click="gotoEvt">
            No
          </v-btn>
    </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's6',
  props: {
    e1: 0,
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  data: () => ({
    menu1: false,
    disabled: true,
    confirmed: false,
    date: null,
    dateFormatted: null,
    firstName: '',
    lastName: '',
    licenseNumber: '',
    marritalStatus: '',
    gender: '',
    policyholder: '',
    addDriver: '',
  }),
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    regEvt() {
      const baseURI = 'http://localhost:18080';
      this.$http.post(`${baseURI}/customer`, {
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.date,
        driverLicenseNumber: this.licenseNumber,
        gender: this.gender,
        marritalStatus: this.marritalStatus
      })
      .then(res => this.disabledEvt(res))
      .catch(err => console.log(err));
    },
    disabledEvt(res) {
      this.addDriver = res.data._links.self.href;
      this.disabled = false;
    },
    gotoEvt() {
      this.$emit('update:e1', 7);
    },
    submitEvt() {
      const baseURI = 'http://localhost:18080';
      this.$http.post(`${baseURI}/insured-driver`, {
        customer: this.addDriver,
        relationToPolicyholder: this.policyholder,
        insurancePolicy: this.$session.get('insurance-policy'),
      })
      .then(this.confirmedEvt())
      .catch(err => console.log(err));
    },
    confirmedEvt() {
      this.confirmed = true;
    },
    initEvt() {
      this.menu1 = false;
      this.disabled = true;
      this.confirmed = false;
      this.date = null;
      this.dateFormatted = null;
      this.firstName = '';
      this.lastName = '';
      this.licenseNumber = '';
      this.marritalStatus = '';
      this.gender = '';
      this.policyholder = '';
    },
  },
}
</script>

