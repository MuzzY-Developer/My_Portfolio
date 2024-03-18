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
       <h3 class="header__container-title">Zikrillaev<br><span>Khamidulla</span> </h3>
    </div>
  

  </header>
</template>



<style>

</style>