<template>
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
</template>

<script>
export default {
  props: ["subject"],

  name: "SubjectEvaluation",

  computed: {
  },
};
</script>

<style scoped>
</style>