<script>
import "./null.css"
import App from "./App.vue";
import router from "./router";
import Under from './components/Under.vue';
import Footer from './components/footer.vue'

export default {
  components: { Under , Footer },
  name: 'App',
};
</script>
<template>
  <div id="app">
    <under />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>
<style>

#app {
  max-width: 1170px;
  margin: auto;
  padding: 30px;
  margin-bottom: 100px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
