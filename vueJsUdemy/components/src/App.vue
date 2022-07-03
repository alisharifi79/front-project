<template>
  <p>Hey!</p>
  <greeting-comp :age="age"></greeting-comp>
  <user-comp :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user-comp>
  </template>

<script>
import GreetingComp from "./components/Greeting.vue";
import UserComp from "./components/User.vue";

export default {
  name: "App", 
  components: {
    GreetingComp,
    UserComp,
  },
  data(){
    return {
      age: 20,
    }
  },
  methods: {
    updateAge(num){
        return this.age +=num
    },
    updateAgeCB(num){
        return this.age +=num
    }
  }
};
</script>

