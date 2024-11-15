<template>
  <div class="movieCard" @click="goToMovie(id)">
    <img :src="image" class="poster">
    <div clas="title">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '',
  },
  score : {
    type: Number,
    default: 2
  },
  id : {
    type: Number,
    default: 0
  }
})

const router = useRouter();

const goToMovie = () => {
  router.push(`/movie/${props.id}`);
};
</script>

<style scoped lang="scss">
  .movieCard {
    margin-top: 40px;
    margin-bottom:40px;
    cursor: pointer;

    img {
      height: 220px;
      width: 150px;
      border-radius: 6px;
    }
  }
</style>