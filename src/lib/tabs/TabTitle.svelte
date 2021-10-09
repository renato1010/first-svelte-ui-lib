<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	const dispatch = createEventDispatcher<{ 'tab-change': { tabTitle: string } }>();
</script>

<li>
	<button
		on:click={() =>
			dispatch('tab-change', {
				tabTitle: title
			})}>{title}</button
	>
</li>

<style>
	li {
		display: inline-block;
		margin-left: 1rem;
	}
	li > button {
		text-transform: capitalize;
		padding: 1rem;
		border-radius: 5px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		border-bottom-color: transparent;
		margin-bottom: -1px;
		cursor: pointer;
		background-color: var(--backgroundColor);
	}
</style>
