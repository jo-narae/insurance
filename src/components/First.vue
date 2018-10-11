<template>
  <div class="first">
    <h1>First page</h1>
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
  methods: {
    gotoEvt() {
      this.$emit('update:e1', 2);
    }
  },
}
</script>