<template>
	<div class="pokemons">
		<loader v-if="isLoading"></loader>
		<div v-else>
			<input
				class="pokemon-input"
				placeholder="Pokemon Name"
				v-model="pokemonName"
			/>
			<action
				v-for="pokemon in filteredPokemons"
				:key="pokemon.num"
				:on-click="() => {goToPokemon(pokemon.id)}"
				:text="pokemon.num + ' ' + pokemon.name">
			</action>
		</div>
	</div>
</template>

<script>
import router from '../router'
import { api } from '../services/ApiService'
import utils from '../utils'
import Loader from './Loader'
import Action from './Action'

export default {
	name: 'pokemons',
	components: {
		Action,
		Loader
	},
	data() {
		return {
			pokemonName: '',
			isLoading: true,
			pokemons: []
		}
	},
	computed: {
		filteredPokemons: function() {
			return this.pokemons.filter(pokemon => utils.stringIncludes(pokemon.name, this.pokemonName));
		}
	},
	methods: {
		goToPokemon(id) {
			router.push({
				name: 'Pokemons/Pokemon',
				params: {
					id
				}
			});
		},
		loadPokemons() {
			api.allPokemons().then(pokemons => {
				this.pokemons = pokemons.data;
				this.isLoading = false;
			}, () => {
				this.isLoading = false;
			});
		}
	},
	beforeMount: function() {
		this.loadPokemons();
	}
}
</script>

<style scoped>
	.pokemon-input {
		padding: 15px 20px;
		background-color: white;
		border: 1px solid rgba(0, 0, 0, 0.5);
		margin-bottom: 15px;
		border-radius: 4px;
		width: 300px;
		font-size: 1em;
	}

	.pokemon-input:focus {
		outline: none;
	}
</style>
