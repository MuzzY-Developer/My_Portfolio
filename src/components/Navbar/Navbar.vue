<script setup>
import { useCounterStore } from '@/stores/counter';
const Counter = useCounterStore()
</script>


<template>
   <nav class="nav">
      <div class="nav__container">
          <ul >
            <li v-for="(item,index) in Counter.navlist" :key="item">
               <RouterLink :to="'/'+item.path" @click="Counter.changeImage(item,index)" >{{item.name}}</RouterLink></li>
        
          </ul>
      </div>
   </nav>
   <!-- <li><RouterLink to="/text">Мои Работы</RouterLink></li>
            <li><RouterLink to="/texte2">Контакты</RouterLink></li> -->
</template>



<style>

</style>