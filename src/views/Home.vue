<template>
  <v-container grid-list-md align-center>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title class="justify-center">
            <div>
              <h3 class="headline mb-0">Auto Insurance Online Sales Process</h3>
              <div>To start, press the start button.</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn color="info" @click="gotoEvt">Start</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    gotoEvt() {
      this.$router.push({ path: '/join' });
    },
    initEvt() {
    },
  }
}
</script>