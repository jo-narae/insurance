<template>
  <div class="third">
    <h1>Third page</h1>
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
  name: 'third',
  props: {
    e1: 0,
  },
  methods: {
    gotoEvt() {
      this.$emit('update:e1', 1);
    }
  },
}
</script>