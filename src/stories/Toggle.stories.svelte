<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Toggle from '../lib/Toggle.svelte';
</script>

<Meta title="Toggle" component={Toggle} />

<Template let:args>
	<Toggle {...args} />
</Template>

<Story name="default" id="storybookToggle" />
