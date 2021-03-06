import Vue from 'vue';

import store from './store';

new Vue({
  render(h) {
    return h('div', `${this.name} ${this.foo}`);
  },
  data() {
    return {
      name: 'one',
    }
  },
  computed: {
    foo() {
      return this.$store.state.test;
    }
  },
  store: store
}).$mount('#app');