<template>
  <div class="home">
    <MenuSlider/>
    <SlideShow style="margin-bottom: 30px;"></SlideShow>
    <CategorySlider/>
    <Popular />
    <ComingSoon />
    <TopRated />
  </div>
</template>

<script setup>
import MenuSlider from '@/components/MovieView/MenuSlider.vue';
import SlideShow from '@/components/MovieView/SlideShow.vue';
import CategorySlider from '@/components/MovieView/CategorySlider.vue';
import Popular from '@/components/MovieView/Popular.vue';
import ComingSoon from '@/components/MovieView/ComingSoon.vue';
import TopRated from '@/components/MovieView/TopRated.vue';
</script>

<style scoped>
  .home {
    padding-bottom: 70px;
  }
</style>