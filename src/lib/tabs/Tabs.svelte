<script lang="ts">
	import TabTitle from './TabTitle.svelte';

	$: slotNames = Object.keys($$slots);
	$: selectedTab = slotNames[0];
	const onTabSelection = (node: HTMLDivElement, selected: string) => {
		const hideNonSelected = (selectedTitle: string = selected) => {
			const tabs = node.querySelectorAll('.tab-content');
			tabs.forEach((tab) => {
				if (!tab.classList.contains(selectedTitle)) {
					tab.classList.replace('show', 'hide');
				} else {
					tab.classList.replace('hide', 'show');
				}
			});
		};
		hideNonSelected();
		const update = (selected) => hideNonSelected(selected);
		return { update };
	};
</script>

<div use:onTabSelection={selectedTab}>
	<ul>
		{#each slotNames as title}
			<TabTitle
				{title}
				on:tab-change={(e) => (selectedTab = e.detail.tabTitle)}
				--backgroundColor={title === selectedTab ? '#1e90ff' : '#e0e0eb'}
			/>
		{/each}
	</ul>
	<slot name="lemon" />
	<slot name="strawberry" />
	<slot name="pear" />
</div>

<style>
	:global(.hide) {
		display: none;
	}
	:global(.show) {
		display: contents;
	}
	ul {
		width: 100%;
		display: inline-block;
		list-style: none;
		border-bottom: 2px solid #ccc;
	}
</style>
