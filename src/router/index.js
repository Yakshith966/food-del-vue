import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import ItemView from '../components/ItemView/ItemView.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [

		{
			path: '/',
			component:Home
		},
		{
			path: '/add-item/:id', // Define a route parameter ':id' to capture the itemId
                name: 'add-item',
			component:ItemView,
			props: (route) => ({
				id: route.params.id, // Pass the 'id' route parameter as a prop
				cartItems: route.params.cartItems, // Pass the 'cartItems' from Vuex store as a prop
			   }),
		}
	],
})

export default router