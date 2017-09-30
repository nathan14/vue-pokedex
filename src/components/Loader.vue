<template>
	<div class="loader">
		<div class="load-bar">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loading'
}
</script>

<style scoped>
	.loader {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.load-bar {
		position: relative;
		margin-top: 20px;
		width: 100%;
		height: 6px;
		background-color: #fdba2c;
	}

	.bar {
		content: "";
		display: inline;
		position: absolute;
		width: 0;
		height: 100%;
		left: 50%;
		text-align: center;
	}
	.bar:nth-child(1) {
		background-color: #da4733;
		animation: loading 1.5s linear infinite;
	}

	.bar:nth-child(2) {
		background-color: #242451;
		animation: loading 1.5s linear 0.5s infinite;
	}

	.bar:nth-child(3) {
		background-color: #e57089;
		animation: loading 1.5s linear 1s infinite;
	}

	@keyframes loading {
		from {left: 50%; width: 0;z-index:100;}
		33.3333% {left: 0; width: 100%;z-index: 10;}
		to {left: 0; width: 100%;}
	}
</style>
