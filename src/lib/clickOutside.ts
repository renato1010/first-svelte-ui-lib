export const clickOutside = <N extends HTMLElement = HTMLElement>(
	node: N
): { destroy: () => void } => {
	const handleClick = (
		event: MouseEvent & {
			currentTarget: EventTarget & N;
		}
	) => {
		console.log('click-outside-handler');
		if (node && !node.contains(event.currentTarget) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click-outside'));
		}
	};
	const modalBackground = document.querySelector('.background-modal');
	modalBackground.addEventListener('click', handleClick, true);
	return {
		destroy: () => modalBackground.removeEventListener('click', handleClick, true)
	};
};
