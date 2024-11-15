<template>
  <div class="card">
    <div class="king">
      <img src="../../assets/king.png" alt="" class="crown">
      <div class="rank">{{ index + 1 }}</div>
    </div>
    <div class="image">
      <img :src="image" alt="" class="cover">
    </div>
    <div class="content">
      <div class="title">{{ title }}</div>
      <star-rating
        :rating="score"
        star-size="20"
        increment="0.5"
        :show-rating="false"
      />
      <div class="infos">Director : {{ director }}</div>
      <div class="infos">Country: {{ country }}</div>

    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import StarRating from 'vue-star-rating';

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
  index: {
    type: Number,
    default: 0
  },
  country: {
    type: String,
    default: ''
  },
  director: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
  .card {
    width: 90%;
    background-color: #253058;
    border-radius: 6px;
    height: 130px;
    margin-bottom: 20px;
    margin-top: 100px;
    position: relative;

    .king {
      position: absolute;
      height: 45px;
      top:-45px;
      right: 20px;

      .crown {
        height: 100%;
      }
      .rank {
        position: absolute;
        top: 50%;
        left: 42%;
        height: 100%;
        width: 100%;
        font-size: 20px;
        font-weight: 900;
        color: rgb(255, 255, 255);
      }
    }
    .cover {
      height: 200px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      border-radius: 6px;
      box-shadow: 0px 8px 8px -4px rgba(0,0,0,0.65);
    }
    .content {
      padding-left: 50%;
      padding-top: 10px;

      .title {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 5px;
      }

      .infos {
        font-size: 14px;
        margin: 5px 0;
        color: #7f8bb6;
      }
    }
  }

</style>