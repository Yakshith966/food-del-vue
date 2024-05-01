<template>
	<div>
	  <!-- Display menu items -->
	  <div v-for="menuItem in menu_list" :key="menuItem.menu_name">
	    <img :src="menuItem.menu_image" alt="Menu Image">
	    <p>{{ menuItem.menu_name }}</p>
	  </div>
	  
	  <!-- Display food items -->
	  <div v-for="foodItem in food_list" :key="foodItem._id">
	    <img :src="foodItem.image" alt="Food Image">
	    <p>{{ foodItem.name }}</p>
	    <p>{{ foodItem.price }}</p>
	    <p>{{ foodItem.description }}</p>
	    <p>{{ foodItem.category }}</p>
	  </div>
	</div>
   </template>
   
   <script>
   import { menu_list, food_list } from '../assets/assets.js';
   
   export default {
	data() {
	  return {
	    menu_list,
	    food_list
	  }
	}
   }
   </script>
   