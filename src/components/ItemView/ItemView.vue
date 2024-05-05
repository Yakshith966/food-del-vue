<template>
     <Navbar />
     <div class="main">
     <section class="product" >
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				<div class="controls">
					<i class="material-icons">share</i>
					<i class="material-icons">favorite_border</i>
				</div>
				<img :src="`${imgUrl}${itemData.image}`"  alt="green apple slice">
			</div>
		</div>
	</div>
	<div class="product__info" >
		<div class="title">
			<h1>{{ itemData.name }}</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			R$ <span>{{ itemData.price }}</span>
		</div>
		<div class="description">
			<h3>Description</h3>
			<ul>
				<li>{{ itemData.description }}</li>
				
			</ul>
		</div>
		<button class="buy--btn">ADD TO CART</button>
	</div>
</section>
</div>
</template>
<script>
import Navbar from '../Navbar.vue';
import axios from 'axios';
export default {
     props:{
          id: null,
          cartItems:Object

     },
     components:{
          Navbar
     },
     data(){
          return{
               itemData:[],
               colorPrimary: '#4c4c4c',
      colorSecondary: '#a6a6a6',
      colorHighlight: '#ff3f40',
      imgUrl:'http://127.0.0.1:8000/storage/items/',
          }
     },
     mounted(){
          console.log('Item ID:', this.$route.params.id);
              this.fetchItems(this.id)
              console.log(cartItems)
     },
     methods:{
          async fetchItems(id){
               try{
                const response=await axios.get(`http://127.0.0.1:8000/api/getItem/${id}`)
                this.itemData=response.data;
                console.table(this.itemData)

               }
               catch(error){
                    console.log(error)
               }

          }
     }
}
</script>

<style scoped>

html,
.main {
	height: 100%;
}

.main {
	display: grid;
     margin-top: 20px;
	grid-template-rows: 1fr;
	font-family: "Raleway", sans-serif;
	background-color:rgb(220,111,29);
}

h3 {
	font-size: 0.7em;
	letter-spacing: 1.2px;
	color: var(--color-secondary);
}

img {
			max-width: 100%;
			filter: drop-shadow(1px 1px 3px var(--color-secondary));
		}

/* ----- Product Section ----- */
.product {
     
	display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: 2% auto;
	padding: 2.5em 0;
	min-width: 600px;
	background-color: white;
	border-radius: 5px;
}

/* ----- Photo Section ----- */
.product__photo {
	position: relative;
}

.photo-container {
	position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 0 0;
  background:rgb(220,111,29); /* Use either background or background-color, not both */
  background: rgb(220,111,29);
}

.photo-main .controls {
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
}

.photo-main .controls i {
  cursor: pointer;
}

.photo-main img {
  position: absolute;
  left: 5.5em;
  top: 8em;
  max-width: 110%;
  filter: saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
}


.photo-album {
	padding: 0.7em 1em;
	border-radius: 0 0 6px 6px;
	background-color: #fff;

}
.photo-album ul {
		display: flex;
		justify-content: space-around;
	}
     .photo-album li {
		float: left;
		width: 55px;
		height: 55px;
		padding: 7px;
		border: 1px solid var(--color-secondary);
		border-radius: 3px;
	}

/* ----- Informations Section ----- */
.product__info {
	padding: 0.8em 0;
}

.title h1 {
		margin-bottom: 0.1em;
		color: var(--color-primary);
		font-size: 1.5em;
		font-weight: 900;
	}

	
	.title span {
		font-size: 0.7em;
		color:  var(--color-secondary);
     }
	


.price {
	margin: 1.5em 0;
	color: var(--color-highlight);
	font-size: 1.2em;

	
}
.price span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}

.variant {
	overflow: auto;

	

	
	
}
.variant h3 {
  margin-bottom: 1.1em;
}

.variant li:not(:first-child) {
  margin-left: 0.1em;
}

.variant li {
  float: left;
  width: 35px;
  height: 35px;
  padding: 3px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
}

.variant li:first-child,
.variant li:hover {
  border: 1px solid var(--color-secondary);
}


/* Description Section */
.description {
  clear: left;
  margin: 2em 0;
}

.description h3 {
  margin-bottom: 1em;
}

.description ul {
  font-size: 0.8em;
  list-style: disc;
  margin-left: 1em;
}

.description li {
  text-indent: -0.6em;
  margin-bottom: 0.5em;
  overflow-wrap: break-word;
  max-width: 400px;

}


/* Buy Button */
.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #f2ebeb;
  background-color: var(--color-highlight);
  box-shadow: 2px 2px 25px -7px var(--color-primary);
  cursor: pointer;
}

.buy--btn:active {
  transform: scale(0.97);
}


/* Footer Section */
footer {
  padding: 1em;
  text-align: center;
  color: #fff;
}

footer a {
  color: var(--color-primary);
}

footer a:hover {
  color: var(--color-highlight);
}

</style>