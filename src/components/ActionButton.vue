<template>
	<div class="action-button">
		<button class="button" @click="onClick">
			{{text}}
		</button>
	</div>
</template>

<script>
export default {
	name: 'action-button',
	props: ['onClick', 'text']
}
</script>

<style scoped>
	.action-button .button {
		cursor: pointer;
		box-shadow: none;
		border: 1px solid black;
		border-radius: 4px;
		padding: 6px 8px;
		min-width: 100px;
		font-size: 1em;
		transition: all 600ms;
		background-color: white;
		margin: 5px 0;
	}

	.action-button .button:hover {
		background-color: #242451;
		color: white;
		outline: none;
	}

	.action-button .button:focus {
		outline: none;
	}
</style>
