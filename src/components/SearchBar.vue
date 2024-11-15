<template>
  <div class="input-container">
    <input v-model="search" type="text" @focus="isFocused = true" @blur="isFocused = false" />
    <div class="placeholder">
      <BxSearch v-if="!isFocused" class="search-icon" />
      <div style="margin-left: 6px;">{{search || 'Rechercher'}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BxSearch } from '@kalimahapps/vue-icons';

const isFocused = ref(false);
const search = ref('');
</script>

<style scoped>
.input-container {
  position: relative;
  width: 45%;
}

.placeholder {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #c0c0c0;
  pointer-events: none;
}

input[type="text"] {
  width: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  background-color: #0b1125;
  border: none;
  color: transparent;
  text-align: center;
  border-radius: 5px;
}
</style>
