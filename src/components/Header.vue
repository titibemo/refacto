<template>
  <div class="header-ctn">
    <div class="title">
      {{ title }}
    </div>
    <SearchBar/>
  </div>
</template>

<script setup>

import { defineProps } from 'vue'
import SearchBar from './SearchBar.vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Cine Factor'
  }
})

</script>

<style scoped>
.header-ctn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
}

.title {
  
  font-size: 2rem;
  font-weight: 900;
}
</style>