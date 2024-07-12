import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/home/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "Portfolio accueil"
    }
  ]
});

export default router;
