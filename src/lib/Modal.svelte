<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Portal from './Portal.svelte';

	export let isModalOpen = true;
	export let closeModal: () => void;
</script>

{#if isModalOpen}
	<Portal>
		<div class="modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
			<button on:click={closeModal} aria-label="close modal button" class="close-button"
				>Close</button
			>
			<div class="content-wrapper">
				<slot />
			</div>
		</div>
		<div on:click={closeModal} transition:fade class="background-modal" />
	</Portal>
{/if}

<style>
	.modal-wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 0.5rem 0;
		z-index: 100;
		width: 100%;
		height: fit-content;
		min-width: 320px;
		max-width: 530px;
		margin: auto auto;
		inset: 100px 0 0;
		background-color: #fff;
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
	}
	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.close-button {
		display: inline-block;
		align-self: end;
	}
	.background-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(5, 5, 5, 0.623);
		z-index: 1;
		cursor: pointer;
		inset: 0;
	}
</style>
