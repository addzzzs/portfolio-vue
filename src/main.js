import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "notyf/notyf.min.css";
import ProjectView from "./pages/ProjectView.vue";
import Home from "./pages/Home.vue";
import "./assets/main.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/project/:id",
      name: "ProjectView",
      component: ProjectView,
    },
  ],
});
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
