import Vue from 'vue'

const store = new Vue({
  data: {
    fond: null
  },
  methods: {
    addFond (value) {
      this.fond = value
    }
  }
})
export default store
