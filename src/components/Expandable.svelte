<script lang="ts">
  import type { Snippet } from 'svelte';

  let { name, time, children }: { name: string; time: string; children: Snippet } = $props();
  let expanded = $state(false);
</script>

<div class="text-left w-full">
  <button class="flex justify-between w-full text-left cursor-pointer group" onclick={() => expanded = !expanded}>
    <span class="group-hover:underline">{name}{expanded ? '^' : ''}</span>
    <span>{time}</span>
  </button>
  {#if expanded}
    <div class="text-neutral-400 text-sm mt-2 text-left prose prose-sm prose-invert prose-p:my-2 prose-ul:my-2 prose-li:my-0 prose-a:text-neutral-300">
      {@render children()}
    </div>
  {/if}
</div>

