<script setup>
import datafiles from '@/views/DataFiles'
</script>


<template>
    <div class="myprojectpages">
        <div class="myprojectpages__container">
                    <h3 class="myprojectpages__container-title">МОИ РАБОТЫ</h3>
            <div class="myprojectpages__container__cards">

                <a :href="item.path" class="myprojectpages__container__cards-card" v-for=" item in datafiles" :key="item">
                      <video class="myprojectpages__container__cards-card-movie" :src="item.movie" autoplay loop muted></video>
                      <h4 class="myprojectpages__container__cards-card-title">{{item.name}}</h4>
                      <p  :class="item.class">{{item.tegs}}</p>
                </a>

            </div>
        </div>
    </div>
</template>


<style>

</style>