<script lang="ts">
  import { nuiFetch } from "./lib/nuiFetch";
  import { visibility, setVisible } from "./lib/nuiVisibility";
  import { onDestroy } from 'svelte';
  import { onNuiMessage } from "./lib/nuiListen";

  let count = $state(0);
  let shouldDisplay = $state(false);
  let opacity = $state(0);

  onNuiMessage<{visible: boolean}>("setVisible", (data) => {
    setVisible(data.visible);
  });

  onNuiMessage<{count: number}>("updateCount", (data) => {
    count = data.count;
  });

  $effect(() => { // hehe we fade in, very meh!
    if ($visibility) {
      shouldDisplay = true;
      setTimeout(() => opacity = 1, 0);
    } else {
      opacity = 0;
      setTimeout(() => shouldDisplay = false, 200);
    }
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && $visibility) {
      setVisible(false);
    }
  };
  window.addEventListener('keydown', handleKeydown);

  function increment() {
    count++;
    nuiFetch("print", { text: count });
  }

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<main 
  style:display={shouldDisplay ? 'block' : 'none'}
  style:opacity={opacity}
  style:transition="opacity 200ms ease-in-out"
>
  <button class="counter-button" onclick={increment}>
    Count: {count}
  </button>
</main>