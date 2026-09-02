<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    name,
    time,
    children,
    expanded = $bindable(null)
  }: { name: string; time: string; children: Snippet; expanded?: string | null } = $props();
</script>

<div class="w-full">
  <button
    class="flex justify-between w-full text-left cursor-pointer group text-[var(--fg)] font-normal"
    onclick={() => (expanded = expanded === name ? null : name)}
  >
    <span class="group-hover:underline">{name}{expanded === name ? '^' : ''}</span>
    <span class="text-[var(--muted)]">{time}</span>
  </button>
  {#if expanded === name}
    <div class="text-sm mt-2">
      {@render children()}
    </div>
  {/if}
</div>
