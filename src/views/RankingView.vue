<template>
  <div class="RankingView">
    <RankingCard
      v-for="card, id in popularMovies"
      :image="card.image"
      :title="card.title"
      :score="card.rank"
      :director="card.director"
      :country="card.country"
      :index="id"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RankingCard from '@/components/RankingView/RankingCard.vue';

const popularMovies = ref([]);

onMounted(() => {
  fetch('datas/toprated.json')
    .then(response => response.json())
    .then(data => {
      popularMovies.value = data.popular;
    })
    .catch(error => console.error('Erreur lors du chargement du JSON:', error));
});
</script>

<style scoped>
  .RankingView {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;
    padding-top: 40px;
  }
</style>