<script lang="ts">
	export let label: string = '';
	export let isToggled: boolean = false;
	export let toggleBackgroundColor: string | undefined = undefined;
	export let toggleButtonColor: string | undefined = undefined;
	export let toggleCheckedBgColor: string | undefined = undefined;
	$: style = [{ toggleBackgroundColor }, { toggleButtonColor }, { toggleCheckedBgColor }].reduce(
		(acc, val) => {
			const [[key, value]] = Object.entries(val);
			const opt = value ? `--${key}: ${value};` : null;
			return opt ? acc + ' ' + opt : acc;
		},
		''
	);
</script>

<label {style} for="toggle">
	<input type="checkbox" id="toggle" bind:checked={isToggled} />
	<div class="toggle" />
	{label}
</label>

<style>
	label {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
	}
	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: solid 1px rgba(190, 187, 187, 0.589);
		transition: background-color 0.3s ease;
		margin-right: 5px;
		background-color: var(--toggleBackgroundColor, cyan);
	}
	.toggle::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		height: var(--height);
		width: var(--height);
		border-radius: var(--radius);
		background-color: var(--toggleButtonColor, aliceblue);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}
	input {
		display: none;
	}
	input:checked + .toggle {
		background-color: var(--toggleCheckedBgColor, green);
	}
	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}
</style>
