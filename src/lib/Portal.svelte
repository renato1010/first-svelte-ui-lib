<script lang="ts">
	function portal(node: HTMLDivElement) {
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

<div use:portal hidden class="app-portal">
	<slot />
</div>

<style>
	.app-portal {
		position: relative;
	}
</style>
