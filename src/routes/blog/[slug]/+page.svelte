<script lang="ts">
	import { formatDate } from '$lib/blog';

	let { data } = $props();
	let Content = $derived(data.post.content);
</script>

<svelte:head>
	<title>{data.post.title} | Devin Liu</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<div class="pt-6 sm:pt-7">
	<h1 class="text-xl font-normal mb-1">{data.post.title}</h1>
	<p class="text-sm !mt-0">{formatDate(data.post.date)}</p>
	<Content />
</div>
