<script lang="ts">
  import Counter from "./Components/Counter.svelte";
  import VisibilityProvider from "./providers/VisibilityProvider.svelte";
</script>

<main>
  <VisibilityProvider>
    <Counter />
  </VisibilityProvider>
</main>
