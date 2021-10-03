<script lang="ts">
	// import Toast from '$lib/toast/Toast.svelte';
	// import { toast } from '$lib/toast/toast';
	import Modal from '$lib/Modal.svelte';

	let isModalOpen = true;
	const closeModal = () => (isModalOpen = false);
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to Mayan UI</h1>
</div>

<button on:click={() => (isModalOpen = !isModalOpen)}>Toggle Modal</button>
<!-- <Toast options={{ standalone: true, duration: 3000 }} /> -->

<Modal {isModalOpen} {closeModal}>
	<h2>Modal Title</h2>
	<h3>Modal Subtitle</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id pariatur ullam culpa porro
		iusto minus nostrum ut vero, inventore hic nisi? Ratione inventore dicta et iure similique
		dolore enim!
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id pariatur ullam culpa porro
		iusto minus nostrum ut vero, inventore hic nisi? Ratione inventore dicta et iure similique
		dolore enim!
	</p>
</Modal>
