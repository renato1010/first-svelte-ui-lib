import { writable } from 'svelte/store';

export type ToastOptions = { standalone: boolean; duration?: number };
export type ToastProps = { message: string; id: string };
const newToast = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { subscribe, update } = writable<ToastProps[]>([]);
	const send = (msg: string) => {
		update((state) => {
			return [...state, { message: msg, id: new Date().getTime().toString() }];
		});
	};
	const remove = (id?: string) => {
		update((state) => {
			if (!id) {
				// if no message passed remove first item only
				return [...state.slice(1)];
			}
			return [...state].filter((m) => m.id !== id);
		});
	};
	return { subscribe, send, remove };
};

export const toast = newToast();
