<template>
	<div>
		<div>Welcome to Vue.js Poekdex!</div>
		<div>You can get some data about the first 151 Pokemons</div>
		<action-button
			text="Get Started"
			:on-click="goToPokemons">
		</action-button>
	</div>
</template>

<script>
import router from '../router'
import ActionButton from './ActionButton'

export default {
	name: 'main',
	components: {
		ActionButton
	},
	methods: {
		goToPokemons() {
			router.push({
				name: 'Pokemons'
			});
		}
	}
}
</script>

<style scoped>
	.action-button {
		margin-top: 10px;
	}
</style>
