<script lang="ts">
	import { fade } from 'svelte/transition';

	export let items: string[];
	export let search = '';
	let isFocused = false;
	let control: HTMLInputElement;
	$: filteredSearch = items.filter((item) => {
		if (search === '') {
			return true;
		}
		return item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});
	function onItemClick(
		evt: MouseEvent & {
			currentTarget: EventTarget & HTMLLIElement;
		}
	) {
		const innerText = evt.currentTarget.innerText;
		search = innerText;
		isFocused = false;
	}
</script>

<div class="wrapper">
	<label>
		Search Names: <br />
		<input
			bind:this={control}
			on:focus={() => (isFocused = true)}
			type="text"
			placeholder="serach"
			bind:value={search}
		/>
	</label>

	{#if isFocused}
		<ul transition:fade={{ duration: 300 }}>
			{#each filteredSearch as item}
				<li transition:fade={{ duration: 200 }} on:click={(e) => onItemClick(e)}>{item}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		display: inline-block;
		position: relative;
	}
	label {
		margin-top: 1rem;
	}
	input {
		height: 2.5rem;
		width: 40ch;
	}
	ul {
		position: absolute;
		width: 100%;
		border: 1px solid black;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		text-transform: capitalize;
		cursor: pointer;
		padding: 10px;
		transition: 0.3s background ease;
	}
	li:hover {
		background: var(--listItemBackground, #eee);
	}
</style>
