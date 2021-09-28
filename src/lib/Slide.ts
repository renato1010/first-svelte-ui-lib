export function slide(
	node: HTMLDivElement,
	{
		isOpen,
		dispatch,
		duration = 500
	}: {
		isOpen: boolean;
		dispatch: <EventKey extends string>(type: EventKey, detail?: unknown) => void;
		duration: number;
	}
): {
	update: (isOpen: boolean) => void;
} {
	// initialize
	const initialHeight = node.offsetHeight;
	node.style.height = isOpen ? 'auto' : '0px';
	node.style.overflow = 'hidden';
	const animation = node.animate(
		[
			{
				height: '0px',
				padding: '0px'
			},
			{
				height: `${initialHeight}px`
			}
		],
		{
			duration,
			fill: 'both',
			direction: isOpen ? 'normal' : 'reverse'
		}
	);
	animation.pause();
	animation.onfinish = ({ currentTime }) => {
		if (!currentTime) {
			animation.reverse();
			animation.pause();
		}
		dispatch('animationEnd');
	};
	return {
		update: () => {
			console.log({ 'animation.currentTime': animation.currentTime });
			animation.currentTime ? animation.reverse() : animation.play();
		}
	};
}
