<template>
  <form-comp>
    <template v-slot:help>
      <p>This is some help text</p>
    </template>
    <p>Dummy text 2</p>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <p>Dummy text</p>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </form-comp>
  <form-comp>
    <template v-slot:help>
      <p>Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="message">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </form-comp>
</template>

<script>
import formComp from "./components/FormComp.vue"

export default {
  name: 'App',
  components: {
    formComp,
  }
};
</script>

