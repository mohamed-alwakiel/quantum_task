<template>
  <div class="mb-3">
    <div
      v-on:click="showSub"
      class="row main-subject d-flex justify-content-around"
    >
      <div class="col-2 my-4">المادة : {{ subject.name }}</div>

      <div class="col-2 my-4">تقيمات متاحة : {{ subjects }}</div>

      <div class="col my-4">متبقى : {{ remain }}</div>

      <div class="col my-4">نقاط قوة : {{ getYes }}</div>

      <div class="col my-4">نقاط ضعف : {{ getNo }}</div>

      <div class="col my-4">اخرى : {{ getOther }}</div>
    </div>

    <div v-if="toggle" class="pt-3">
      <table class="table table table-striped text-center table-bordered">
        <thead class="thead fs-5">
          <tr>
            <th>المسلسل</th>
            <th>التقيم</th>
            <th>نعم</th>
            <th>لا</th>
            <th>غير قابل للظهور</th>
            <th>غير واضح</th>
          </tr>
        </thead>

        <tbody class="fw-bold">
          <tr v-for="question in subject.questions" :key="question.id">
            <td>{{ question.id }}</td>
            <td>{{ question.title }}</td>

            <td>
              <div>
                <input
                  type="radio"
                  :name="question.check"
                  v-model="question.checkValue"
                  value="yes"
                />
              </div>
            </td>

            <td>
              <div>
                <input
                  type="radio"
                  :name="question.check"
                  v-model="question.checkValue"
                  value="no"
                />
              </div>
            </td>

            <td>
              <div>
                <input
                  type="radio"
                  :name="question.check"
                  v-model="question.checkValue"
                  value="nuVisible"
                />
              </div>
            </td>

            <td>
              <div>
                <input
                  type="radio"
                  :name="question.check"
                  v-model="question.checkValue"
                  value="hidden"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <SubjectEvaluation /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["subject"],

  name: "MainSubject",

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
      return this.subject.questions.length;
    },

    remain() {
      return this.subject.questions.filter((item) => item.checkValue == "").length;
    },

    getYes() {
      return this.subject.questions.filter((item) => item.checkValue == "yes").length;
    },

    getNo() {
      return this.subject.questions.filter((item) => item.checkValue == "no").length;
    },

    getOther() {
      return this.subject.questions.filter(
        (item) => item.checkValue == "nuVisible" || item.checkValue == "hidden"
      ).length;
    },
  },
};
</script>

<style scoped>
.main-subject {
  background-color: aliceblue;
  font-weight: 700;
  box-shadow: 3px 3px #888888;
  border: 0.5px solid black;
  border-radius: 5px 5px;
  font-size: 14px;
  cursor: pointer;
}

.main-subject div {
  padding: 0;
  text-align: center;
  vertical-align: middle;
}
</style>