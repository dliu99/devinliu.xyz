<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let data = $state<Promise<any> | null>(null);
	let theme = $state('dark');

	onMount(() => {
		theme = document.documentElement.dataset.theme ?? 'dark';
		data = fetch('https://api.github.com/repos/dliu99/devinliu.xyz/commits?per_page=1').then((r) =>
			r.json()
		);
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		localStorage.theme = theme;
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-dvh flex justify-center px-4 pt-16 pb-6 sm:px-6 sm:pt-12 sm:pb-10">
	<div class="flex flex-col justify-between w-full max-w-[540px] text-left">
		<div class="pt-[2vh] sm:pt-[3vh] prose prose-base prose-p:my-3 max-w-none">
			<div class="font-bold text-2xl leading-none tracking-wide">DEVIN LIU</div>
			{@render children()}
		</div>

		<div class="text-sm text-center text-[var(--muted)] pt-10">
			{#if data}
				{#await data then commits}
					{@const d = new Date(commits[0].commit.committer.date)}
					UPDATED {d
						.toLocaleString('en-AU', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
							hour: 'numeric',
							minute: '2-digit',
							timeZone: 'America/Los_Angeles'
						})
						.toUpperCase()} PT
				{/await}
			{/if}

			{#snippet link(href: string, label: string)}
				<a {href} target="_blank" rel="noopener noreferrer" class="hover:underline">[{label}]</a>
			{/snippet}

			<br />
			<br />
			{#if page.url.pathname === '/'}
				<a href="/past" class="hover:underline">[past]</a>
			{:else}
				<a href="/" class="hover:underline">[home]</a>
			{/if}
			{@render link('mailto:devin78988@gmail.com?subject="Yo"', 'email')}
			{@render link(
				'https://drive.google.com/file/d/1Cx8HyMquZUT6k-UqQgiX_r6jB0y1GLRr/view?usp=sharing',
				'resume'
			)}
			{@render link('https://github.com/dliu99', 'github')}
			{@render link('https://www.linkedin.com/in/devin-liu-6aa1b9325/', 'linkedin')}
			{@render link('https://x.com/devinliu420', 'x')}
			{@render link('https://instagram.com/devin78988', 'ig')}
			{@render link('https://tiktok.com/@devin78988', 'tt')}
			<button class="cursor-pointer hover:underline" onclick={toggleTheme}>
				[{theme === 'dark' ? 'light' : 'dark'}]
			</button>
		</div>
	</div>
</div>
