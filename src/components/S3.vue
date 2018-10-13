<template>
  <v-container grid-list-md align-center>
    <div class="nav">Add Vehides to Your Quote</div>
    <v-layout row column>
      <v-flex xs12 sm12>
        <v-text-field
          label="Type"
          placeholder="Please Input Type"
          v-model="type"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Year"
          placeholder="Please Input Year"
          v-model="year"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Make"
          placeholder="Please Input Make"
          v-model="make"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>      
      <v-flex xs12 sm12>
        <v-text-field
          label="Model"
          placeholder="Please Input Model"
          v-model="model"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-btn color="primary" @click="addEvt">
        Add
      </v-btn>
    </v-layout>
    <v-layout v-if="!disabled" row class="justify-center mt30">
      <v-layout row wrap>
        <v-flex
          class="hand-pointer"
          v-for="(card, idx) in cards"
          v-bind="{ [`xs${card.flex}`]: true }"          
          v-bind:class="[card.select ? 'pick-card' : 'none-pick-card']"
          :key="idx"
          @click="pickEvt(idx)"
        >
          <v-card height="160px" color="white">
            <v-icon class="like-it">favorite</v-icon>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ card.year }}</h3>
                <div class="content-info">{{ card.name }}</div>
              </div>
            </v-card-title>
            <v-bottom-nav
              :value="true"
              absolute
              color="transparent"
            >
              <v-btn
                color="teal"
                flat
                value="edit"
              >
                <span>Edit</span>
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn
                color="teal"
                flat
                value="remove"
              >
                <span>Remove</span>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-bottom-nav>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout v-if="!disabled" row class="justify-center mt30">
      <v-btn color="primary" @click="gotoEvt">
        Next
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 's3',
  props: {
    e1: 0,
  },
  data: () => ({
    disabled: true,
    type: '',
    year: '',
    make: '',
    model: '',
    cards: [
      { year: 2009, name: 'sonata', flex: 3, select: false, },
      { year: 2009, name: 'sonata', flex: 3, select: false, }
    ],
  }),
  methods: {
    addEvt() {
      this.disabled = false;
    },
    gotoEvt() {
      this.$emit('update:e1', 4);
    },
    initEvt() {
      this.$router.push({ path: '/' });
    },
    pickEvt(idx) {
      for (let i = 0; i < this.cards.length; i += 1) {
        if (i === idx) this.cards[i].select = true;
        else this.cards[i].select = false;
      }
    }
  }
}
</script>

<style>
.content-info {
  font-size: 18px;
}
.like-it {
  float: right;
  font-size: 18px;
  margin: 5px;
  color: #d0d0d0 !important;
}
.none-pick-card {
  border: 2px solid #ffffff;
}
.pick-card {
  border: 2px solid #333333;
}
.pick-card i {
  color: #333333 !important;
}
</style>
