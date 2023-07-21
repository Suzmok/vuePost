import { createRouter, createWebHashHistory } from "vue-router";
import Posts from "./components/Posts.vue";
import Moreinfo from "./components/Moreinfo.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Posts },
    { path: "/moreinfo/:id", component: Moreinfo },
  ],
});
