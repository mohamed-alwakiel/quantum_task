import { createRouter, createWebHistory } from "vue-router";

import BranchesView from "@/views/BranchesView";
import ProgramDetails from "@/views/ProgramDetails";

const routes = [
  {
    path: "/",
    name: "BranchesView",
    component: BranchesView,
  },
  {
    path: "/field-details/:programTracks",
    name: "ProgramDetails",
    props: true,
    component: ProgramDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
