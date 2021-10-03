<script lang="ts">
	import Toast from '$lib/toast/Toast.svelte';
	import { toast } from '$lib/toast/toast';
</script>

<div style="width: 100%; padding:0.5rem 0.25rem;">
	<h1>Welcome to Mayan UI</h1>
</div>

<button on:click={() => toast.send('NEW MESSAGE')}>New Toast</button>
<button on:click={() => toast.remove()}>Remove first Toast</button>

<Toast options={{ standalone: true, duration: 3000 }} />
