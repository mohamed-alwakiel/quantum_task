<template>
  <div class="my-5" v-if="branch">
    <div v-on:click="showSub" class="main-branch text-center mt-4 py-5">
      <h2>{{ branch.title }}</h2>
    </div>

    <div v-if="toggle" class="text-center">
      <MainProgram v-for="program in branch.programs" :key="program.id" :program="program" />
    </div>
  </div>
</template>

<script>
import MainProgram from "./MainProgram.vue";
export default {
  props: ["branch"],
  name: "MainBranch",
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    showSub() {
      this.toggle = !this.toggle;
    },
  },
  computed: {},
  components: { MainProgram },
};
</script>

<style scoped>
.main-branch {
  background-color: aliceblue;
  box-shadow: 3px 3px #888888;
  border: 0.5px solid black;
  border-radius: 5px 5px;
  cursor: pointer;
}

a {
  text-decoration: none !important;
}
</style>