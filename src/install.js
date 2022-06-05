import iuiLayout from './components/iui-layout.vue';

const IncrediUI = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('iui-Layout', iuiLayout);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(IncrediUI);
}

export default IncrediUI;
