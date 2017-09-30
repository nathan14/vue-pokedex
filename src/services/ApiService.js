import axios from 'axios'
import data from './pokemons'

class ApiService {
	constructor () {
		this.data = data.pokemon;
	}

	sendResponse(response) {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(response);
			}, 1000);

			if (!response) reject();
		});

		return promise;	
	}

	allPokemons() {
		return this.sendResponse({
			data: this.data
		});
	}

	pokemon(id) {
		return this.sendResponse({
			data: this.data[id - 1]
		});
	}
}

export let api = new ApiService();
