<script lang="ts">
	import { formatDate, posts } from '$lib/blog';
</script>

<svelte:head><title>Blog | Devin Liu</title></svelte:head>

<div class="flex flex-col gap-3 pt-6 sm:pt-7">
	{#each posts as post (post.slug)}
		<a href="/blog/{post.slug}" class="flex justify-between gap-4 group font-normal no-underline">
			<span class="text-[var(--fg)] group-hover:underline">{post.title}</span>
			<span class="text-[var(--muted)] shrink-0">{formatDate(post.date)}</span>
		</a>
	{:else}
		<p>Nothing here yet.</p>
	{/each}
</div>
