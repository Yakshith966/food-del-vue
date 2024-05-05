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
import { mapActions,useStore } from 'vuex';
import { mapState } from 'vuex';
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
    ...mapActions(['addToCart', 'removeFromCart']),
    addToCartHandler(itemId) {
      console.log('emit',this.cartItems)
      this.addToCart(itemId); // Dispatch addToCart action to Vuex store
    },
    removeFromCartHandler(itemId) {
      this.removeFromCart(itemId); // Dispatch removeFromCart action to Vuex store
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
    ...mapState({
      cartItems: state => state.getCartItems // Access the getter using mapState
    })
    
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
   