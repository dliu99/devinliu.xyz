<script lang="ts" module>
	export { default as img } from './BlogImage.svelte';
</script>

<script lang="ts">
	let { children } = $props();
</script>

{@render children?.()}
