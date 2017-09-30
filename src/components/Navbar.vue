<template>
<div class="navbar">
	<div class="logo">
		<router-link
			:to="'/'">
			{{name}}
		</router-link>
	</div>
	<router-link
		v-for="routerLink in routerLinks"
		:key="routerLink.path"
		:to="routerLink.path"
		:class="{active: utils.stringIncludes($route.name, routerLink.label)}">
		{{routerLink.label}}
	</router-link>
</div>
</template>

<script>
import constants from '../constants'
import utils from '../utils'

export default {
	name: 'navbar',
	data() {
		return {
			name: constants.strings.name,
			utils,
			routerLinks: [
				{
					label: 'Pokemons',
					path: '/pokemons'
				}, {
					label: 'About',
					path: '/about'
				}
			]
		}
	},
	methods: {
		isRouterLinkActive(route, label) {
			return route.name.indexOf(label) > -1
		}
	}
}
</script>

<style scoped>
	.navbar {
		background-color: #242451;
		padding: 20px 50px;
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		top: 0;
	}

	.navbar a {
		text-decoration: none;
		color: white;
		margin: 0 15px;
	}

	.navbar a:hover {
		color: #e57089;
	}

	.navbar a.active, .navbar a.router-link-exact-active {
		color: #d8274d;
	}

	.navbar .logo {
		float: left;
		color: white;
		font-weight: bold;
		font-size: 1.2em;
		margin-right: 15px;
	}

	.navbar .logo a {
		margin-left: 0;
	}
</style>
