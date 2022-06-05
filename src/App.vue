<template>
  <div id="app">
    <iui-layout :side="side1" :sideWidth="200" :miniWidth="100">
      <iui-layout :side="side2" :sideWidth="200">
        <button @click="side1 = !side1">side1</button>
        <button @click="side2 = !side2">side2</button>
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <template v-slot:side>
          <div style="height: 200vh">long menu2</div>
          <!-- <div style="height: 200vh" @mouseenter="side2 = true" @mouseleave="side2 = false" @focus="side2 = true" @blur="side2 = false">long menu2</div> -->
        </template>
      </iui-layout>
      <template v-slot:side>
        <div style="height: 200vh" @mouseenter="() => (side1 = true)" @mouseleave="side1 = false" @focus="side1 = true" @blur="side1 = false">long menu1</div>
      </template>

      <template v-slot:footer><div>hello footer</div></template>
    </iui-layout>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import iuiLayout from './components/iui-layout.vue';

export default {
  name: 'App',
  data() {
    return {
      side1: false,
      side2: false,
    };
  },
  components: {
    HelloWorld,
    iuiLayout,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
