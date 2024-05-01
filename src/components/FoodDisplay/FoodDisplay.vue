<template>
  <div class="food-display" id="food-display">
    <h2>Top Dishes near you</h2>
    <div class="food-display-list">
      <FoodItem
        v-for="(item, index) in menuList"
        :key="index"
        :id="item.id"
        :name="item.name"
        :desc="item.description"
        :price="item.price"
        :image="item.image"
        :cartItems="cartItems"
        v-on:add-to-cart="addToCartHandler" v-on:remove-from-cart="removeFromCartHandler"
      ></FoodItem>
    </div>
  </div>
</template>
   
   <script>
import { food_list } from "../../assets/assets.js";
import FoodItem from "../FoodItem/FoodItem.vue";
import axios from 'axios';

export default {
  components: {
    FoodItem,
  },
  props: {
    category: Number,
  },
  watch:{
    category: function(newCategory, oldCategory) {
      // Call getItemsByCategory when the category prop changes
      this.getItemsByCategory(newCategory);
    }
  },
  


  mounted() {
    this.getItemsByCategory();
    console.log(this.category);
    // Initialize displayList when component is mounted
    
  },
  methods:{
    addToCartHandler(itemId) {
      // Check if the item is already in the cart
      if (itemId in this.cartItems) {
        // If yes, increase the quantity by 1
        this.cartItems[itemId]++;
      } else {
        // If no, add the item to the cart with quantity 1
        this.cartItems[itemId] = 1;
      }
      console.log('Add to cart:', itemId);
      console.log('Cart:', this.cartItems); // Log the updated cart items
    },
    removeFromCartHandler(itemId) {
      // Check if the item is in the cart
      if (itemId in this.cartItems) {
        // If yes, decrease the quantity by 1
        if (this.cartItems[itemId] > 1) {
          this.cartItems[itemId]--;
        } else {
          // If the quantity is 1, remove the item from the cart
          delete this.cartItems[itemId];
        }
        console.log('Remove from cart:', itemId);
        console.log('Cart:', this.cartItems); // Log the updated cart items
      }
    },
    async getItemsByCategory(categoryId) {
  try {
    const url = categoryId === 'all' ? 'http://127.0.0.1:8000/api/items/all' : `http://127.0.0.1:8000/api/items/${this.category}`;
    const response = await axios.get(url);
    console.log('Items for category', categoryId, ':', response.data);
    this.menuList = response.data; // Assuming you have a data property named 'items' to store the fetched items
    console.table(this.menuList);
  } catch (error) {
    console.error('Error fetching items:', error);
  }
},


  },
  computed: {
    filteredFoodList() {
      if (this.category === "All") {
        return food_list;
      } else {
        return food_list.filter((item) => item.category === this.category);
      }
    },
    
  },
  watch: {
    category:function () {
      this.getItemsByCategory(this.category);
      
    }
  },
  data() {
    return {
      menuList: [], // Store the display list here
      fullDesc: this.desc, // Store the full description for toggling
      limitedDesc: "", // Initially empty string for limited view
      maxLines: 2,
      cartItems: {} 
    };
  },
};
</script>
   
   <style scoped>
.food-display{
     margin-top: 30px;

}
.food-display h2{
     font-size: max(2vw,24px);
     font-weight: 600;
}
.food-display-list{
     display: grid;
     grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
     margin: 30px;
     gap: 30px;
     row-gap: 50px;
}

</style>
   