<script>
import Navbar from '../components/Navbar.vue';
import Header from '../components/Header/Header.vue';
import ExploreMenuVue from '../components/ExploreMenu/ExploreMenu.vue';
import FoodDisplay from '../components/FoodDisplay/FoodDisplay.vue';
import AppDownloadVue from '../components/AppDownload/AppDownload.vue';
import FooterVue from '../components/Footer/Footer.vue';

export default {
  components:{
     Navbar,
     Header,
     ExploreMenuVue,
     FoodDisplay,
     AppDownloadVue,
     FooterVue
  },
  methods: {
    handleCategoryChange(categoryId) {
      // Handle category selection here (e.g., update state or fetch data)
      this.category=categoryId;
      console.log(this.category);
    },
    

   
  },
	data() {
	  return {
      category:'all',
      
	  }
	}
   }
</script>


<template>
     <Navbar />
     <Header />
     <ExploreMenuVue :category="category" v-on:set-category="handleCategoryChange" />
     <FoodDisplay :category="category" />
     <AppDownloadVue/>
     <FooterVue/>
       
     </template>