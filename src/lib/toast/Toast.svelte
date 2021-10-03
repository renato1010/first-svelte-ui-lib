<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '../Portal.svelte';
	import { toast, ToastOptions } from './toast';
	import ToastMessage from './ToastMessage.svelte';

	export let options: ToastOptions;
	const { standalone, duration } = options;
</script>

<Portal>
	<div class="toast-wrapper">
		<!-- if standalone option show only the last item in toast collection -->
		{#if standalone}
			{#if $toast.length}
				<div
					on:click={() => toast.remove($toast[$toast.length - 1].id)}
					out:fade
					in:fly={{ opacity: 0, x: 100 }}
					class="toast"
				>
					<ToastMessage toastItem={$toast?.[$toast.length - 1]} {duration} />
				</div>
			{/if}
		{:else}
			{#each $toast as message (message.id)}
				<div
					on:click={() => toast.remove(message.id)}
					animate:flip
					out:fade
					in:fly={{ opacity: 0, x: 100 }}
					class="toast"
				>
					<ToastMessage toastItem={message} {duration} />
				</div>
			{/each}
		{/if}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}
	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
</style>
