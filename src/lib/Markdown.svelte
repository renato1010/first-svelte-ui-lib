<script lang="ts">
	import marked from 'marked';

	let text: string = '';
	let markdownText = text;
	// Reactive expression
	$: {
		markdownText = marked(text);
	}
</script>

<div class="markdown-container">
	<textarea cols="30" rows="10" bind:value={text} />
	<div>
		{@html markdownText}
	</div>
</div>

<style>
  .markdown-container {
    display: flex;
  }
  .markdown-container > * {
    width: 50%;
  }
</style>
