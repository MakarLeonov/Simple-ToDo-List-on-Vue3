import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/components/Main.vue";
import Done from "@/components/Done.vue";
import About from "@/components/About.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      path: '/main',
      component: Main,
      alias: '/'
    },
    {
      path: '/done',
      component: Done,
    },
    {
      path: '/about',
      component: About,
    }
  ]
})