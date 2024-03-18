<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerlayout from '@/components/Layouts/Headerlayout.vue';
import mainlayout from '@/components/Layouts/Mainlayout.vue';
import footerlayout from '@/components/Layouts/Footerlayout.vue';
</script>

<template>
  <div class="wrapper">

   <headerlayout/>
   <mainlayout/>
   <footerlayout/>
    </div>

</template>

<style scoped>
.wrapper{
  min-height: 100dvh;
    display: flex;
    flex-direction: column;
  width:100%;
}
</style>
