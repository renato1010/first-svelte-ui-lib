<script lang="ts">
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let value: string | number;
	export let placeholder: string;
	export let type: 'text' | 'email' | 'number' | 'password';

	function handleInput(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		value = type.match(/^(number|range)$/) ? +e.currentTarget.value : e.currentTarget.value;
	}
</script>

<div {style}>
	<label>
		{#if label}
			<span>{label}</span>
		{/if}
		{#if instructions}
			<span class="instructions">{instructions}</span> <br />
		{/if}
		<input on:input={handleInput} {type} {value} {placeholder} />
	</label>
</div>

<style>
	.instructions {
		opacity: 0.7;
		font-size: var(--instructionsFontSize, 0.8rem);
	}
	input {
		height: 2.5rem;
		width: 40ch;
		margin: 0.5rem 0;
	}
</style>
