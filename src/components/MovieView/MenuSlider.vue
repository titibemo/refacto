<template>
  <div class="slider-container">
    <div class="slider" ref="slider">
      <button v-for="(button, index) in buttons" :key="index" class="slider-button">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const buttons = ['Recommended', 'Action', 'Science-Fiction', 'Horror', 'Comedy', 'Drama'];
const slider = ref(null);
</script>

<style scoped>
.slider-container {
  padding: 0 16px;
  display: flex;
  justify-content: center;
}

.slider {
  display: flex;
  gap: 16px;
  overflow-x: auto;
}

.slider-button {
  padding: 10px 20px;
  background-color: #29304e;
  color: #95a8c5;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap; 
}
</style>