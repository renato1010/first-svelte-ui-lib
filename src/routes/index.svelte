<script lang="ts">
	import Modal from '$lib/Modal.svelte';

	let isModalOpen = true;
	const closeModal = () => {
		isModalOpen = false;
	};
	const toggleModal = () => (isModalOpen = !isModalOpen);
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to Mayan UI</h1>
</div>
<button on:click={toggleModal}>toggle modal</button>

<Modal bind:isModalOpen {closeModal}>
	<h2>Modal Title</h2>
	<h3>Modal subtitle</h3>
	<section>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure sed culpa illum
			reiciendis voluptatem unde est nobis obcaecati possimus. Similique adipisci, quasi explicabo
			libero ipsum sapiente obcaecati harum deserunt?
		</p>
		<p>
			Deleniti commodi quasi sed corrupti mollitia reiciendis hic eligendi amet dolorem dicta
			voluptatibus aperiam assumenda expedita vitae, culpa velit. Magnam consequatur quibusdam
			tempora blanditiis optio odit facere inventore praesentium reiciendis!
		</p>
		<p>
			Quae corrupti tenetur odit eaque tempore praesentium voluptatum at facere repellendus vel
			voluptatibus molestiae exercitationem saepe repudiandae dignissimos sequi ut rem inventore
			dolor quaerat magni, reprehenderit quos laboriosam! Ipsa, assumenda?
		</p>
		<p>
			Laudantium, possimus. Eveniet rerum accusamus nisi eos consequatur laborum. Non deleniti
			cumque molestias, numquam, fuga, accusantium eum est minus quaerat iure aliquid dolore
			expedita architecto nisi? Vitae commodi harum voluptate!
		</p>
		<p>
			Impedit, dignissimos odit a modi possimus corrupti esse laudantium quam nobis amet quod
			obcaecati quos quae ad. Perferendis a totam numquam corporis delectus officia vel! Natus rem
			voluptatem facere numquam.
		</p>
	</section>
</Modal>
