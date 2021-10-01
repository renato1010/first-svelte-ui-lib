<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let ref: HTMLDivElement;
	// let portal: HTMLDivElement;

	// onMount(() => {
	// 	portal = document.createElement('div');
	// 	portal.className = 'portal';
	// 	document.body.appendChild(portal);
	// 	portal.appendChild(ref);
	// 	return () => document.body.removeChild(portal);
	// });
	// onDestroy(() => {
	// 	document.body.removeChild(portal);
	// });
	function portal(node: HTMLDivElement) {
		let target: HTMLBodyElement | HTMLElement;
		console.log({ node });
		function update() {
			document.body.append(node);
			node.hidden = false;
		}
		function destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}
		update();
		return {
			update,
			destroy
		};
	}
</script>

<!-- <div class="portal-clone">
	<div bind:this={ref}>
		<slot />
	</div>
</div> -->
<div use:portal hidden class="app-portal">
	<slot />
</div>

<style>
	.app-portal {
		position: relative;
	}
</style>
