<template>
  <div class="container mt-5">
    <div class="mt-5">
      <MainTrack
        v-for="track in program.tracks"
        :key="track.id"
        :track="track"
      />
    </div>
  </div>
</template>

<script>
import MainTrack from "../components/MainTrack.vue";

export default {
  name: "ProgramDetails",

  props: ["programTracks"],

  data() {
    return {
      program: JSON.parse(this.programTracks),
    };
  },

  components: { MainTrack },
};
</script>

<style>
</style>