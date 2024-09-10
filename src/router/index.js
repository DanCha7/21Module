import { createRouter , createWebHistory } from "vue-router";
import MainPage from "/src/pages/MainPage.vue"
import AboutPage from "/src/pages/AboutPage.vue"
import ChannelPage from "/src/pages/ChannelPage.vue"

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: MainPage
    }, {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/channel',
        name: 'ChannelPage',
        component: ChannelPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes 
  });
  
  export default router;