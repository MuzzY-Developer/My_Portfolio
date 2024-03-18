<script setup>
import contact from '@/views/Contact'
</script>


<template>
   <div class="contactpages">
    <div class="contactpages__container">

        <a :href="item.path"  class="contactpages__container-card" v-for="item in contact" :key="item">
         <div class="contactpages__container-card-images" to="/">
            <img :src="item.img" alt="">
         </div>
         <p class="contactpages__container-card-text">{{ item.name }}</p>
      </a>

    </div>
   </div>
</template>



<style>

</style>