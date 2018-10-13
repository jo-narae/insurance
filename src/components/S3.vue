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
    <v-layout row class="justify-center mt30">
      <v-layout row wrap>
        <v-flex
          v-if="cards.length > 0"
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
                <div class="content-info">{{ card.model }}</div>
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
        <v-flex v-if="cards.length <= 0">
          <v-card flat>
            <v-layout row wrap primary-title>
              <v-flex xs12 sm12>
                <div class="headline text-center">None Vehicle</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout row class="justify-center mt30">
      <v-btn color="primary" @click="nextEvt">
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
    type: '',
    year: '',
    make: '',
    model: '',
    cards: [],
    vehicles: [],
  }),
  methods: {
    addEvt() {
      const baseURI = 'http://localhost:18080';
      this.$http.post(`${baseURI}/vehicle`, {
        type: this.type,
        make: this.make,
        model: this.model,
        year: this.year,
        customer: this.$session.get('customer'),
      })
      .then(res => this.setCard(res.data))
      .catch(err => console.log(err));
    },
    nextEvt() {
      let selected = false;
      for (let i = 0; i < this.cards.length; i += 1) {
        if (this.cards[i].select) {
          selected = true;
        }
      }
      if (!selected) {
        alert('Please select a vehicle!');
      } else {
        const baseURI = 'http://localhost:18080';
        this.$http.post(`${baseURI}/insurance-policy`, {
          vehicle: this.$session.get('vehicle'),
          policyholder: this.$session.get('customer'),
        })
        .then(res => this.gotoEvt(res))
        .catch(err => console.log(err));
      }
    },
    gotoEvt(res) {
      this.$session.set('insurance-policy', res.data._links.self.href);
      this.$emit('update:e1', 4);
    },
    initEvt() {
      this.$router.push({ path: '/' });
    },
    pickEvt(idx) {
      for (let i = 0; i < this.cards.length; i += 1) {
        if (i === idx) {
          this.cards[i].select = true;
          this.$session.set('vehicle', this.cards[i]._links.vehicle.href);
        } else {
          this.cards[i].select = false;
        }
      }
    },
    setCard(res) {
      this.cards.push({
        ...res,
        flex: 3,
        select: false,
      });
    },
    setCards(res) {
      const card = [];
      const vehicle = res.data._embedded.vehicle;
      for (let i = 0; i < vehicle.length; i += 1) {
        card.push({
          ...vehicle[i],
          flex: 3,
          select: false,
        });
      }
      this.cards = card;
    }
  },
  created() {
    this.$http.get(this.$session.get('vehicles'))
    .then(res => this.setCards(res))
    .catch(err => console.log(err));
  },
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
.text-center {
  text-align: center;
}
</style>
