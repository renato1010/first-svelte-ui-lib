<script lang="ts">
	import Field from '$lib/Field.svelte';

	let items = ['Samson', 'scott', 'wes', 'landon', 'courtney', 'lucie', 'brooklyn'];
	let search = '';
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to Mayan UI</h1>
	<Field
		bind:value={search}
		label="search"
		instructions="Type to search"
		placeholder="Joe"
		type="text"
	/>
</div>
