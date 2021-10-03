<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { toast, ToastProps } from './toast';

	export let toastItem: ToastProps;
	export let duration: number = 1000;
	const { id, message } = toastItem;
	let progress = tweened(100, { duration });

	onMount(async () => {
		await progress.set(0);
		toast.remove(id);
	});
</script>

<p>{message}</p>

<style>
	p {
		margin: 0;
	}
</style>
