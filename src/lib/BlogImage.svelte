<script lang="ts">
	let { src, alt }: { src: string; alt?: string } = $props();

	const images = import.meta.glob<string>('/src/content/blog/attachments/*', {
		eager: true,
		query: '?url',
		import: 'default'
	});

	// Obsidian writes paths like "Pasted%20image.png", which vite doesn't resolve on its own
	let name = $derived(decodeURIComponent(src.split('/').pop()!));
</script>

<img src={images[`/src/content/blog/attachments/${name}`] ?? src} {alt} />
