<template>
	<div class="pokemon">
		<loader v-if="isLoading"></loader>
		<div v-if="notFoundError">
			Not Found
		</div>
		<div v-if="!isLoading && !notFoundError">
			<h1 class="title">
				{{title}}
				<!-- Sing Button if this Jigglypuff -->
				<action-button
					class="sing"
					v-if="parseInt(pokemon.num) === 39"
					:text="isSinging ? 'Stop' : 'Sing!'"
					:on-click="toggleIsSinging">
				</action-button>
			</h1>
			<h4>
				<div class="type">
					Types [
					<span
						v-for="type in pokemon.type">
						{{type}}
					</span>
					]
				</div>
				<div class="weakness">
					Weaknesses [
					<span
						v-for="weakness in pokemon.weaknesses">
						{{weakness}}
					</span>
					]
				</div>
			</h4>
			<action
				v-for="evolution in pokemon.prev_evolution"
				:key="evolution.num"
				:on-click="() => {goToPokemon(parseInt(evolution.num))}"
				:text="'Evolves from ' + evolution.name">
			</action>
			<action
				v-for="evolution in pokemon.next_evolution"
				:key="evolution.num"
				:on-click="() => {goToPokemon(parseInt(evolution.num))}"
				:text="'Evolves to ' + evolution.name">
			</action>
			<img
				class="pokemon-image"
				v-bind:src="pokemon.img"
			/>
			<action :on-click="prevPokemon" text="Previous Pokemon"></action>
			<action :on-click="nextPokemon" text="Next Pokemon"></action>
			<audio
				v-if="isSinging"
				v-bind:src="song"
				autoplay="trye"
			/>
		</div>
	</div>
</template>

<script>
import router from '../router'
import { api } from '../services/ApiService'
import Loader from './Loader'
import Action from './Action'
import ActionButton from './ActionButton'

export default {
	name: 'pokemon',
	components: {
		Action,
		ActionButton,
		Loader
	},
	data() {
		return {
			notFoundError: false,
			pokemonId: this.$route.params.id,
			pokemon: {},
			isLoading: true,
			isSinging: false
		}
	},
	computed: {
		title() {
			return '#' + this.$route.params.id + ' ' + this.pokemon.name;
		},
		song() {
			return require('../assets/JigglypuffSong.mp3');
		}
	},
	methods: {
		nextPokemon() {
			this.goToPokemon(parseInt(++this.pokemon.num));
		},
		prevPokemon() {
			this.goToPokemon(parseInt(--this.pokemon.num));
		},
		goToPokemon(id) {
			router.push({
				name: 'Pokemons/Pokemon',
				params: {
					id
				}
			});
		},
		loadImage(src) {
			const image = new Image();

			image.src = src;

			image.onload = () => {
				this.isLoading = false;
			}

			image.onerror = () => {
				this.isLoading = false;
			}
		},
		loadPokemon() {
			const asyncLoad = async () => {
				const pokemon = await api.pokemon(this.pokemonId);
				if (pokemon.data) this.pokemon = pokemon.data
				else this.notFoundError = true;

				this.loadImage(pokemon.data.img);
			}

			asyncLoad();
		},
		keyBind(event) {
			const options = {
				'37': () => { this.goToPokemon(--this.pokemon.num) },
				'39': () => { this.goToPokemon(++this.pokemon.num) }
			};

			if (options[event.keyCode]) options[event.keyCode]();
		},
		toggleIsSinging() {
			this.isSinging = !this.isSinging;
		}
	},
	beforeMount: function() {
		this.loadPokemon();
		document.addEventListener('keydown', this.keyBind);
	},
	beforeDestroy: function() {
		document.removeEventListener('keydown', this.keyBind);
	}
}
</script>

<style scoped>
	.title {
		margin: 0;
		display: flex;
		align-items: center;
		text-transform: capitalize;
	}

	.title .action-button {
		display: inline;
		font-size: 0.5em;
		margin-left: 15px;
	}

	.pokemon {
		position: relative;
	}

	.pokemon-image {
		padding: 30px 0;
	}
</style>
