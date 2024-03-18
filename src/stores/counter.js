import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  img1,
  img2,
  img3,
  img4,
} from "@/views/images";
export const useCounterStore = defineStore('counter',{
state:()=>({
  homeimg:true,
  aboutimg:false,
  contactimg:false,
  navlist:[
    {
      name:"Главная",
      photo:img1,
      path:""
    },
    {
      name:"Обо мне",
      photo:img2,
      path:"about"
    },
    {
      name:"Мои Работы",
      photo:img3,
      path:"myproject"
    },
    {
      name:"Контакты",
      photo:img4,
      path:"contact"
    }
  ],
  img:img1,
  idndex:0
}),

actions:{
  changeImage(image,i) {
    this.img = image.photo
    this.idndex = i
  }
},
persist: true,
});
