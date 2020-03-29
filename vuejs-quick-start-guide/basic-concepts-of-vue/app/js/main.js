import Vue from 'vue';

Vue.component('custom-article', {
  props: {
    content: {
      type: String,
      required: true,
      default: 'Hello Vue'
    }
  },
  template: `
    <article>{{ content }}</article>`
});

Vue.component("main-title-component", {
  template: '<h1 class="text-center mt-5 mb-4">{{title}}</h1>',
  data: function () {
    return {
      title: "Just another title"
    };
  }
});

Vue.component("list-group-component", {
  template: `
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items">{{item.description}}</li>
    </ul>`,
  data() {
    return {
      items: [
        {
          description: "Description one"
        },
        {
          description: "Description two"
        },
        {
          description: "Description three"
        }
      ]
    };
  }
});

Vue.component('the-footer', {
  template: '<h2 class="footer css classes go here">Our example footer</h2>'
});

Vue.component("card-component", {
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{text}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`,
  data() {
    return {
      title: "This is the card title",
      text: "This is the card text"
    };
  }
});

new Vue({
  el: '#app',
  data() {
    return {
      ownerName: 'Old McDonald',
      thing: 'cow',
      datacontent: 'This component was made with the help of a data object in the Vue instance'
    }
  },
  methods: {
  },
  computed: {
    ownerHasThing: function () {
      // `this` points to the Vue instance's data option
      return this.ownerName + " has a " + this.thing
    }
  }
});
