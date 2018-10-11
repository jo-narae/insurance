<template>
  <div class="second">
    <h1>Second page</h1>
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
  name: 'second',
  props: {
    e1: 0,
  },
  methods: {
    gotoEvt() {
      this.$emit('update:e1', 3);
    }
  },
}
</script>