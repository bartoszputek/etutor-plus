import { writable, type Updater, type Writable } from "svelte/store";

/**
 * Creates a persistent Svelte store backed by Chrome's sync storage.
 * Note that each item is limited to 8KB. Use storage.local for larger amounts.
 * https://developer.chrome.com/docs/extensions/reference/api/storage#storage_areas
 *
 * @template T The type of the store's value
 * @param key The key to use in Chrome's storage
 * @param initialValue The initial value of the store
 * @returns A writable Svelte store
 */
export function persistentStore<T>(key: string, initialValue: T): Writable<T> {
	const store = writable<T>(initialValue);

	function updateChromeStorage(value: T): void {
		chrome.storage.sync.set({ [key]: value });
	}

	function watchChromeStorage() {
		chrome.storage.sync.onChanged.addListener((changes) => {
			if (Object.hasOwn(changes, key)) {
				store.set(changes[key].newValue);
			}
		});
	}

	function initStoreFromChromeStorage() {
		chrome.storage.sync.get(key).then((result) => {
			if (Object.hasOwn(result, key)) {
				store.set(result[key]);
			}
		});
	}

	initStoreFromChromeStorage();
	watchChromeStorage();

	return {
		set(this: void, value: T): void {
			store.set(value);
			updateChromeStorage(value);
		},
		update(this: void, updater: Updater<T>): void {
			return store.update((prev: T): T => {
				const value = updater(prev);
				updateChromeStorage(value);
				return value;
			});
		},
		subscribe: store.subscribe,
	};
}

export interface AudioKeyBindings {
	name: string;
	key: string;
}

export const AUDIO_KEY_BINDINGS_DEFAULTS: AudioKeyBindings[] = [
	{ name: "4th recording", key: "z" },
	{ name: "5th recording", key: "x" },
	{ name: "6th recording", key: "c" },
];

export const audioKeyBindings = persistentStore("xddd", AUDIO_KEY_BINDINGS_DEFAULTS);
