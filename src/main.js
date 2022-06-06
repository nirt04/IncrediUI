import Vue from 'vue';
import App from './App.vue';
import IncrediUI from './install';

Vue.config.productionTip = false;

Vue.use(IncrediUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
