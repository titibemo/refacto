<template>

  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="[EffectCoverflow, Pagination, Autoplay]"
    class="mySwiper"
  >
  <div class="glow1"></div>
  <div class="glow2"></div>
  <div class="glow3"></div>

    <swiper-slide>
      <img src="../../assets/wc.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/wb.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/wd.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/we.jpg" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
</script>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.glow1 {
  position: absolute;
  background: radial-gradient(rgba(143, 144, 228, 0.3),transparent,transparent);
  width: 170px;
  height: 150px;
  bottom: 0px;
  left: 3%;
}
.glow2 {
  position: absolute;
  background: radial-gradient(rgba(143, 144, 228, 0.4),transparent,transparent);
  width: 120px;
  height: 120px;
  bottom: 14px;
  left: 29%;
}

.glow3 {
  position: absolute;
  background: radial-gradient(rgba(143, 144, 228, 0.3),transparent,transparent);
  width: 130px;
  height: 130px;
  bottom: 7px;
  left: 57%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 290px;
  height: 190px;
  border-radius: 18px;
}

.swiper-slide img {
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

::v-deep .swiper-pagination-bullet {
  width: 25px;
  margin: 0 15px;
  height: 5px;
  border-radius: 2px; /* Carré */
  background: #8cafbd;
  opacity: 0.6;
  transition: opacity 0.3s;
}

::v-deep .swiper-pagination-bullet-active {
  opacity: 1;
  background: #007AFF;
  box-shadow: 0px 0px 11px 1px rgba(0,122,255,1);
}

</style>
