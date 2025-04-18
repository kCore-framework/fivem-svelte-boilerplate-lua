<script lang="ts">
  import { nuiFetch } from "../lib/nuiFetch";
  import { onNuiMessage } from "../lib/nuiListen";

  let count = $state(0);

  onNuiMessage<{ count: number }>("updateCount", (data) => {
    count = data.count;
  });

  function increment() {
    count++;
    nuiFetch("print", { text: count });
  }
</script>

<div>
  <button class="counter-button" onclick={increment}>
    Count: {count}
  </button>
</div>
