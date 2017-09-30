<template>
	<div id="app">
		<navbar></navbar>
		<div class="router-container">
			<router-view :key="$route.fullPath"></router-view>
		</div>
	</div>
</template>

<script>
	import Navbar from './components/Navbar'

	export default {
		name: 'app',
		components: {
			Navbar
		}
	}
</script>

<style>
	body {
		margin: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	.router-container {
		padding: 30px 50px;
		margin-top: 60px;
	}
</style>
