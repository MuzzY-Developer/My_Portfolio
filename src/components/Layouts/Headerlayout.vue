<script setup>
import navbar from "../Navbar/Navbar.vue";
import { useCounterStore } from "@/stores/counter";
const Counter = useCounterStore()
</script>


<template>
  <header class="header">
    <img class="header__banner"   :src="Counter.img" alt="">
    <div class="header__container">
        <navbar/>
        <div class="logo">
          <div class="logo__name">
          <h1 class="logo__name-text">Zikrillaev</h1>
          </div>
          <div class="logo__title">
          <h1 class="logo__title-text">Khamidulla</h1>
          </div>
        </div>
       
    </div>
  

  </header>
</template>



<style>

</style>