<template>
  <Header v-if="showHeader" :title="title"/>
  <BxArrowBack v-if="!showHeader" class="backArrow"/>
  <router-view/>
  <NavBar/>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { BxArrowBack } from '@kalimahapps/vue-icons';
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue'
const route = useRoute()
const title = computed(() => route.meta.title || 'Default Title')
const showHeader = computed(() => route.name !== 'movieDetail')
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  padding: 0 0px;
  background-color: #1b213b;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  color: white;
}

.backArrow {
  font-size: 45px;
  margin: 10px;
  position: absolute;
  z-index: 5;
  background-color: rgba(3, 19, 34, 0.712);
  border-radius: 50%;
  padding: 6px;
}
</style>
