<template>
  <div class="my-3">
    <div
      v-on:click="showSub"
      class="row main-track d-flex justify-content-around"
    >
      <div class="col-2 my-4">المجال : {{ track.name }}</div>

      <div class="col-2 my-4">عدد االمواد : {{ subjects }}</div>

      <div class="col-2 my-4">تقيمات متاحة : {{ skills }}</div>

      <div class="col-1 my-4">متبقى : {{ remain }}</div>

      <div class="col-1 my-4">نقاط قوة : {{ getYes }}</div>

      <div class="col-1 my-4">نقاط ضعف : {{ getNo }}</div>

      <div class="col-1 my-4">اخرى : {{ getOthrers }}</div>
    </div>

    <div v-if="toggle" class="sub-level">
      <MainSubject
        v-for="subject in track.subjects"
        :key="subject.id"
        :subject="subject"
      />
    </div>
  </div>
</template>

<script>
import MainSubject from "./MainSubject.vue";

export default {
  name: "MainTrack",

  props: ["track"],

  components: { MainSubject },

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

  computed: {
    subjects() {
      return this.track.subjects.length;
    },

    skills() {
      return this.subjects * 6;
    },

    remain() {
      let sum = 0;
      this.track.subjects.forEach((element) => {
        sum += element.questions.filter(
          (item) => item.checkValue == ""
        ).length;
      });

      return sum;
    },

    getYes() {
      let sum = 0;
      this.track.subjects.forEach((element) => {
        sum += element.questions.filter(
          (item) => item.checkValue == "yes"
        ).length;
      });

      return sum;
    },

    getNo() {
      let sum = 0;
      this.track.subjects.forEach((element) => {
        sum += element.questions.filter(
          (item) => item.checkValue == "no"
        ).length;
      });

      return sum;
    },

    getOthrers() {
      let sum = 0;
      this.track.subjects.forEach((element) => {
        sum += element.questions.filter(
          (item) =>
            item.checkValue == "nuVisible" || item.checkValue == "hidden"
        ).length;
      });

      return sum;
    },
  },
};
</script>

<style scoped>
.main-track {
  background-color: aquamarine;
  font-weight: 700;
  font-size: 15px;
  box-shadow: 3px 3px #888888;
  border: 0.5px solid black;
  border-radius: 5px 5px;
  cursor: pointer;
}

.main-track div {
  padding: 0;
  text-align: center;
  vertical-align: middle;
}
</style>