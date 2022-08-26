<template>
  <div class="container mt-5">
    <MainBranch v-for="branch in branches" :key="branch.id" :branch="branch" />
  </div>
</template>

<script>
import MainBranch from "@/components/MainBranch.vue";
export default {
  name: "BranchesView",
  components: { MainBranch },
  data() {
    return {
      branches: [
        {
          id: 1,
          title: "فرع القاهرة",
          programs: [
            {
              id: 11,
              name: "3 شهور",
              tracks: [
                {
                  id: 111,
                  name: "open source",
                  subjects: [
                    {
                      id: 1111,
                      name: "html5-css3",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11111",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11112",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11113",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11114",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11115",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11116",
                          checkValue: "",
                        },
                      ],
                    },

                

                  ],
                },

                

              ],
            },
            
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>