import { writable } from 'svelte/store';
import { nuiFetch } from './nuiFetch';
import { onNuiMessage } from './nuiListen';

export const visibility = writable(false);

onNuiMessage<{ visible: boolean }>('setVisible', (data) => {
    visibility.set(data.visible);
});

export async function setVisible(show: boolean) {
  visibility.set(show);
  await nuiFetch('setVisible', { visible: show });
}
