<script lang="ts">
	import Toggle from '$lib/Toggle.svelte';
	let isToggled: boolean = true;
</script>

<h1>Welcome to Mayan UI</h1>

<Toggle
	bind:isToggled
	label="Beta"
	toggleBackgroundColor="azure"
	toggleButtonColor="floralwhite"
	toggleCheckedBgColor="darkturquoise"
/>

{#if isToggled}
	<h1>I'm Toggled</h1>
{/if}
