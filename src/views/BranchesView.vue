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

                    {
                      id: 1112,
                      name: "JavaScript",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11121",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11122",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11123",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11124",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11125",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11126",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1113,
                      name: "php-laravel",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11131",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11132",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11133",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11134",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11135",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11136",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1114,
                      name: "vuejs - reactjs",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11141",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11142",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11143",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11144",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11145",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11146",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: 112,
                  name: "dot Net",
                  subjects: [
                    {
                      id: 1121,
                      name: "C - C++ - C#",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11211",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11212",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11213",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11214",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11215",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11216",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1122,
                      name: "ASP .NET",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11221",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11222",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11223",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11224",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11225",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11226",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1123,
                      name: "Angular",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11231",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11232",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11233",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11234",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11235",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11236",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1124,
                      name: "Entity fram work",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11241",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11242",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11243",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11244",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11245",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11246",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              id: 12,
              name: "9 شهور",
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

                    {
                      id: 1112,
                      name: "JavaScript",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11121",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11122",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11123",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11124",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11125",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11126",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1113,
                      name: "php-laravel",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11131",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11132",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11133",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11134",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11135",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11136",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1114,
                      name: "vuejs - reactjs",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11141",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11142",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11143",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11144",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11145",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11146",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: 112,
                  name: "dot Net",
                  subjects: [
                    {
                      id: 1121,
                      name: "C - C++ - C#",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11211",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11212",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11213",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11214",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11215",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11216",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1122,
                      name: "ASP .NET",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11221",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11222",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11223",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11224",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11225",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11226",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1123,
                      name: "Angular",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11231",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11232",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11233",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11234",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11235",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11236",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1124,
                      name: "Entity fram work",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11241",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11242",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11243",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11244",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11245",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11246",
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

        {
          id: 2,
          title: "فرع المنصورة",
          programs: [
            {
              id: 21,
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

                    {
                      id: 1112,
                      name: "JavaScript",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11121",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11122",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11123",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11124",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11125",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11126",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1113,
                      name: "php-laravel",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11131",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11132",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11133",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11134",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11135",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11136",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1114,
                      name: "vuejs - reactjs",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11141",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11142",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11143",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11144",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11145",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11146",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: 112,
                  name: "dot Net",
                  subjects: [
                    {
                      id: 1121,
                      name: "C - C++ - C#",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11211",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11212",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11213",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11214",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11215",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11216",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1122,
                      name: "ASP .NET",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11221",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11222",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11223",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11224",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11225",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11226",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1123,
                      name: "Angular",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11231",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11232",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11233",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11234",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11235",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11236",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1124,
                      name: "Entity fram work",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11241",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11242",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11243",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11244",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11245",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11246",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              id: 22,
              name: "9 شهور",
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

                    {
                      id: 1112,
                      name: "JavaScript",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11121",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11122",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11123",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11124",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11125",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11126",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1113,
                      name: "php-laravel",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11131",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11132",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11133",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11134",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11135",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11136",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1114,
                      name: "vuejs - reactjs",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11141",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11142",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11143",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11144",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11145",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11146",
                          checkValue: "",
                        },
                      ],
                    },
                  ],
                },

                {
                  id: 112,
                  name: "dot Net",
                  subjects: [
                    {
                      id: 1121,
                      name: "C - C++ - C#",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11211",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11212",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11213",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11214",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11215",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11216",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1122,
                      name: "ASP .NET",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11221",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11222",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11223",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11224",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11225",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11226",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1123,
                      name: "Angular",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11231",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11232",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11233",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11234",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11235",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11236",
                          checkValue: "",
                        },
                      ],
                    },

                    {
                      id: 1124,
                      name: "Entity fram work",
                      questions: [
                        {
                          id: 1,
                          title: "حضور بانتظام",
                          check: "ques11241",
                          checkValue: "",
                        },
                        {
                          id: 2,
                          title: "تسليم تاسكات",
                          check: "ques11242",
                          checkValue: "",
                        },
                        {
                          id: 3,
                          title: "مشاركة فى المحاضرة",
                          check: "ques11243",
                          checkValue: "",
                        },
                        {
                          id: 4,
                          title: "العمل مع فريق",
                          check: "ques11244",
                          checkValue: "",
                        },
                        {
                          id: 5,
                          title: "تقيم مشروع ",
                          check: "ques11245",
                          checkValue: "",
                        },
                        {
                          id: 6,
                          title: "نجاح فى الامتحان",
                          check: "ques11246",
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