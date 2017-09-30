<template>
	<div class="action">
		<a @click="onClick()">{{text}}</a>
	</div>
</template>

<script>
export default {
	name: 'action',
	props: ['onClick', 'text']
}
</script>

<style scoped>
	.action {
		transition: all 500ms;
		text-decoration: none;
		margin: 5px 0;
	}

	.action a {
		text-decoration: none;
		cursor: pointer;
		color: black;
	}

	.action:hover {
		transform: translate(10px, 0);
	}

	.action:hover a {
		color: #40409e;
	}
</style>
