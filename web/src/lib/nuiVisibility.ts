import { onMount, onDestroy } from "svelte";
import { writable } from 'svelte/store';

import type { NuiMessage } from "./nuiListen";

export const visibility = writable(false);


export function setVisible(state: boolean) {
  visibility.set(state);
}

export function onNuiMessage<T = unknown>(
  action: string,
  handler: (data: T) => void,
) {
  const eventListener = (event: MessageEvent<NuiMessage<T>>) => {
    const { type: eventAction, data } = event.data;

    eventAction === action && handler(data);
  };

  onMount(() => window.addEventListener("message", eventListener));
  onDestroy(() => window.removeEventListener("message", eventListener));
}
