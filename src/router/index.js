import { createWebHistory, createRouter } from "vue-router"
import LoginPage from "../pages/login/LoginPage.vue"
import LandingPage from "../pages/landing/LandingPage.vue"

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;