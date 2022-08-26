<template>
  <router-link
    :to="{
      name: 'ProgramDetails',
      params: { programTracks: JSON.stringify(program) },
    }"
  >
    <div v-on:click="showDetails" class="main-program bord py-2 mb-3">
      <h4 class="fw-bold">{{ program.name }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["program"],

  name: "MainProgram",
};
</script>

<style scoped>
.main-program {
  background-color: cadetblue;
  color: white;
  box-shadow: 3px 3px #888888;
  border: 0.5px solid black;
  border-radius: 5px 5px;
  cursor: pointer;
}

a {
  text-decoration: none !important;
}
</style>