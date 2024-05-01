<template>
     <div class="food-item">
       <div class="food-item-image-container">
         <img :src="`${imgUrl}${image}`" class="food-item-image" :alt="name" />
         <!-- <button @click="addToCart" >Add to Cart</button> -->
         <img
           class="add"
           v-if="!cartItems[this.id]"
           :src="assets.add_icon_white"
           @click="addToCart(this.id)"
           alt="Add to Cart"
         />
         <div class="food-item-counter" v-else>
           <img
             :src="assets.remove_icon_red"
             @click="removeFromCart(this.id)"
             alt="Remove from Cart"
           />
           <span>{{ cartItems[this.id] }}</span>
           <img
             :src="assets.add_icon_green"
             @click="addToCart(this.id)"
             alt="Add to Cart"
           />
         </div>
       </div>
       <div class="food-item-info">
         <div class="food-item-name-rating">
           <p>{{ name }}</p>
           <img :src="assets.rating_starts" alt="" />
           <!-- Add your rating stars component here -->
         </div>
         <p class="food-item-description">{{ desc }}</p>
         <p class="food-item-price">${{ price }}</p>
       </div>
     </div>
   </template>
      
      <script>
   import { assets } from "../../assets/assets.js";
   export default {
     props: {
       id: String,
       name: String,
       desc: String, // Include description in props
       price: Number,
       image: String,
       cartItems: Object, // Define cartItems as a prop
     },
     data() {
       return {
         assets,
         imgUrl:'http://127.0.0.1:8000/storage/items/',
         
       };
     },
     computed: {
       isInCart() {
         return this.cartItemCount > 0;
       },
       cartItemCount() {
         // Assuming you have access to the cart data here
         // Implement your logic to get the count of this item in the cart
         // For demonstration purposes, I'll return a hardcoded value
         return 0; // Replace this with your actual logic
       },
     },
     mounted() {
       console.log('hii',this.name);
     },
     methods: {
       addToCart(id) {
         // Implement your logic to add this item to the cart
         // For demonstration purposes, I'll emit an event
         this.$emit("add-to-cart", id);
       },
       removeFromCart(id) {
         // Implement your logic to remove this item from the cart
         // For demonstration purposes, I'll emit an event
         this.$emit("remove-from-cart", id);
       },
     },
   };
   </script>
      
      <style scoped>
   .food-item {
     width: 100%;
     margin: auto;
     border-radius: 15px;
     box-shadow: 0px 0px 10px #00000015;
     transition: 0.3s;
     animation: fadeIn 1s;
   }
   .food-item-image {
     width: 100%;
     border-radius: 15px 15px 0px 0px;
   }
   
   .food-item-info {
     padding: 20px;
   }
   .food-item-name-rating {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 10px;
   }
   .food-item-name-rating p {
     font-size: 20px;
     font-weight: 500;
   }
   .food-item-name-rating img {
     width: 70px;
   }
   
   .food-item-description {
     color: #676767;
     font-size: 12px;
   }
   .food-item-price {
     color: tomato;
     font-weight: 500;
     margin: 10px 0;
   }
   
   .food-item-image-container {
     position: relative;
   }
   .food-item-image-container .add {
     width: 35px;
     position: absolute;
     bottom: 15px;
     right: 15px;
     cursor: pointer;
     border-radius: 50%;
   }
   .food-item-counter {
     position: absolute;
     bottom: 15px;
     right: 15px;
     display: flex;
     align-items: center;
     gap: 10px;
     padding: 6px;
     border-radius: 50px;
     background-color: white;
   }
   .food-item-counter img {
     width: 30px;
   }
   </style>
      