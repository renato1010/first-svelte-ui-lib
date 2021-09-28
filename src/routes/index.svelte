<script lang="ts">
	import SearchFilter from '$lib/SearchFilter.svelte';

	let items = ['Samson', 'scott', 'wes', 'landon', 'courtney', 'lucie', 'brooklyn'];
	let search = '';
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to Mayan UI</h1>
	<p>Term: {search}</p>

	<SearchFilter {items} bind:search />
</div>
