<template>
  <select v-model="componentName">
    <option value="HomeComp">Home</option>
    <option value="AboutComp">About</option>
  </select>

  <component :is="componentName"></component>
</template>

<script>
import HomeComp from "./components/HomeComp.vue"
import AboutComp from "./components/AboutComp.vue"

export default {
  name: 'App',
  components: {
    HomeComp,
    AboutComp,
  },
  data(){
    return {
      componentName: "HomeComp",

    }
  }
}
</script>


