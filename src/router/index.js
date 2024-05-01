import { createRouter, createWebHistory } from 'vue-router'
import Sidebar from '../components/Sidebar/Sidebar.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/about',
			component:Sidebar
		},
	],
})

export default router