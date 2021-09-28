<script lang="ts">
	import Accordion from '$lib/Accordion.svelte';

	let isToggled: boolean = true;
</script>

<h1>Welcome to Mayan UI</h1>

<Accordion
	buttonText="Do I need a credit card"
	bind:isOpen={isToggled}
	on:animationEnd={() => console.log('animation concluded')}
	duration={300}
>
	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus vel officia
			quisquam minima voluptate perferendis illum ea non illo aperiam, pariatur quod unde eaque
			praesentium accusamus quo autem! Nostrum!
		</p>
	</div>
</Accordion>
