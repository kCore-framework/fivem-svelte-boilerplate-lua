<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";

  import { visibility, setVisible } from "../lib/nuiVisibility";
  import { onNuiMessage } from "../lib/nuiListen";

  let { children }: { children: Snippet } = $props();

  let shouldDisplay = $state(false);
  let opacity = $state(0);

  onNuiMessage<{ visible: boolean }>("setVisible", (data) => {
    setVisible(data.visible);
  });

  $effect(() => {
    // hehe we fade in, very meh!
    if ($visibility) {
      shouldDisplay = true;
      setTimeout(() => (opacity = 1), 0);
    } else {
      opacity = 0;
      setTimeout(() => (shouldDisplay = false), 200);
    }
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && $visibility) {
      setVisible(false);
    }
  };
  window.addEventListener("keydown", handleKeydown);

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
</script>

<div
  style:display={shouldDisplay ? "block" : "none"}
  style:opacity
  style:transition="opacity 200ms ease-in-out"
>
  {@render children()}
</div>
