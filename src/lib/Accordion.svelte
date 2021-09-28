<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from './Slide';

	export let buttonText: string;
	export let isOpen = false;
	export let duration = 500;

	const dispatch = createEventDispatcher();
</script>

<button on:click={() => (isOpen = !isOpen)}>
	<!-- https://unicode-table.com/en/25B2/ -->
	<span class:isOpen>▲</span>
	{buttonText}
</button>
<div class="accordion-content" use:slide={{ isOpen, dispatch, duration }}>
	<slot />
</div>

<style>
	button {
		display: flex;
		align-items: center;
		border: 0;
		width: 100%;
		text-align: left;
		border: solid 1px #333;
		margin: 0;
		font-size:1rem;
	}
	span {
		font-size: 1.5rem;
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.5turn);
		transition: transform 0.3s ease;
	}
	.isOpen {
		transform: rotate(0.25turn);
	}
	.accordion-content {
		border: solid 1px #333;
		border-top: 0;
		padding: 0.5rem 1rem 1rem;
	}
</style>
