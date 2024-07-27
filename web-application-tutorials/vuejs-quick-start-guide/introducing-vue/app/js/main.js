import Vue from 'vue';

new Vue({
  el: '#entryPoint',
  data() {
    return {
      heading1: 'Vue.js Quick Start Guide',
      heading2: 'Learning the basic concepts of Vue.js',
      someNum: '1',
      userInput: '',
      counter: 0,
      name: 'Vue.js',
      userName: 'John Doe',
      title: 'Professor'
    }
  },
  // define methods (functions) under the `methods` object
  methods: {
    whatIsVue: function () {
      console.info(this.name + ' is a Progressive Front-end Framework')
    },
    whyUseVue: function () {
      alert('Because ' + this.name + ' is nice.')
    }
  },
  computed: {
    // a computed getter
    prefixedMessage: function () {
      // `this` points to the Vue instance's data option
      return this.title + " " + this.userName
    }
  }
});
