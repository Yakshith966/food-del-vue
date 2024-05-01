<template>
  <div class="explore-menu" id="explore-menu">
    <h1>Explore our menu</h1>
    <p class="explore-menu-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est
      dolor facere quidem voluptatibus sed? Hic placeat inventore quos rem.
    </p>
    <div class="explore-menu-list">
      <div
        v-for="(item, index) in menuData"
        :key="index"
        @click="setCategory(item.id)"
        class="explore-menu-list-item"
      >
        <img
          :class="{ active: category === item.id }"
          :src="`${imgUrl}${item.image}`"
          alt=""
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <hr />
  </div>
</template>
   
   <script>
import { menu_list } from "../../assets/assets.js";
import axios from "axios";

export default {
  props: {
    category: Number,
  },
  data() {
    return {
      menu_list: menu_list,
      menuData: [],
      imgUrl: "http://127.0.0.1:8000/storage/category/",
    };
  },
  mounted() {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );
        console.log("Response:", response); // Log the entire response object
        this.menuData = response.data; // Assign the response data directly
        console.table(this.menuData); // Log the menu data
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    },
    setCategory(categoryId) {
      this.$emit("set-category", categoryId); // Pass the category ID or name
    },
  },
};
</script>
   
   <style scoped>
.explore-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.explore-menu h1 {
  color: #262626;
  font-weight: 500;
}
.explore-menu-text {
  max-width: 100%;
  color: #808080;
}
.explore-menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  text-align: center;
  margin: 20px 0px;
  overflow-x: scroll;
}
.explore-menu-list::-webkit-scrollbar {
  display: none;
}
.explore-menu-list-item img {
  width: 7.5vw;
  min-width: 80px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2;
}
.explore-menu-list-item p {
  margin-top: 10px;
  color: #747474;
  font-size: max(1.4vw, 16px);
  cursor: pointer;
}

.explore-menu hr {
  margin: 10px 0px;
  height: 2px;
  background-color: #e2e2e2;
  border: none;
}
.explore-menu-list-item .active {
  border: 4px solid tomato;
  padding: 2px;
}
@media (max-width: 1050px) {
  .explore-menu-list {
    max-width: 100%;
    font-size: 14px;
  }
}
@media (max-width: 1050px) {
  .explore-menu-list {
    max-width: 100%;
    font-size: 14px;
  }
}
</style>
   