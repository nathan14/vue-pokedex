import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Pokemons from '@/components/Pokemons'
import Pokemon from '@/components/Pokemon'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		}, {
			path: '/about',
			name: 'About',
			component: About
		}, {
			path: '/pokemons',
			name: 'Pokemons',
			component: Pokemons
		}, {
			path: '/pokemons/:id',
			name: 'Pokemons/Pokemon',
			component: Pokemon
		}
	]
})
