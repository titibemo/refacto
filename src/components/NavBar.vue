<template>
  <div class="navbar-ctn">
    <router-link to="/" class="nav-button">
      <McMovieFill/>
      <div>Movies</div>
    </router-link>
    <router-link to="/ranking" class="nav-button">
      <FlFilledCrown/>
      <div>Ranking</div>
    </router-link>
    <router-link to="/find" class="nav-button">
      <AnFilledCompass/>
      <div>Find</div>
    </router-link>
    <router-link to="/profile" class="nav-button">
      <FaUser/>
      <div>Profile</div>
    </router-link>
  </div>
</template>

<script setup>
import { McMovieFill } from '@kalimahapps/vue-icons';
import { FlFilledCrown } from '@kalimahapps/vue-icons';
import { AnFilledCompass } from '@kalimahapps/vue-icons';
import { FaUser } from '@kalimahapps/vue-icons';
</script>

<style scoped  lang="scss">
  .navbar-ctn {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 10%;
    background-color: #29304e;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: .3s;

    .nav-button {
      font-size: 30px;
      color: #4F6B95;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      transition: .3s;

      &.router-link-active {
        color: #007AFF; 
        margin-bottom: 6px;
      }

      div {
        font-size: 12px;
        text-align: center;
        margin-top: 6px;
      }
    }
  }
</style>