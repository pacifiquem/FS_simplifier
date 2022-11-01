import { createRouter, createWebHistory } from "vue-router";
// import homeVue from "@/views/home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: homeVue,
    // },
    // {
    //   // component: () => import('../views/AboutView.vue')
    // },
  ],
});

export default router;
