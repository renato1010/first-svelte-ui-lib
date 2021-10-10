<script lang="ts">
	// import Toast from '$lib/toast/Toast.svelte';
	// import { toast } from '$lib/toast/toast';
	import Modal from '$lib/Modal.svelte';
	import { Tabs, Tab } from '$lib/tabs';

	let isModalOpen = false;
	const closeModal = () => (isModalOpen = false);
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to My new and awesome Svelte component library</h1>
</div>

<!-- <button on:click={() => (isModalOpen = !isModalOpen)}>Toggle Modal</button> -->
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

<Tabs>
	<Tab slot="lemon"><p class="tab-content lemon hide">Lemon is yellow</p></Tab>
	<Tab slot="strawberry"><p class="tab-content strawberry hide">Strawberry is red</p></Tab>
	<Tab slot="pear"><p class="tab-content pear hide">Pear is green</p></Tab>
</Tabs>
