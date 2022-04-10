import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage";
import Faq from "@/pages/Faq";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
